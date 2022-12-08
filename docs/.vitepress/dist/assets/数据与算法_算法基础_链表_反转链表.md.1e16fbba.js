import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const i=JSON.parse('{"title":"\u53CD\u8F6C\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u94FE\u8868/\u53CD\u8F6C\u94FE\u8868.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u94FE\u8868/\u53CD\u8F6C\u94FE\u8868.md"},o=l(`<h1 id="\u53CD\u8F6C\u94FE\u8868" tabindex="-1">\u53CD\u8F6C\u94FE\u8868 <a class="header-anchor" href="#\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a></h1><p><a href="https://leetcode-cn.com/problems/reverse-linked-list/" target="_blank" rel="noreferrer">\u529B\u6263\u9898\u76EE\u94FE\u63A5(opens new window)</a></p><p>\u9898\u610F\uFF1A\u53CD\u8F6C\u4E00\u4E2A\u5355\u94FE\u8868\u3002</p><p>\u793A\u4F8B: \u8F93\u5165: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL \u8F93\u51FA: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</p><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u9012\u5F52\u6CD5\u3001\u53CC\u6307\u9488\u6CD5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u53CC\u6307\u9488</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> reverseList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fast</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// fast\u8D8A\u754C\u65F6\u505C\u6B62\uFF0C\u6B64\u65F6slow\u521A\u597D\u5C31\u5728\u6700\u540E\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u4E5F\u662F\u65B0\u7684\u5934\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fast</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5148\u4FDD\u5B58\u4E0B\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tmp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5F53\u524D\u7ED3\u70B9\u6307\u5411\u524D\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u5B9E\u73B0\u53CD\u8F6C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5FEB\u6162\u6307\u9488\u524D\u8FDB\u4E00\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">slow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fast</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">fast</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tmp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u9012\u5F52</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> reverseList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4F5C\u4E3A\u5934\u8282\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u53CD\u8F6C\u540E\u7684\u5934\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reverseList</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5F53\u524D\u7ED3\u70B9\u5C06\u4F1A\u53D8\u6210\u53CD\u8F6C\u540E\u6700\u540E\u4E00\u4E2A\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4F5C\u4E3A\u6700\u540E\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u628Anext\u53D8\u4E3Anull</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8FD4\u56DE\u65B0\u7684\u5934\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,F,y,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
