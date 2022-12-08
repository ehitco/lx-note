import{_ as s,o as n,c as a,a as l}from"./app.aec7eb12.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811","slug":"\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811","link":"#\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811","children":[]},{"level":2,"title":"AST \u7684\u751F\u6210","slug":"ast-\u7684\u751F\u6210","link":"#ast-\u7684\u751F\u6210","children":[{"level":3,"title":"\u8BCD\u6CD5\u5206\u6790","slug":"\u8BCD\u6CD5\u5206\u6790","link":"#\u8BCD\u6CD5\u5206\u6790","children":[]},{"level":3,"title":"\u8BED\u6CD5\u5206\u6790","slug":"\u8BED\u6CD5\u5206\u6790","link":"#\u8BED\u6CD5\u5206\u6790","children":[]}]}],"relativePath":"\u524D\u7AEF\u67B6\u6784/\u524D\u7AEF\u5DE5\u7A0B\u5316/AST\u62BD\u8C61\u8BED\u6CD5\u6811.md","lastUpdated":1670483514000}'),o={name:"\u524D\u7AEF\u67B6\u6784/\u524D\u7AEF\u5DE5\u7A0B\u5316/AST\u62BD\u8C61\u8BED\u6CD5\u6811.md"},p=l(`<h2 id="\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811" tabindex="-1">\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u62BD\u8C61\u8BED\u6CD5\u6811" aria-hidden="true">#</a></h2><p>\u5728\u8BED\u8A00\u8F6C\u5316\u8FC7\u7A0B\u4E2D\u7684\u4EA7\u7269\uFF0C\u6D89\u53CA\u5230\u5DE5\u7A0B\u5316\u8BF8\u591A\u73AF\u8282\u7684\u5E94\u7528\u3002</p><p>\u800C\u5728\u8BED\u8A00\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5B9E\u8D28\u4E0A\u5C31\u662F\u5BF9\u5176 AST \u7684\u64CD\u4F5C\uFF0C\u6838\u5FC3\u6B65\u9AA4\u5C31\u662F AST \u4E09\u6B65\u8D70\uFF1A</p><ol><li>Code -&gt; AST (Parse\u89E3\u6790)</li><li>AST -&gt; AST (Transform\u8F6C\u5316)</li><li>AST -&gt; Code (Generate\u751F\u6210)</li></ol><p>\u4E0D\u540C\u7684\u8BED\u8A00\u62E5\u6709\u4E0D\u540C\u7684\u89E3\u6790\u5668\uFF0C\u6BD4\u5982 <code>Javascript</code> \u7684\u89E3\u6790\u5668\u548C <code>CSS</code> \u7684\u89E3\u6790\u5668\u5C31\u5B8C\u5168\u4E0D\u540C\u3002</p><p>\u5BF9\u76F8\u540C\u7684\u8BED\u8A00\uFF0C\u4E5F\u5B58\u5728\u8BF8\u591A\u7684\u89E3\u6790\u5668\uFF0C\u4E5F\u5C31\u4F1A\u751F\u6210\u591A\u79CD AST\uFF0C\u5982 <code>babel</code> \u4E0E <code>espree</code>\u3002</p><p>\u5728 <a href="https://astexplorer.net/" target="_blank" rel="noreferrer">AST Explorer</a>\u4E2D\uFF0C\u5217\u4E3E\u4E86\u8BF8\u591A\u8BED\u8A00\u7684\u89E3\u6790\u5668(Parser)\uFF0C\u53CA\u8F6C\u5316\u5668(Transformer)\u3002</p><h2 id="ast-\u7684\u751F\u6210" tabindex="-1">AST \u7684\u751F\u6210 <a class="header-anchor" href="#ast-\u7684\u751F\u6210" aria-hidden="true">#</a></h2><p>AST \u7684\u751F\u6210\u8FD9\u4E00\u6B65\u9AA4\u88AB\u79F0\u4E3A<strong>\u89E3\u6790(Parser)</strong>\uFF0C\u800C\u8BE5\u6B65\u9AA4\u4E5F\u6709\u4E24\u4E2A\u9636\u6BB5: \u8BCD\u6CD5\u5206\u6790(Lexical Analysis)\u548C\u8BED\u6CD5\u5206\u6790(Syntactic Analysis)\u3002</p><h3 id="\u8BCD\u6CD5\u5206\u6790" tabindex="-1">\u8BCD\u6CD5\u5206\u6790 <a class="header-anchor" href="#\u8BCD\u6CD5\u5206\u6790" aria-hidden="true">#</a></h3><p>\u7528\u4EE5\u5C06\u4EE3\u7801\u8F6C\u5316\u4E3A <code>Token</code> \u6D41\uFF0C\u7EF4\u62A4\u4E00\u4E2A\u5173\u4E8E Token \u7684\u6570\u7EC4\u3002</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// Code</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Token</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">loc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">loc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">loc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>\u8BCD\u6CD5\u5206\u6790\u540E\u7684 Token \u6D41\u4E5F\u6709\u8BF8\u591A\u5E94\u7528\uFF0C\u5982:</p><ol><li>\u4EE3\u7801\u68C0\u67E5\uFF0C\u5982 eslint \u5224\u65AD\u662F\u5426\u4EE5\u5206\u53F7\u7ED3\u5C3E\uFF0C\u5224\u65AD\u662F\u5426\u542B\u6709\u5206\u53F7\u7684 token</li><li>\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u5982 highlight/prism \u4F7F\u4E4B\u4EE3\u7801\u9AD8\u4EAE</li><li>\u6A21\u677F\u8BED\u6CD5\uFF0C\u5982 ejs \u7B49\u6A21\u677F\u4E5F\u79BB\u4E0D\u5F00</li></ol><h3 id="\u8BED\u6CD5\u5206\u6790" tabindex="-1">\u8BED\u6CD5\u5206\u6790 <a class="header-anchor" href="#\u8BED\u6CD5\u5206\u6790" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\u5206\u6790\u5C06 Token \u6D41\u8F6C\u5316\u4E3A\u7ED3\u6784\u5316\u7684 AST\uFF0C\u65B9\u4FBF\u64CD\u4F5C\u3002</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Program</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ExpressionStatement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">expression</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AssignmentExpression</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">operator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Literal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">raw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">sourceType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,17),e=[p];function t(D,c,r,F,y,C){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{i as __pageData,u as default};
