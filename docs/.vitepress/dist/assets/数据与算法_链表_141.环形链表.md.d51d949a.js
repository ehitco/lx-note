import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u9898","slug":"\u89E3\u9898","link":"#\u89E3\u9898","children":[]},{"level":2,"title":"\u611F\u60F3","slug":"\u611F\u60F3","link":"#\u611F\u60F3","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u94FE\u8868/141.\u73AF\u5F62\u94FE\u8868.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u94FE\u8868/141.\u73AF\u5F62\u94FE\u8868.md"},o=l(`<h2 id="\u89E3\u9898" tabindex="-1">\u89E3\u9898 <a class="header-anchor" href="#\u89E3\u9898" aria-hidden="true">#</a></h2><p>\u4F60\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF\u3002</p><p>\u5982\u679C\u94FE\u8868\u4E2D\u6709\u67D0\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u8DDF\u8E2A next \u6307\u9488\u518D\u6B21\u5230\u8FBE\uFF0C\u5219\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\u3002 \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u8BC4\u6D4B\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002\u6CE8\u610F\uFF1Apos \u4E0D\u4F5C\u4E3A\u53C2\u6570\u8FDB\u884C\u4F20\u9012 \u3002\u4EC5\u4EC5\u662F\u4E3A\u4E86\u6807\u8BC6\u94FE\u8868\u7684\u5B9E\u9645\u60C5\u51B5\u3002</p><p>\u5982\u679C\u94FE\u8868\u4E2D\u5B58\u5728\u73AF \uFF0C\u5219\u8FD4\u56DE true \u3002 \u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</p><p><strong>\u54C8\u5E0C\u8868\u5B9E\u73B0</strong></p><p>\u904D\u5386\u6240\u6709\u8282\u70B9\uFF0C\u6BCF\u6B21\u904D\u5386\u5230\u4E00\u4E2A\u8282\u70B9\u65F6\uFF0C\u5224\u65AD\u8BE5\u8282\u70B9\u6B64\u524D\u662F\u5426\u88AB\u8BBF\u95EE\u8FC7\u3002</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hasCycle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u65F6\u95F4\u590D\u6742\u5EA6 O(n),\u6700\u574F\u9700\u8981\u904D\u5386\u6574\u4E2A\u94FE\u8868</p><p>\u7A7A\u95F4\u590D\u6742\u5EA6 O(n),\u6700\u574F\u60C5\u51B5\u4E0B\u6211\u4EEC\u9700\u8981\u5C06\u6BCF\u4E2A\u8282\u70B9\u63D2\u5165\u5230\u54C8\u5E0C\u8868\u4E2D\u4E00\u6B21</p><p><strong>\u5FEB\u6162\u6307\u9488</strong></p><p><a href="https://leetcode.cn/problems/linked-list-cycle/solutions/440042/huan-xing-lian-biao-by-leetcode-solution/" target="_blank" rel="noreferrer">\u9898\u89E3\u94FE\u63A5</a></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//\u5FEB\u6162\u6307\u9488</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hasCycle3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cur2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u5982\u679C\u5FEB\u6307\u9488\u662F\u6700\u540E\u4E00\u4E2A\u4E86 \u8BF4\u660E\u6CA1\u6709\u73AF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">cur2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u5982\u679C\u9047\u5230\u4E86 \u8BF4\u660E\u6709\u73AF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cur1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cur1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cur2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u611F\u60F3" tabindex="-1">\u611F\u60F3 <a class="header-anchor" href="#\u611F\u60F3" aria-hidden="true">#</a></h2><p>\u54C8\u5E0C\u8868\u6211\u5012\u662F\u60F3\u51FA\u6765\u4E86 \u5FEB\u6162\u6307\u9488\u786E\u5B9E\u5DE7\u5999</p>`,14),e=[o];function t(c,r,F,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
