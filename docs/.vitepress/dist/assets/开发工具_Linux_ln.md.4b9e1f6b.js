import{_ as s,o as n,c as l,a}from"./app.31720a63.js";const _=JSON.parse('{"title":"ln","description":"","frontmatter":{},"headers":[{"level":2,"title":"ln -s:symbol link","slug":"ln-s-symbol-link","link":"#ln-s-symbol-link","children":[]},{"level":2,"title":"\u76F8\u5173\u95EE\u9898","slug":"\u76F8\u5173\u95EE\u9898","link":"#\u76F8\u5173\u95EE\u9898","children":[]}],"relativePath":"\u5F00\u53D1\u5DE5\u5177/Linux/ln.md","lastUpdated":1670480666000}'),e={name:"\u5F00\u53D1\u5DE5\u5177/Linux/ln.md"},p=a(`<h1 id="ln" tabindex="-1">ln <a class="header-anchor" href="#ln" aria-hidden="true">#</a></h1><p>\u5728\u4E24\u4E2A\u6587\u4EF6\u95F4\u521B\u5EFA\u94FE\u63A5\uFF0C\u9ED8\u8BA4\u4E3A\u786C\u94FE\u63A5\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u4E00\u4E2A\u786C\u94FE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">ln nohup.out nohup.hard.out</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207170940534.png" alt=""></p><p>\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u786C\u94FE\u63A5\u6587\u4EF6\u548C\u6E90\u6587\u4EF6\uFF1A</p><ul><li>links\u53D8\u6210\u4E862\uFF0C\u4EE3\u8868\u786C\u94FE\u63A5\u4E2A\u6570</li><li>\u5177\u6709\u76F8\u540C\u7684Inode\uFF1A99</li><li>\u5177\u6709\u76F8\u540C\u7684size\u53CA\u5C5E\u6027</li></ul><p>\u5728\u524D\u7AEF\u4F7F\u7528pnpm\u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\u7684\u9879\u76EE\u4E2D\uFF0C\u786C\u94FE\u63A5\u5230\u5904\u5B58\u5728\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528 pnpm \u4F5C\u4E3A\u524D\u7AEF\u4F9D\u8D56\u7684\u9879\u76EE\u4E2D\u7684\u786C\u94FE\u63A5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ stat node_modules/.pnpm/react@17.0.2/node_modules/react/package.json</span></span>
<span class="line"></span></code></pre></div><h2 id="ln-s-symbol-link" tabindex="-1">ln -s:symbol link <a class="header-anchor" href="#ln-s-symbol-link" aria-hidden="true">#</a></h2><p><code>ln -s</code>\uFF0C\u5728\u4E24\u4E2A\u6587\u4EF6\u4E4B\u95F4\u521B\u5EFA\u8F6F\u94FE\u63A5\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u8F6F\u94FE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">ln -s nohup.out nohup.soft.out</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207170948688.png" alt=""></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8F6F\u94FE\u63A5\u6587\u4EF6\u4E0E\u6E90\u6587\u4EF6\uFF1A</p><ul><li>\u5177\u6709\u5B8C\u5168\u4E0D\u540C\u7684Inode\uFF0C\u8BC1\u660E\u662F\u4E24\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6</li><li>\u4E0D\u540C\u7684size\u548C\u5C5E\u6027</li><li>\u8F6F\u94FE\u63A5\u6587\u4EF6\u4E2D\u62E5\u6709<code>symbolic link</code>\u6807\u5FD7</li></ul><p>\u5728\u524D\u7AEF\u4F7F\u7528pnpm\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u8F6F\u94FE\u63A5\u5230\u5904\u5B58\u5728\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u4F7F\u7528 pnpm \u4F5C\u4E3A\u524D\u7AEF\u4F9D\u8D56\u7684\u9879\u76EE\u4E2D\u7684\u8F6F\u94FE\u63A5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ ls -lah node_modules/react</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># lrwxrwxrwx 1 root root 37 Jun 22 17:47 node_modules/react -&gt; .pnpm/react@17.0.2/node_modules/react</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76F8\u5173\u95EE\u9898" tabindex="-1">\u76F8\u5173\u95EE\u9898 <a class="header-anchor" href="#\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li>\u6211\u4EEC\u4FEE\u6539\u4E86\u6587\u4EF6\u7684 mode\uFF0C\u5728 git \u4E2D\u662F\u5426\u6709\u66F4\u6539\u64CD\u4F5C <ul><li><code>git config core.fileMode false</code>\u53EF\u4EE5\u5FFD\u7565mode\u7684\u66F4\u6539</li></ul></li><li>\u6211\u4EEC\u4FEE\u6539\u4E86\u6587\u4EF6\u7684 mtime\uFF0C\u5728 git \u4E2D\u662F\u5426\u6709\u66F4\u6539\u64CD\u4F5C</li><li>\u5728 pnpm \u4E2D\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u5168\u90E8\u4F7F\u7528\u8F6F\u94FE\u63A5</li><li>\u5728 Node.js \u6216\u5176\u5B83\u8BED\u8A00\u4E2D\u5982\u4F55\u6267\u884C <code>ln</code></li></ul>`,18),o=[p];function i(t,c,d,r,h,u){return n(),l("div",null,o)}const g=s(e,[["render",i]]);export{_ as __pageData,g as default};
