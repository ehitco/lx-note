import{_ as l,o as p,c as o,a as n,b as s,d as a}from"./app.31720a63.js";const g=JSON.parse('{"title":"Vue3-Router","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5F15\u5165\u65B9\u5F0F","slug":"\u5F15\u5165\u65B9\u5F0F","link":"#\u5F15\u5165\u65B9\u5F0F","children":[]},{"level":3,"title":"\u914D\u7F6E\u8DEF\u7531","slug":"\u914D\u7F6E\u8DEF\u7531","link":"#\u914D\u7F6E\u8DEF\u7531","children":[]},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]},{"level":3,"title":"\u52A8\u6001\u8DEF\u7531","slug":"\u52A8\u6001\u8DEF\u7531","link":"#\u52A8\u6001\u8DEF\u7531","children":[]},{"level":3,"title":"\u5D4C\u5957\u8DEF\u7531","slug":"\u5D4C\u5957\u8DEF\u7531","link":"#\u5D4C\u5957\u8DEF\u7531","children":[]},{"level":3,"title":"\u7F16\u7A0B\u5F0F\u5BFC\u822A","slug":"\u7F16\u7A0B\u5F0F\u5BFC\u822A","link":"#\u7F16\u7A0B\u5F0F\u5BFC\u822A","children":[]},{"level":3,"title":"\u8DEF\u7531\u5B88\u536B","slug":"\u8DEF\u7531\u5B88\u536B","link":"#\u8DEF\u7531\u5B88\u536B","children":[]}],"relativePath":"\u624B\u6495\u6E90\u7801/Vue/vue3\u8DEF\u7531.md","lastUpdated":1670480666000}'),t={name:"\u624B\u6495\u6E90\u7801/Vue/vue3\u8DEF\u7531.md"},e=n(`<h1 id="vue3-router" tabindex="-1">Vue3-Router <a class="header-anchor" href="#vue3-router" aria-hidden="true">#</a></h1><p>Created: August 26, 2021 10:36 AM Tags: vue</p><h3 id="\u5F15\u5165\u65B9\u5F0F" tabindex="-1">\u5F15\u5165\u65B9\u5F0F <a class="header-anchor" href="#\u5F15\u5165\u65B9\u5F0F" aria-hidden="true">#</a></h3><ul><li>CDN</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[https://unpkg.com/vue-router@next](https://unpkg.com/vue-router@next)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5728\u6211\u4EEC\u7684vue\u9879\u2F6C\u4E2D\u4F7F\u2F64</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i vue-router@next -S</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5F15\u2F0Avue-router\u63D2\u4EF6</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//main.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./router/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(router)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E\u8DEF\u7531" tabindex="-1">\u914D\u7F6E\u8DEF\u7531 <a class="header-anchor" href="#\u914D\u7F6E\u8DEF\u7531" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//router/index.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHashHistory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> CourseList </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/comps/CourseList.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> CourseAdd </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/comps/CourseAdd.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 1. \u914D\u7F6E\u8DEF\u7531</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseList </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseAdd </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 2. \u521B\u5EFA\u8DEF\u7531\u5668\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">// 3. \u63D0\u4F9B\u2F00\u4E2Ahistory\u5B9E\u73B0</span></span>
<span class="line"><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHashHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">routes</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><ul><li>\u6DFB\u52A0\u2F0A\u2F1D</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8DF3\u8F6C</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u65B0\u589E</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1">\u52A8\u6001\u8DEF\u7531 <a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a></h3>`,17),c=s("ul",null,[s("li",null,[a("\u57FA\u672C\u2F64\u6CD5 "),s("ul",null,[s("li",{"path:":"","course:id,component:CourseDetail":""},"\u8DEF\u7531\u914D\u7F6E\uFF1A"),s("li",null,[a("\u53C2\u6570\u83B7\u53D6\uFF1A "),s("a",{href:"http://this.$route.params.id",target:"_blank",rel:"noreferrer"},"this.$route.params.id"),a(" \u6216 useRoute().params.id")])])]),s("li",null,"\u4FEE\u6539\u8DEF\u7531\u914D\u7F6E")],-1),r=n(`<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//router/index.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> CourseDetail </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/comps/CourseDetail.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course/:id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseDetail </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8DF3\u8F6C</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;"> :to=&quot;&#39;/course/&#39; + c.id&quot;&gt;{{ c.name }}&lt;/router-link&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u9875\u9762\u83B7\u53D6\u8DEF\u7531\u53C2\u6570</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> course.name </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">id: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> $route.params.id </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">price: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> course.price </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><p>\u54CD\u5E94\u53C2\u6570\u53D8\u5316</p><ul><li><p>\u53C2\u6570\u53D8\u5316\u65F6\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u590D\u2F64\uFF0C\u5BFC\u81F4\u2EDA\u2FAF\u4E0D\u4F1A\u54CD\u5E94\u53C2\u6570\u7684\u53D8\u5316\u3002id\u53D8\u4E3A2\uFF0C\u663E\u793A\u5185\u5BB9\u8FD8\u662F1\u7684\u3002</p></li><li><p>\u89E3\u51B3\u65B9\u6848</p><ul><li>\u76D1\u542Cparams\uFF1A this.$watch(() =&gt; this.$route.params, (params, prevParams) =&gt; {})</li><li>\u5229\u2F64\u5BFC\u822A\u94A9\u2F26</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">async </span><span style="color:#82AAFF;">beforeRouteUpdate</span><span style="color:#A6ACCD;">(to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">// \u54CD\u5E94\u8DEF\u7531\u53D8\u5316</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">userData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetchUser</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u6539\u8FDB\u6848\u4F8B</p></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">watch</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">getCourseById</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ret</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">course</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u901A\u914D\u6216404\u5904\u7406</p></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#676E95;">// \u4E0B\u2FAF\u914D\u7F6E\u4F1A\u5339\u914D\u6240\u6709path\uFF0C\u5339\u914D\u5185\u5BB9\u653E\u2F0A\`$route.params.pathMatch\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/:pathMatch(.*)*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NotFound</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NotFound </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#676E95;">// \u5339\u914D\u6240\u6709\u4EE5\`/user-\`\u5F00\u5934path\uFF0C\u5339\u914D\u5185\u5BB9\u653E\u2F0A\`$route.params.afterUser\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/user-:afterUser(.*)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> UserGeneric </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1">\u5D4C\u5957\u8DEF\u7531 <a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a></h3><ul><li>\u4FEE\u6539\u8DEF\u7531\u914D\u7F6E</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseList</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;">//\u5B69\u5B50\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">				 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course/:id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseDetail </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course/add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CourseAdd </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			 ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:pathMatch(.*)*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NotFound </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><p>CourseList\u4E2D\u53D1\u2F63\u4E24\u4E2A\u53D8\u5316</p><ul><li>\u9700\u8981\u6DFB\u52A0\u2F00\u4E2A router-view \u663E\u793A\u5D4C\u5957\u8DEF\u7531\u5185\u5BB9</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/course/add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u65B0\u589E</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5BFC\u822A\u4E5F\u968F\u4E4B\u53D8\u5316</li></ul></li></ul><h3 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1">\u7F16\u7A0B\u5F0F\u5BFC\u822A <a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a></h3><table><thead><tr><th>\u58F0\u660E\u5F0F\u7F16\u7A0B</th><th>\u7F16\u7A0B\u5F0F\u7F16\u7A0B</th></tr></thead><tbody><tr><td>&lt;router-link :to=&quot;...&quot;&gt;</td><td>router.push(...)</td></tr><tr><td>&lt;router-link :to=&quot;...&quot; replace&gt;</td><td>Router.replace(...)</td></tr></tbody></table><ul><li>\u5E38\u89C1\u7528\u6CD5</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u4F20\u9012path</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/user/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/user/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ul><li><p>\u51E0\u4E2A\u4F8B\u5B50</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;button @click=&quot;$router.push(&#39;/add&#39;)&quot;&gt;\u65B0\u589E&lt;/button&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u4F7F\u2F64\`name\`\u548C\`params\`\u642D\u914D\uFF0C\u4EE5\u5229\u2F64\u2F83\u52A8\u7684URL\u7F16\u7801\uFF1B\u4E0D\u80FD\u4F7F\u2F64\`path\`\u548C\`params\`\u642D\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> username </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;li @click=&quot;showDetail(c)&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	 {{ c.name }}</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">router</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRouter</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">selectedCourse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">showDetail</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">selectedCourse</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#676E95;">//\u6CE8\u610Fname</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">detail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		 </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">courses</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">showDetail</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8DEF\u7531\u5B9A\u4E49\u65F6\u9700\u8981\u2F00\u4E2Aname\uFF0Crouter/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">{ path: &quot;/course/:id&quot;, name: &quot;detail&quot;, component: CourseDetail}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u4F7F\u7528\u547D\u540D\u8DEF\u7531</p><ul><li>\u597D\u5904 <ul><li>\u2F46\u9700\u7F16\u5199\u590D\u6742URL</li><li>params \u2F83\u52A8\u7F16\u7801/\u89E3\u7801</li><li>\u907F\u514Dpath\u4E4B\u95F4\u7684\u6392\u540D\u7ADE\u4E89</li></ul></li><li>router-link\u4E2D\u4E5F\u53EF\u4F7F\u2F64</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;router-link :to=&quot;{ name: &#39;bar&#39;, params: { param: &#39;abc&#39; }}&quot;&gt;Bar&lt;/router-link&gt;</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="\u8DEF\u7531\u5B88\u536B" tabindex="-1">\u8DEF\u7531\u5B88\u536B <a class="header-anchor" href="#\u8DEF\u7531\u5B88\u536B" aria-hidden="true">#</a></h3><ul><li>\u65B9\u5F0F <ul><li>\u5168\u5C40\u5B88\u536B</li><li>\u5355\u4E2A\u8DEF\u7531\u5B88\u536B</li><li>\u7EC4\u4EF6\u5185\u90E8\u8DEF\u7531\u94A9\u5B50</li></ul></li></ul>`,18),D=[e,c,r];function F(y,C,i,A,u,d){return p(),o("div",null,D)}const v=l(t,[["render",F]]);export{g as __pageData,v as default};
