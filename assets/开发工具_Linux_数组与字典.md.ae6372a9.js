import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const i=JSON.parse('{"title":"\u6570\u7EC4\u4E0E\u5B57\u5178","description":"","frontmatter":{},"headers":[{"level":2,"title":"Array","slug":"array","link":"#array","children":[]},{"level":2,"title":"Associative Array","slug":"associative-array","link":"#associative-array","children":[]}],"relativePath":"\u5F00\u53D1\u5DE5\u5177/Linux/\u6570\u7EC4\u4E0E\u5B57\u5178.md","lastUpdated":1670483514000}'),p={name:"\u5F00\u53D1\u5DE5\u5177/Linux/\u6570\u7EC4\u4E0E\u5B57\u5178.md"},o=l(`<h1 id="\u6570\u7EC4\u4E0E\u5B57\u5178" tabindex="-1">\u6570\u7EC4\u4E0E\u5B57\u5178 <a class="header-anchor" href="#\u6570\u7EC4\u4E0E\u5B57\u5178" aria-hidden="true">#</a></h1><h2 id="array" tabindex="-1">Array <a class="header-anchor" href="#array" aria-hidden="true">#</a></h2><p>\u5728 shell \u4E2D\u901A\u8FC7<strong>\u62EC\u53F7\u53CA\u7A7A\u683C\u5206\u9694\u7B26</strong>\u6765\u5B9A\u4E49\u6570\u7EC4\u3002</p><p>\u6570\u7EC4\u53EF\u901A\u8FC7\u4E0B\u6807\u8FDB\u884C\u8BBF\u95EE\uFF0C\u5982\u679C\u9700\u8981\u8BBF\u95EE\u5168\u90E8\u6570\u7EC4\uFF0C\u5219\u4F7F\u7528 <code>\${ARRAY[@]}</code> \u53D8\u91CF\u3002</p><p><strong>\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u4EE5\u4E0B\u547D\u4EE4\u5747\u5728</strong> <code>bash</code> <strong>\u4E0B\u6267\u884C\u3002</strong></p><blockquote><p>zsh \u4E2D\u53EF\u76F4\u63A5\u4F7F\u7528 <code>$var</code>\uFF0C\u5728 bash \u4E2D\u4F7F\u7528 <code>$var</code> \u4F1A\u62A5\u9519\uFF0C\u56E0\u6B64\u6700\u597D\u4F7F\u7528 <code>\${var}</code>\u3002</p></blockquote><blockquote><p>bash \u4E2D\u4E0B\u6807\u4EE5 0 \u5F00\u59CB\uFF0Czsh \u4E2D\u4E0B\u6807\u4EE5 1 \u5F00\u59CB\u3002</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ list=</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u5168\u90E8\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370index\u4E3A0\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\uFF1A\u5728 zsh \u4E2D\u4E3A\u6253\u5370\u6240\u6709\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">lists</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370index\u4E3A1\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6700\u540E\u4E00\u4E2A\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-1</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6570\u7EC4\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${#</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4ECEindex\u4E3A2\u7684\u53D8\u91CF\u5F00\u59CB\u6253\u5370\uFF0C\u6253\u5370\u4E09\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]:</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">c d e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\uFF1A\u5728 zsh \u4E2D\u53EF\u901A\u8FC7 [2,3] \u4F5C\u4E3A\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">2,3</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">$ list+=</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c e f g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\uFF1A\u5728 zsh \u4E2D\u901A\u8FC7\u8D4B\u503C\u7A7A\u6570\u7EC4\u8FDB\u884C\u5220\u9664\u67D0\u4E00\u9879</span></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\uFF1A\u5728 zsh \u4E2D\u901A\u8FC7\u8D4B\u503C\u7A7A\u6570\u7EC4\u8FDB\u884C\u5220\u9664\u67D0\u4E00\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">$ list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">$ list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=x</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">x b c e f g</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207301200182.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207301203728.png" alt=""></p><h2 id="associative-array" tabindex="-1">Associative Array <a class="header-anchor" href="#associative-array" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>declare -A</code> \u6216\u8005 <code>typeset -A</code> \u5B9A\u4E49\u5B57\u5178\uFF0C\u6216\u8005\u5728 shell \u53EB <code>Associative Array</code>\u3002</p><blockquote><p>\u5728 Javascript \u4E2D\uFF0C\u53EF\u7406\u89E3\u4E3A\u5BF9\u8C61\uFF0C\u5728 Python \u4E2D\uFF0C\u53EF\u7406\u89E3\u4E3A\u5B57\u5178\u3002</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5B9A\u4E49 object\uFF0C\u4E24\u79CD\u65B9\u5F0F\u90FD\u884C</span></span>
<span class="line"><span style="color:#676E95;"># typeset -A object</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -A object</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=3</span></span>
<span class="line"><span style="color:#A6ACCD;">$ object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=4</span></span>
<span class="line"><span style="color:#A6ACCD;">$ object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6240\u6709\u7684 values</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">3 4 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6240\u6709\u7684 keys</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${!</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c</span></span>
<span class="line"></span></code></pre></div><p>\u5728 <code>zsh</code> \u4E2D\uFF0C\u5173\u4E8E <code>Associative Array</code> \u503C\u7684\u8BFB\u53D6\u8BED\u6CD5\u7A0D\u5FAE\u4E0D\u4E00\u6837\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u6253\u5370\u6240\u6709\u7684 keys</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">(k)object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6240\u6709\u7684 values</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">(v)object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5370\u6240\u6709\u7684 keys/values</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">(kv)object</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207301214420.png" alt=""></p>`,17),e=[o];function c(t,r,D,A,y,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
