import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const i=JSON.parse('{"title":"\u8BBE\u8BA1\u6A21\u5F0F\u624B\u518C\u4E4B\u7EC4\u5408\u6A21\u5F0F","description":"","frontmatter":{"title":"\u8BBE\u8BA1\u6A21\u5F0F\u624B\u518C\u4E4B\u7EC4\u5408\u6A21\u5F0F","date":"2018-12-12","permalink":"2018-12-12-composite-pattern"},"headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F\u201C\u7EC4\u5408\u6A21\u5F0F\u201D\uFF1F","slug":"_1-\u4EC0\u4E48\u662F-\u7EC4\u5408\u6A21\u5F0F","link":"#_1-\u4EC0\u4E48\u662F-\u7EC4\u5408\u6A21\u5F0F","children":[]},{"level":2,"title":"2. \u5E94\u7528\u573A\u666F","slug":"_2-\u5E94\u7528\u573A\u666F","link":"#_2-\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"3. \u4EE3\u7801\u5B9E\u73B0","slug":"_3-\u4EE3\u7801\u5B9E\u73B0","link":"#_3-\u4EE3\u7801\u5B9E\u73B0","children":[{"level":3,"title":"3.1 python3 \u5B9E\u73B0","slug":"_3-1-python3-\u5B9E\u73B0","link":"#_3-1-python3-\u5B9E\u73B0","children":[]},{"level":3,"title":"3.2 ES6 \u5B9E\u73B0","slug":"_3-2-es6-\u5B9E\u73B0","link":"#_3-2-es6-\u5B9E\u73B0","children":[]}]},{"level":2,"title":"4. \u53C2\u8003","slug":"_4-\u53C2\u8003","link":"#_4-\u53C2\u8003","children":[]}],"relativePath":"\u8BBE\u8BA1\u6A21\u5F0F/02.\u7ED3\u6784\u578B\u6A21\u5F0F/04.\u7EC4\u5408\u6A21\u5F0F.md","lastUpdated":1670483514000}'),p={name:"\u8BBE\u8BA1\u6A21\u5F0F/02.\u7ED3\u6784\u578B\u6A21\u5F0F/04.\u7EC4\u5408\u6A21\u5F0F.md"},o=l(`<h2 id="_1-\u4EC0\u4E48\u662F-\u7EC4\u5408\u6A21\u5F0F" tabindex="-1">1. \u4EC0\u4E48\u662F\u201C\u7EC4\u5408\u6A21\u5F0F\u201D\uFF1F <a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F-\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>\u7EC4\u5408\u6A21\u5F0F\uFF0C\u5C06\u5BF9\u8C61\u7EC4\u5408\u6210\u6811\u5F62\u7ED3\u6784\u4EE5\u8868\u793A\u201C\u90E8\u5206-\u6574\u4F53\u201D\u7684\u5C42\u6B21\u7ED3\u6784\u3002</p></blockquote><ol><li>\u7528\u5C0F\u7684\u5B50\u5BF9\u8C61\u6784\u9020\u66F4\u5927\u7684\u7236\u5BF9\u8C61\uFF0C\u800C\u8FD9\u4E9B\u5B50\u5BF9\u8C61\u4E5F\u7531\u66F4\u5C0F\u7684\u5B50\u5BF9\u8C61\u6784\u6210</li><li><strong>\u5355\u4E2A\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u8C61\u5BF9\u4E8E\u7528\u6237\u66B4\u9732\u7684\u63A5\u53E3\u5177\u6709\u4E00\u81F4\u6027</strong>\uFF0C\u800C\u540C\u79CD\u63A5\u53E3\u4E0D\u540C\u8868\u73B0\u5F62\u5F0F\u4EA6\u4F53\u73B0\u4E86\u591A\u6001\u6027</li></ol><h2 id="_2-\u5E94\u7528\u573A\u666F" tabindex="-1">2. \u5E94\u7528\u573A\u666F <a class="header-anchor" href="#_2-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u7EC4\u5408\u6A21\u5F0F\u53EF\u4EE5\u5728\u9700\u8981\u9488\u5BF9\u201C\u6811\u5F62\u7ED3\u6784\u201D\u8FDB\u884C\u64CD\u4F5C\u7684\u5E94\u7528\u4E2D\u4F7F\u7528\uFF0C\u4F8B\u5982\u626B\u63CF\u6587\u4EF6\u5939\u3001\u6E32\u67D3\u7F51\u7AD9\u5BFC\u822A\u7ED3\u6784\u7B49\u7B49\u3002</p><h2 id="_3-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">3. \u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#_3-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u7528\u4EE3\u7801<strong>\u6A21\u62DF\u6587\u4EF6\u626B\u63CF\u529F\u80FD</strong>\uFF0C\u5C01\u88C5\u4E86<code>File</code>\u548C<code>Folder</code>\u4E24\u4E2A\u7C7B\u3002\u5728\u7EC4\u5408\u6A21\u5F0F\u4E0B\uFF0C\u7528\u6237\u53EF\u4EE5\u5411<code>Folder</code>\u7C7B\u5D4C\u5957<code>File</code>\u6216\u8005<code>Folder</code>\u6765\u6A21\u62DF\u771F\u5B9E\u7684\u201C\u6587\u4EF6\u76EE\u5F55\u201D\u7684\u6811\u7ED3\u6784\u3002</p><p>\u540C\u65F6\uFF0C\u4E24\u4E2A\u7C7B\u90FD\u5BF9\u5916\u63D0\u4F9B\u4E86<code>scan</code>\u63A5\u53E3\uFF0C<code>File</code>\u4E0B\u7684<code>scan</code>\u662F\u626B\u63CF\u6587\u4EF6\uFF0C<code>Folder</code>\u4E0B\u7684<code>scan</code>\u662F\u8C03\u7528\u5B50\u6587\u4EF6\u5939\u548C\u5B50\u6587\u4EF6\u7684<code>scan</code>\u65B9\u6CD5\u3002\u6574\u4E2A\u8FC7\u7A0B\u91C7\u7528\u7684\u662F<strong>\u6DF1\u5EA6\u4F18\u5148</strong>\u3002</p><h3 id="_3-1-python3-\u5B9E\u73B0" tabindex="-1">3.1 python3 \u5B9E\u73B0 <a class="header-anchor" href="#_3-1-python3-\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u6587\u4EF6\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NotImplementedError</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scan</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u626B\u63CF\u6587\u4EF6\uFF1A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Folder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u6587\u4EF6\u5939\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">files</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scan</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u626B\u63CF\u6587\u4EF6\u5939: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">files</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scan</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    home </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7528\u6237\u6839\u76EE\u5F55</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    folder1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7B2C\u4E00\u4E2A\u6587\u4EF6\u5939</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    folder2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u5939</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    file1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    file2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    file3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u5BF9\u5E94\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    folder1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">file1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    folder2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">file2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    folder2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">file3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u5C06\u6587\u4EF6\u5939\u6DFB\u52A0\u5230\u66F4\u9AD8\u7EA7\u7684\u76EE\u5F55\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">folder1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">folder2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u626B\u63CF\u76EE\u5F55\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">    home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scan</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C<code>$ python main.py</code>, \u6700\u7EC8\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7528\u6237\u6839\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7B2C\u4E00\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\uFF1A1\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7B2C\u4E8C\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\uFF1A2\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\uFF1A3\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-2-es6-\u5B9E\u73B0" tabindex="-1">3.2 ES6 \u5B9E\u73B0 <a class="header-anchor" href="#_3-2-es6-\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u6587\u4EF6\u7C7B</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">File</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6587\u4EF6\u5939\u4E0B\u9762\u4E0D\u80FD\u6DFB\u52A0\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">scan</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u626B\u63CF\u6587\u4EF6: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6587\u4EF6\u5939\u7C7B</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Folder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Folder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">scan</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u626B\u63CF\u6587\u4EF6\u5939: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scan</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> home </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7528\u6237\u6839\u76EE\u5F55</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> folder1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7B2C\u4E00\u4E2A\u6587\u4EF6\u5939</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  folder2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u5939</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> file1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  file2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  file3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3\u53F7\u6587\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u5BF9\u5E94\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">folder1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(file1)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">folder2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(file2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">folder2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(file3)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u6587\u4EF6\u5939\u6DFB\u52A0\u5230\u66F4\u9AD8\u7EA7\u7684\u76EE\u5F55\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(folder1)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(folder2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u626B\u63CF\u76EE\u5F55\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scan</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C<code>$ node main.js</code>\uFF0C\u6700\u7EC8\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7528\u6237\u6839\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7B2C\u4E00\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6: 1\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6\u5939: \u7B2C\u4E8C\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6: 2\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u626B\u63CF\u6587\u4EF6: 3\u53F7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-\u53C2\u8003" tabindex="-1">4. \u53C2\u8003 <a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li>\u300AJavaScript \u8BBE\u8BA1\u6A21\u5F0F\u548C\u5F00\u53D1\u5B9E\u8DF5\u300B</li></ul>`,18),e=[o];function c(t,r,F,D,y,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
