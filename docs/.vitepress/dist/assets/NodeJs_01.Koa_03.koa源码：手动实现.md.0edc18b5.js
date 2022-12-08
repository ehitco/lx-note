import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const i=JSON.parse('{"title":"\u6DF1\u5165koa\u6E90\u7801\uFF1A\u624B\u52A8\u5B9E\u73B0\u73A9\u5177\u7248koa","description":"","frontmatter":{"title":"\u6DF1\u5165koa\u6E90\u7801\uFF1A\u624B\u52A8\u5B9E\u73B0\u73A9\u5177\u7248koa","date":"2019-06-21","permalink":"2019-06-21-deep-in-koa-3"},"headers":[{"level":2,"title":"\u51C6\u5907","slug":"\u51C6\u5907","link":"#\u51C6\u5907","children":[]},{"level":2,"title":"\u6D4B\u8BD5\u6587\u4EF6","slug":"\u6D4B\u8BD5\u6587\u4EF6","link":"#\u6D4B\u8BD5\u6587\u4EF6","children":[]},{"level":2,"title":"\u73A9\u5177 koa","slug":"\u73A9\u5177-koa","link":"#\u73A9\u5177-koa","children":[{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570","link":"#\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"use","slug":"use","link":"#use","children":[]},{"level":3,"title":"createContext","slug":"createcontext","link":"#createcontext","children":[]},{"level":3,"title":"listen \u548C callback","slug":"listen-\u548C-callback","link":"#listen-\u548C-callback","children":[]},{"level":3,"title":"handleRequest","slug":"handlerequest","link":"#handlerequest","children":[]}]},{"level":2,"title":"\u6548\u679C\u622A\u56FE","slug":"\u6548\u679C\u622A\u56FE","link":"#\u6548\u679C\u622A\u56FE","children":[]}],"relativePath":"NodeJs/01.Koa/03.koa\u6E90\u7801\uFF1A\u624B\u52A8\u5B9E\u73B0.md","lastUpdated":1670480666000}'),p={name:"NodeJs/01.Koa/03.koa\u6E90\u7801\uFF1A\u624B\u52A8\u5B9E\u73B0.md"},o=l(`<blockquote><p>\u6700\u8FD1\u8BFB\u4E86 koa2 \u7684\u6E90\u7801\uFF0C\u7406\u6E05\u695A\u4E86\u67B6\u6784\u8BBE\u8BA1\u4E0E\u7528\u5230\u7684\u7B2C\u4E09\u65B9\u5E93\u3002\u672C\u7CFB\u5217\u5C06\u5206\u4E3A 3 \u7BC7\uFF0C\u5206\u522B\u4ECB\u7ECD koa \u7684\u67B6\u6784\u8BBE\u8BA1\u548C 3 \u4E2A\u6838\u5FC3\u5E93\uFF0C\u6700\u7EC8\u4F1A\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7684 koa\u3002<strong>\u8FD9\u662F\u7CFB\u5217\u7B2C 3 \u7BC7\uFF0C\u6A21\u62DF\u5B9E\u73B0\u73A9\u5177\u7248 koa</strong>\u3002</p></blockquote><p>\u6E90\u7801\u548C\u6D4B\u8BD5\u4EE3\u7801\u653E\u5728\u4E86\uFF1A<a href="https://github.com/dongyuanxin/simple-koa" target="_blank" rel="noreferrer">dongyuanxin/simple-koa</a></p><h2 id="\u51C6\u5907" tabindex="-1">\u51C6\u5907 <a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u8BBE\u8BA1\u601D\u60F3\u548C\u7B2C\u4E09\u65B9\u5E93\u539F\u7406\u90FD\u5728\u524D 2 \u7BC7\u8BE6\u7EC6\u8BF4\u660E\u4E86\u3002\u8FD9\u7BC7\u4E3B\u8981\u76EE\u7684\u662F\u505A\u4E00\u4E2A\u9A8C\u8BC1\u68C0\u9A8C\uFF0C\u5728\u8BED\u6CD5\u4F7F\u7528 ES6/7 \u7684\u8BED\u6CD5\u3002</p><p>\u5728\u5F00\u59CB\u524D\uFF0C\u5B89\u88C5\u4E00\u4E0B\u9700\u8981\u7528\u5230\u7684\u5E93\uFF1A</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install --save koa-compose koa-convert is-generator-function</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6D4B\u8BD5\u6587\u4EF6" tabindex="-1">\u6D4B\u8BD5\u6587\u4EF6 <a class="header-anchor" href="#\u6D4B\u8BD5\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u8BF4\u660E\u6548\u679C\uFF0C\u5148\u6309\u7167\u6B63\u5E38\u4F7F\u7528 koa \u7684\u903B\u8F91\u7F16\u5199\u4E86\u6D4B\u8BD5\u6587\u4EF6\u3002\u5F53\u542F\u52A8\u5B83\u7684\u65F6\u5019\uFF0C\u5B83\u7684\u9884\u671F\u884C\u4E3A\u662F\uFF1A</p><ul><li>\u76D1\u542C 3000 \u7AEF\u53E3</li><li>\u52A0\u8F7D\u4E2D\u95F4\u4EF6</li><li>\u6D4F\u89C8\u5668\u8BBF\u95EE<code>localhost:3000</code>\uFF0C\u5C4F\u5E55\u6253\u5370<code>hello</code></li><li>\u670D\u52A1\u5668\u7684\u63A7\u5236\u53F0\u4F9D\u6B21\u8F93\u51FA\uFF1A1inner =&gt; 2innter =&gt; 2outer =&gt; 1outer</li></ul><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Koa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./lib/application</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Koa</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">middleware1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1 inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1 outer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">middleware2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2 inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2 outer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(middleware1)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(middleware2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u73A9\u5177-koa" tabindex="-1">\u73A9\u5177 koa <a class="header-anchor" href="#\u73A9\u5177-koa" aria-hidden="true">#</a></h2><p>\u53EA\u51C6\u5907\u4E86\u4E00\u4E2A\u6587\u4EF6\uFF0C\u8DD1\u901A\u4E0A\u9762\u7684\u903B\u8F91\u5373\u53EF\u3002\u6587\u4EF6\u662F <code>lib/application.js</code> \u3002</p><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5BF9\u5916\u66B4\u9732\u7684\u5C31\u662F\u4E00\u4E2A\u7EE7\u627F Emitter \u7684 Application \u7C7B\u3002\u6574\u4F53\u6846\u67B6\u5982\u4E0B\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Emitter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">events</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> compose </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">koa-compose</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Application</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Emitter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">middleware</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8BF7\u6C42\u4FE1\u606F</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8FD4\u56DE\u4FE1\u606F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">callback</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleRequest</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fnMiddleware</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">createContext</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onerror</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">error occurs: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u7EE7\u627F Emitter \u4E8B\u4EF6\u7C7B\uFF0C\u662F\u4E3A\u4E86\u65B9\u4FBF\u76D1\u542C\u548C\u5904\u7406\u62A5\u9519\u3002</p><h3 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h3><p>\u5C06\u5916\u9762\u4F20\u5165\u7684\u4E2D\u95F4\u4EF6\u4FDD\u5B58\u8D77\u6765\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;"> (fn) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">middleware</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="createcontext" tabindex="-1">createContext <a class="header-anchor" href="#createcontext" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u7528\u4E8E\u521B\u5EFA\u4E0A\u4E0B\u6587\u3002\u5916\u9762\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE ctx \u4E0A\u7684 req/res \u62FF\u5230\u8BF7\u6C42\u6216\u8005\u8FD4\u56DE\u4FE1\u606F\u3002</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">createContext</span><span style="color:#A6ACCD;"> (req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">app</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="listen-\u548C-callback" tabindex="-1">listen \u548C callback <a class="header-anchor" href="#listen-\u548C-callback" aria-hidden="true">#</a></h3><p>\u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1\u5668\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">server</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#82AAFF;">callback</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">compose</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">middleware</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">onerror</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">createContext</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">handleRequest</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="handlerequest" tabindex="-1">handleRequest <a class="header-anchor" href="#handlerequest" aria-hidden="true">#</a></h3><p>\u5728 <code>callback</code> \u65B9\u6CD5\u4E2D\u771F\u662F\u8FD4\u56DE\u7684\u5185\u5BB9\uFF0C\u5B83\u7684\u4F5C\u7528\u5C31\u662F\uFF1A\u5904\u7406\u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">handleRequest</span><span style="color:#A6ACCD;">(ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fnMiddleware) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// res.statusCode = 404</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleResponse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fnMiddleware</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">handleResponse</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">onerror</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6548\u679C\u622A\u56FE" tabindex="-1">\u6548\u679C\u622A\u56FE <a class="header-anchor" href="#\u6548\u679C\u622A\u56FE" aria-hidden="true">#</a></h2><p>\u542F\u52A8 index.js \u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE\u672C\u5730 3000 \u7AEF\u53E3\uFF1A</p><p><img src="https://static.godbmw.com/img/2019-06-21-deep-in-koa-3/1.png" alt=""></p><p>\u56DE\u5230\u63A7\u5236\u53F0\uFF0C\u67E5\u770B\u4E2D\u95F4\u4EF6\u7684\u8F93\u51FA\u987A\u5E8F\u662F\u5426\u6B63\u786E\uFF1A</p><p><img src="https://static.godbmw.com/img/2019-06-21-deep-in-koa-3/2.png" alt=""></p>`,34),e=[o];function t(c,r,F,y,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
