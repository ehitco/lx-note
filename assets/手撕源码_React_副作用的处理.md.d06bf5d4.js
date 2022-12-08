import{_ as s,o as a,c as n,a as l}from"./app.aec7eb12.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":2,"title":"useLayoutEffect","slug":"uselayouteffect","link":"#uselayouteffect","children":[]},{"level":2,"title":"useMemo","slug":"usememo","link":"#usememo","children":[]},{"level":2,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[]}],"relativePath":"\u624B\u6495\u6E90\u7801/React/\u526F\u4F5C\u7528\u7684\u5904\u7406.md","lastUpdated":1670483514000}'),p={name:"\u624B\u6495\u6E90\u7801/React/\u526F\u4F5C\u7528\u7684\u5904\u7406.md"},o=l(`<p>[\u6587\u732E\u94FE\u63A5](<a href="https://ijpqg5zm8j.feishu.cn/docs/doccnf8zVMcqwwjw6TWz5SnoUmf#hX0qpF" target="_blank" rel="noreferrer">https://ijpqg5zm8j.feishu.cn/docs/doccnf8zVMcqwwjw6TWz5SnoUmf#hX0qpF</a></p><h2 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-hidden="true">#</a></h2><p>useEffect \u4F20\u5165\u7684\u56DE\u8C03\u4F1A\u5728\u6BCF\u6B21\u6E32\u67D3\u751F\u6548\u4E4B\u540E\u6267\u884C\u3002\u5E38\u89C1\u7684\u7528\u6CD5\u6709\uFF1A</p><ol><li>AJAX \u8BF7\u6C42</li><li>\u52A8\u753B\u6548\u679C</li><li>\u89E6\u53D1\u6570\u636E\u540C\u6B65</li></ol><h4 id="ajax-\u8BF7\u6C42\u8303\u4F8B" tabindex="-1">AJAX \u8BF7\u6C42\u8303\u4F8B <a class="header-anchor" href="#ajax-\u8BF7\u6C42\u8303\u4F8B" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">usePageData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">pageIndex</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pageIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">loading</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setLoading</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setData</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canceled</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7528\u6765\u6807\u8BB0\u662F\u5426\u5F02\u6B65\u56DE\u8C03\u5DF2\u8FC7\u671F</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setLoading</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">fetchData</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pageIndex</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">canceled</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">setLoading</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">setData</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canceled</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">pageIndex</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#676E95;">// \u53EA\u6709\u5728 pageIndex \u53D8\u66F4\u7684\u65F6\u5019\u53D1\u8D77\u8BF7\u6C42</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loading</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u51FD\u6570\u4EE5\u9A7C\u5CF0\u5F62\u5F0F\u547D\u540D\uFF0C\u4EE5 use \u5F00\u5934\uFF0CReact \u4E2D\uFF0C\u8FD9\u7C7B\u51FD\u6570\u6211\u4EEC\u79F0\u4E4B\u4E3A hook \u7EC4\u4EF6\u3002\u4E0E Component \u7EC4\u4EF6\u76F8\u6BD4\uFF0Chook \u7EC4\u4EF6\u66F4\u8D34\u8FD1\u666E\u901A\u51FD\u6570\uFF0C\u5B83\u5BF9\u4E8E\u5165\u51FA\u53C2\u6CA1\u6709\u4EFB\u4F55\u9650\u5236\u3002hook \u7EC4\u4EF6\u66F4\u50CF\u662F\u9762\u5411\u8FC7\u7A0B\u7F16\u7A0B\u4E2D\u7684\u4E00\u6BB5\u4EE3\u7801\u3002</p><p>useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08\u901A\u5E38\u79F0\u4E4B\u4E3A dependencies\uFF0C\u7B80\u79F0 deps\uFF09\uFF0C\u58F0\u660E\u6211\u4EEC\u53EA\u6839\u636E pageIndex \u662F\u5426\u53D8\u66F4\uFF0C\u6765\u51B3\u5B9A effect \u662F\u5426\u6267\u884C\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u628A\u6240\u6709 effect \u4E2D\u7528\u5230\u7684\u95ED\u5305\u53D8\u91CF\uFF0C\u6DFB\u52A0\u5728 deps \u6570\u7EC4\u4E2D\u3002</p><h2 id="uselayouteffect" tabindex="-1">useLayoutEffect <a class="header-anchor" href="#uselayouteffect" aria-hidden="true">#</a></h2><p>useLayoutEffect \u548C useEffect \u7684\u4F20\u53C2\u4E00\u81F4\uFF0C\u4F46\u6709\u4EE5\u4E0B\u533A\u522B</p><ol><li>\u6267\u884C\u65F6\u673A\u4E0D\u540C\u3002useLayoutEffect \u7684\u5165\u53C2\u51FD\u6570\u4F1A\u5728 react \u66F4\u65B0 DOM \u6811\u540E\u540C\u6B65\u8C03\u7528\u3002useEffect \u4E3A\u5F02\u6B65\u8C03\u7528</li><li>useLayoutEffect \u5728 development \u6A21\u5F0F\u4E0B SSR \u4F1A\u6709\u8B66\u544A\u26A0\uFE0F</li></ol><p>\u901A\u5E38\u60C5\u51B5\u4E0B useLayoutEffect \u4F1A\u7528\u5728\u505A\u52A8\u6548\u548C\u8BB0\u5F55 layout \u7684\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u3002\u4E00\u822C\u4E0D\u9700\u8981\u4F7F\u7528 useLayoutEffect\u3002</p><h2 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-hidden="true">#</a></h2><p>useMemo \u4E3B\u8981\u6709\u4E24\u4E2A\u4F5C\u7528\uFF1A</p><ol><li>\u7F13\u5B58\u4E00\u4E9B\u8017\u65F6\u8BA1\u7B97\uFF0C\u901A\u8FC7\u58F0\u660E\u8BA1\u7B97\u7ED3\u679C\u7684\u4F9D\u8D56\u662F\u5426\u53D8\u66F4\uFF0C\u6765\u91CD\u7528\u4E0A\u6B21\u8BA1\u7B97\u7ED3\u679C</li><li>\u4FDD\u8BC1\u5F15\u7528\u4E0D\u53D8\uFF0C\u9488\u5BF9\u4E0B\u6E38\u4F7F\u7528 React.memo \u7684\u7EC4\u4EF6\u8FDB\u884C\u6027\u80FD\u4F18\u5316\uFF08useCallback \u4E5F\u6709\u4E00\u6837\u7684\u4F5C\u7528\uFF09</li></ol><p>\u6BD4\u5982\uFF0C\u8BA1\u7B97\u8017\u65F6\u7684 fibonacci \u6570\u5217\uFF0C\u5C31\u53EF\u4EE5\u7528 useMemo \u6765\u4F18\u5316\u5728 n \u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E8C\u6B21\u6E32\u67D3\u7684\u6027\u80FD\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return fibonacci(props.n)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, [props.n]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="usecallback" tabindex="-1">useCallback <a class="header-anchor" href="#usecallback" aria-hidden="true">#</a></h2><p>useCallback \u662F\u7B80\u5316\u7248\u7684 useMemo\uFF0C\u65B9\u4FBF\u7F13\u5B58\u51FD\u6570\u5F15\u7528\u3002</p>`,19),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
