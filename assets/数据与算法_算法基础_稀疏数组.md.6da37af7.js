import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const i=JSON.parse('{"title":"\u7A00\u758F\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4ECB\u7ECD","slug":"\u57FA\u672C\u4ECB\u7ECD","link":"#\u57FA\u672C\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0\uFF08Java\uFF09","slug":"\u4EE3\u7801\u5B9E\u73B0-java","link":"#\u4EE3\u7801\u5B9E\u73B0-java","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u7A00\u758F\u6570\u7EC4.md","lastUpdated":1670483514000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u7B97\u6CD5\u57FA\u7840/\u7A00\u758F\u6570\u7EC4.md"},o=l(`<h1 id="\u7A00\u758F\u6570\u7EC4" tabindex="-1">\u7A00\u758F\u6570\u7EC4 <a class="header-anchor" href="#\u7A00\u758F\u6570\u7EC4" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">\u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5F53\u6570\u7EC4\u5927\u90E8\u5206\u5143\u7D20\u4E3A0\u6216\u8005\u540C\u4E00\u4E2A\u503C\u65F6\uFF0C\u7528\u7A00\u758F\u6570\u7EC4\u6765\u4FDD\u5B58\u3002</p><ul><li>\u5904\u7406\u65B9\u6CD5\uFF1A <ul><li>\u8BB0\u5F55\u884C\u6570\u3001\u5217\u6570\uFF0C\u6709\u591A\u5C11\u4E2A\u4E0D\u540C\u7684\u503C\u3002</li><li>\u628A\u4E0D\u540C\u503C\u7684\u5143\u7D20\u7684\u884C\u3001\u5217\u3001\u503C\u8BB0\u5F55\u5728\u4E00\u4E2A\u5C0F\u89C4\u6A21\u7684\u6570\u7EC4\u4E2D\uFF0C\u7F29\u5C0F\u7A0B\u5E8F\u7684\u89C4\u6A21</li></ul></li></ul><h2 id="\u4EE3\u7801\u5B9E\u73B0-java" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0\uFF08Java\uFF09 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-java" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">com</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">merlin</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">spaesearray</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SparseArray</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u521B\u5EFA\u4E00\u4E2A\u539F\u59CB\u7684\u4E8C\u7EF4\u6570\u7EC411*11</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//0\uFF1A\u8868\u793A\u6CA1\u6709\u68CB\u5B50\uFF0C1\u8868\u793A\u9ED1\u5B50\uFF0C2\u8868\u793A\u84DD\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[][]</span><span style="color:#A6ACCD;"> chessArray1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u539F\u59CB\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> chessArray1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\t</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u5C06\u4E8C\u7EF4\u6570\u7EC4 \u8F6C \u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//1\u3001\u5148\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4 \u5F97\u5230\u975E\u96F6\u6570\u636E\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sum</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//2\u3001\u521B\u5EFA\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[][]</span><span style="color:#A6ACCD;"> sparseArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u7ED9\u7A00\u758F\u6570\u7EC4\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5C06\u975E0\u503C\u5B58\u8FDB\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//count\u7528\u4E8E\u8BB0\u5F55\u7B2C\u51E0\u4E2A\u975E0\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> chessArray1</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u8F93\u51FA\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F97\u5230\u7A00\u758F\u6570\u7EC4\u4E3A\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u5C06\u7A00\u758F\u6570\u7EC4\u6062\u590D\u79F0\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//1\u3001\u5148\u8BFB\u53D6\u7B2C\u4E00\u884C\uFF0C\u6839\u636E\u7B2C\u4E00\u884C\u7684\u6570\u636E\uFF0C\u521B\u5EFA\u539F\u59CB\u7684\u4E8C\u7EF4\u6570\u7EC4</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//2\u3001\u5728\u8BFB\u53D6\u7A00\u758F\u6570\u7EC4\u540E\u7684\u51E0\u884C\u6570\u636E\uFF0C\u5E76\u8D4B\u503C\u7ED9\u539F\u59CB\u7684\u4E8C\u7EF4\u6570\u7EC4\u5373\u53EF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[][]</span><span style="color:#A6ACCD;"> chessArray2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]][</span><span style="color:#A6ACCD;">sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]];</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            chessArray2</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]][</span><span style="color:#A6ACCD;">sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sparseArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u8F93\u51FA\u6062\u590D\u540E\u7684\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6062\u590D\u7684\u539F\u59CB\u6570\u7EC4\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> chessArray2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\t</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function D(r,t,c,y,F,C){return n(),a("div",null,e)}const u=s(p,[["render",D]]);export{i as __pageData,u as default};
