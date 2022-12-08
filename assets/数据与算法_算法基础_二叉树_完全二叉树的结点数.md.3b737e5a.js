import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u4E8C\u53C9\u6811/\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u7ED3\u70B9\u6570.md","lastUpdated":1670483514000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u4E8C\u53C9\u6811/\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u7ED3\u70B9\u6570.md"},o=l(`<h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u7ED9\u4F60\u4E00\u68F5 \u5B8C\u5168\u4E8C\u53C9\u6811 \u7684\u6839\u8282\u70B9 root \uFF0C\u6C42\u51FA\u8BE5\u6811\u7684\u8282\u70B9\u4E2A\u6570\u3002</p><p>\u5B8C\u5168\u4E8C\u53C9\u6811 \u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A\u5728\u5B8C\u5168\u4E8C\u53C9\u6811\u4E2D\uFF0C\u9664\u4E86\u6700\u5E95\u5C42\u8282\u70B9\u53EF\u80FD\u6CA1\u586B\u6EE1\u5916\uFF0C\u5176\u4F59\u6BCF\u5C42\u8282\u70B9\u6570\u90FD\u8FBE\u5230\u6700\u5927\u503C\uFF0C\u5E76\u4E14\u6700\u4E0B\u9762\u4E00\u5C42\u7684\u8282\u70B9\u90FD\u96C6\u4E2D\u5728\u8BE5\u5C42\u6700\u5DE6\u8FB9\u7684\u82E5\u5E72\u4F4D\u7F6E\u3002\u82E5\u6700\u5E95\u5C42\u4E3A\u7B2C h \u5C42\uFF0C\u5219\u8BE5\u5C42\u5305\u542B 1~\xA02h\xA0\u4E2A\u8282\u70B9\u3002</p><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> countNodes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">leftHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rightHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u627E\u5230\u6700\u5DE6\u5206\u652F\u7684\u6DF1\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">leftHeight</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u627E\u5230\u6700\u53F3\u5206\u652F\u7684\u6DF1\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">rightHeight</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u76F8\u7B49\u8BF4\u660E\u662F\u6EE1\u4E8C\u53C9\u6811\uFF0C\u7528\u516C\u5F0F\u8BA1\u7B97\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">leftHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rightHeight</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">leftHeight</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4E0D\u662F\u6EE1\u4E8C\u53C9\u6811\uFF0C\u9012\u5F52\u8BA1\u7B97\u5DE6\u53F3\u5B50\u6811\u7684\u6570\u91CF + 1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">countNodes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">countNodes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,F,y,D,C){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};
