import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS\u53D1\u5C55","slug":"css\u53D1\u5C55","link":"#css\u53D1\u5C55","children":[{"level":3,"title":"\u624B\u5199\u539F\u751FCSS","slug":"\u624B\u5199\u539F\u751Fcss","link":"#\u624B\u5199\u539F\u751Fcss","children":[]},{"level":3,"title":"\u4F7F\u7528\u9884\u5904\u7406\u5668 Sass/Less","slug":"\u4F7F\u7528\u9884\u5904\u7406\u5668-sass-less","link":"#\u4F7F\u7528\u9884\u5904\u7406\u5668-sass-less","children":[]},{"level":3,"title":"\u540E\u5904\u7406\u5668 PostCSS","slug":"\u540E\u5904\u7406\u5668-postcss","link":"#\u540E\u5904\u7406\u5668-postcss","children":[]},{"level":3,"title":"CSS\u6A21\u5757\u5316","slug":"css\u6A21\u5757\u5316","link":"#css\u6A21\u5757\u5316","children":[]},{"level":3,"title":"CSS in JS","slug":"css-in-js","link":"#css-in-js","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/CSS/CSS\u6A21\u5757\u5316.md","lastUpdated":1670483514000}'),p={name:"\u524D\u7AEF\u57FA\u7840/CSS/CSS\u6A21\u5757\u5316.md"},o=l(`<h2 id="css\u53D1\u5C55" tabindex="-1">CSS\u53D1\u5C55 <a class="header-anchor" href="#css\u53D1\u5C55" aria-hidden="true">#</a></h2><ul><li>\u624B\u5199\u539F\u751FCSS</li><li>\u4F7F\u7528\u9884\u5904\u7406\u5668 Sass/Less</li><li>\u4F7F\u7528\u540E\u5904\u7406\u5668 PostCSS</li><li>\u4F7F\u7528 css modules</li><li>\u4F7F\u7528 css in js</li></ul><h3 id="\u624B\u5199\u539F\u751Fcss" tabindex="-1">\u624B\u5199\u539F\u751FCSS <a class="header-anchor" href="#\u624B\u5199\u539F\u751Fcss" aria-hidden="true">#</a></h3><p>\u4EE5\u7F16\u5199<strong>\u5185\u5D4C\u6837\u5F0F</strong>\u548C<strong>\u5916\u90E8\u6837\u5F0F</strong>\u4E3A\u4E3B\u8981\u3002</p><p>\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u884C\u5185\u5143\u7D20\uFF1F</p><ul><li>\u6837\u5F0F\u4E0D\u80FD\u590D\u7528\u3002</li><li>\u6837\u5F0F\u6743\u91CD\u592A\u9AD8\uFF0C\u6837\u5F0F\u4E0D\u597D\u8986\u76D6\u3002</li><li>\u8868\u73B0\u5C42\u4E0E\u7ED3\u6784\u5C42\u6CA1\u6709\u5206\u79BB\u3002</li><li>\u4E0D\u80FD\u8FDB\u884C\u7F13\u5B58\uFF0C\u5F71\u54CD\u52A0\u8F7D\u6548\u7387\u3002</li></ul><p>\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5BFC\u5165\u6837\u5F0F\uFF1F</p><ul><li>\u5BFC\u5165\u6837\u5F0F\uFF0C<strong>\u53EA\u80FD\u653E\u5728 style \u6807\u7B7E\u7684\u7B2C\u4E00\u884C</strong>\uFF0C\u653E\u5176\u4ED6\u884C\u5219\u4F1A\u65E0\u6548\u3002</li><li><code>@import</code> \u58F0\u660E\u7684\u6837\u5F0F\u8868\u4E0D\u80FD\u5145\u5206\u5229\u7528\u6D4F\u89C8\u5668\u5E76\u53D1\u8BF7\u6C42\u8D44\u6E90\u7684\u884C\u4E3A\uFF0C\u5176\u52A0\u8F7D\u884C\u4E3A\u5F80\u5F80\u4F1A<strong>\u5EF6\u540E\u89E6\u53D1\u6216\u88AB\u5176\u4ED6\u8D44\u6E90\u52A0\u8F7D\u6302\u8D77</strong>\u3002</li><li>\u7531\u4E8E @import \u6837\u5F0F\u8868\u7684\u5EF6\u540E\u52A0\u8F7D\uFF0C\u53EF<strong>\u80FD\u4F1A\u5BFC\u81F4\u9875\u9762\u6837\u5F0F\u95EA\u70C1</strong>\u3002</li></ul><h3 id="\u4F7F\u7528\u9884\u5904\u7406\u5668-sass-less" tabindex="-1">\u4F7F\u7528\u9884\u5904\u7406\u5668 Sass/Less <a class="header-anchor" href="#\u4F7F\u7528\u9884\u5904\u7406\u5668-sass-less" aria-hidden="true">#</a></h3><p>\u9884\u5904\u7406\u5668\u4E3B\u8981\u662F\u5F3A\u5316\u4E86 css \u7684\u8BED\u6CD5\uFF0C\u5F25\u8865\u4E86\u4E0A\u6587\u8BF4\u4E86\u8FD9\u4E9B\u95EE\u9898\uFF0C\u4F46\u672C\u8D28\u4E0A\uFF0C\u6253\u5305\u51FA\u6765\u7684\u7ED3\u679C\u548C\u6E90\u751F\u7684 css \u90FD\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u5BF9\u5F00\u53D1\u8005\u53CB\u597D\uFF0C\u5199\u8D77\u6765\u66F4\u987A\u6ED1\u3002</p><h3 id="\u540E\u5904\u7406\u5668-postcss" tabindex="-1">\u540E\u5904\u7406\u5668 PostCSS <a class="header-anchor" href="#\u540E\u5904\u7406\u5668-postcss" aria-hidden="true">#</a></h3><p>postcss \u53EF\u4EE5\u79F0\u4F5C\u4E3A css \u754C\u7684 babel\uFF0C\u5B83\u7684\u5B9E\u73B0\u539F\u7406\u662F\u901A\u8FC7 ast \u53BB\u5206\u6790\u6211\u4EEC\u7684 css \u4EE3\u7801\uFF0C\u7136\u540E\u5C06\u5206\u6790\u7684\u7ED3\u679C\u8FDB\u884C\u5904\u7406\uFF0C\u4ECE\u800C\u884D\u751F\u51FA\u4E86\u8BB8\u591A\u79CD\u5904\u7406 css \u7684\u4F7F\u7528\u573A\u666F\u3002</p><p>\u5E38\u7528\u7684 postcss \u4F7F\u7528\u573A\u666F\u6709\uFF1A</p><ul><li>\u914D\u5408 stylelint \u6821\u9A8C css \u8BED\u6CD5</li><li>\u81EA\u52A8\u589E\u52A0\u6D4F\u89C8\u5668\u524D\u7F00 autoprefixer</li><li>\u7F16\u8BD1 css next \u7684\u8BED\u6CD5</li></ul><h3 id="css\u6A21\u5757\u5316" tabindex="-1">CSS\u6A21\u5757\u5316 <a class="header-anchor" href="#css\u6A21\u5757\u5316" aria-hidden="true">#</a></h3><p>css \u662F\u6839\u636E\u7C7B\u540D\u53BB\u5339\u914D\u5143\u7D20\u7684\uFF0C\u5728\u6846\u67B6\u4E2D\uFF0C\u5982\u679C\u6709\u4E24\u4E2A\u7EC4\u4EF6\u4F7F\u7528\u4E86\u4E00\u4E2A\u76F8\u540C\u7684\u7C7B\u540D\uFF0C\u540E\u8005\u5C31\u4F1A\u628A\u524D\u8005\u7684\u6837\u5F0F\u7ED9\u8986\u76D6\u6389\uFF0C\u770B\u6765\u89E3\u51B3\u6837\u5F0F\u547D\u540D\u7684\u51B2\u7A81\u662F\u4E2A\u5927\u95EE\u9898\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4EA7\u751F\u51FA\u4E86 CSS \u6A21\u5757\u5316\u7684\u6982\u5FF5\u3002</p><h4 id="bem-\u547D\u540D\u89C4\u8303" tabindex="-1">BEM \u547D\u540D\u89C4\u8303 <a class="header-anchor" href="#bem-\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a></h4><p>BEM \u7684\u610F\u601D\u5C31\u662F\u5757\uFF08block\uFF09\u3001\u5143\u7D20\uFF08element\uFF09\u3001\u4FEE\u9970\u7B26\uFF08modifier\uFF09\u3002\u662F\u7531 Yandex \u56E2\u961F\u63D0\u51FA\u7684\u4E00\u79CD\u524D\u7AEF\u547D\u540D\u65B9\u6CD5\u8BBA\u3002\u8FD9\u79CD\u5DE7\u5999\u7684\u547D\u540D\u65B9\u6CD5\u8BA9\u4F60\u7684 css \u7C7B\u5BF9\u5176\u4ED6\u5F00\u53D1\u8005\u6765\u8BF4\u66F4\u52A0\u900F\u660E\u800C\u4E14\u66F4\u6709\u610F\u4E49\u3002</p><p>BEM \u7684\u547D\u540D\u89C4\u8303\u5982\u4E0B\uFF1A</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* \u5757\u5373\u662F\u901A\u5E38\u6240\u8BF4\u7684 Web \u5E94\u7528\u5F00\u53D1\u4E2D\u7684\u7EC4\u4EF6\u6216\u6A21\u5757\u3002\u6BCF\u4E2A\u5757\u5728\u903B\u8F91\u4E0A\u548C\u529F\u80FD\u4E0A\u90FD\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\u3002 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u5143\u7D20\u662F\u5757\u4E2D\u7684\u7EC4\u6210\u90E8\u5206\u3002\u5143\u7D20\u4E0D\u80FD\u79BB\u5F00\u5757\u6765\u4F7F\u7528\u3002BEM \u4E0D\u63A8\u8350\u5728\u5143\u7D20\u4E2D\u5D4C\u5957\u5176\u4ED6\u5143\u7D20\u3002 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block__element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u4FEE\u9970\u7B26\u7528\u6765\u5B9A\u4E49\u5757\u6216\u5143\u7D20\u7684\u5916\u89C2\u548C\u884C\u4E3A\u3002\u540C\u6837\u7684\u5757\u5728\u5E94\u7528\u4E0D\u540C\u7684\u4FEE\u9970\u7B26\u4E4B\u540E\uFF0C\u4F1A\u6709\u4E0D\u540C\u7684\u5916\u89C2 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block--modifier</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 bem \u7684\u547D\u540D\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684 css \u4EE3\u7801\u5C42\u6B21\u7ED3\u6784\u6E05\u6670\uFF0C\u901A\u8FC7\u4E25\u683C\u7684\u547D\u540D\u4E5F\u53EF\u4EE5\u89E3\u51B3\u547D\u540D\u51B2\u7A81\u7684\u95EE\u9898\uFF0C\u4F46\u4E5F\u4E0D\u80FD\u5B8C\u5168\u907F\u514D\uFF0C\u6BD5\u7ADF\u53EA\u662F\u4E00\u4E2A\u547D\u540D\u7EA6\u675F\uFF0C\u4E0D\u6309\u89C4\u8303\u5199\u7167\u6837\u80FD\u8FD0\u884C\u3002</p><h4 id="css-modules" tabindex="-1">CSS Modules <a class="header-anchor" href="#css-modules" aria-hidden="true">#</a></h4><p>CSS Modules \u6307\u7684\u662F\u6211\u4EEC\u50CF import js \u4E00\u6837\u53BB\u5F15\u5165\u6211\u4EEC\u7684 css \u4EE3\u7801\uFF0C\u4EE3\u7801\u4E2D\u7684\u6BCF\u4E00\u4E2A\u7C7B\u540D\u90FD\u662F\u5F15\u5165\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5373\u53EF\u5728\u4F7F\u7528\u65F6\u660E\u786E\u6307\u5B9A\u6240\u5F15\u7528\u7684 css \u6837\u5F0F\u3002</p><p>\u5E76\u4E14 CSS Modules \u5728\u6253\u5305\u7684\u65F6\u5019\u4F1A<strong>\u81EA\u52A8\u5C06\u7C7B\u540D\u8F6C\u6362\u6210 hash \u503C</strong>\uFF0C\u5B8C\u5168\u675C\u7EDD css \u7C7B\u540D\u51B2\u7A81\u7684\u95EE\u9898\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><p>1\u3001\u5B9A\u4E49 css \u6587\u4EF6\u3002</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">className</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/* \u7F16\u5199\u5168\u5C40\u6837\u5F0F */</span></span>
<span class="line"><span style="color:#A6ACCD;">:global(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">className</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u6837\u5F0F\u590D\u7528 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">otherClassName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  composes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> className</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">otherClassName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  composes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> className from </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u5728 js \u6A21\u5757\u4E2D\u5BFC\u5165 css \u6587\u4EF6\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> styles </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;div class=&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> styles</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>3\u3001\u914D\u7F6E css-loader \u6253\u5305\u3002</p><p>CSS Modules \u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u662F\u9700\u8981\u8FDB\u884C\u6253\u5305\uFF0C\u4E00\u822C\u901A\u8FC7\u914D\u7F6E css-loader \u4E2D\u7684 modules \u5C5E\u6027\u5373\u53EF\u5B8C\u6210 css modules \u7684\u914D\u7F6E\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// webpack.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// \u81EA\u5B9A\u4E49 hash \u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">localIdentName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[path][name]__[local]--[hash:base64:5]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"></span></code></pre></div><p>4\u3001\u6700\u7EC8\u6253\u5305\u51FA\u6765\u7684 css \u7C7B\u540D\u5C31\u662F\u7531\u4E00\u957F\u4E32 hash \u503C\u751F\u6210\u3002</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">_2DHwuiHWMnKTOYG45T0x34</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">_10B-buq6_BEOTOl9urIjf8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="css-in-js" tabindex="-1">CSS in JS <a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a></h3><p>CSS in JS\uFF0C\u610F\u601D\u5C31\u662F\u4F7F\u7528 js \u8BED\u8A00\u5199 css\uFF0C\u5B8C\u5168\u4E0D\u9700\u8981\u4E9B\u5355\u72EC\u7684 css \u6587\u4EF6\uFF0C\u6240\u6709\u7684 css \u4EE3\u7801\u5168\u90E8\u653E\u5728\u7EC4\u4EF6\u5185\u90E8\uFF0C\u4EE5\u5B9E\u73B0 css \u7684\u6A21\u5757\u5316\u3002</p><p>CSS in JS \u5176\u5B9E\u662F\u4E00\u79CD\u7F16\u5199\u601D\u60F3\uFF0C\u76EE\u524D\u5DF2\u7ECF\u6709\u8D85\u8FC7 40 \u591A\u79CD\u65B9\u6848\u7684\u5B9E\u73B0\uFF0C\u6700\u51FA\u540D\u7684\u662F styled-components\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> styled </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">styled-components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u5E26\u6837\u5F0F\u7684 h1 \u6807\u7B7E</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">h1</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  font-size: 1.5em;</span></span>
<span class="line"><span style="color:#C3E88D;">  text-align: center;</span></span>
<span class="line"><span style="color:#C3E88D;">  color: palevioletred;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u5E26\u6837\u5F0F\u7684 section \u6807\u7B7E</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Wrapper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">section</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  padding: 4em;</span></span>
<span class="line"><span style="color:#C3E88D;">  background: papayawhip;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u901A\u8FC7\u5C5E\u6027\u52A8\u6001\u5B9A\u4E49\u6837\u5F0F</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">button</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  background: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">props</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">palevioletred</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">;</span></span>
<span class="line"><span style="color:#C3E88D;">  color: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">props</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">palevioletred</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  font-size: 1em;</span></span>
<span class="line"><span style="color:#C3E88D;">  margin: 1em;</span></span>
<span class="line"><span style="color:#C3E88D;">  padding: 0.25em 1em;</span></span>
<span class="line"><span style="color:#C3E88D;">  border: 2px solid palevioletred;</span></span>
<span class="line"><span style="color:#C3E88D;">  border-radius: 3px;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6837\u5F0F\u590D\u7528</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> TomatoButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">styled</span><span style="color:#A6ACCD;">(Button)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  color: tomato;</span></span>
<span class="line"><span style="color:#C3E88D;">  border-color: tomato;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Wrapper</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World, this is my first styled component!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">primary</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Wrapper</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u76F4\u63A5\u5728 js \u4E2D\u7F16\u5199 css\uFF0C\u6848\u4F8B\u4E2D\u5728\u5B9A\u4E49\u6E90\u751F html \u65F6\u5C31\u521B\u5EFA\u597D\u4E86\u6837\u5F0F\uFF0C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u6E32\u67D3\u51FA\u5E26\u6837\u5F0F\u7684\u7EC4\u4EF6\u4E86\u3002</p><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207311246712.png" alt=""></p>`,43),e=[o];function c(t,r,D,y,F,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
