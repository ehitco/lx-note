import{_ as s,o as l,c as n,a}from"./app.31720a63.js";const A=JSON.parse('{"title":"\u4E8B\u4EF6\u5FAA\u73AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[{"level":3,"title":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","slug":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","link":"#\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","children":[]}]},{"level":2,"title":"\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B","slug":"\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B","link":"#\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B","children":[]},{"level":2,"title":"Node\u73AF\u5883\u4E0B","slug":"node\u73AF\u5883\u4E0B","link":"#node\u73AF\u5883\u4E0B","children":[{"level":3,"title":"timers \u9636\u6BB5","slug":"timers-\u9636\u6BB5","link":"#timers-\u9636\u6BB5","children":[]},{"level":3,"title":"poll \u9636\u6BB5","slug":"poll-\u9636\u6BB5","link":"#poll-\u9636\u6BB5","children":[]},{"level":3,"title":"check \u9636\u6BB5","slug":"check-\u9636\u6BB5","link":"#check-\u9636\u6BB5","children":[]},{"level":3,"title":"\u4E3E\u4E2A\u4F8B\u5B50","slug":"\u4E3E\u4E2A\u4F8B\u5B50","link":"#\u4E3E\u4E2A\u4F8B\u5B50","children":[]},{"level":3,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}]},{"level":2,"title":"microtask\u7684\u6267\u884C\u65F6\u673A","slug":"microtask\u7684\u6267\u884C\u65F6\u673A","link":"#microtask\u7684\u6267\u884C\u65F6\u673A","children":[]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/JavaScript/\u4E8B\u4EF6\u5FAA\u73AF.md","lastUpdated":1670480666000}'),o={name:"\u524D\u7AEF\u57FA\u7840/JavaScript/\u4E8B\u4EF6\u5FAA\u73AF.md"},p=a(`<h1 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>JavaScript\u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u975E\u963B\u585E\u7684\u811A\u672C\u8BED\u8A00\u3002</p><ul><li>\u5355\u7EBF\u7A0B\uFF0C\u7531\u4E8EJavaScript\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u9700\u8981\u8FDB\u884C\u5404\u79CD\u5404\u6837\u7684dom\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u907F\u514D\u7EBF\u7A0B\u51B2\u7A81\uFF0C\u5219\u9009\u62E9\u91C7\u7528\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\u6765\u6267\u884C\u4EE3\u7801\uFF0C\u6765\u4FDD\u8BC1\u7A0B\u5E8F\u6267\u884C\u7684\u4E00\u81F4\u6027\u3002</li><li>\u975E\u963B\u585E\uFF0CJavaScript\u5F15\u64CE\u901A\u8FC7<code>Event Loop</code>\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u6765\u907F\u514D\u4EE3\u7801\u8FD0\u884C\u65F6\u7684\u963B\u585E\u95EE\u9898\uFF0C\u4E5F\u662F\u672C\u6587\u7684\u4E3B\u9898\uFF0C\u4E0B\u9762\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u7684\u8FD0\u4F5C\u8FDB\u884C\u5206\u6790\u3002</li></ul><h3 id="\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B" tabindex="-1">\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B <a class="header-anchor" href="#\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B" aria-hidden="true">#</a></h3><p>\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u4E24\u4E2A\u540D\u8BCD\u90FD\u662FCPU\u5DE5\u4F5C\u65F6\u95F4\u7247\u7684\u4E00\u4E2A\u63CF\u8FF0\u3002</p><p>\u8FDB\u7A0B\u63CF\u8FF0\u4E86 CPU \u5728\u8FD0\u884C\u6307\u4EE4\u53CA\u52A0\u8F7D\u548C\u4FDD\u5B58\u4E0A\u4E0B\u6587\u6240\u9700\u7684\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u4EE3\u8868\u4E00\u4E2A\u7A0B\u5E8F\u3002</p><p>\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u4E2D\u7684\u66F4\u5C0F\u5355\u4F4D\uFF0C\u63CF\u8FF0\u4E86\u6267\u884C\u4E00\u6BB5\u6307\u4EE4\u6240\u9700\u7684\u65F6\u95F4\u3002</p><p>\u62FF\u6D4F\u89C8\u5668\u6765\u8BF4\uFF0C\u5F53\u4F60<code>\u6253\u5F00\u4E00\u4E2A Tab \u2EDA</code>\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F <code>\u521B\u5EFA\u4E86\u4E00\u4E2A\u8FDB\u7A0B</code>\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5<code>\u6709\u591A\u4E2A\u7EBF\u7A0B</code>\uFF0C\u6BD4\u5982\u6E32\u67D3\u7EBF\u7A0B\u3001JS \u5F15\u64CE\u7EBF\u7A0B\u3001HTTP \u8BF7\u6C42\u7EBF\u7A0B\u7B49\u7B49\u3002\u5F53\u4F60<code>\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42</code>\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F<code>\u521B\u5EFA\u4E86\u4E00\u4E2A\u7EBF\u7A0B</code>\uFF0C\u5F53\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u8BE5\u7EBF\u7A0B\u53EF\u80FD\u5C31\u4F1A\u88AB\u9500\u6BC1\u3002</p><blockquote><p>JS\u5355\u7EBF\u7A0B\u7684\u597D\u5904 \u8282\u7701\u5185\u5B58\uFF0C\u8282\u7EA6\u4E0A\u4E0B\u6587\u5207\u6362\u65F6\u95F4\uFF0C\u6CA1\u6709\u9501\u7684\u95EE\u9898</p></blockquote><h2 id="\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B" tabindex="-1">\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B" aria-hidden="true">#</a></h2><p>\u5728JavaScript\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4EE3\u7801\u5206\u4E3A\uFF1A</p><ul><li>\u5B8F\u4EFB\u52A1\uFF08macro task\uFF09 <ul><li>script\uFF08\u4EE3\u7801\u7247\u6BB5\uFF0C\u5305\u62EC\u4E86\u540C\u6B65\u4EE3\u7801\uFF09</li><li><code>setTimeout</code></li><li><code>setInterval</code></li><li><code>I/O</code></li><li><code>UI Rendering</code></li><li>...</li></ul></li><li>\u5FAE\u4EFB\u52A1\uFF08micro task\uFF09 <ul><li><code>Promise</code></li><li><code>Process.nextTick\uFF08Node\u72EC\u6709\uFF09</code></li><li><code>MutationObserver</code></li><li>...</li></ul></li></ul><p>\u540C\u65F6\uFF0C\u4E5F\u5177\u5907\u4E86\u4E0D\u540C\u4EE3\u7801\u6267\u884C\u65F6\u7684\u5BB9\u5668\uFF0C\u7528\u6765\u7BA1\u7406\u4EE3\u7801\u7684\u5F53\u524D\u8FD0\u4F5C\u72B6\u6001\u3002</p><ul><li>\u51FD\u6570\u8C03\u7528\u6808 <ul><li>\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u540E\u8FDB\u5148\u51FA\uFF0C\u5F53\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F1A\u88AB\u6DFB\u52A0\u5230\u6808\u7684\u9876\u90E8\uFF0C\u5F53\u6267\u884C\u6808\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5C31\u4F1A\u4ECE\u6808\u9876\u79FB\u51FA\uFF0C\u76F4\u5230\u6808\u5185\u88AB\u6E05\u7A7A\u3002</li></ul></li><li>\u5B8F\u4EFB\u52A1\u961F\u5217 / \u5FAE\u4EFB\u52A1\u961F\u5217 <ul><li>\u5148\u8FDB\u5148\u51FA\uFF0C\u5F53\u5F02\u6B65\u4EFB\u52A1\u5728\u4E8B\u4EF6\u6C60\u6709\u4E86\u7ED3\u679C\u540E\uFF0C\u5C06\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u88AB\u6267\u884C\u3002</li></ul></li><li>Web APIs\u4E8B\u4EF6\u6C60\uFF08\u5B8F\u4EFB\u52A1\uFF09 <ul><li>\u7528\u6765\u5B58\u50A8\u5F02\u6B65\u4E8B\u4EF6\uFF0C\u5F53\u5F02\u6B65\u4EFB\u52A1\u5230\u8FBE\u65F6\u673A\u65F6\uFF0C\u5C06\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u4E3B\u7EBF\u7A0B\u7A7A\u95F2\u7684\u65F6\u5019\uFF08\u4E5F\u5C31\u662F\u8C03\u7528\u6808\u88AB\u6E05\u7A7A\u65F6\uFF09\uFF0C\u88AB\u8BFB\u53D6\u5230\u6808\u5185\u7B49\u5F85\u4E3B\u7EBF\u7A0B\u7684\u6267\u884C\u3002</li></ul></li></ul><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage@master/picX/image.15vawwy79ucg.webp" alt="image"></p><blockquote><p>\u5FAE\u4EFB\u52A1\u6CA1\u6709\u50CF\u5B8F\u4EFB\u52A1\u90A3\u6837\u7684Web APIs\u4E8B\u4EF6\u6C60\uFF0C\u76F4\u63A5\u8FDB\u5165\u961F\u5217\u3002</p></blockquote><p>\u4E0B\u9762\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5206\u6790\u4E8B\u4EF6\u5FAA\u73AF\u7684\u8FD0\u4F5C\u8FC7\u7A0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async2 end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">async1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Promise</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u9996\u5148\uFF0C\u5148\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u4E5F\u5C5E\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u6BCB\u5EB8\u7F6E\u7591\uFF0C\u6700\u5F00\u59CB\u6253\u5370<code>script start</code>\uFF0C</p><p>\u63A5\u7740\u5462\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86<code>async1</code>\u548C<code>async2</code>\u4E24\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u5B9A\u4E49\u53EF\u4EE5\u8DF3\u8FC7\uFF0C</p><p>\u63A5\u7740\uFF0C\u8C03\u7528<code>async1</code>\uFF0C\u5176\u4E2D<code>await</code>\u5904\u4F1A\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\uFF0Cawait\u540E\u9762\u7684\u90E8\u5206\u4F1A\u4F5C\u4E3A<code>Promise.then(cb)</code>cb\u56DE\u8C03\u51FD\u6570\u4E2D\u7684\u5185\u5BB9\u3002\u4E8E\u662F\u6267\u884C<code>async2</code>\u6253\u5370<code>async2 end</code>\uFF0C\u7531\u4E8E\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u5F02\u6B65\u7684\uFF0C\u6240\u4EE5await\u540E\u9762\u7684\u90E8\u5206\u4E0D\u4F1A\u7ACB\u5373\u8C03\u7528\uFF0C\u800C\u662F\u8FDB\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u7B49\u5F85\u6267\u884C\u3002</p><p>\u63A5\u7740\uFF0C<code>setTimeout</code>\u662F\u5B8F\u4EFB\u52A1\uFF0C\u8FDB\u5165<code>web APIs</code>\u7B49\u5F85\u6267\u884C\u3002</p><p>\u63A5\u7740\uFF0C\u6253\u5370<code>promise</code>\u548C<code>script end</code>\uFF0C<code>.then\u4E2Dcb\u51FD\u6570\u7684\u5185\u5BB9</code>\u4F1A\u88AB\u63A8\u8FDB\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u6267\u884C\u3002</p><p>\u6B64\u65F6\uFF0C\u540C\u6B65\u4EE3\u7801\u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u5426\u4E3A\u7A7A\uFF0C\u7136\u540E\u6309\u7167\u5148\u5165\u5148\u51FA\u89C4\u5219\uFF0C\u4F9D\u6B21\u6267\u884C\u3002\u6B64\u65F6\u4F1A\u4F9D\u6B21\u6253\u5370<code>async1 end</code>\u3001<code>promise1</code>\u3001<code>promise2</code></p><p>\u5F53\u5FAE\u4EFB\u52A1\u961F\u5217\u5168\u90E8\u6267\u884C\u5B8C\u540E\uFF0C\u4F1A\u68C0\u67E5\u662F\u5426\u9700\u8981\u6E32\u67D3\u9875\u9762\uFF0C\u4E4B\u540E\u8FDB\u5165\u4E0B\u4E00\u4E2A<code>Event Loop</code>\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u6253\u5370<code>setTimeout</code></p><p>\u5F53\u6267\u884C\u5B8C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u6D4F\u89C8\u5668\u4F1A\u518D\u6B21\u53BB\u68C0\u67E5<strong>microtask\u961F\u5217\u662F\u5426\u4E3A\u7A7A</strong>\uFF08\u6267\u884C\u5B8C\u4E00\u4E2Atask\u7684\u5177\u4F53\u6807\u5FD7\u662F\u51FD\u6570\u6267\u884C\u6808\u4E3A\u7A7A\uFF09\uFF0C<strong>\u5982\u679C\u4E0D\u4E3A\u7A7A\u5219\u4F1A\u4E00\u6B21\u6027\u6267\u884C\u5B8C\u6240\u6709microtask</strong>\u3002\u7136\u540E\u7EE7\u7EED\u53D6\u4E0B\u4E00\u4E2Atask\u6267\u884C\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><blockquote><p>DOM\uFF08\u91CD\u65B0\uFF09\u6E32\u67D3\u7684\u65F6\u673A\u5728\u4E8E\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u4E4B\u95F4\u3002</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202204121515830.png" alt=""></p><blockquote><p>\u6CE8\u610F\uFF1A\u6BCF\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u90FD\u7B97\u662F\u4E00\u4E2A\u4E8B\u4EF6\u5468\u671F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u6709\u591A\u4E2A\u5B8F\u4EFB\u52A1\u65F6\uFF0C\u5BF9\u5E94\u591A\u4E2A\u5468\u671F\uFF0C\u5728\u8FD9\u4E9B\u5468\u671F\u7684\u95F4\u9694\u90FD\u4F1A\u62FF\u51FA\u5FAE\u4EFB\u52A1\u53BB\u6267\u884C\u3002</p></blockquote><h2 id="node\u73AF\u5883\u4E0B" tabindex="-1">Node\u73AF\u5883\u4E0B <a class="header-anchor" href="#node\u73AF\u5883\u4E0B" aria-hidden="true">#</a></h2><p>\u6BCF\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u90FD\u5305\u542B\u4E866\u4E2A\u9636\u6BB5\uFF0C\u5BF9\u5E94\u5230 libuv \u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A <img src="http://lynnelv.github.io/img/article/event-loop/node-libuv.png" alt="image"></p><ul><li><strong>timers \u9636\u6BB5</strong>\uFF1A\u8FD9\u4E2A\u9636\u6BB5\u6267\u884Ctimer\uFF08<code>setTimeout</code>\u3001<code>setInterval</code>\uFF09\u7684\u56DE\u8C03</li><li><strong>I/O callbacks \u9636\u6BB5</strong>\uFF1A\u6267\u884C\u4E00\u4E9B\u7CFB\u7EDF\u8C03\u7528\u9519\u8BEF\uFF0C\u6BD4\u5982\u7F51\u7EDC\u901A\u4FE1\u7684\u9519\u8BEF\u56DE\u8C03</li><li><strong>idle, prepare \u9636\u6BB5</strong>\uFF1A\u4EC5node\u5185\u90E8\u4F7F\u7528</li><li><strong>poll \u9636\u6BB5</strong>\uFF1A\u83B7\u53D6\u65B0\u7684I/O\u4E8B\u4EF6, \u9002\u5F53\u7684\u6761\u4EF6\u4E0Bnode\u5C06\u963B\u585E\u5728\u8FD9\u91CC</li><li><strong>check \u9636\u6BB5</strong>\uFF1A\u6267\u884C <code>setImmediate()</code> \u7684\u56DE\u8C03</li><li><strong>close callbacks \u9636\u6BB5</strong>\uFF1A\u6267\u884C <code>socket</code> \u7684 <code>close</code> \u4E8B\u4EF6\u56DE\u8C03</li></ul><p>\u4E3B\u8981\u4E86\u89E3<code>timers</code>\u3001<code>poll</code>\u3001<code>check</code>\u9636\u6BB5\u3002</p><h3 id="timers-\u9636\u6BB5" tabindex="-1">timers \u9636\u6BB5 <a class="header-anchor" href="#timers-\u9636\u6BB5" aria-hidden="true">#</a></h3><p>\u68C0\u67E5\u6709\u65E0\u5DF2\u8FC7\u671F\u7684timer\uFF0C\u5982\u679C\u6709\u5219\u628A\u5B83\u7684\u56DE\u8C03\u538B\u5165timer\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u6267\u884C\u3002</p><p>\u4E8B\u5B9E\u4E0A\u4E0D\u80FD\u4FDD\u8BC1timer\u5728\u9884\u8BBE\u65F6\u95F4\u5230\u4E86\u5C31\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u4F1A\u53D7\u673A\u5668\u4E0A\u5176\u5B83\u8FD0\u884C\u7A0B\u5E8F\u5F71\u54CD\uFF0C\u6216\u8005\u90A3\u4E2A\u65F6\u95F4\u70B9\u4E3B\u7EBF\u7A0B\u4E0D\u7A7A\u95F2\u3002</p><p><code>setTimeout()</code> \u548C <code>setImmediate()</code> \u7684\u6267\u884C\u987A\u5E8F\u662F\u4E0D\u786E\u5B9A\u7684\u3002</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">immediate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u628A\u5B83\u4EEC\u653E\u5230\u4E00\u4E2A<code>I/O\u56DE\u8C03</code>\u91CC\u9762\uFF0C\u5C31\u4E00\u5B9A\u662F <code>setImmediate()</code> \u5148\u6267\u884C\uFF0C\u56E0\u4E3Apoll\u9636\u6BB5\u540E\u9762\u5C31\u662Fcheck\u9636\u6BB5\u3002</p><h3 id="poll-\u9636\u6BB5" tabindex="-1">poll \u9636\u6BB5 <a class="header-anchor" href="#poll-\u9636\u6BB5" aria-hidden="true">#</a></h3><p>poll \u9636\u6BB5\u4E3B\u8981\u67092\u4E2A\u529F\u80FD\uFF1A</p><ul><li>\u5904\u7406 poll \u961F\u5217\u7684\u4E8B\u4EF6</li><li>\u5F53\u6709\u5DF2\u8D85\u65F6\u7684 timer\uFF0C\u6267\u884C\u5B83\u7684\u56DE\u8C03\u51FD\u6570</li></ul><p>\u5C06\u540C\u6B65\u6267\u884Cpoll\u961F\u5217\u91CC\u7684\u56DE\u8C03\uFF0C\u76F4\u5230\u961F\u5217\u4E3A\u7A7A\u6216\u6267\u884C\u7684\u56DE\u8C03\u8FBE\u5230\u7CFB\u7EDF\u4E0A\u9650\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u9884\u8BBE\u7684<code>setImmediate</code>\uFF0C\u6709\u7684\u8BDD\u8FDB\u5165<code>check</code>\u9636\u6BB5\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u963B\u585E\u3002\u6B64\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2A\u68C0\u67E5\u673A\u5236\uFF0C\u68C0\u67E5timer\u961F\u5217\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679Ctimer\u961F\u5217\u975E\u7A7A\uFF0Cevent loop\u5C31\u5F00\u59CB\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5373\u91CD\u65B0\u8FDB\u5165\u5230timer\u9636\u6BB5\u3002</p><h3 id="check-\u9636\u6BB5" tabindex="-1">check \u9636\u6BB5 <a class="header-anchor" href="#check-\u9636\u6BB5" aria-hidden="true">#</a></h3><p><code>setImmediate()</code>\u7684\u56DE\u8C03\u4F1A\u88AB\u52A0\u5165check\u961F\u5217\u4E2D\uFF0C \u4ECEevent loop\u7684\u9636\u6BB5\u56FE\u53EF\u4EE5\u77E5\u9053\uFF0Ccheck\u9636\u6BB5\u7684\u6267\u884C\u987A\u5E8F\u5728poll\u9636\u6BB5\u4E4B\u540E\u3002</p><h3 id="\u4E3E\u4E2A\u4F8B\u5B50" tabindex="-1">\u4E3E\u4E2A\u4F8B\u5B50 <a class="header-anchor" href="#\u4E3E\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timer1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timer2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">//start=&gt;end=&gt;promise3=&gt;timer1=&gt;timer2=&gt;promise1=&gt;promise2</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E00\u5F00\u59CB\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u4F9D\u6B21\u6253\u5370\u51FAstart end\uFF0C\u5E76\u5C062\u4E2Atimer\u4F9D\u6B21\u653E\u5165timer\u961F\u5217</li><li>\u7136\u540E\u4F1A\u5148\u53BB\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u6240\u4EE5\u6253\u5370\u51FApromise3</li><li>\u7136\u540E\u8FDB\u5165<code>timers</code>\u9636\u6BB5\uFF0C\u6267\u884Ctimer1\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6253\u5370timer1\uFF0C\u5E76\u5C06promise.then\u56DE\u8C03\u653E\u5165<code>micro task</code>\u961F\u5217\uFF0C\u540C\u6837\u7684\u6B65\u9AA4\u6267\u884Ctimer2\uFF0C\u6253\u5370timer2</li><li><code>timers</code>\u9636\u6BB5\u7ED3\u675F\uFF0C\u4F1A\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u6253\u5370\u51FApromise1\uFF0Cpromise2\uFF0C\u7136\u540E\u518D\u8FDB\u5165\u4E0B\u4E00\u4E2A\u9636\u6BB5</li></ul><h3 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h3><ul><li>event loop \u7684\u6BCF\u4E2A\u9636\u6BB5\u90FD\u6709\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217</li><li>\u5F53 event loop \u5230\u8FBE\u67D0\u4E2A\u9636\u6BB5\u65F6\uFF0C\u5C06\u6267\u884C\u8BE5\u9636\u6BB5\u7684\u4EFB\u52A1\u961F\u5217\uFF0C\u76F4\u5230\u961F\u5217\u6E05\u7A7A\u6216\u6267\u884C\u7684\u56DE\u8C03\u8FBE\u5230\u7CFB\u7EDF\u4E0A\u9650\u540E\uFF0C\u624D\u4F1A\u8F6C\u5165\u4E0B\u4E00\u4E2A\u9636\u6BB5</li><li>\u5728Node.js\u4E2D\uFF0C<code>microtask</code>\u4F1A\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684\u5404\u4E2A\u9636\u6BB5\u4E4B\u95F4\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u9636\u6BB5\u6267\u884C\u5B8C\u6BD5\uFF0C\u5C31\u4F1A\u53BB\u6267\u884C<code>microtask</code>\u961F\u5217\u7684\u4EFB\u52A1\u3002</li><li>\u5F53\u6240\u6709\u9636\u6BB5\u88AB\u987A\u5E8F\u6267\u884C\u4E00\u6B21\u540E\uFF0C\u79F0 <code>event loop \u5B8C\u6210\u4E86\u4E00\u4E2A tick</code></li></ul><h2 id="microtask\u7684\u6267\u884C\u65F6\u673A" tabindex="-1">microtask\u7684\u6267\u884C\u65F6\u673A <a class="header-anchor" href="#microtask\u7684\u6267\u884C\u65F6\u673A" aria-hidden="true">#</a></h2><ul><li>Node\u7AEF\uFF0Cmicrotask \u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684\u5404\u4E2A\u9636\u6BB5\u4E4B\u95F4\u6267\u884C</li><li>\u6D4F\u89C8\u5668\u7AEF\uFF0Cmicrotask \u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684 macrotask \u6267\u884C\u5B8C\u4E4B\u540E\u6267\u884C</li></ul><blockquote><p>\u6587\u7AE0\u53C2\u8003\uFF1A</p><ul><li><a href="http://lynnelv.github.io/js-event-loop-nodejs" target="_blank" rel="noreferrer">\u6DF1\u5165\u7406\u89E3js\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF08Node.js\u7BC7\uFF09</a></li><li><a href="https://segmentfault.com/a/1190000013861128" target="_blank" rel="noreferrer">\u4E00\u7BC7\u6587\u7AE0\u6559\u4F1A\u4F60Event loop\u2014\u2014\u6D4F\u89C8\u5668\u548CNode</a></li><li><a href="https://juejin.cn/post/6844903764202094606" target="_blank" rel="noreferrer">\u4E00\u6B21\u5F04\u61C2Event Loop\uFF08\u5F7B\u5E95\u89E3\u51B3\u6B64\u7C7B\u9762\u8BD5\u95EE\u9898\uFF09</a></li><li><a href="https://juejin.cn/post/6844903761949753352" target="_blank" rel="noreferrer"># \u6D4F\u89C8\u5668\u4E0ENode\u7684\u4E8B\u4EF6\u5FAA\u73AF(Event Loop)\u6709\u4F55\u533A\u522B?</a></li></ul></blockquote>`,54),e=[p];function c(t,r,i,F,y,D){return l(),n("div",null,e)}const C=s(o,[["render",c]]);export{A as __pageData,C as default};
