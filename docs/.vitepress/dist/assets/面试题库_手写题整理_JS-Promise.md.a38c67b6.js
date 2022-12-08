import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684Promise","slug":"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684promise","link":"#\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684promise","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3","slug":"\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3","link":"#\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"Promise\u76F8\u5173","slug":"promise\u76F8\u5173","link":"#promise\u76F8\u5173","children":[{"level":3,"title":"\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684Promise\u8C03\u5EA6\u5668","slug":"\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684promise\u8C03\u5EA6\u5668","link":"#\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684promise\u8C03\u5EA6\u5668","children":[]}]}],"relativePath":"\u9762\u8BD5\u9898\u5E93/\u624B\u5199\u9898\u6574\u7406/JS-Promise.md","lastUpdated":1670480666000}'),p={name:"\u9762\u8BD5\u9898\u5E93/\u624B\u5199\u9898\u6574\u7406/JS-Promise.md"},o=l(`<h2 id="\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684promise" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684Promise <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684promise" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u9700\u6C42</p><ul><li>\u8981\u80FD<code>new</code>\uFF0C\u6240\u4EE5Promise\u662F\u4E00\u4E2A\u7C7B</li><li><code>new Promise(fn)</code>\uFF0C\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570</li><li>\u4F20\u8FDB\u53BB\u7684\u51FD\u6570\u4F1A\u63A5\u6536\u4E24\u4E2A\u51FD\u6570<code>resolve</code>\u548C<code>reject</code>\uFF0C\u7528\u6765\u8868\u793A\u6210\u529F\u548C\u5931\u8D25\uFF0C\u5219\u6784\u9020\u51FD\u6570\u91CC \u9700\u8981\u6709<code>resolve</code>\u548C<code>reject</code>\uFF0C\u7528\u6765\u6539\u53D8Promise\u7684\u72B6\u6001</li><li>\u6839\u636E\u89C4\u8303\uFF0Cpromise\u6709<code>pending</code>\uFF0C<code>fulfilled</code>\uFF0C<code>rejected</code>\u4E09\u4E2A\u72B6\u6001\uFF0C\u521D\u59CB\u72B6\u6001\u4E3A<code>pending</code>\uFF0C\u8C03\u7528<code>resolve</code>\u4F1A\u5C06\u5176\u6539\u4E3A<code>fulfilled</code>\uFF0C\u8C03\u7528<code>reject</code>\u4F1A\u6539\u4E3A<code>rejected</code>\u3002</li><li><code>Promise.then()</code>\u652F\u6301\u94FE\u5F0F\u8C03\u7528</li></ul><h2 id="\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3" tabindex="-1">\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3 <a class="header-anchor" href="#\u5B9E\u73B0\u4EE3\u7801\u53CA\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>Promise\u65B9\u6CD5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// all</span></span>
<span class="line"><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">myAll</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    status</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fullfilled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// race</span></span>
<span class="line"><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">myRace</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// allSettled</span></span>
<span class="line"><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">allSettled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    status</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fullfilled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    status</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rejected</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    reason</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">finally</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resArr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resArr</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684Promise\u5C31\u7B80\u5355\u5B9E\u73B0\u4E86\uFF0C\u53EA\u662F\u6211\u4EEC\u4E0D\u662F\u539F\u751F\u4EE3\u7801\uFF0C\u4E0D\u80FD\u505A\u6210\u5FAE\u4EFB\u52A1\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u505A\u6210\u5FAE\u4EFB\u52A1\u7684\u8BDD\uFF0C\u53EA\u80FD\u7528\u5176\u4ED6\u5FAE\u4EFB\u52A1API\u6A21\u62DF\uFF0C\u6BD4\u5982<code>MutaionObserver</code>\u6216\u8005<code>process.nextTick</code>\u3002\u4E0B\u9762\u518D\u56DE\u987E\u4E0B\u51E0\u4E2A\u8981\u70B9:</p><ol><li>Promise\u5176\u5B9E\u662F\u4E00\u4E2A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</li><li><code>then</code>\u65B9\u6CD5\u5BF9\u4E8E\u8FD8\u5728<code>pending</code>\u7684\u4EFB\u52A1\uFF0C\u5176\u5B9E\u662F\u5C06\u56DE\u8C03\u51FD\u6570<code>onFilfilled</code>\u548C<code>onRejected</code>\u585E\u5165\u4E86\u4E24\u4E2A\u6570\u7EC4</li><li>Promise\u6784\u9020\u51FD\u6570\u91CC\u9762\u7684<code>resolve</code>\u65B9\u6CD5\u4F1A\u5C06\u6570\u7EC4<code>onFilfilledCallbacks</code>\u91CC\u9762\u7684\u65B9\u6CD5\u5168\u90E8\u62FF\u51FA\u6765\u6267\u884C\uFF0C\u8FD9\u91CC\u9762\u662F\u4E4B\u524Dthen\u65B9\u6CD5\u585E\u8FDB\u53BB\u7684\u6210\u529F\u56DE\u8C03</li><li>\u540C\u7406\uFF0CPromise\u6784\u9020\u51FD\u6570\u91CC\u9762\u7684<code>reject</code>\u65B9\u6CD5\u4F1A\u5C06\u6570\u7EC4<code>onRejectedCallbacks</code>\u91CC\u9762\u7684\u65B9\u6CD5\u5168\u90E8\u62FF\u51FA\u6765\u6267\u884C\uFF0C\u8FD9\u91CC\u9762\u662F\u4E4B\u524Dthen\u65B9\u6CD5\u585E\u8FDB\u53BB\u7684\u5931\u8D25\u56DE\u8C03</li><li><code>then</code>\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Promise\u4EE5\u4FBF\u6267\u884C\u94FE\u5F0F\u8C03\u7528</li><li><code>catch</code>\u548C<code>finally</code>\u8FD9\u4E9B\u5B9E\u4F8B\u65B9\u6CD5\u90FD\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Promise\u5B9E\u4F8B\u4EE5\u4FBF\u5B9E\u73B0\u94FE\u5F0F\u8C03\u7528\u3002</li></ol><blockquote><p>\u6587\u7AE0\u53C2\u8003</p><ul><li><a href="http://www.dennisgo.cn/Articles/JavaScript/Promise.html" target="_blank" rel="noreferrer">\u624B\u5199Promise/A+</a></li></ul></blockquote><h2 id="promise\u76F8\u5173" tabindex="-1">Promise\u76F8\u5173 <a class="header-anchor" href="#promise\u76F8\u5173" aria-hidden="true">#</a></h2><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684promise\u8C03\u5EA6\u5668" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684Promise\u8C03\u5EA6\u5668 <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u5E76\u884C\u9650\u5236\u7684promise\u8C03\u5EA6\u5668" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PromiseLimiter</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">maxCount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">maxCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">tasks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">tasks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">maxCount</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">request</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">tasks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">tasks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function c(r,t,F,y,D,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
