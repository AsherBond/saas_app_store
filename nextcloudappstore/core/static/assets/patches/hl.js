/**
 * This file is used to replace the highlight.js/lib/index.js which includes
 * every supported language.
 *
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
var hljs = require('highlight.js/lib/core');

hljs.registerLanguage('apache', require('highlight.js/lib/languages/apache'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'));
hljs.registerLanguage('clojure-repl', require('highlight.js/lib/languages/clojure-repl'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('crystal', require('highlight.js/lib/languages/crystal'));
hljs.registerLanguage('csp', require('highlight.js/lib/languages/csp'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('d', require('highlight.js/lib/languages/d'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('dart', require('highlight.js/lib/languages/dart'));
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'));
hljs.registerLanguage('elixir', require('highlight.js/lib/languages/elixir'));
hljs.registerLanguage('elm', require('highlight.js/lib/languages/elm'));
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
hljs.registerLanguage('erb', require('highlight.js/lib/languages/erb'));
hljs.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'));
hljs.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'));
hljs.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'));
hljs.registerLanguage('gherkin', require('highlight.js/lib/languages/gherkin'));
hljs.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'));
hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'));
hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'));
hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'));
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'));
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('julia', require('highlight.js/lib/languages/julia'));
hljs.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'));
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'));
hljs.registerLanguage('latex', require('highlight.js/lib/languages/latex'));
hljs.registerLanguage('ldif', require('highlight.js/lib/languages/ldif'));
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'));
hljs.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'));
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'));
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'));
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
hljs.registerLanguage('node-repl', require('highlight.js/lib/languages/node-repl'));
hljs.registerLanguage('nsis', require('highlight.js/lib/languages/nsis'));
hljs.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'));
hljs.registerLanguage('ocaml', require('highlight.js/lib/languages/ocaml'));
hljs.registerLanguage('pgsql', require('highlight.js/lib/languages/pgsql'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('php-template', require('highlight.js/lib/languages/php-template'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));
hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'));
hljs.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('python-repl', require('highlight.js/lib/languages/python-repl'));
hljs.registerLanguage('qml', require('highlight.js/lib/languages/qml'));
hljs.registerLanguage('r', require('highlight.js/lib/languages/r'));
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'));
hljs.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('stan', require('highlight.js/lib/languages/stan'));
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('twig', require('highlight.js/lib/languages/twig'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('vala', require('highlight.js/lib/languages/vala'));
hljs.registerLanguage('xquery', require('highlight.js/lib/languages/xquery'));

module.exports = hljs;
