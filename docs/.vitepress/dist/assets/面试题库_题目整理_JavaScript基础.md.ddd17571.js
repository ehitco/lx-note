import{_ as s,o as l,c as n,a}from"./app.31720a63.js";const D=JSON.parse('{"title":"JavaScript\u57FA\u7840","description":"","frontmatter":{},"headers":[],"relativePath":"\u9762\u8BD5\u9898\u5E93/\u9898\u76EE\u6574\u7406/JavaScript\u57FA\u7840.md","lastUpdated":1670480666000}'),p={name:"\u9762\u8BD5\u9898\u5E93/\u9898\u76EE\u6574\u7406/JavaScript\u57FA\u7840.md"},i=a(`<h1 id="javascript\u57FA\u7840" tabindex="-1">JavaScript\u57FA\u7840 <a class="header-anchor" href="#javascript\u57FA\u7840" aria-hidden="true">#</a></h1><ul><li>JS\u57FA\u672C\u7C7B\u578B\uFF1F\u6709\u54EA\u4E9B <ul><li>number\u3001string\u3001<strong>symbol</strong>\u3001boolean\u3001<strong>bigint</strong>\u3001null\u3001undefined</li><li>\u5B58\u50A8\u7C7B\u578B <ul><li>\u5F15\u7528\u7C7B\u578B\u2014\u2014\u5F15\u7528\u5B58\u5728\u6808\uFF0C\u5185\u5BB9\u5B58\u5728\u5806 <ul><li>\u57FA\u672C\u7C7B\u578B\u5927\u5C0F\u56FA\u5B9A\uFF0C\u5360\u7528\u7A7A\u95F4\u5C0F</li><li>\u5F15\u7528\u7C7B\u578B\u5927\u5C0F\u4E0D\u56FA\u5B9A\uFF0C\u5F71\u54CD\u6027\u80FD</li></ul></li><li>\u503C\u7C7B\u578B\u2014\u2014\u6808</li></ul></li></ul></li><li>\u95ED\u5305 <ul><li>\u7406\u89E3\uFF1A\u4E00\u4E2A\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF\u7684\u51FD\u6570</li><li>\u4F7F\u7528\u573A\u666F\uFF1A <ul><li>\u4FDD\u62A4\u79C1\u6709\u53D8\u91CF\uFF0C\u4E0D\u4F1A\u88AB\u56DE\u6536</li><li>\u51FD\u6570 curry \u5316</li><li>\u9632\u6296\u8282\u6D41</li><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF08IIFE\uFF09</li></ul></li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// 1\u79D2\u4E4B\u540E\u8F93\u51FA10\u4E2A10</span></span>
<span class="line"></span></code></pre></div><ul><li><p>\u95ED\u5305\u7ECF\u5178\u9898</p><ul><li>Let</li><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570</li><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570 + setTimeout\u7B2C\u4E09\u4E2A\u53C2\u6570</li><li>\u95ED\u5305\u95EE\u9898\uFF1A\u5185\u5B58\u6CC4\u6F0F</li></ul></li><li><p>ES6</p><ul><li>assign\u3001create\u3001keys\u3001values\u3001entries</li><li>Promise <ul><li>\u4F20\u7EDF\u7684\u5F02\u6B65\u7F16\u7A0B\uFF1A\u56DE\u8C03\u51FD\u6570\u548C\u4E8B\u4EF6 <ul><li>\u4E8B\u4EF6\u4E00\u65E6\u9519\u8FC7\uFF0C\u518D\u53BB\u76D1\u542C\uFF0C\u62FF\u4E0D\u5230\u7ED3\u679C</li><li>\u4F46\u662Fpromise\u7684\u7ED3\u679C\u662F\u4E00\u76F4\u5B58\u5728\u7684\uFF0C\u540E\u9762\u53BBthen\uFF0C\u8FD8\u662F\u53EF\u4EE5\u62FF\u5230\u7ED3\u679C</li></ul></li><li>Promise \u662F\u627F\u8BFA\u7684\u610F\u601D\uFF0C\u72B6\u6001\u4E00\u65E6\u786E\u5B9A\u5C31\u4E0D\u80FD\u6539\u53D8\u3002\u662F\u4E00\u79CD\u89E3\u51B3\u5F02\u6B65\u7F16\u7A0B\u7684\u65B9\u6848\u3002</li><li>\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u95EE\u9898</li><li>\u7279\u70B9 <ul><li>\u72B6\u6001\u4E00\u65E6\u786E\u5B9A\u5C31\u4E0D\u80FD\u6539\u53D8</li><li>\u72B6\u6001\u4E0D\u5F71\u54CD\u5916\u90E8\uFF0C\u5916\u90E8\u6355\u83B7\u4E0D\u5230\u9519\u8BEF</li><li>\u652F\u6301\u94FE\u5F0F\u8C03\u7528</li><li>\u65E0\u6CD5\u5224\u65AD\u5230\u54EA\u4E2A\u9636\u6BB5</li><li>\u65E0\u6CD5\u53D6\u6D88</li></ul></li><li>API <ul><li>All</li><li>Race\uFF1A\u72B6\u6001\u7531\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u7684\u7ED3\u679C\u51B3\u5B9A\uFF0C\u4E0D\u7BA1resolve\u8FD8\u662Freject</li><li>Resolve</li><li>Reject</li><li>Finally</li><li>Catch</li><li>any</li></ul></li></ul></li><li>Proxy</li><li>\u89E3\u6784\u8FD0\u7B97\u7B26\u3001\u5C55\u5F00\u8FD0\u7B97\u7B26\u3001\u5269\u4F59\u53C2\u6570</li><li>Reduce\u3001at\u3001includes\u3001isArray</li><li>Let\u3001const <ul><li>\u751F\u6210\u5757\u4F5C\u7528\u57DF\uFF0Cconst\u503C\u4E0D\u53EF\u53D8</li><li>var\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF08\u51FD\u6570\u4F18\u5148\u7EA7\u5927\u4E8E\u53D8\u91CF\uFF09\uFF0C\u53D8\u91CF\u540D\u63D0\u5347\uFF0C\u503C\u4E0D\u63D0\u5347</li><li>let\u3001const\u6682\u65F6\u6027\u6B7B\u533A</li></ul></li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(a, b) // 12 merlin</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 12, b =&#39;merlin&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(){ </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a, b) </span></span>
<span class="line"><span style="color:#A6ACCD;">    var a = b = 13 </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a, b) </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">foo() // 13 13 13 13</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b) // 12 merlin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u672A\u58F0\u660E\u9519\u8BEF Uncaught ReferenceError: \u53D8\u91CF is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u8F93\u51FA\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    undefined undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">    undefined &quot;merlin&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    13 13</span></span>
<span class="line"><span style="color:#A6ACCD;">    12 13</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>Class</p></li><li><p>Set\u3001Map\u5BF9\u8C61\uFF08object \u548C Map \u7684\u533A\u522B\uFF09</p><ul><li>Map\u548CWeakMap\u7684\u533A\u522B</li></ul></li><li><p>for...in\\for...of</p></li><li><p>async\u3001await</p></li><li><p>\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B</p><ul><li>\u7BAD\u5934\u51FD\u6570 <ul><li>\u6CA1\u6709\u81EA\u5DF1\u7684 prototype</li><li>\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570</li><li>\u4E5F\u6CA1\u6709\u81EA\u5DF1\u7684 argument \u5BF9\u8C61</li><li>\u4E0D\u80FD\u7528\u4F5C generator \u51FD\u6570</li><li>this \u6307\u5411\u5B9A\u4E49\u65F6\u7684\u4E0A\u4E0B\u6587</li><li>\u4E0D\u80FD\u901A\u8FC7 call\u3001apply\u3001bind \u6539\u53D8 this</li><li>\u7B80\u5316\u56DE\u8C03\u51FD\u6570\u5199\u6CD5\uFF1A() =&gt; {},() =&gt; xxx, xxx =&gt; {}</li></ul></li><li>\u666E\u901A\u51FD\u6570 <ul><li>this\u6307\u5411\u53D6\u51B3\u4E8E\u8C03\u7528\u65B9\u5F0F <ul><li>new -&gt; \u6307\u5411new\u51FA\u6765\u7684\u5BF9\u8C61</li><li><a href="http://obj.xxx" target="_blank" rel="noreferrer">obj.xxx</a>() -&gt; \u6307\u5411obj</li><li>call\u3001apply\u3001bind -&gt; \u6307\u5B9A\u7684this</li><li>\u9ED8\u8BA4\uFF0C\u5168\u5C40\u5BF9\u8C61\uFF1B\u4E25\u683C\u6A21\u5F0F\u4E0B\u4E3Aundefined</li></ul></li></ul></li></ul></li><li><p>\u6A21\u677F\u5B57\u7B26\u4E32</p></li><li><p>\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B</p><ul><li>\u8C03\u7528\u5185\u7F6E\u7684<code>Symbol.toPrimitive</code>\u51FD\u6570\uFF0C\u5982\u679C\u5B58\u5728\u7684\u8BDD\uFF0C\u8C03\u7528\u4F18\u5148\u7EA7\u6700\u9AD8</li><li>\u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A<code>hint</code>\u53C2\u6570\uFF0C\u8868\u793A\u8981\u8F6C\u6362\u5230\u7684\u539F\u59CB\u503C\u7684\u9884\u671F\u7C7B\u578B</li><li>\u53D6\u503C\u662F <code>number</code>\u3001<code>string</code> \u548C <code>default</code> \u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u3002</li><li>\u5426\u5219\uFF0C\u5982\u679C hint \u662F <code>string</code> \u2014\u2014 \u5C1D\u8BD5 <code>obj.toString()</code> \u548C <code>obj.valueOf()</code>\uFF0C\u65E0\u8BBA\u54EA\u4E2A\u5B58\u5728\u3002</li><li>\u5426\u5219\uFF0C\u5982\u679C hint \u662F <code>number</code> \u6216 <code>default</code> \u2014\u2014 \u5C1D\u8BD5 <code>obj.valueOf()</code> \u548C <code>obj.toString()</code>\uFF0C\u65E0\u8BBA\u54EA\u4E2A\u5B58\u5728\u3002</li><li>\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u4E3A\u4E86\u4FBF\u4E8E<code>\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\u6216\u8C03\u8BD5</code>\uFF0C\u5BF9\u4E8E\u5E94\u8BE5\u8FD4\u56DE\u4E00\u79CD\u201C\u53EF\u8BFB\u6027\u597D\u201D\u7684\u5BF9\u8C61\u7684\u8868\u793A\u5F62\u5F0F\u7684\u8F6C\u6362\uFF0C\u53EA\u9700\u8981\u5B9E\u73B0 <code>obj.toString()</code> \u4F5C\u4E3A\u5B57\u7B26\u4E32\u8F6C\u6362\u7684\u201C\u5168\u80FD\u201D\u65B9\u6CD5\u5C31\u8DB3\u591F\u4E86\u3002</li></ul></li><li><p><code>[] == ![]</code>\u548C <code>{} == !{}</code></p></li><li><p>\u5783\u573E\u56DE\u6536\u673A\u5236</p><ul><li>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5 <ul><li>\u5783\u573E\u6536\u96C6\u5668\u5728\u8FD0\u884C\u65F6\u4F1A\u7ED9\u5185\u5B58\u4E2D\u7684\u6240\u6709\u53D8\u91CF\u90FD\u52A0\u4E0A\u4E00\u4E2A\u6807\u8BB0\uFF0C\u5047\u8BBE\u5185\u5B58\u4E2D\u6240\u6709\u5BF9\u8C61\u90FD\u662F\u5783\u573E\uFF0C\u5168\u6807\u8BB0\u4E3A0</li></ul></li><li>\u7136\u540E\u4ECE\u5404\u4E2A\u6839\u5BF9\u8C61\u5F00\u59CB\u904D\u5386\uFF0C\u628A\u4E0D\u662F\u5783\u573E\u7684\u8282\u70B9\u6539\u62101 <ul><li>\u6E05\u7406\u6240\u6709\u6807\u8BB0\u4E3A0\u7684\u5783\u573E\uFF0C\u9500\u6BC1\u5E76\u56DE\u6536\u5B83\u4EEC\u6240\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4</li><li>\u6700\u540E\uFF0C\u628A\u6240\u6709\u5185\u5B58\u4E2D\u5BF9\u8C61\u6807\u8BB0\u4FEE\u6539\u4E3A0\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u5783\u573E\u56DE\u6536</li></ul></li><li>\u5F15\u7528\u8BA1\u7B97\u7B97\u6CD5 <ul><li>\u5F53\u58F0\u660E\u4E86\u4E00\u4E2A\u53D8\u91CF\u5E76\u4E14\u5C06\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u8D4B\u503C\u7ED9\u8BE5\u53D8\u91CF\u7684\u65F6\u5019\u8FD9\u4E2A\u503C\u7684\u5F15\u7528\u6B21\u6570\u5C31\u4E3A 1</li><li>\u5982\u679C\u540C\u4E00\u4E2A\u503C\u53C8\u88AB\u8D4B\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5F15\u7528\u6570\u52A0 1</li><li>\u5982\u679C\u8BE5\u53D8\u91CF\u7684\u503C\u88AB\u5176\u4ED6\u7684\u503C\u8986\u76D6\u4E86\uFF0C\u5219\u5F15\u7528\u6B21\u6570\u51CF 1</li><li>\u5F53\u8FD9\u4E2A\u503C\u7684\u5F15\u7528\u6B21\u6570\u53D8\u4E3A 0 \u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u6CA1\u6709\u53D8\u91CF\u5728\u4F7F\u7528\uFF0C\u8FD9\u4E2A\u503C\u6CA1\u6CD5\u88AB\u8BBF\u95EE\u4E86\uFF0C\u56DE\u6536\u7A7A\u95F4\uFF0C\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5728\u8FD0\u884C\u7684\u65F6\u5019\u6E05\u7406\u6389\u5F15\u7528\u6B21\u6570\u4E3A 0 \u7684\u503C\u5360\u7528\u7684\u5185\u5B58</li><li>\u5BF9\u8C61\u7684\u5FAA\u73AF\u5F15\u7528\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F</li></ul></li></ul></li><li><p>\u4E8B\u4EF6\u5FAA\u73AF</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(&#39;script start&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">async function async1() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  await async2()</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;async1 end&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">async function async2() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;async2 end&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">async1()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise((resolve)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;promise in setTimeout&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).then((res)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;setTimeout&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;Promise&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;promise2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;script end&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">script start</span></span>
<span class="line"><span style="color:#A6ACCD;">async2 end</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">script end</span></span>
<span class="line"><span style="color:#A6ACCD;">async1 end</span></span>
<span class="line"><span style="color:#A6ACCD;">promise1</span></span>
<span class="line"><span style="color:#A6ACCD;">promise2</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout</span></span>
<span class="line"><span style="color:#A6ACCD;">promise in setTimeout</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>JS\u6700\u5927\u5B89\u5168\u6574\u6570\uFF0CIEEE75\u6807\u51C6\uFF0C</li><li>on\u548CaddEventListen</li><li>\u7C7B\u6570\u7EC4\u548C\u53EF\u8FED\u4EE3\u6570\u7EC4\uFF0C\u5982\u4F55\u8F6C\u5316\u4E3A\u6570\u7EC4</li><li>\u521B\u5EFA\u5BF9\u8C61\u7684\u65B9\u5F0F</li><li>get\u548Cpost\u7684\u533A\u522B</li><li>isNaN\u548CNumber.isNaN</li><li>new\u7684\u6267\u884C\u6D41\u7A0B</li><li>Proxy\u7684\u4F7F\u7528\uFF0C\u5BF9\u6BD4Object.defineProperty</li><li>\u6A21\u5757\u5316\u65B9\u6848\u5BF9\u6BD4\uFF08cjs\u3001amd\u3001umd\u3001esm\uFF09</li><li>\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u5C5E\u4E8E\u67D0\u4E2A\u7C7B</li><li>\u5BF9\u539F\u578B\u3001\u539F\u578B\u94FE\u7684\u7406\u89E3</li><li>\u5BF9\u95ED\u5305\u7684\u7406\u89E3</li><li>call\u548Capply\u7684\u533A\u522B</li><li>\u5BF9\u8C61\u521B\u5EFA\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B</li><li>\u5BF9\u8C61\u7EE7\u627F\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B</li><li>\u54CD\u5E94\u5F0F\u548C\u53CC\u5411\u7ED1\u5B9A\u7684\u533A\u5206</li></ul>`,8),e=[i];function o(c,t,r,C,A,y){return l(),n("div",null,e)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
