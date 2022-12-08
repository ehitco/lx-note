import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const A=JSON.parse('{"title":"\u6570\u636E\u54CD\u5E94\u5F0F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6570\u636E\u52AB\u6301","slug":"\u6570\u636E\u52AB\u6301","link":"#\u6570\u636E\u52AB\u6301","children":[]},{"level":3,"title":"MVVM\uFF1Amodel\uFF08\u6A21\u578B\uFF09+ view\uFF08\u89C6\u56FE\uFF09+ viewModel\uFF08\u89C6\u56FE\u6A21\u578B\uFF09","slug":"mvvm-model-\u6A21\u578B-view-\u89C6\u56FE-viewmodel-\u89C6\u56FE\u6A21\u578B","link":"#mvvm-model-\u6A21\u578B-view-\u89C6\u56FE-viewmodel-\u89C6\u56FE\u6A21\u578B","children":[]},{"level":3,"title":"\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406","slug":"\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406","link":"#\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406","children":[]},{"level":3,"title":"\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A","slug":"\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A","link":"#\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A","children":[]},{"level":3,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":3,"title":"\u6A21\u5757\u5316\u5F00\u53D1","slug":"\u6A21\u5757\u5316\u5F00\u53D1","link":"#\u6A21\u5757\u5316\u5F00\u53D1","children":[]}],"relativePath":"\u624B\u6495\u6E90\u7801/Vue/\u6570\u636E\u54CD\u5E94\u5F0F.md","lastUpdated":1670480666000}'),p={name:"\u624B\u6495\u6E90\u7801/Vue/\u6570\u636E\u54CD\u5E94\u5F0F.md"},o=l(`<h1 id="\u6570\u636E\u54CD\u5E94\u5F0F" tabindex="-1">\u6570\u636E\u54CD\u5E94\u5F0F <a class="header-anchor" href="#\u6570\u636E\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h1><h3 id="\u6570\u636E\u52AB\u6301" tabindex="-1">\u6570\u636E\u52AB\u6301 <a class="header-anchor" href="#\u6570\u636E\u52AB\u6301" aria-hidden="true">#</a></h3><ul><li>get\uFF1A\u662F\u4E00\u79CD\u83B7\u5F97\u5C5E\u6027\u7684\u65B9\u6CD5\uFF0Cset\u662F\u4E00\u79CD\u8BBE\u7F6E\u5C5E\u6027\u503C\u7684\u65B9\u6CD5</li><li>get\u8D1F\u8D23\u67E5\u8BE2\u503C\uFF0C\u5B83\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\uFF0Cset\u5219\u8D1F\u8D23\u8BBE\u7F6E\u952E\u503C\uFF0C\u503C\u662F\u4EE5\u53C2\u6570\u7684\u5F62\u5F0F\u4F20\u9012\u7684</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kkb</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u83B7\u53D6 name \u5C5E\u6027\u65F6 \u89E6\u53D1</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">){</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u8BBE\u7F6E name \u5C5E\u6027\u65F6 \u89E6\u53D1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span></span>
<span class="line"><span style="color:#676E95;">//hello</span></span>
<span class="line"><span style="color:#676E95;">//hello1</span></span>
<span class="line"></span></code></pre></div><ul><li><p>Object.defineProperty()</p><ul><li>\u9ED8\u8BA4\u503C\u95EE\u9898\uFF08Object.getOwnPropertyDescriptor() \u83B7\u53D6\u8BE5\u5BF9\u8C61\u76F8\u5173\u7684\u63CF\u8FF0\uFF09</li></ul></li><li><p>\u60C5\u51B51\uFF1A\u8BE5\u5C5E\u6027\u5DF2\u7ECF\u5728\u5BF9\u8C61\u4E2D\u5B9A\u4E49\u8FC7</p></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kkb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u60C5\u51B52\uFF1A\u8BE5\u5C5E\u6027\u5DF2\u7ECF\u5728\u5BF9\u8C61\u672A\u5B9A\u4E49\u8FC7\uFF1A</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>Object.defineProperties</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperties</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u914D\u7F6E\u662F\u5426\u5141\u8BB8\u88AB\u679A\u4E3E true\uFF08\u9ED8\u8BA4\u503C\uFF09\u53EF\u4EE5\u88AB\u5220\u9664\u3002false\u4E0D\u80FD\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">enumerabel</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u914D\u7F6E\u662F\u5426\u5141\u8BB8\u88AB\u679A\u4E3E true\uFF08\u9ED8\u8BA4\u503C\uFF09\u53EF\u4EE5\u88AB\u679A\u4E3E\u3002false\u4E0D\u80FD\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u914D\u7F6E\u662F\u5426\u5141\u8BB8\u88AB\u4FEE\u6539 true\uFF08\u9ED8\u8BA4\u503C\uFF09\u53EF\u4EE5\u88AB\u4FEE\u6539\u3002false\u4E0D\u80FD\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8FD9\u4E2A\u60F3\u8981\u8BBE\u7F6E\u7684\u65B0\u503C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newVal</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4F60\u731C\u540D\u5B57\u662F\u5565</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="mvvm-model-\u6A21\u578B-view-\u89C6\u56FE-viewmodel-\u89C6\u56FE\u6A21\u578B" tabindex="-1">MVVM\uFF1Amodel\uFF08\u6A21\u578B\uFF09+ view\uFF08\u89C6\u56FE\uFF09+ viewModel\uFF08\u89C6\u56FE\u6A21\u578B\uFF09 <a class="header-anchor" href="#mvvm-model-\u6A21\u578B-view-\u89C6\u56FE-viewmodel-\u89C6\u56FE\u6A21\u578B" aria-hidden="true">#</a></h3><ul><li>Vue/React</li><li>\u4FEE\u6539\u4E86model \uFF0CviewModel\u4F1A\u901A\u77E5view\u8FDB\u884C\u6539\u53D8</li><li>\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u7684\u65B9\u5F0F</li><li>MVVM\u662FModel-View-ViewModel\u7684\u7B80\u5199\u3002\u5B83\u672C\u8D28\u4E0A\u5C31\u662FMVC \u7684\u6539\u8FDB\u7248\u3002MVVM \u5C31\u662F\u5C06\u5176\u4E2D\u7684View \u7684\u72B6\u6001\u548C\u884C\u4E3A\u62BD\u8C61\u5316\uFF0C\u8BA9\u6211\u4EEC\u5C06\u89C6\u56FE UI \u548C\u4E1A\u52A1\u903B\u8F91\u5206\u5F00\u3002\u5F53\u7136\u8FD9\u4E9B\u4E8B ViewModel \u5DF2\u7ECF\u5E2E\u6211\u4EEC\u505A\u4E86\uFF0C\u5B83\u53EF\u4EE5\u53D6\u51FA Model \u7684\u6570\u636E\u540C\u65F6\u5E2E\u5FD9\u5904\u7406 View \u4E2D\u7531\u4E8E\u9700\u8981\u5C55\u793A\u5185\u5BB9\u800C\u6D89\u53CA\u7684\u4E1A\u52A1\u903B\u8F91\u3002</li><li><strong>\u6570\u636E\u54CD\u5E94\u5F0F</strong>\uFF1A\u662F\u6307\u5F53\u6570\u636E\u6539\u53D8\u540E\uFF0C\u4F1A\u901A\u77E5\u5230\u4F7F\u7528\u8BE5\u6570\u636E\u7684\u4EE3\u7801\u3002\u4F8B\u5982\uFF0C\u89C6\u56FE\u6E32\u67D3\u4E2D\u4F7F\u7528\u4E86\u6570\u636E\uFF0C\u6570\u636E\u6539\u53D8\u540E\uFF0C\u89C6\u56FE\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002</li></ul><h3 id="\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h3><ol><li>\u7F16\u8BD1\u6A21\u677F\uFF0C\u627E\u51FA\u9700\u8981\u63D2\u5165\u6570\u636E\u7684\u4F4D\u7F6E\uFF0C\u628A\u6570\u636E\u63D2\u5165\u8FDB\u53BB</li><li>\u5229\u7528\u6570\u636E\u52AB\u6301\uFF08defineProperty\uFF0CProxy\uFF09\u76D1\u542C\u5BF9\u5E94\u6570\u636E\u7684\u53D8\u5316\uFF0C\u5982\u679C\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u5219\u627E\u5230\u5BF9\u5E94\u7684\u63D2\u5165\u6570\u636E\u7684\u4F4D\u7F6E\uFF0C\u4FEE\u6539\u89C6\u56FE</li></ol><h3 id="\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A" tabindex="-1">\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A <a class="header-anchor" href="#\u6570\u636E\u548C\u89C6\u56FE\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a></h3><ol><li>\u5229\u7528\u6570\u636E\u54CD\u5E94\u5F0F\uFF0C\u5B8C\u6210\u6570\u636E\u5BF9\u89C6\u56FE\u4FEE\u6539</li><li>\u6DFB\u52A0 change \u6216 input \u7B49\u4E8B\u4EF6\uFF0C\u76D1\u542C\u89C6\u56FE\u7684\u4FEE\u6539\uFF0C\u5F53\u89C6\u56FE\u6539\u53D8\u65F6\u4FEE\u6539\u6570\u636E</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">class Vue extends EventTarget{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(option) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$option = option</span></span>
<span class="line"><span style="color:#A6ACCD;">        let el = document.querySelector(this.$option.el)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.compileNode(el)  //\u7F16\u8BD1\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.observe(this.$option.data) //\u89C2\u5BDF\u6570\u636E\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    observe(data){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let keys = Object.keys(data) // \u83B7\u53D6\u6570\u636E\u7684\u6240\u6709key</span></span>
<span class="line"><span style="color:#A6ACCD;">        keys.forEach(key=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.dataProxy(data, key, data[key])  //\u5BF9\u6570\u636E\u6DFB\u52A0\u6570\u636E\u52AB\u6301\u673A\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataProxy(data,key,value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let _this = this</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.defineProperty(data,key,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            configurable: true,  //\u5141\u8BB8\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">            enumerable: true,  //\u5141\u8BB8\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">            set(newVal){  //\u6570\u636E\u8BBE\u5B9A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">                value = newVal  //\u5BF9\u503C\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">                //\u540C\u65F6\u65B0\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u4F20\u5165\u4E8B\u4EF6\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">                let event = new Event(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">                event.name = key</span></span>
<span class="line"><span style="color:#A6ACCD;">                _this.dispatchEvent(event)  //\u89E6\u53D1\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            get(){  //\u6570\u636E\u83B7\u53D6\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">                return value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    compileNode(el){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let child = el.childNodes  //\u83B7\u53D6\u8BE5\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">        child.forEach(node=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(node.nodeType === 1){  //\u5982\u679C\u8BE5\u8282\u70B9\u662F\u5143\u7D20\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">                let attrs = node.attributes;  //\u83B7\u53D6\u8BE5\u8282\u70B9\u7684\u5168\u90E8\u5C5E\u6027\u503C,\u8FD4\u56DE\u662FnodeMap</span></span>
<span class="line"><span style="color:#A6ACCD;">                [...attrs].forEach(attr=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let attrName = attr.name  // \u83B7\u53D6\u6BCF\u4E00\u4E2A\u5C5E\u6027\u7684\u540D\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // console.log(attrName)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if(attrName.indexOf(&quot;v-&quot;) === 0){  //\u5982\u679C\u540D\u5B57\u4EE5v-\u5F00\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">                        let attrVal = attr.value  // \u83B7\u53D6\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u2014\u2014data\u4E2D\u7684key</span></span>
<span class="line"><span style="color:#A6ACCD;">                        if(attrName === &quot;v-html&quot;){  //v-html\uFF1A\u7528\u6570\u636E\u66FF\u6362\u8BE5\u5143\u7D20\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.innerHTML = this.$option.data[attrVal]  //\u66FF\u6362\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.addEventListener(attrVal,()=&gt;{  //\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">                                node.innerHTML = this.$option.data[attrVal]</span></span>
<span class="line"><span style="color:#A6ACCD;">                            })</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }else if(attrName===&quot;v-model&quot;){  //v-model\uFF1A\u53CC\u5411\u7ED1\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.value = this.$option.data[attrVal]  //\u5C06\u8BE5node\u7684\u503C\u66FF\u6362\u4E3Adata\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.addEventListener(attrVal,()=&gt;{  //\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5BF9node\u7684\u503C\u8FDB\u884C\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">                                node.value = this.$option.data[attrVal]</span></span>
<span class="line"><span style="color:#A6ACCD;">                            })</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.addEventListener(&quot;input&quot;,({target})=&gt;{  //\u76D1\u542C\u89C6\u56FE\u53D1\u751F\u53D8\u5316\uFF0C\u540C\u6B65\u4FEE\u6539\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">                                this.$option.data[attrVal] = target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                            })</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;">                // console.log(attrs)</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(node.childNodes.length &gt; 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.compileNode(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }else if(node.nodeType===3){  //\u5982\u679C\u8BE5\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9,\u76F4\u63A5\u8FDB\u884C\u6B63\u5219\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">                let starContent = node.textContent</span></span>
<span class="line"><span style="color:#A6ACCD;">                let reg = /{{\\s*(\\S+)\\s*}}/g  //\u5B9A\u4E49\u6B63\u5219\u5339\u914D\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(reg.test(starContent)){  //\u8FD4\u56DEtrue\uFF0C\u5339\u914D\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">                    node.textContent = starContent.replace(reg,(...arg)=&gt;{  //\u6B63\u5219\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.addEventListener(arg[1],()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            node.textContent = starContent.replace(reg,(...arg)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                                return this.$option.data[arg[1]]</span></span>
<span class="line"><span style="color:#A6ACCD;">                            })</span></span>
<span class="line"><span style="color:#A6ACCD;">                        })</span></span>
<span class="line"><span style="color:#A6ACCD;">                        return this.$option.data[arg[1]]  //\u8FD4\u56DE\u5339\u914D\u51FA\u7684\u7ED3\u679C\u5BF9\u5E94data\u91CC\u7684\u503C\uFF0C\u8FDB\u884C\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">                    })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let myVue = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &quot;Hello Merlin&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        modelData: &quot;\u5475\u5475&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &quot;kkb&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        age: 8,</span></span>
<span class="line"><span style="color:#A6ACCD;">        htmlData: &quot;&lt;strong&gt;\u4F60\u597Dyaboo&lt;/strong&gt;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="proxy" tabindex="-1"><strong>Proxy</strong> <a class="header-anchor" href="#proxy" aria-hidden="true">#</a></h3><ol><li><strong>get() //\u5728\u83B7\u53D6\u6570\u636E\u65F6\u8FDB\u884C\u62E6\u622A</strong></li><li><strong>set(target,key,newValue[, receiver]) //\u5728\u8BBE\u7F6E\u6570\u636E\u65F6\u62E6\u622A\uFF0C\u5982\u679C\u62A5\u9519\u8BB0\u5F97return true</strong></li><li><strong>has(target,key) //\u5224\u65AD\u662F\u5426\u6709\u8BE5\u5C5E\u6027\u65F6</strong></li><li><strong>apply(target,thisArg,argumentsList)//\u7528\u4E8E\u4EE3\u7406\u51FD\u6570\u7684\u6267\u884C\uFF0Ctarget\u5FC5\u987B\u4E3A\u51FD\u6570</strong></li><li><strong>construct(target, argArray) //\u7528\u4E8E\u62E6\u622Anew\u64CD\u4F5C\u7B26,\u4E00\u5B9A\u8981\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</strong></li><li><strong>defineProperty(target, key,descriptor) //\u7528\u4E8E\u62E6\u622AdefineProperty\u64CD\u4F5C\uFF0C\u8FD4\u56DEObject.defineProperty(target, key,descriptor)\u624D\u80FD\u751F\u6548</strong></li><li><strong>deleteProperty(target, key) //\u7528\u4E8E\u62E6\u622A\u5BF9\u8C61\u5C5E\u6027\u7684\u5220\u9664\u64CD\u4F5C</strong></li><li><strong>getOwnPropertyDescriptor(target, key) //\u7528\u4E8E\u62E6\u622AgetOwnPropertyDescriptor\u64CD\u4F5C,\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2Aobject\u6216\u8005undefined</strong></li><li><strong>preventExtensions(target) //\u963B\u6B62\u5BF9\u8C61\u6269\u5C55\u65B0\u5C5E\u6027</strong></li><li><strong>freeze(target) //\u51BB\u7ED3\u5BF9\u8C61\uFF0C\u4E0D\u5141\u8BB8\u6269\u5C55\u4E5F\u4E0D\u5141\u8BB8\u4FEE\u6539</strong><ul><li>\u4E0Econst\u7684\u533A\u522B\uFF1A\u5E38\u91CF\u4E0D\u80FD\u4FEE\u6539\u5C5E\u6027\u503C\uFF0C\u4F46\u53EF\u4EE5\u589E\u52A0\u5C5E\u6027</li></ul></li><li><strong>isExtensible(target) //\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u662F\u53EF\u6269\u5C55\u7684</strong></li><li><strong>getPrototypeOf(target) //\u7528\u4E8E\u62E6\u622A\u5BF9\u8C61\u8C03\u7528getPrototypeOf\u65B9\u6CD5</strong><ul><li><strong>Object.getPrototypeOf // \u67E5\u627E\u5BF9\u8C61\u7684\u539F\u578B\u65B9\u6CD5</strong></li></ul></li><li><strong>setPrototypeOf(target,prototype) //\u7528\u4E8E\u62E6\u622A\u5BF9\u8C61\u8C03\u7528setPrototypeOf\u65B9\u6CD5</strong><ul><li><strong>Object.setPrototypeOf //\u8BBE\u7F6E\u5BF9\u8C61\u7684\u539F\u578B\u65B9\u6CD5</strong></li></ul></li><li><strong>ownKeys(target) <a href="//xn--Object-og8iu25klnbn77g.keys">//\u7528\u4E8E\u62E6\u622AObject.keys</a>()\u64CD\u4F5C</strong></li></ol><h3 id="\u6A21\u5757\u5316\u5F00\u53D1" tabindex="-1">\u6A21\u5757\u5316\u5F00\u53D1 <a class="header-anchor" href="#\u6A21\u5757\u5316\u5F00\u53D1" aria-hidden="true">#</a></h3><ul><li>\u4E00\u79CD\u5904\u7406\u590D\u6742\u7CFB\u7EDF\u5206\u89E3\u4E3A\u66F4\u597D\u7684\u53EF\u7BA1\u7406\u6A21\u5757\u7684\u65B9\u5F0F</li><li>\u4E00\u4E2A\u6A21\u5757\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6</li><li>\u4E00\u4E2A\u6A21\u5757\u6700\u597D\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u529F\u80FD</li><li>\u4E00\u4E2A\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2Adefault\u5BFC\u51FA</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//a.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">merlin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>ES6\u4E2D\u6A21\u5757\u5316\uFF0C\u53EA\u80FD\u5728\u670D\u52A1\u5668\u73AF\u5883\u4E0B\u6267\u884C</li><li>\u522B\u540D\u5BFC\u51FA</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">aName</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5728ES6\u7684\u6A21\u5757\u4E2D\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u53D1\u751F\u51B2\u7A81</li><li>\u5F53\u6211\u4EEC\u5728\u5BFC\u5165\u6A21\u5757\u65F6\uFF0C\u4F1A\u628A\u6A21\u5757\u4E2D\u7684\u4EE3\u7801\u6267\u884C\u4E00\u904D</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5EFA\u8BAE\uFF0C\u628A\u6240\u6709\u4F9D\u8D56\u5BFC\u5165\u653E\u5728\u6A21\u5757\u7684\u6700\u524D\u9762</li><li>\u6309\u9700\u52A0\u8F7D</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">//import(&quot;./a.js&quot;).then((data)=&gt;{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">// 		console.log(data)</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">// })</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6A21\u5757\u5316\u4F18\u70B9 <ol><li>\u9632\u6B62\u4F5C\u7528\u57DF\u6C61\u67D3</li><li>\u63D0\u9AD8\u4EE3\u7801\u7684\u590D\u7528\u6027</li><li>\u7EF4\u62A4\u6210\u672C\u964D\u4F4E</li></ol></li></ul>`,29),e=[o];function t(c,r,i,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
