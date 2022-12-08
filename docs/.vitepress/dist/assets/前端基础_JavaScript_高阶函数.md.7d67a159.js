import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const h=JSON.parse('{"title":"\u9AD8\u9636\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012","slug":"\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012","link":"#\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012","children":[]},{"level":2,"title":"\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA","slug":"\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA","link":"#\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA","children":[]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/JavaScript/\u9AD8\u9636\u51FD\u6570.md","lastUpdated":1670480666000}'),p={name:"\u524D\u7AEF\u57FA\u7840/JavaScript/\u9AD8\u9636\u51FD\u6570.md"},e=l(`<h1 id="\u9AD8\u9636\u51FD\u6570" tabindex="-1">\u9AD8\u9636\u51FD\u6570 <a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u6EE1\u8DB3\u4E0B\u5217\u6761\u4EF6\u4E4B\u4E00\u7684\u51FD\u6570\u53EF\u4EE5\u79F0\u4E3A\u9AD8\u9636\u51FD\u6570\uFF1A</p><ul><li>\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012</li><li>\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA</li></ul><h2 id="\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012" tabindex="-1">\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012 <a class="header-anchor" href="#\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a></h2><h4 id="\u60C5\u51B5\u4E00-\u56DE\u8C03\u51FD\u6570" tabindex="-1">\u60C5\u51B5\u4E00\uFF1A\u56DE\u8C03\u51FD\u6570 <a class="header-anchor" href="#\u60C5\u51B5\u4E00-\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a></h4><p>\u5E94\u7528\u4E8E\u5F02\u6B65\u8BF7\u6C42\u4E2D\u6216\u8005\u9700\u8981\u59D4\u6258\u53E6\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7ED9100\u4E2Adiv\u8282\u70B9\u6DFB\u52A0display:none</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6211\u4EEC\u53EF\u4EE5\u5C06display:none\u8FD9\u4E2A\u5177\u4F53\u7684\u9700\u6C42\u62BD\u79BB\u51FA\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">let appendDiv = function (callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; 100; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    div.innerHTML = i;</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.body.appendChild(div);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof callback === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      callback(div);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">appendDiv(function (node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  node.style.display = &#39;none&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u60C5\u51B5\u4E8C-array-property-sort" tabindex="-1">\u60C5\u51B5\u4E8C\uFF1AArray.property.sort <a class="header-anchor" href="#\u60C5\u51B5\u4E8C-array-property-sort" aria-hidden="true">#</a></h4><p>\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u89C4\u5B9A\u6570\u7EC4\u5143\u7D20\u7684\u6392\u5E8F\u987A\u5E8F\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4ECE\u5927\u5230\u5C0F\u6392\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4].sort(function (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return b - a;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA" tabindex="-1">\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA <a class="header-anchor" href="#\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA" aria-hidden="true">#</a></h2><h4 id="\u60C5\u51B5\u4E00-\u5224\u65AD\u6570\u636E\u7684\u7C7B\u578B" tabindex="-1">\u60C5\u51B5\u4E00\uFF1A\u5224\u65AD\u6570\u636E\u7684\u7C7B\u578B <a class="header-anchor" href="#\u60C5\u51B5\u4E00-\u5224\u65AD\u6570\u636E\u7684\u7C7B\u578B" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let isType = (type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Object.prototype.toString.call(data) === &#39;[object &#39; + type + &#39;]&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let isString = isType(&#39;String&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let isArray = isType(&#39;Array&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let isNumber = isType(&#39;Number&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isArray([1, 2, 3]))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isNumber(2))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isString(&#39;2&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u60C5\u51B5\u4E8C-\u5355\u4F8B\u6A21\u5F0F" tabindex="-1">\u60C5\u51B5\u4E8C\uFF1A\u5355\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u60C5\u51B5\u4E8C-\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\uFF0C\u5305\u542B\u4E00\u4E2A\u5185\u90E8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5F53\u53D8\u91CF\u5B58\u5728\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF1B\u4E0D\u5B58\u5728\u65F6, \u8C03\u7528\u51FD\u6570\u5E76\u5C06\u4F20\u8FDB\u6765\u7684\u51FD\u6570\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2</span></span>
<span class="line"><span style="color:#A6ACCD;">let getSingle = (fn) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return instance || (instance = fn.apply(this.arguments));</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let getObject = getSingle(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj1 = getObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj2 = getObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj1 === obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u60C5\u51B5\u4E09-\u5B9E\u73B0aop" tabindex="-1">\u60C5\u51B5\u4E09\uFF1A\u5B9E\u73B0AOP <a class="header-anchor" href="#\u60C5\u51B5\u4E09-\u5B9E\u73B0aop" aria-hidden="true">#</a></h4><p>AOP\uFF1A\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF0C\u5C06\u8DDF\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u6A21\u5757\u65E0\u5173\u7684\u529F\u80FD\u62BD\u79BB\u51FA\u6765\uFF0C\u5305\u62EC\u65E5\u5FD7\u7EDF\u8BA1\u3001\u5B89\u5168\u673A\u5236\u3001\u5F02\u5E38\u5904\u7406\u7B49\u3002</p><p>\u53EF\u4EE5\u4FDD\u6301\u4E1A\u52A1\u903B\u8F91\u6A21\u5757\u7684\u7EAF\u51C0\u548C\u9AD8\u5185\u805A\u6027\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u590D\u7528\u65E5\u5FD7\u7EDF\u8BA1\u7B49\u529F\u80FD\u6A21\u5757\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[e];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const D=s(p,[["render",c]]);export{h as __pageData,D as default};
