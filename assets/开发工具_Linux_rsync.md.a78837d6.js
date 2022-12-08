import{_ as s,o as a,c as n,a as l}from"./app.aec7eb12.js";const D=JSON.parse('{"title":"rsync","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FDC\u7A0B\u590D\u5236","slug":"\u8FDC\u7A0B\u590D\u5236","link":"#\u8FDC\u7A0B\u590D\u5236","children":[]},{"level":2,"title":"\u5F52\u6863\u6A21\u5F0F","slug":"\u5F52\u6863\u6A21\u5F0F","link":"#\u5F52\u6863\u6A21\u5F0F","children":[]},{"level":2,"title":"\u62F7\u8D1D\u76EE\u5F55","slug":"\u62F7\u8D1D\u76EE\u5F55","link":"#\u62F7\u8D1D\u76EE\u5F55","children":[]},{"level":2,"title":"\u51E0\u4E2A\u95EE\u9898","slug":"\u51E0\u4E2A\u95EE\u9898","link":"#\u51E0\u4E2A\u95EE\u9898","children":[]}],"relativePath":"\u5F00\u53D1\u5DE5\u5177/Linux/rsync.md","lastUpdated":1670483514000}'),e={name:"\u5F00\u53D1\u5DE5\u5177/Linux/rsync.md"},p=l(`<h1 id="rsync" tabindex="-1">rsync <a class="header-anchor" href="#rsync" aria-hidden="true">#</a></h1><h2 id="\u8FDC\u7A0B\u590D\u5236" tabindex="-1">\u8FDC\u7A0B\u590D\u5236 <a class="header-anchor" href="#\u8FDC\u7A0B\u590D\u5236" aria-hidden="true">#</a></h2><p>\u5C06\u672C\u5730\u7684\u56FE\u7247 \u62F7\u8D1D\u5230 merlin \u670D\u52A1\u5668\u7684 /root \u76EE\u5F55\u4E0B</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># -l\uFF1A--links\uFF0C\u62F7\u8D1D\u7B26\u53F7\u94FE\u63A5</span></span>
<span class="line"><span style="color:#676E95;"># -a\uFF1A--archive\uFF0C\u5F52\u6863\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#676E95;"># -h\uFF1A--human-readable\uFF0C\u53EF\u8BFB\u5316\u683C\u5F0F\u8FDB\u884C\u8F93\u51FA</span></span>
<span class="line"><span style="color:#676E95;"># -z\uFF1A--compress\uFF0C\u538B\u7F29\u4F20\u8F93</span></span>
<span class="line"><span style="color:#676E95;"># -v\uFF1A--verbose\uFF0C\u8BE6\u7EC6\u8F93\u51FA</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahzv /Users/merlin/Downloads/avataaars.png merlin:/root/picture.png</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207112247555.png" alt=""></p><h2 id="\u5F52\u6863\u6A21\u5F0F" tabindex="-1">\u5F52\u6863\u6A21\u5F0F <a class="header-anchor" href="#\u5F52\u6863\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u6700\u5927\u7684\u597D\u5904\u662F\u53EF\u4EE5\u62F7\u8D1D\u5143\u5C5E\u6027\uFF0C\u5982ctime/mtime/mode\u7B49\u7B49\uFF0C\u8FD9\u5BF9\u4E8E\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668\u975E\u5E38\u6709\u7528\u3002</p><blockquote><p>\u5173\u4E8E\u5143\u5C5E\u6027\uFF0C\u53EF\u53C2\u8003 <a href="https://q.shanyue.tech/command/stat.html" target="_blank" rel="noreferrer">stat</a> \u547D\u4EE4</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5176 picture.png \u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ls -lah </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep picture</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r--  1        501 staff   37K Jul 10 15:39 picture.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># yarn2.lock \u4F7F\u7528 rsync \u62F7\u8D1D</span></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahzv /Users/merlin/Downloads/avataaars.png merlin:/root/picture.png</span></span>
<span class="line"><span style="color:#676E95;"># yarn3.lock \u4F7F\u7528 cp \u62F7\u8D1D</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cp picture.png picture1.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u89C2\u5BDF\u53EF\u77E5</span></span>
<span class="line"><span style="color:#676E95;"># rsync \u4FEE\u6539\u65F6\u95F4/mode \u4E0E\u6E90\u6587\u4EF6\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#676E95;"># cp \u4FEE\u6539\u65F6\u95F4\u4E3A\u5F53\u524D\u6700\u65B0\u65F6\u95F4\uFF0Cmode \u4E5F\u4E0D\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ls -lah </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep picture</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r--  1        501 staff   37K Jul 10 15:39 picture.png</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r--@   1 merlin  staff    37K  7 10 15:39 picture.png</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r--@   1 merlin  staff    37K  7 11 22:42 picture1.png</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207112243636.png" alt=""></p><h2 id="\u62F7\u8D1D\u76EE\u5F55" tabindex="-1">\u62F7\u8D1D\u76EE\u5F55 <a class="header-anchor" href="#\u62F7\u8D1D\u76EE\u5F55" aria-hidden="true">#</a></h2><p>\u62F7\u8D1D\u76EE\u5F55\uFF0C\u5219\u9700\u8981\u770B\u539F\u76EE\u5F55\u662F\u5426\u4EE5 <code>/</code> \u7ED3\u5C3E\u3002</p><ul><li>\u4E0D\u4EE5 <code>/</code> \u7ED3\u5C3E\uFF0C\u4EE3\u8868\u5C06\u8BE5\u76EE\u5F55\u8FDE\u540C\u76EE\u5F55\u540D\u4E00\u8D77\u8FDB\u884C\u62F7\u8D1D</li><li>\u4EE5 <code>/</code> \u7ED3\u5C3E\uFF0C\u4EE3\u8868\u5C06\u8BE5\u76EE\u5F55\u4E0B\u6240\u6709\u5185\u5BB9\u8FDB\u884C\u62F7\u8D1D</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u4EE5\u4E0B\u4EE5\u62F7\u8D1D react \u76EE\u5F55\u4E3A\u4F8B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u62F7\u8D1Dreact\u6574\u4E2A\u6587\u4EF6\u5939\u5230\u670D\u52A1\u5668abc\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahz </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/react </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/abc/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4EE5\u4E0B\u6548\u679C\u76F8\u540C</span></span>
<span class="line"><span style="color:#676E95;"># \u62F7\u8D1Dreact\u6574\u4E2A\u6587\u4EF6\u5939\u5230\u670D\u52A1\u5668Documents\u4E0B\u5E76\u6539\u540D\u4E3Aadc</span></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahz </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/react </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/abc</span></span>
<span class="line"><span style="color:#676E95;"># \u62F7\u8D1Dreact\u4E0B\u6587\u4EF6\u5230\u670D\u52A1\u5668abc\u6587\u4EF6\u5939\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahz </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/react/ </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/abc</span></span>
<span class="line"><span style="color:#676E95;"># \u62F7\u8D1Dreact\u4E0B\u6587\u4EF6\u5230\u670D\u52A1\u5668abc\u6587\u4EF6\u5939\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">$ rsync -lahz </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/react/ </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Documents/abc/</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51E0\u4E2A\u95EE\u9898" tabindex="-1">\u51E0\u4E2A\u95EE\u9898 <a class="header-anchor" href="#\u51E0\u4E2A\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li>\u5728 Node.js \u6216\u5176\u5B83\u8BED\u8A00\u4E2D\u5982\u4F55\u5B9E\u73B0 <code>cp</code>\u3002\u53C2\u8003 <a href="https://nodejs.org/api/fs.html#fspromisescpsrc-dest-options" target="_blank" rel="noreferrer">fsp.cp</a>\u3002(cp \u5B9E\u9645\u4E0A\u662F\u901A\u8FC7\u5E93\u51FD\u6570 open/write \u6A21\u62DF\u5B9E\u73B0)</li><li>\u4E3A\u4F55\u8BF4\u4FDD\u7559\u590D\u5236\u6587\u4EF6\u65F6\u7684\u5143\u5C5E\u6027\uFF0C\u5BF9\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668\u6709\u76CA <ul><li>\u6709\u5229\u4E8E\u8FDB\u884C\u76F8\u5173\u7F13\u5B58\u7B56\u7565\u7684\u8BBE\u7F6E\uFF0C\u5E76\u4E14\u4FDD\u7559\u539F\u59CB\u7684\u7F16\u8F91\u65F6\u95F4\u7B49</li></ul></li></ul>`,16),c=[p];function o(r,t,i,d,y,h){return a(),n("div",null,c)}const C=s(e,[["render",o]]);export{D as __pageData,C as default};
