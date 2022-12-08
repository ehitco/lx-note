import{_ as s,o as a,c as n,a as l}from"./app.31720a63.js";const _=JSON.parse('{"title":"65. \u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"AC\u9898\u89E3","slug":"ac\u9898\u89E3","link":"#ac\u9898\u89E3","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5251\u6307offer\u7CFB\u5217/65.\u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5251\u6307offer\u7CFB\u5217/65.\u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5.md"},o=l(`<h1 id="_65-\u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5" tabindex="-1"><a href="https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/" target="_blank" rel="noreferrer">65. \u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5</a> <a class="header-anchor" href="#_65-\u4E0D\u7528\u52A0\u51CF\u4E58\u9664\u505A\u52A0\u6CD5" aria-hidden="true">#</a></h1><p>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u6C42\u4E24\u4E2A\u6574\u6570\u4E4B\u548C\uFF0C\u8981\u6C42\u5728\u51FD\u6570\u4F53\u5185\u4E0D\u5F97\u4F7F\u7528 \u201C+\u201D\u3001\u201C-\u201D\u3001\u201C*\u201D\u3001\u201C/\u201D \u56DB\u5219\u8FD0\u7B97\u7B26\u53F7\u3002</p><h2 id="ac\u9898\u89E3" tabindex="-1">AC\u9898\u89E3 <a class="header-anchor" href="#ac\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u628Ab\u8BA4\u4E3A\u662F\u8FDB\u4F4D\uFF0C\u5F53b\u4E3A0\u65F6\uFF0C\u6CA1\u6709\u8FDB\u4F4D\u4E86\uFF0C\u5C31\u7ED3\u675F\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8BA4\u4E3A\u662F\u65E0\u8FDB\u4F4D\u7684\u6C42\u548C\uFF0C\u7528\u5341\u8FDB\u5236\u7684\u5F62\u5F0F\u5C31\u662F\uFF1A9+1\u5F97\u52300\uFF0C\u800C\u4E0D\u662F10</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">^</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6C42\u9700\u8981\u8FDB\u4F4D\u7684\u6570\u503C,\u5728\u4E0B\u4E00\u6B21\u5FAA\u73AF\u4E2D\u53C2\u4E0E\u8BA1\u7B97\uFF0C\u7528\u5341\u8FDB\u5236\u5F62\u5F0F\u5C31\u662F\uFF1A9+1\u5F97\u52301\uFF0C\u7136\u540E\u9700\u8981\u5DE6\u79FB\u4E00\u4F4D\uFF0C\u624D\u662F\u771F\u5B9E\u589E\u52A0\u7684\u6570\u503C\u3002</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u66F4\u65B0\u503C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function c(t,r,y,F,D,i){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{_ as __pageData,A as default};
