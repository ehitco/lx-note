import{_ as s,o as n,c as a,a as p}from"./app.31720a63.js";const i=JSON.parse('{"title":"\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u4E0E\u601D\u8DEF","slug":"\u4EE3\u7801\u4E0E\u601D\u8DEF","link":"#\u4EE3\u7801\u4E0E\u601D\u8DEF","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u52A8\u6001\u89C4\u5212/\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF.md","lastUpdated":1670480666000}'),l={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u52A8\u6001\u89C4\u5212/\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF.md"},o=p(`<h1 id="\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF" tabindex="-1">\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF <a class="header-anchor" href="#\u6700\u5C0F\u6D88\u8D39\u722C\u697C\u68AF" aria-hidden="true">#</a></h1><p><a href="https://leetcode.cn/problems/min-cost-climbing-stairs/" target="_blank" rel="noreferrer">\u529B\u6263\u9898\u76EE\u94FE\u63A5(opens new window)</a></p><p>\u6570\u7EC4\u7684\u6BCF\u4E2A\u4E0B\u6807\u4F5C\u4E3A\u4E00\u4E2A\u9636\u68AF\uFF0C\u7B2C i \u4E2A\u9636\u68AF\u5BF9\u5E94\u7740\u4E00\u4E2A\u975E\u8D1F\u6570\u7684\u4F53\u529B\u82B1\u8D39\u503C\xA0cost[i]\uFF08\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\uFF09\u3002</p><p>\u6BCF\u5F53\u4F60\u722C\u4E0A\u4E00\u4E2A\u9636\u68AF\u4F60\u90FD\u8981\u82B1\u8D39\u5BF9\u5E94\u7684\u4F53\u529B\u503C\uFF0C\u4E00\u65E6\u652F\u4ED8\u4E86\u76F8\u5E94\u7684\u4F53\u529B\u503C\uFF0C\u4F60\u5C31\u53EF\u4EE5\u9009\u62E9\u5411\u4E0A\u722C\u4E00\u4E2A\u9636\u68AF\u6216\u8005\u722C\u4E24\u4E2A\u9636\u68AF\u3002</p><p>\u8BF7\u4F60\u627E\u51FA\u8FBE\u5230\u697C\u5C42\u9876\u90E8\u7684\u6700\u4F4E\u82B1\u8D39\u3002\u5728\u5F00\u59CB\u65F6\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4ECE\u4E0B\u6807\u4E3A 0 \u6216 1 \u7684\u5143\u7D20\u4F5C\u4E3A\u521D\u59CB\u9636\u68AF\u3002</p><p>\u793A\u4F8B\xA01\uFF1A</p><p>\u8F93\u5165\uFF1Acost = [10, 15, 20] \u8F93\u51FA\uFF1A15 \u89E3\u91CA\uFF1A\u6700\u4F4E\u82B1\u8D39\u662F\u4ECE cost[1] \u5F00\u59CB\uFF0C\u7136\u540E\u8D70\u4E24\u6B65\u5373\u53EF\u5230\u9636\u68AF\u9876\uFF0C\u4E00\u5171\u82B1\u8D39 15 \u3002 \xA0\u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1Acost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] \u8F93\u51FA\uFF1A6 \u89E3\u91CA\uFF1A\u6700\u4F4E\u82B1\u8D39\u65B9\u5F0F\u662F\u4ECE cost[0] \u5F00\u59CB\uFF0C\u9010\u4E2A\u7ECF\u8FC7\u90A3\u4E9B 1 \uFF0C\u8DF3\u8FC7 cost[3] \uFF0C\u4E00\u5171\u82B1\u8D39 6 \u3002</p><p>\u63D0\u793A\uFF1A</p><ul><li>cost \u7684\u957F\u5EA6\u8303\u56F4\u662F [2, 1000]\u3002</li><li>cost[i] \u5C06\u4F1A\u662F\u4E00\u4E2A\u6574\u578B\u6570\u636E\uFF0C\u8303\u56F4\u4E3A [0, 999] \u3002</li></ul><h2 id="\u4EE3\u7801\u4E0E\u601D\u8DEF" tabindex="-1">\u4EE3\u7801\u4E0E\u601D\u8DEF <a class="header-anchor" href="#\u4EE3\u7801\u4E0E\u601D\u8DEF" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">cost</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> minCostClimbingStairs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u722C\u4E0A\u7B2Cn\u9636\u7684\u6700\u4F4E\u6D88\u8D39</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u7B2C\u4E00\u6B65\u53EF\u4EE5\u4ECE0\u9636\u5F00\u59CB\uFF0C\u4E5F\u53EF\u4EE5\u4ECE1\u9636\u5F00\u59CB\uFF0C\u7B2C\u4E00\u6B65\u4E0D\u7528\u6D88\u8D39</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4ECE\u7B2C\u4E8C\u9636\u5F00\u59CB\uFF0C\u9700\u8981\u6D88\u8D39\u4E0A\u6765\u4E4B\u524D\u6240\u5728\u4F4D\u7F6E\u7684cost\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cost</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cost</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function t(c,r,F,y,D,C){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
