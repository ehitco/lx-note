import{_ as s,o as a,c as n,a as l}from"./app.31720a63.js";const C=JSON.parse('{"title":"\u56FE\u8BBA\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0","slug":"\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0","link":"#\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0","children":[]},{"level":3,"title":"\u56FE\u7684\u904D\u5386","slug":"\u56FE\u7684\u904D\u5386","link":"#\u56FE\u7684\u904D\u5386","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5237\u9898\u6280\u5DE7/\u56FE\u8BBA\u57FA\u7840.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5237\u9898\u6280\u5DE7/\u56FE\u8BBA\u57FA\u7840.md"},o=l(`<h1 id="\u56FE\u8BBA\u57FA\u7840" tabindex="-1">\u56FE\u8BBA\u57FA\u7840 <a class="header-anchor" href="#\u56FE\u8BBA\u57FA\u7840" aria-hidden="true">#</a></h1><h3 id="\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0" tabindex="-1">\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0 <a class="header-anchor" href="#\u56FE\u7684\u903B\u8F91\u7ED3\u6784\u548C\u5177\u4F53\u5B9E\u73B0" aria-hidden="true">#</a></h3><h4 id="\u6709\u5411\u65E0\u6743\u56FE" tabindex="-1">\u6709\u5411\u65E0\u6743\u56FE <a class="header-anchor" href="#\u6709\u5411\u65E0\u6743\u56FE" aria-hidden="true">#</a></h4><p>\u4E00\u5E45\u56FE\u662F\u7531<strong>\u8282\u70B9</strong>\u548C<strong>\u8FB9</strong>\u6784\u6210\u7684</p><ul><li>\u6839\u636E\u903B\u8F91\u7ED3\u6784\uFF0C\u53EF\u4EE5\u5C06\u56FE\u7684\u7ED3\u70B9\u5B9A\u4E49\u4E3A\uFF1A</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* \u56FE\u8282\u70B9\u7684\u903B\u8F91\u7ED3\u6784 */</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vertex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Vertex</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> neighbors</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E0A\u9762\u7684\u8FD9\u79CD\u5B9E\u73B0\u662F\u300C\u903B\u8F91\u4E0A\u7684\u300D\uFF0C\u5B9E\u9645\u4E0A\u6211\u4EEC\u5F88\u5C11\u7528\u8FD9\u4E2A <code>Vertex</code> \u7C7B\u5B9E\u73B0\u56FE\uFF0C\u800C\u662F\u7528\u5E38\u8BF4\u7684<strong>\u90BB\u63A5\u8868\u548C\u90BB\u63A5\u77E9\u9635</strong>\u6765\u5B9E\u73B0\u3002</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u90BB\u63A5\u8868</span></span>
<span class="line"><span style="color:#676E95;">// graph[x] \u5B58\u50A8 x \u7684\u6240\u6709\u90BB\u5C45\u8282\u70B9</span></span>
<span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;[]</span><span style="color:#A6ACCD;"> graph</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u90BB\u63A5\u77E9\u9635</span></span>
<span class="line"><span style="color:#676E95;">// matrix[x][y] \u8BB0\u5F55 x \u662F\u5426\u6709\u4E00\u6761\u6307\u5411 y \u7684\u8FB9</span></span>
<span class="line"><span style="color:#C792EA;">boolean</span><span style="color:#89DDFF;">[][]</span><span style="color:#A6ACCD;"> matrix</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u90BB\u63A5\u8868\uFF0C\u597D\u5904\u662F\u5360\u7528\u7684\u7A7A\u95F4\u5C11\uFF0C\u5F53\u65E0\u6CD5\u5FEB\u901F\u5224\u65AD\u4E24\u4E2A\u7ED3\u70B9\u662F\u5426\u76F8\u90BB\u3002</p><p>\u90BB\u63A5\u77E9\u9635\u53EF\u4EE5\u76F4\u63A5\u5224\u65AD\uFF0C\u6548\u7387\u9AD8\u3002</p></blockquote><p>\u56FE\u8BBA\u4E2D\u7279\u6709\u7684<strong>\u5EA6</strong>\uFF08degree\uFF09\u7684\u6982\u5FF5\uFF0C\u5728\u65E0\u5411\u56FE\u4E2D\uFF0C\u300C\u5EA6\u300D\u5C31\u662F\u6BCF\u4E2A\u8282\u70B9\u76F8\u8FDE\u7684\u8FB9\u7684\u6761\u6570\u3002\u7531\u4E8E\u6709\u5411\u56FE\u7684\u8FB9\u6709\u65B9\u5411\uFF0C\u6240\u4EE5\u6709\u5411\u56FE\u4E2D\u6BCF\u4E2A\u8282\u70B9\u300C\u5EA6\u300D\u88AB\u7EC6\u5206\u4E3A<strong>\u5165\u5EA6</strong>\uFF08indegree\uFF09\u548C<strong>\u51FA\u5EA6</strong>\uFF08outdegree\uFF09</p><h4 id="\u52A0\u6743\u6709\u5411\u56FE" tabindex="-1">\u52A0\u6743\u6709\u5411\u56FE <a class="header-anchor" href="#\u52A0\u6743\u6709\u5411\u56FE" aria-hidden="true">#</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u90BB\u63A5\u8868</span></span>
<span class="line"><span style="color:#676E95;">// graph[x] \u5B58\u50A8 x \u7684\u6240\u6709\u90BB\u5C45\u8282\u70B9\u4EE5\u53CA\u5BF9\u5E94\u7684\u6743\u91CD</span></span>
<span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]&gt;[]</span><span style="color:#A6ACCD;"> graph</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u90BB\u63A5\u77E9\u9635</span></span>
<span class="line"><span style="color:#676E95;">// matrix[x][y] \u8BB0\u5F55 x \u6307\u5411 y \u7684\u8FB9\u7684\u6743\u91CD\uFF0C0 \u8868\u793A\u4E0D\u76F8\u90BB</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[][]</span><span style="color:#A6ACCD;"> matrix</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="\u65E0\u5411\u56FE" tabindex="-1">\u65E0\u5411\u56FE <a class="header-anchor" href="#\u65E0\u5411\u56FE" aria-hidden="true">#</a></h4><p>\u4E5F\u5F88\u7B80\u5355\uFF0C\u6240\u8C13\u7684\u300C\u65E0\u5411\u300D\uFF0C\u662F\u4E0D\u662F\u7B49\u540C\u4E8E\u300C\u53CC\u5411\u300D\uFF1F\u5982\u679C\u8FDE\u63A5\u65E0\u5411\u56FE\u4E2D\u7684\u8282\u70B9 <code>x</code> \u548C <code>y</code>\uFF0C\u628A <code>matrix[x][y]</code> \u548C <code>matrix[y][x]</code> \u90FD\u53D8\u6210 <code>true</code> \u4E0D\u5C31\u884C\u4E86\uFF1B\u90BB\u63A5\u8868\u4E5F\u662F\u7C7B\u4F3C\u7684\u64CD\u4F5C\uFF0C\u5728 <code>x</code> \u7684\u90BB\u5C45\u5217\u8868\u91CC\u6DFB\u52A0 <code>y</code>\uFF0C\u540C\u65F6\u5728 <code>y</code> \u7684\u90BB\u5C45\u5217\u8868\u91CC\u6DFB\u52A0 <code>x</code>\u3002</p><h3 id="\u56FE\u7684\u904D\u5386" tabindex="-1">\u56FE\u7684\u904D\u5386 <a class="header-anchor" href="#\u56FE\u7684\u904D\u5386" aria-hidden="true">#</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u8BB0\u5F55\u88AB\u904D\u5386\u8FC7\u7684\u8282\u70B9</span></span>
<span class="line"><span style="color:#C792EA;">boolean</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> visited</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u8BB0\u5F55\u4ECE\u8D77\u70B9\u5230\u5F53\u524D\u8282\u70B9\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#C792EA;">boolean</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> onPath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u56FE\u904D\u5386\u6846\u67B6 */</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">traverse</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Graph</span><span style="color:#A6ACCD;"> graph</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u7ECF\u8FC7\u8282\u70B9 s\uFF0C\u6807\u8BB0\u4E3A\u5DF2\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">    visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u505A\u9009\u62E9\uFF1A\u6807\u8BB0\u8282\u70B9 s \u5728\u8DEF\u5F84\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    onPath</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> neighbor </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> graph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">neighbors</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">traverse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> neighbor</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u64A4\u9500\u9009\u62E9\uFF1A\u8282\u70B9 s \u79BB\u5F00\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    onPath</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u56FE\u4E0D\u5305\u542B\u73AF\uFF0C\u5219\u53C2\u8003\u591A\u53C9\u6811\u7684\u904D\u5386\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* \u591A\u53C9\u6811\u904D\u5386\u6846\u67B6 */</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">traverse</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> child </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">traverse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">child</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,18),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
