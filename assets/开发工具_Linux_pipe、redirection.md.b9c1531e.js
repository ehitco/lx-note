import{_ as e,o as s,c as a,a as n}from"./app.aec7eb12.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"pipe","slug":"pipe","link":"#pipe","children":[]},{"level":2,"title":"stdin/stdout","slug":"stdin-stdout","link":"#stdin-stdout","children":[]},{"level":2,"title":"redirection","slug":"redirection","link":"#redirection","children":[]},{"level":2,"title":"heredoc","slug":"heredoc","link":"#heredoc","children":[]},{"level":2,"title":"\u65E5\u5FD7\u91CD\u5B9A\u5411","slug":"\u65E5\u5FD7\u91CD\u5B9A\u5411","link":"#\u65E5\u5FD7\u91CD\u5B9A\u5411","children":[]}],"relativePath":"\u5F00\u53D1\u5DE5\u5177/Linux/pipe\u3001redirection.md","lastUpdated":1670483514000}'),l={name:"\u5F00\u53D1\u5DE5\u5177/Linux/pipe\u3001redirection.md"},t=n(`<h2 id="pipe" tabindex="-1">pipe <a class="header-anchor" href="#pipe" aria-hidden="true">#</a></h2><p><code>|</code> \u6784\u6210\u4E86\u7BA1\u9053\uFF0C\u5B83\u5C06\u524D\u9762\u547D\u4EE4\u7684\u6807\u51C6\u8F93\u51FA\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u547D\u4EE4\u7684\u6807\u51C6\u8F93\u5165\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u8BFB\u53D6\u524D\u5341\u884C\uFF0C\u518D\u8BFB\u53D6\u6700\u540E\u4E09\u884C\uFF08\u5341\u884C\u4E2D\u7684\u540E\u4E09\u884C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">cat README.md </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> head -10 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tail -3</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207182058296.png" alt=""></p><h2 id="stdin-stdout" tabindex="-1">stdin/stdout <a class="header-anchor" href="#stdin-stdout" aria-hidden="true">#</a></h2><p>\u6807\u51C6\u8F93\u5165\u3001\u6807\u51C6\u8F93\u51FA\uFF0C\u5176\u5B9E\u5C31\u662F\u6709\u7279\u6B8A\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</p><ul><li><code>stdin</code>\uFF0Cfd = 0\uFF0C\u76F4\u63A5\u4ECE\u952E\u76D8\u4E2D\u8BFB\u53D6\u6570\u636E\u3002</li><li><code>stdout</code>\uFF0Cfd = 1\uFF0C\u76F4\u63A5\u5C06\u6570\u636E\u6253\u5370\u81F3\u7EC8\u7AEF\u3002</li><li><code>stderr</code>\uFF0Cfd = 2\uFF0C\u6807\u51C6\u9519\u8BEF\uFF0C\u76F4\u63A5\u5C06\u5F02\u5E38\u4FE1\u606F\u6253\u5370\u81F3\u7EC8\u7AEF\u3002</li></ul><h2 id="redirection" tabindex="-1">redirection <a class="header-anchor" href="#redirection" aria-hidden="true">#</a></h2><ul><li><code>&gt;</code>\uFF1A\u5C06\u6587\u4EF6\u63CF\u8FF0\u7B26\u6216\u6807\u51C6\u8F93\u51FA\u4E2D\u5185\u5BB9\u5199\u5165\u6587\u4EF6\u3002\u4F1A\u8986\u76D6\u539F\u5185\u5BB9\u3002</li><li><code>&gt;&gt;</code>\uFF1A\u5C06\u6587\u4EF6\u63CF\u8FF0\u7B26\u6216\u6807\u51C6\u8F93\u51FA\u4E2D\u5185\u5BB9\u8FFD\u52A0\u5165\u6587\u4EF6\u3002</li></ul><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207182102150.png" alt=""></p><h2 id="heredoc" tabindex="-1">heredoc <a class="header-anchor" href="#heredoc" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">EOF</span><span style="color:#C3E88D;"> &gt; README.md</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u610F\u601D\u662F\u5C06\u6807\u51C6\u8F93\u5165\u65F6\u7684\u5185\u5BB9\uFF0C\u5199\u5165\u5230 <a href="http://README.md" target="_blank" rel="noreferrer">README.md</a> \u4E2D\u3002</p><p>\u5176\u4E2D <code>&lt;&lt; EOF</code>\uFF0C\u79F0\u4F5C <code>Hear Document</code>\uFF0C\u5F53\u6700\u7EC8\u5199\u5165 EOF\uFF08End of line\uFF09\u65F6\uFF0C\u5219 heredoc \u4F1A\u505C\u6B62\u8F93\u5165\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207182112507.png" alt=""></p><h2 id="\u65E5\u5FD7\u91CD\u5B9A\u5411" tabindex="-1">\u65E5\u5FD7\u91CD\u5B9A\u5411 <a class="header-anchor" href="#\u65E5\u5FD7\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h2><p>\u6709\u65F6\uFF0C\u4E3A\u4E86\u4E0D\u663E\u793A\u65E5\u5FD7\uFF0C\u53EF\u5C06\u6240\u6709\u6807\u51C6\u8F93\u51FA\u91CD\u5B9A\u5411\u81F3 <code>/dev/null</code>\u3002</p><p><code>/dev/null</code> \u662F\u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u6240\u6709\u7684\u8F93\u5165\u90FD\u7EDF\u7EDF\u5403\u4E0B\uFF0C\u5316\u4E3A\u4E4C\u6709\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u628A\u6807\u51C6\u8F93\u51FA\uFF081\uFF09\u91CD\u5B9A\u5411\u5230/dev/null</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> hello </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u540E\u8FB9\u8DDF\u4E00\u4E2A 2&gt;&amp;1\uFF0C\u8868\u793A\u5C06 stderr (fd \u4E3A2) \u91CD\u5B9A\u5411\u81F3 &amp;1 (fd===1 \u7684\u6587\u4EF6\uFF0C\u53CA stdout)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u90A3\u4E48\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u4E5F\u4F1A\u91CD\u5B9A\u5411\u5230/dev/null</span></span>
<span class="line"><span style="color:#A6ACCD;">cat hello </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /dev/null </span><span style="color:#89DDFF;">2&gt;&amp;1</span></span>
<span class="line"></span></code></pre></div>`,19),p=[t];function o(c,i,d,r,h,u){return s(),a("div",null,p)}const _=e(l,[["render",o]]);export{D as __pageData,_ as default};
