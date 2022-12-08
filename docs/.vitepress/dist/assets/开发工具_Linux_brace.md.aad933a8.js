import{_ as s,o as n,c as a,a as e}from"./app.31720a63.js";const d=JSON.parse('{"title":"brace","description":"","frontmatter":{},"headers":[],"relativePath":"\u5F00\u53D1\u5DE5\u5177/Linux/brace.md","lastUpdated":1670480666000}'),l={name:"\u5F00\u53D1\u5DE5\u5177/Linux/brace.md"},p=e(`<h1 id="brace" tabindex="-1">brace <a class="header-anchor" href="#brace" aria-hidden="true">#</a></h1><p>\u7528\u4EE5\u6269\u5C55\u96C6\u5408\u3001\u6570\u7EC4\uFF0C\u6709\u4EE5\u4E0B\u8BED\u6CD5\uFF1A</p><ul><li><code>set</code>\uFF1A<code>{a,b,c}</code></li><li><code>range</code>\uFF1A<code>{1..10}</code>\uFF0C<code>{01..10}</code></li><li><code>step</code>\uFF1A<code>{1..10..2}</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {a,b,c}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># range: \u8F93\u51FA 01 \u5230 10</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {01..10}</span></span>
<span class="line"><span style="color:#A6ACCD;">01 02 03 04 05 06 07 08 09 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># step: \u8F93\u51FA 1 \u5230 10\uFF0C\u4F46\u662F\u6BCF\u4E00\u6B65\u9700\u8981\u81EA\u589E 2</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {1..10..2}</span></span>
<span class="line"><span style="color:#A6ACCD;">1 3 5 7 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># step: \u8F93\u51FA 1 \u5230 10\uFF0C\u4F46\u662F\u6BCF\u4E00\u6B65\u9700\u8981\u81EA\u589E 3</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {1..10..3}</span></span>
<span class="line"><span style="color:#A6ACCD;">1 4 7 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># step: \u8F93\u51FA 10 \u5230 1\uFF0C\u4F46\u662F\u6BCF\u4E00\u6B65\u9700\u8981\u81EA\u51CF 2</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {10..1..2}</span></span>
<span class="line"><span style="color:#A6ACCD;">10 8 6 4 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> {a..z}</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f g h i j k l m n o p q r s t u v w x y z</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u6B64\u6279\u91CF\u64CD\u4F5C\u5C31\u5F88\u7B80\u5355\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5217\u51FA\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u7684 json \u4E0E md \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ls -lah {</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.json,</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.md}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u521B\u5EFA a.js \u5230 z.js 26\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">$ touch {a..z}.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ ls </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.js</span></span>
<span class="line"><span style="color:#A6ACCD;">a.js  c.js  e.js  g.js  i.js  k.js  m.js  o.js  q.js  s.js  u.js  w.js  y.js</span></span>
<span class="line"><span style="color:#A6ACCD;">b.js  d.js  f.js  h.js  j.js  l.js  n.js  p.js  r.js  t.js  v.js  x.js  z.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u751F\u6210\u5F00\u5934\u662Ftest\u7684\uFF0C\u6570\u5B57\u90E8\u5206\u4ECE001\u5230099\uFF0C\u6B65\u957F\u4E3A2\u7684json\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">$ touch test{001..099..2}.json</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ls </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test001.json  test015.json  test029.json  test043.json  test057.json  test071.json  test085.json  test099.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test003.json  test017.json  test031.json  test045.json  test059.json  test073.json  test087.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test005.json  test019.json  test033.json  test047.json  test061.json  test075.json  test089.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test007.json  test021.json  test035.json  test049.json  test063.json  test077.json  test091.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test009.json  test023.json  test037.json  test051.json  test065.json  test079.json  test093.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test011.json  test025.json  test039.json  test053.json  test067.json  test081.json  test095.json</span></span>
<span class="line"><span style="color:#A6ACCD;">test013.json  test027.json  test041.json  test055.json  test069.json  test083.json  test097.json</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207222356249.png" alt=""></p>`,7),o=[p];function t(c,r,j,A,i,C){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{d as __pageData,D as default};
