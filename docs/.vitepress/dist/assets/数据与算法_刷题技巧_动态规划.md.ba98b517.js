import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const i=JSON.parse('{"title":"\u52A8\u6001\u89C4\u5212","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6590\u6CE2\u90A3\u5951\u6570\u5217","slug":"\u6590\u6CE2\u90A3\u5951\u6570\u5217","link":"#\u6590\u6CE2\u90A3\u5951\u6570\u5217","children":[]},{"level":2,"title":"\u51D1\u96F6\u94B1\u95EE\u9898","slug":"\u51D1\u96F6\u94B1\u95EE\u9898","link":"#\u51D1\u96F6\u94B1\u95EE\u9898","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5237\u9898\u6280\u5DE7/\u52A8\u6001\u89C4\u5212.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5237\u9898\u6280\u5DE7/\u52A8\u6001\u89C4\u5212.md"},o=l(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>\u6C42\u89E3\u52A8\u6001\u89C4\u5212\u7684\u6838\u5FC3\u95EE\u9898\u662F\u7A77\u4E3E</strong>\u3002</p><p>\u9996\u5148\uFF0C\u52A8\u6001\u89C4\u5212\u7684\u7A77\u4E3E\u6709\u70B9\u7279\u522B\uFF0C\u56E0\u4E3A\u8FD9\u7C7B\u95EE\u9898<strong>\u5B58\u5728\u300C\u91CD\u53E0\u5B50\u95EE\u9898\u300D</strong>\uFF0C\u5982\u679C\u66B4\u529B\u7A77\u4E3E\u7684\u8BDD\u6548\u7387\u4F1A\u6781\u5176\u4F4E\u4E0B\uFF0C\u6240\u4EE5\u9700\u8981<strong>\u6C42\u89E3\u52A8\u6001\u89C4\u5212\u7684\u6838\u5FC3\u95EE\u9898\u662F\u7A77\u4E3E</strong>\u3002\u6765\u4F18\u5316\u7A77\u4E3E\u8FC7\u7A0B\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u3002</p><p>\u800C\u4E14\uFF0C\u52A8\u6001\u89C4\u5212\u95EE\u9898\u4E00\u5B9A\u4F1A<strong>\u5177\u5907\u300C\u6700\u4F18\u5B50\u7ED3\u6784\u300D</strong>\uFF0C\u624D\u80FD\u901A\u8FC7\u5B50\u95EE\u9898\u7684\u6700\u503C\u5F97\u5230\u539F\u95EE\u9898\u7684\u6700\u503C\u3002</p><p>\u53E6\u5916\uFF0C\u867D\u7136\u52A8\u6001\u89C4\u5212\u7684\u6838\u5FC3\u601D\u60F3\u5C31\u662F\u7A77\u4E3E\u6C42\u6700\u503C\uFF0C\u4F46\u662F\u95EE\u9898\u53EF\u4EE5\u5343\u53D8\u4E07\u5316\uFF0C\u7A77\u4E3E\u6240\u6709\u53EF\u884C\u89E3\u5176\u5B9E\u5E76\u4E0D\u662F\u4E00\u4EF6\u5BB9\u6613\u7684\u4E8B\uFF0C\u53EA\u6709\u5217\u51FA<strong>\u6B63\u786E\u7684\u300C\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u300D</strong>\uFF0C\u624D\u80FD\u6B63\u786E\u5730\u7A77\u4E3E\u3002</p><p>\u4EE5\u4E0A\u63D0\u5230\u7684\u91CD\u53E0\u5B50\u95EE\u9898\u3001\u6700\u4F18\u5B50\u7ED3\u6784\u3001\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u5C31\u662F\u52A8\u6001\u89C4\u5212\u4E09\u8981\u7D20\u3002\u5728\u5B9E\u9645\u7684\u7B97\u6CD5\u95EE\u9898\u4E2D\uFF0C<strong>\u5199\u51FA\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u662F\u6700\u56F0\u96BE\u7684</strong>\uFF0C\u601D\u8003\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\uFF1A</p><p><strong>\u660E\u786E base case -&gt; \u660E\u786E\u300C\u72B6\u6001\u300D-&gt; \u660E\u786E\u300C\u9009\u62E9\u300D -&gt; \u5B9A\u4E49 dp \u6570\u7EC4/\u51FD\u6570\u7684\u542B\u4E49</strong>\u3002</p><p>\u6309\u4E0A\u9762\u7684\u5957\u8DEF\u8D70\uFF0C\u6700\u540E\u7684\u7ED3\u679C\u5C31\u53EF\u4EE5\u5957\u8FD9\u4E2A\u6846\u67B6\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># \u521D\u59CB\u5316 base </span><span style="color:#89DDFF;">case</span></span>
<span class="line"><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][...]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> base</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8FDB\u884C\u72B6\u6001\u8F6C\u79FB</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> \u72B6\u60011 in \u72B6\u60011\u7684\u6240\u6709\u53D6\u503C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> \u72B6\u60012 in \u72B6\u60012\u7684\u6240\u6709\u53D6\u503C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">            dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u72B6\u60011</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">\u72B6\u60012</span><span style="color:#89DDFF;">][...]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> \u6C42\u6700\u503C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u62E91\uFF0C\u9009\u62E92</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1">\u6590\u6CE2\u90A3\u5951\u6570\u5217 <a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a></h2><ul><li>\u66B4\u529B\u9012\u5F52</li><li>\u5E26\u5907\u5FD8\u5F55\u7684\u9012\u5F52 <ul><li>\u4FDD\u5B58\u6BCF\u6B21\u8BA1\u7B97\u7684\u7ED3\u679C\uFF0C\u53D6\u503C\u524D\u5148\u627E\u4E4B\u524D\u7684\u8BA1\u7B97\u7ED3\u679C</li></ul></li><li>dp\u6570\u7EC4\u7684\u8FED\u4EE3 <ul><li>\u7528dp\u6570\u7EC4\u5B58\u50A8\u8BA1\u7B97\u7684\u503C\uFF0C\u5FAA\u73AF\u5230\u76EE\u6807\u503C\u505C\u6B62</li></ul></li><li>dp\u6570\u7EC4\u7684\u72B6\u6001\u538B\u7F29 <ul><li>\u7528\u72B6\u6001\u538B\u7F29\u6765\u7F29\u5C0F DP table \u7684\u5927\u5C0F\uFF0C\u53EA\u8BB0\u5F55\u5FC5\u8981\u7684\u6570\u636E</li></ul></li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> prev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> curr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> prev </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> curr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        prev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> curr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        curr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> curr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51D1\u96F6\u94B1\u95EE\u9898" tabindex="-1">\u51D1\u96F6\u94B1\u95EE\u9898 <a class="header-anchor" href="#\u51D1\u96F6\u94B1\u95EE\u9898" aria-hidden="true">#</a></h2><p><strong><code>dp</code> \u6570\u7EC4\u7684\u5B9A\u4E49\uFF1A\u5F53\u76EE\u6807\u91D1\u989D\u4E3A <code>i</code> \u65F6\uFF0C\u81F3\u5C11\u9700\u8981 <code>dp[i]</code> \u679A\u786C\u5E01\u51D1\u51FA</strong>\u3002</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">coinChange</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">coins</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// dp\u6570\u7EC4\u8BB0\u5F55\u67D0\u91D1\u989D\u9700\u8981\u7684\u6700\u5C11\u786C\u5E01\u6570\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> dp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        Arrays</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        dp</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u904D\u5386\u6240\u6709\u5B50\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5BF9\u6BCF\u79CD\u72B6\u6001\u90FD\u8FDB\u884C\u786C\u5E01\u7684\u904D\u5386\uFF0C\u5BFB\u6C42\u6700\u4F73\u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> coin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">coins</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u5982\u679C\u786C\u5E01\u7684\u503C\u6BD4\u72B6\u6001\u503C\u8FD8\u5927\u7684\u8BDD\uFF0C\u65E0\u6CD5\u6EE1\u8DB3\uFF0C\u8DF3\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">coin</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">coin</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5982\u679C\u6700\u540E\u7ED3\u679C\u7684\u503C\u8FD8\u662F\u7B49\u4E8E\u521D\u59CB\u503C\uFF0C\u90A3\u4E48\u8BF4\u660E\u65E0\u89E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> amount</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>PS\uFF1A\u4E3A\u5565 <code>dp</code> \u6570\u7EC4\u521D\u59CB\u5316\u4E3A <code>amount + 1</code> \u5462\uFF0C\u56E0\u4E3A\u51D1\u6210 <code>amount</code> \u91D1\u989D\u7684\u786C\u5E01\u6570\u6700\u591A\u53EA\u53EF\u80FD\u7B49\u4E8E <code>amount</code>\uFF08\u5168\u7528 1 \u5143\u9762\u503C\u7684\u786C\u5E01\uFF09\uFF0C\u6240\u4EE5\u521D\u59CB\u5316\u4E3A <code>amount + 1</code> \u5C31\u76F8\u5F53\u4E8E\u521D\u59CB\u5316\u4E3A\u6B63\u65E0\u7A77\uFF0C\u4FBF\u4E8E\u540E\u7EED\u53D6\u6700\u5C0F\u503C\u3002\u4E3A\u5565\u4E0D\u76F4\u63A5\u521D\u59CB\u5316\u4E3A int \u578B\u7684\u6700\u5927\u503C <code>Integer.MAX_VALUE</code> \u5462\uFF1F\u56E0\u4E3A\u540E\u9762\u6709 <code>dp[i - coin] + 1</code>\uFF0C\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u6574\u578B\u6EA2\u51FA\u3002</p></blockquote><blockquote><p>\u6587\u7AE0\uFF1A<a href="https://labuladong.gitee.io/algo/3/23/69/" target="_blank" rel="noreferrer">https://labuladong.gitee.io/algo/3/23/69/</a></p></blockquote>`,17),e=[o];function c(t,r,D,C,y,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
