import{_ as e,o as i,c as l,a}from"./app.aec7eb12.js";const E=JSON.parse('{"title":"\u89C6\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE","link":"#\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE","children":[]},{"level":2,"title":"\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236","slug":"\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236","link":"#\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236","children":[]},{"level":2,"title":"\u4F7F\u7528\u89C6\u56FE","slug":"\u4F7F\u7528\u89C6\u56FE","link":"#\u4F7F\u7528\u89C6\u56FE","children":[{"level":3,"title":"\u521B\u5EFA\u89C6\u56FE","slug":"\u521B\u5EFA\u89C6\u56FE","link":"#\u521B\u5EFA\u89C6\u56FE","children":[]},{"level":3,"title":"\u67E5\u770B\u521B\u5EFA\u89C6\u56FE","slug":"\u67E5\u770B\u521B\u5EFA\u89C6\u56FE","link":"#\u67E5\u770B\u521B\u5EFA\u89C6\u56FE","children":[]},{"level":3,"title":"\u5220\u9664\u89C6\u56FE","slug":"\u5220\u9664\u89C6\u56FE","link":"#\u5220\u9664\u89C6\u56FE","children":[]},{"level":3,"title":"\u66F4\u65B0\u89C6\u56FE","slug":"\u66F4\u65B0\u89C6\u56FE","link":"#\u66F4\u65B0\u89C6\u56FE","children":[]}]}],"relativePath":"NodeJs/\u6570\u636E\u5E93/\u89C6\u56FE.md","lastUpdated":1670483514000}'),d={name:"NodeJs/\u6570\u636E\u5E93/\u89C6\u56FE.md"},r=a('<h1 id="\u89C6\u56FE" tabindex="-1">\u89C6\u56FE <a class="header-anchor" href="#\u89C6\u56FE" aria-hidden="true">#</a></h1><p>\u89C6\u56FE\u662F\u865A\u62DF\u7684\u8868\uFF0C\u672C\u8EAB\u4E0D\u5305\u542B\u6570\u636E\uFF0C\u53EA\u5305\u542B\u4F7F\u7528\u65F6\u52A8\u6001\u68C0\u7D22\u6570\u636E\u7684\u67E5\u8BE2\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528\u89C6\u56FE" aria-hidden="true">#</a></h2><ul><li>\u91CD\u7528SQL\u8BED\u53E5</li><li>\u7B80\u5316\u590D\u6742\u7684SQL\u64CD\u4F5C</li><li>\u4F7F\u7528\u8868\u7684\u7EC4\u6210\u90E8\u5206\u800C\u4E0D\u662F\u6574\u4E2A\u8868</li><li>\u4FDD\u62A4\u6570\u636E\uFF0C\u53EF\u4EE5\u6388\u4E88\u90E8\u5206\u8BBF\u95EE\u6743\u9650</li><li>\u66F4\u6539\u6570\u636E\u683C\u5F0F\u548C\u8868\u793A</li></ul><h2 id="\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236" tabindex="-1">\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236 <a class="header-anchor" href="#\u89C6\u56FE\u7684\u89C4\u5219\u548C\u9650\u5236" aria-hidden="true">#</a></h2><ul><li>\u547D\u540D\u552F\u4E00\uFF08\u4E0D\u80FD\u4E0E\u5176\u4ED6\u89C6\u56FE\u6216\u8868\u76F8\u540C\uFF09</li><li>\u521B\u5EFA\u6570\u76EE\u6CA1\u6709\u9650\u5236</li><li>\u9700\u8981\u5177\u5907\u8DB3\u591F\u7684\u6743\u9650\u624D\u80FD\u521B\u5EFA\u89C6\u56FE</li><li>\u89C6\u56FE\u53EF\u4EE5\u5D4C\u5957\uFF0C\u5229\u7528\u5DF2\u6709\u89C6\u56FE\u6765\u6784\u9020\u65B0\u7684\u89C6\u56FE</li><li>\u53EF\u4EE5\u4F7F\u7528<code>ORDER BY</code>\uFF0C\u4F46\u539F\u89C6\u56FE\u67E5\u8BE2\u8BED\u53E5\u4E2D\u7684<code>ORDER BY</code>\u4F18\u5148\u7EA7\u66F4\u9AD8</li><li>\u4E0D\u80FD\u7D22\u5F15\uFF0C\u4E5F\u4E0D\u80FD\u6709\u5173\u8054\u7684\u89E6\u53D1\u5668\u6216\u9ED8\u8BA4\u503C</li><li>\u53EF\u4EE5\u548C\u8868\u4E00\u8D77\u4F7F\u7528</li></ul><h2 id="\u4F7F\u7528\u89C6\u56FE" tabindex="-1">\u4F7F\u7528\u89C6\u56FE <a class="header-anchor" href="#\u4F7F\u7528\u89C6\u56FE" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u89C6\u56FE" tabindex="-1">\u521B\u5EFA\u89C6\u56FE <a class="header-anchor" href="#\u521B\u5EFA\u89C6\u56FE" aria-hidden="true">#</a></h3><p><code>CREATE VIEW viewname AS select\u8BED\u53E5</code></p><h3 id="\u67E5\u770B\u521B\u5EFA\u89C6\u56FE" tabindex="-1">\u67E5\u770B\u521B\u5EFA\u89C6\u56FE <a class="header-anchor" href="#\u67E5\u770B\u521B\u5EFA\u89C6\u56FE" aria-hidden="true">#</a></h3><p><code>SHOW CREATE VIEW viewname</code></p><h3 id="\u5220\u9664\u89C6\u56FE" tabindex="-1">\u5220\u9664\u89C6\u56FE <a class="header-anchor" href="#\u5220\u9664\u89C6\u56FE" aria-hidden="true">#</a></h3><p><code>DROP VIEW viewname</code></p><h3 id="\u66F4\u65B0\u89C6\u56FE" tabindex="-1">\u66F4\u65B0\u89C6\u56FE <a class="header-anchor" href="#\u66F4\u65B0\u89C6\u56FE" aria-hidden="true">#</a></h3><ul><li>\u5148<code>DROP</code>\u518D<code>CREATE</code></li><li>\u6216\u8005\uFF0C<code>CREATE OR REPLACE viewname</code></li></ul><h4 id="\u66F4\u65B0\u6570\u636E" tabindex="-1">\u66F4\u65B0\u6570\u636E <a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a></h4><p>\u901A\u5E38\uFF0C\u89C6\u56FE\u662F\u53EF\u66F4\u65B0\u7684\uFF0C\u5982\u679C\u4F60\u5BF9\u89C6\u56FE\u589E\u52A0\u6216\u5220\u9664\u884C\uFF0C\u5B9E\u9645\u4E0A\u662F\u5BF9\u5176\u57FA\u8868\u589E\u52A0\u6216\u5220\u9664\u884C\u3002</p><p>\u4F46\u662F\uFF0C\u5E76\u975E\u6240\u6709\u89C6\u56FE\u90FD\u662F\u53EF\u66F4\u65B0\u7684\u3002\u5982\u679C\u89C6\u56FE\u5B9A\u4E49\u4E2D\u6709\u4EE5\u4E0B\u64CD\u4F5C\uFF0C\u5219\u4E0D\u80FD\u8FDB\u884C\u89C6\u56FE\u7684\u66F4\u65B0:</p><ul><li>\u5206\u7EC4(\u4F7F\u7528GROUP BY\u548CHAVING)</li><li>\u8054\u7ED3</li><li>\u5B50\u67E5\u8BE2</li><li>\u5E76</li><li>\u805A\u96C6\u51FD\u6570(Min()\u3001Count()\u3001Sum()\u7B49)</li><li>DISTINCT</li><li>\u5BFC\u51FA(\u8BA1\u7B97)\u5217</li></ul>',19),t=[r];function h(n,c,o,s,u,_){return i(),l("div",null,t)}const f=e(d,[["render",h]]);export{E as __pageData,f as default};
