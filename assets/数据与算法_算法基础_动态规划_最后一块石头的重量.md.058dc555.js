import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1049. \u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF II","slug":"_1049-\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF-ii","link":"#_1049-\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF-ii","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u52A8\u6001\u89C4\u5212/\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF.md","lastUpdated":1670483514000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u52A8\u6001\u89C4\u5212/\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF.md"},o=l(`<h2 id="_1049-\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF-ii" tabindex="-1">1049. \u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF II <a class="header-anchor" href="#_1049-\u6700\u540E\u4E00\u5757\u77F3\u5934\u7684\u91CD\u91CF-ii" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/last-stone-weight-ii/" target="_blank" rel="noreferrer">\u529B\u6263\u9898\u76EE\u94FE\u63A5(opens new window)</a></p><p>\u9898\u76EE\u96BE\u5EA6\uFF1A\u4E2D\u7B49</p><p>\u6709\u4E00\u5806\u77F3\u5934\uFF0C\u6BCF\u5757\u77F3\u5934\u7684\u91CD\u91CF\u90FD\u662F\u6B63\u6574\u6570\u3002</p><p>\u6BCF\u4E00\u56DE\u5408\uFF0C\u4ECE\u4E2D\u9009\u51FA\u4EFB\u610F\u4E24\u5757\u77F3\u5934\uFF0C\u7136\u540E\u5C06\u5B83\u4EEC\u4E00\u8D77\u7C89\u788E\u3002\u5047\u8BBE\u77F3\u5934\u7684\u91CD\u91CF\u5206\u522B\u4E3A\xA0x \u548C\xA0y\uFF0C\u4E14\xA0x &lt;= y\u3002\u90A3\u4E48\u7C89\u788E\u7684\u53EF\u80FD\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p>\u5982\u679C\xA0x == y\uFF0C\u90A3\u4E48\u4E24\u5757\u77F3\u5934\u90FD\u4F1A\u88AB\u5B8C\u5168\u7C89\u788E\uFF1B \u5982\u679C\xA0x != y\uFF0C\u90A3\u4E48\u91CD\u91CF\u4E3A\xA0x\xA0\u7684\u77F3\u5934\u5C06\u4F1A\u5B8C\u5168\u7C89\u788E\uFF0C\u800C\u91CD\u91CF\u4E3A\xA0y\xA0\u7684\u77F3\u5934\u65B0\u91CD\u91CF\u4E3A\xA0y-x\u3002 \u6700\u540E\uFF0C\u6700\u591A\u53EA\u4F1A\u5269\u4E0B\u4E00\u5757\u77F3\u5934\u3002\u8FD4\u56DE\u6B64\u77F3\u5934\u6700\u5C0F\u7684\u53EF\u80FD\u91CD\u91CF\u3002\u5982\u679C\u6CA1\u6709\u77F3\u5934\u5269\u4E0B\uFF0C\u5C31\u8FD4\u56DE 0\u3002</p><p>\u793A\u4F8B\uFF1A \u8F93\u5165\uFF1A[2,7,4,1,8,1] \u8F93\u51FA\uFF1A1 \u89E3\u91CA\uFF1A \u7EC4\u5408 2 \u548C 4\uFF0C\u5F97\u5230 2\uFF0C\u6240\u4EE5\u6570\u7EC4\u8F6C\u5316\u4E3A [2,7,1,8,1]\uFF0C \u7EC4\u5408 7 \u548C 8\uFF0C\u5F97\u5230 1\uFF0C\u6240\u4EE5\u6570\u7EC4\u8F6C\u5316\u4E3A [2,1,1,1]\uFF0C \u7EC4\u5408 2 \u548C 1\uFF0C\u5F97\u5230 1\uFF0C\u6240\u4EE5\u6570\u7EC4\u8F6C\u5316\u4E3A [1,1,1]\uFF0C \u7EC4\u5408 1 \u548C 1\uFF0C\u5F97\u5230 0\uFF0C\u6240\u4EE5\u6570\u7EC4\u8F6C\u5316\u4E3A [1]\uFF0C\u8FD9\u5C31\u662F\u6700\u4F18\u503C\u3002</p><p>\u63D0\u793A\uFF1A</p><ul><li>1 &lt;= stones.length &lt;= 30</li><li>1 &lt;= stones[i] &lt;= 1000</li></ul><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> lastStoneWeightII </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stones</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8981\u4F7F\u76F8\u649E\u540E\u7684\u91CD\u91CF\u6700\u5C0F\uFF0C\u90A3\u4E48\u5C31\u8981\u628A\u8FD9\u5806\u77F3\u5934\u5206\u6210\u5C3D\u53EF\u80FD\u76F8\u7B49\u7684\u4E24\u7EC4\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u518D\u628A\u4E24\u5806\u76F8\u51CF\u5C31\u53EF\u4EE5\u5F97\u5230\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stones</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stones</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stones</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stones</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stones</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// sum - dp[target]\u662F\u53E6\u5916\u4E00\u5806\uFF0C\u662F\u504F\u5927\u7684</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(r,c,y,F,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
