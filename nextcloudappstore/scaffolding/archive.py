import re
import tarfile
from io import BytesIO
from os import walk
from os.path import join, isdir, relpath, islink
from typing import Dict

from django.conf import settings
from django.template import Context, Template

from nextcloudappstore.core.facades import resolve_file_relative_path


def build_files(args: Dict[str, str]) -> Dict[str, str]:
    platform = int(args['platform'])  # prevent path traversal
    vars = {
        'id': args['name'].lower(),
        'summary': args['summary'],
        'description': args['description'],
        'name': ' '.join(re.findall(r'[A-Z][^A-Z]*', args['name'])),
        'namespace': args['name'],
        'author_name': args['author_name'],
        'author_mail': args['author_email'],
        'author_homepage': args['author_homepage'],
        'issue_tracker': args['issue_tracker'],
        'categories': args['categories'],
        'nextcloud_version': platform,
        'license': 'AGPL-3.0-or-later',
    }
    vars.update(settings.APP_SCAFFOLDING_PROFILES.get(platform, {}))
    relative_base = 'app-templates/%i/app/' % platform
    base = resolve_file_relative_path(__file__, relative_base)

    context = Context({'app': vars})
    result = {}
    if not isdir(base):
        return result

    for root, dirs, files in walk(base):
        for file in files:
            file_path = join(root, file)
            rel_file_path = '%s/%s' % (
                vars['id'], relpath(file_path, base)
            )
            with open(file_path) as f:
                t = Template(f.read())
                result[rel_file_path] = t.render(context)

    return result


def build_archive(parameters: Dict[str, str]) -> BytesIO:
    buffer = BytesIO()
    with tarfile.open(fileobj=buffer, mode='w:gz') as f:
        files = build_files(parameters)
        for path, contents in files.items():
            info = tarfile.TarInfo(path)
            encoded_content = contents.encode()
            info.size = len(encoded_content)
            f.addfile(info, BytesIO(encoded_content))
    buffer.seek(0)
    return buffer
