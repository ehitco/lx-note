import{_ as e,o as l,c as i,a}from"./app.aec7eb12.js";const p=JSON.parse('{"title":"\u6570\u636E\u5E93\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u6570\u636E\u5E93","slug":"\u4EC0\u4E48\u662F\u6570\u636E\u5E93","link":"#\u4EC0\u4E48\u662F\u6570\u636E\u5E93","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662FSQL","slug":"\u4EC0\u4E48\u662Fsql","link":"#\u4EC0\u4E48\u662Fsql","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662FMySQL","slug":"\u4EC0\u4E48\u662Fmysql","link":"#\u4EC0\u4E48\u662Fmysql","children":[{"level":3,"title":"MySQL\u7248\u672C\u65B0\u7279\u6027","slug":"mysql\u7248\u672C\u65B0\u7279\u6027","link":"#mysql\u7248\u672C\u65B0\u7279\u6027","children":[]},{"level":3,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","link":"#\u5E38\u7528\u547D\u4EE4","children":[]}]}],"relativePath":"NodeJs/\u6570\u636E\u5E93/\u57FA\u7840.md","lastUpdated":1670483514000}'),d={name:"NodeJs/\u6570\u636E\u5E93/\u57FA\u7840.md"},o=a('<h1 id="\u6570\u636E\u5E93\u57FA\u7840" tabindex="-1">\u6570\u636E\u5E93\u57FA\u7840 <a class="header-anchor" href="#\u6570\u636E\u5E93\u57FA\u7840" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u6570\u636E\u5E93" tabindex="-1">\u4EC0\u4E48\u662F\u6570\u636E\u5E93 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u4EE5\u67D0\u79CD\u6709\u7EC4\u7EC7\u7684\u65B9\u5F0F\u5B58\u50A8\u7684\u6570\u636E\u96C6\u5408</p><ul><li>\u6982\u5FF5 <ul><li>\u8868\uFF1A<code>table</code>\uFF0C\u67D0\u79CD\u7279\u5B9A\u7C7B\u578B\u7684\u7ED3\u6784\u5316\u6E05\u5355\uFF0C\u5E94\u8BE5\u662F<strong>\u5B58\u50A8\u4E00\u79CD\u7C7B\u578B\u7684\u6570\u636E\u6216\u8005\u6E05\u5355\uFF08\u5982\u4E00\u5F20\u8868\u4E00\u4E2A\u7C7B\uFF09</strong>\u3002 <ul><li>\u5217\uFF1A<code>column</code>\uFF0C\u8868\u4E2D\u7684\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u6BCF\u4E00\u5217\u90FD\u6709\u76F8\u5E94\u7684\u6570\u636E\u7C7B\u578B\u3002</li><li>\u6570\u636E\u7C7B\u578B\uFF1A<code>datatype</code>\uFF0C\u9650\u5236\u53EF\u4EE5\u5B58\u50A8\u5728\u5217\u4E2D\u7684\u6570\u636E\u79CD\u7C7B\u3002</li><li>\u884C\uFF1A<code>row</code>\uFF0C\u8868\u4E2D\u7684\u4E00\u4E2A\u8BB0\u5F55\u3002</li><li>\u4E3B\u952E\uFF1A<code>primary key</code>\uFF0C\u4E00\u5217\uFF08\u6216\u4E00\u7EC4\u5217\uFF09\uFF0C\u5176\u503C\u80FD\u552F\u4E00\u533A\u5206\u8868\u4E2D\u6BCF\u4E00\u884C\u3002</li></ul></li><li>\u6A21\u5F0F\uFF1Aschema\uFF0C\u5173\u4E8E\u6570\u636E\u5E93\u548C\u8868\u7684\u5E03\u5C40\u53CA\u7279\u5F81\u7684\u4FE1\u606F\u3002</li></ul></li></ul><blockquote><p>\u4E3B\u952E\u9700\u8981\u6EE1\u8DB3\uFF1A\u4E0D\u91CD\u590D\uFF0C\u4E0D\u4E3ANULL\u3002 \u5F00\u53D1\u4E60\u60EF\uFF1A\u4E0D\u66F4\u65B0\u4E3B\u952E\u5217\u7684\u503C\uFF0C\u4E0D\u91CD\u7528\u4E3B\u952E\u5217\u7684\u503C\uFF0C\u4E0D\u4F7F\u7528\u53EF\u80FD\u6539\u53D8\u7684\u503C\u3002</p></blockquote><h2 id="\u4EC0\u4E48\u662Fsql" tabindex="-1">\u4EC0\u4E48\u662FSQL <a class="header-anchor" href="#\u4EC0\u4E48\u662Fsql" aria-hidden="true">#</a></h2><p><code>Structured Query Language</code>\uFF0C\u7ED3\u6784\u5316\u67E5\u8BE2\u8BED\u8A00\uFF0C\u7528\u6765\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u901A\u4FE1\u3002</p><p>\u51E0\u4E4E\u6240\u6709\u7684DBSM\u90FD\u652F\u6301SQL\u3002</p><h2 id="\u4EC0\u4E48\u662Fmysql" tabindex="-1">\u4EC0\u4E48\u662FMySQL <a class="header-anchor" href="#\u4EC0\u4E48\u662Fmysql" aria-hidden="true">#</a></h2><p>\u4E00\u79CDDBMS\uFF0C\u6570\u636E\u5E93\u7BA1\u7406\u7BA1\u7406\u7CFB\u7EDF\u3002</p><p>DBMS\uFF1A\u6570\u636E\u5E93\u7BA1\u7406\u7BA1\u7406\u7CFB\u7EDF</p><ul><li>\u5206\u4E3A\u4E24\u79CD\uFF1A <ol><li>\u4E00\u79CD\u662F\u57FA\u4E8E\u5171\u4EAB\u6587\u4EF6\u7CFB\u7EDF</li><li>\u4E00\u79CD\u662F\u57FA\u4E8E\u5BA2\u6237\u673A-\u670D\u52A1\u5668\uFF08MySQL\u3001Oracle\u7B49\uFF09 <ul><li>\u670D\u52A1\u5668\uFF1AMySQL DBMS</li><li>\u5BA2\u6237\u673A\uFF1AMySQL\u63D0\u4F9B\u7684\u5DE5\u5177\uFF0CWeb\u5E94\u7528\u5F00\u53D1\u8BED\u8A00\u3001\u811A\u672C\u8BED\u8A00\u7B49\u3002</li></ul></li></ol></li></ul><blockquote><p>\u5BA2\u6237\u673A-\u670D\u52A1\u5668\u53EF\u80FD\u5B89\u88C5\u5728\u4E24\u53F0\u8BA1\u7B97\u673A\u6216\u8005\u4E00\u53F0\u8BA1\u7B97\u673A\u4E0A\u3002</p></blockquote><h3 id="mysql\u7248\u672C\u65B0\u7279\u6027" tabindex="-1">MySQL\u7248\u672C\u65B0\u7279\u6027 <a class="header-anchor" href="#mysql\u7248\u672C\u65B0\u7279\u6027" aria-hidden="true">#</a></h3><ul><li>\u7248\u672C4\uFF1AInnoDB\u5F15\u64CE\uFF0C\u589E\u52A0\u4E8B\u52A1\u5904\u7406\u3001\u5E76\u3001\u6539\u8FDB\u5168\u6587\u672C\u641C\u7D22\u7B49\u3002</li><li>\u7248\u672C4.1\uFF1A\u5BF9\u51FD\u6570\u5E93\u3001\u5B50\u67E5\u8BE2\u3001\u96C6\u6210\u5E2E\u52A9\u7B49\u7684\u91CD\u8981\u589E\u52A0</li><li>\u7248\u672C5\uFF1A\u5B58\u50A8\u8FC7\u7A0B\u3001\u89E6\u53D1\u5668\u3001\u6E38\u6807\u3001\u89C6\u56FE</li></ul><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h3><ul><li>\u8FDE\u63A5 <ul><li>\u4E3B\u673A\u540D\u3001\u7AEF\u53E3\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801</li></ul></li><li>\u9009\u62E9\u6570\u636E\u5E93\uFF1A<code>USE datebase</code></li><li>\u663E\u793A\u6240\u6709\u6570\u636E\u5E93\uFF1A<code>SHOW DATABASES</code></li><li>\u663E\u793A\u6240\u6709\u53EF\u7528\u8868\u683C\uFF1A<code>SHOW TABLES</code></li><li>\u663E\u793A\u5217\u4FE1\u606F\uFF1A<code>SHOW COLUMNS FROM table</code> \u6216 <code>DESCRIBE table</code></li><li>\u663E\u793A\u670D\u52A1\u5668\u72B6\u6001\uFF1A<code>SHOW STATUS</code></li><li>\u663E\u793A\u7528\u6237\u5B89\u5168\u6743\u9650\uFF1A<code>SHOW GRANTS</code></li><li>\u663E\u793A\u670D\u52A1\u5668\u9519\u8BEF\u6216\u8B66\u544A\uFF1A<code>SHOW ERRORS</code> \u6216 <code>SHOW WARNINGS</code></li></ul>',17),c=[o];function t(r,s,n,h,u,S){return l(),i("div",null,c)}const m=e(d,[["render",t]]);export{p as __pageData,m as default};
