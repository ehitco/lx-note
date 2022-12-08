import{_ as s,o as a,c as n,a as l}from"./app.31720a63.js";const F=JSON.parse('{"title":"Canvas","description":"","frontmatter":{},"headers":[{"level":3,"title":"Canvas\u6807\u7B7E","slug":"canvas\u6807\u7B7E","link":"#canvas\u6807\u7B7E","children":[]},{"level":3,"title":"\u521B\u5EFA\u4E00\u4E2Acanvas","slug":"\u521B\u5EFA\u4E00\u4E2Acanvas","link":"#\u521B\u5EFA\u4E00\u4E2Acanvas","children":[]},{"level":3,"title":"\u7ED8\u5236\u56FE\u5F62","slug":"\u7ED8\u5236\u56FE\u5F62","link":"#\u7ED8\u5236\u56FE\u5F62","children":[]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/JavaScript/Canvas.md","lastUpdated":1670480666000}'),e={name:"\u524D\u7AEF\u57FA\u7840/JavaScript/Canvas.md"},o=l(`<h1 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-hidden="true">#</a></h1><p>Created: September 2, 2021 11:42 AM Tags: HTML, JavaScript</p><h3 id="canvas\u6807\u7B7E" tabindex="-1">Canvas\u6807\u7B7E <a class="header-anchor" href="#canvas\u6807\u7B7E" aria-hidden="true">#</a></h3><ul><li>\u6CA1\u6709 src \u548C alt \u5C5E\u6027\uFF0C\u53EA\u6709\u4E24\u4E2A\u5C5E\u6027\u2014\u2014 width\u548Cheight</li><li>&lt;/canvas&gt; \u6807\u7B7E\u4E0D\u80FD\u7701\u7565</li></ul><h3 id="\u521B\u5EFA\u4E00\u4E2Acanvas" tabindex="-1">\u521B\u5EFA\u4E00\u4E2Acanvas <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Acanvas" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u66F4\u65B0\uFF01</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//\u5728\u9875\u9762\u6E32\u67D3\u540E\u518D\u8FDB\u884C\u83B7\u53D6\uFF0C\u53EF\u4EE5\u5199\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0ConLoad\u65F6\u8C03\u7528</span></span>
<span class="line"><span style="color:#676E95;">//\u5B9A\u4F4D\u5F53\u524Dcanvas\u6807\u7B7E</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">//\u83B7\u53D6\u5F53\u524Dcanvas\u7684\u4E0A\u4E0B\u6587\u5185\u5BB9\uFF1A\u76F8\u5F53\u4E8E\u753B\u7B14</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7ED8\u5236\u56FE\u5F62" tabindex="-1">\u7ED8\u5236\u56FE\u5F62 <a class="header-anchor" href="#\u7ED8\u5236\u56FE\u5F62" aria-hidden="true">#</a></h3><ul><li>\u7ED8\u5236\u77E9\u5F62 <ol><li>**<code>[fillRect(x, y, width, height)](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect)</code>**\u7ED8\u5236\u4E00\u4E2A\u586B\u5145\u7684\u77E9\u5F62</li><li>**<code>[strokeRect(x, y, width, height)](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect)</code>**\u7ED8\u5236\u4E00\u4E2A\u77E9\u5F62\u7684\u8FB9\u6846</li><li>**<code>[clearRect(x, y, width, height)](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)</code>**\u6E05\u9664\u6307\u5B9A\u77E9\u5F62\u533A\u57DF\uFF0C\u8BA9\u6E05\u9664\u90E8\u5206\u5B8C\u5168\u900F\u660E</li></ol></li><li>\u7ED8\u5236\u8DEF\u5F84 <ol><li>**<code>beginPath()</code>**\u65B0\u5EFA\u4E00\u6761\u8DEF\u5F84\uFF0C\u751F\u6210\u4E4B\u540E\uFF0C\u56FE\u5F62\u7ED8\u5236\u547D\u4EE4\u88AB\u6307\u5411\u5230\u8DEF\u5F84\u4E0A\u751F\u6210\u8DEF\u5F84\u3002</li><li>**<code>closePath()</code>**\u95ED\u5408\u8DEF\u5F84\u4E4B\u540E\u56FE\u5F62\u7ED8\u5236\u547D\u4EE4\u53C8\u91CD\u65B0\u6307\u5411\u5230\u4E0A\u4E0B\u6587\u4E2D\u3002</li><li>**<code>stroke()</code>**\u901A\u8FC7\u7EBF\u6761\u6765\u7ED8\u5236\u56FE\u5F62\u8F6E\u5ED3\u3002</li><li>**<code>fill()</code>**\u901A\u8FC7\u586B\u5145\u8DEF\u5F84\u7684\u5185\u5BB9\u533A\u57DF\u751F\u6210\u5B9E\u5FC3\u7684\u56FE\u5F62\u3002</li></ol></li></ul>`,9),t=[o];function c(p,r,i,d,D,y){return a(),n("div",null,t)}const C=s(e,[["render",c]]);export{F as __pageData,C as default};
