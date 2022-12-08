import{_ as a,o as s,c as n,a as p}from"./app.31720a63.js";const v=JSON.parse('{"title":"JavaScript\u4E2D\u7684\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6709\u4EC0\u4E48\u7279\u70B9","slug":"\u6709\u4EC0\u4E48\u7279\u70B9","link":"#\u6709\u4EC0\u4E48\u7279\u70B9","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662FJavaScript\u4E2D\u7684\u5BF9\u8C61","slug":"\u4EC0\u4E48\u662Fjavascript\u4E2D\u7684\u5BF9\u8C61","link":"#\u4EC0\u4E48\u662Fjavascript\u4E2D\u7684\u5BF9\u8C61","children":[]},{"level":2,"title":"\u51FD\u6570\u7684\u672C\u8D28","slug":"\u51FD\u6570\u7684\u672C\u8D28","link":"#\u51FD\u6570\u7684\u672C\u8D28","children":[]},{"level":2,"title":"\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11","slug":"\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11","link":"#\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11","children":[]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/V8\u5F15\u64CE/JavaScript\u4E2D\u7684\u51FD\u6570.md","lastUpdated":1670480666000}'),l={name:"\u524D\u7AEF\u57FA\u7840/V8\u5F15\u64CE/JavaScript\u4E2D\u7684\u51FD\u6570.md"},e=p(`<h1 id="javascript\u4E2D\u7684\u51FD\u6570" tabindex="-1">JavaScript\u4E2D\u7684\u51FD\u6570 <a class="header-anchor" href="#javascript\u4E2D\u7684\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="\u6709\u4EC0\u4E48\u7279\u70B9" tabindex="-1">\u6709\u4EC0\u4E48\u7279\u70B9 <a class="header-anchor" href="#\u6709\u4EC0\u4E48\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u5C06\u4E00\u4E2A\u51FD\u6570\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF</li><li>\u5C06\u51FD\u6570\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u5916\u4E00\u4E2A\u51FD\u6570</li><li>\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570</li></ul><p>JavaScript \u4E2D\u7684\u51FD\u6570\u975E\u5E38\u7075\u6D3B\uFF0C\u5176\u6839\u672C\u539F\u56E0\u5728\u4E8E JavaScript \u4E2D\u7684\u51FD\u6570\u5C31\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u628A JavaScript \u4E2D\u7684\u51FD\u6570\u79F0\u4E3A\u4E00\u7B49\u516C\u6C11 (First Class Function)\u3002</p><h2 id="\u4EC0\u4E48\u662Fjavascript\u4E2D\u7684\u5BF9\u8C61" tabindex="-1">\u4EC0\u4E48\u662FJavaScript\u4E2D\u7684\u5BF9\u8C61 <a class="header-anchor" href="#\u4EC0\u4E48\u662Fjavascript\u4E2D\u7684\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>JavaScript\u662F\u4E00\u95E8\u57FA\u4E8E\u5BF9\u8C61\u7684\u8BED\u8A00\uFF0CJavaScript \u4E2D\u5927\u90E8\u5206\u7684\u5185\u5BB9\u90FD\u662F\u7531\u5BF9\u8C61\u6784\u6210\u7684\uFF0C\u8BF8\u5982\u51FD\u6570\u3001\u6570\u7EC4\uFF1B\u800C\u8FD9\u4E9B\u5BF9\u8C61\u5728\u4EE3\u7801\u8FD0\u884C\u65F6\u53EF\u4EE5\u52A8\u6001\u7684\u4FEE\u6539\u5176\u5185\u5BB9\uFF0C\u9020\u5C31\u4E86JavaScript\u7684\u8D85\u7EA7\u7075\u6D3B\u6027\u3002</p><p>\u4E0E\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E0D\u540C\u7684\u662F\uFF0C\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u5929\u751F\u652F\u6301\u5C01\u88C5\u3001\u7EE7\u627F\u3001\u591A\u6001\uFF0C\u800CJavaScript\u5E76\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u591A\u6001\u7684\u652F\u6301\uFF0C\u5728\u5B9E\u73B0\u7EE7\u627F\u7684\u65B9\u5F0F\u4E5F\u6709\u5F88\u5927\u5DEE\u5F02\uFF08\u57FA\u4E8E\u539F\u578B\u94FE\u7EE7\u627F\uFF09\u3002</p><p>\u5176\u5B9E JavaScript \u4E2D\u7684\u5BF9\u8C61\u975E\u5E38\u7B80\u5355\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u5C31\u662F\u7531\u4E00\u7EC4\u7EC4\u5C5E\u6027\u548C\u503C\u6784\u6210\u7684\u96C6\u5408\uFF0C\u5BF9\u8C61\u7684\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u3002</p><p>\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u6709\u4E09\u79CD\u7C7B\u578B\uFF1A</p><p>\u7B2C\u4E00\u79CD\u662F\u539F\u59CB\u7C7B\u578B (primitive)\uFF0C\u6240\u8C13\u7684\u539F\u59CB\u7C7B\u7684\u6570\u636E\uFF0C\u662F\u6307\u503C\u672C\u8EAB\u65E0\u6CD5\u88AB\u6539\u53D8\uFF0C\u6BD4\u5982 JavaScript \u4E2D\u7684\u5B57\u7B26\u4E32\u5C31\u662F\u539F\u59CB\u7C7B\u578B\uFF0C\u5982\u679C\u4F60\u4FEE\u6539\u4E86 JavaScript \u4E2D\u5B57\u7B26\u4E32\u7684\u503C\uFF0C\u90A3\u4E48 V8 \u4F1A\u8FD4\u56DE\u7ED9\u4F60\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF0C\u539F\u59CB\u5B57\u7B26\u4E32\u5E76\u6CA1\u6709\u88AB\u6539\u53D8\uFF0C\u6211\u4EEC\u79F0\u8FD9\u4E9B\u7C7B\u578B\u7684\u503C\u4E3A\u201C\u539F\u59CB\u503C\u201D\u3002JavaScript \u4E2D\u7684\u539F\u59CB\u503C\u4E3B\u8981\u5305\u62EC null\u3001undefined\u3001boolean\u3001number\u3001string\u3001bigint\u3001symbol \u8FD9\u4E03\u79CD\u3002</p><p>\u7B2C\u4E8C\u79CD\u5C31\u662F\u6211\u4EEC\u73B0\u5728\u4ECB\u7ECD\u7684\u5BF9\u8C61\u7C7B\u578B (Object)\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4E5F\u53EF\u4EE5\u662F\u53E6\u5916\u4E00\u4E2A\u5BF9\u8C61</p><p>\u7B2C\u4E09\u79CD\u662F\u51FD\u6570\u7C7B\u578B (Function)\uFF0C\u5982\u679C\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u503C\u662F\u51FD\u6570\uFF0C\u90A3\u4E48\u6211\u4EEC\u628A\u8FD9\u4E2A\u5C5E\u6027\u79F0\u4E3A\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u53C8\u8BF4\u5BF9\u8C61\u5177\u5907\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="\u51FD\u6570\u7684\u672C\u8D28" tabindex="-1">\u51FD\u6570\u7684\u672C\u8D28 <a class="header-anchor" href="#\u51FD\u6570\u7684\u672C\u8D28" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u4E2D\uFF0C\u51FD\u6570\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u5B83\u548C\u5BF9\u8C61\u4E00\u6837\u53EF\u4EE5\u62E5\u6709\u5C5E\u6027\u548C\u503C\uFF0C\u4F46\u662F\u51FD\u6570\u548C\u666E\u901A\u5BF9\u8C61\u4E0D\u540C\u7684\u662F\uFF0C\u51FD\u6570\u53EF\u4EE5\u88AB\u8C03\u7528\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202204271029532.png" alt=""></p><p>\u51FD\u6570\u9664\u4E86\u53EF\u4EE5\u62E5\u6709\u5E38\u7528\u7C7B\u578B\u7684\u5C5E\u6027\u503C\u4E4B\u5916\uFF0C\u8FD8\u62E5\u6709\u4E24\u4E2A\u9690\u85CF\u5C5E\u6027\uFF0C\u5206\u522B\u662F name \u5C5E\u6027\u548C code \u5C5E\u6027\u3002</p><p>\u8BE5\u51FD\u6570\u5BF9\u8C61\u7684\u9ED8\u8BA4\u7684 name \u5C5E\u6027\u503C\u5C31\u662F anonymous\uFF0C\u8868\u793A\u8BE5\u51FD\u6570\u5BF9\u8C61\u6CA1\u6709\u88AB\u8BBE\u7F6E\u540D\u79F0\u3002\u53E6\u5916\u4E00\u4E2A\u9690\u85CF\u5C5E\u6027\u662F code \u5C5E\u6027\uFF0C\u5176\u503C\u8868\u793A\u51FD\u6570\u4EE3\u7801\uFF0C\u4EE5\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002\u5F53\u6267\u884C\u5230\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u65F6\uFF0CV8 \u4FBF\u4F1A\u4ECE\u51FD\u6570\u5BF9\u8C61\u4E2D\u53D6\u51FA code \u5C5E\u6027\u503C\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u4EE3\u7801\uFF0C\u7136\u540E\u518D\u89E3\u91CA\u6267\u884C\u8FD9\u6BB5\u51FD\u6570\u4EE3\u7801\u3002</p><h2 id="\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11" tabindex="-1">\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11 <a class="header-anchor" href="#\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11" aria-hidden="true">#</a></h2><p>\u5982\u679C\u67D0\u4E2A\u7F16\u7A0B\u8BED\u8A00\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u548C\u8FD9\u4E2A\u8BED\u8A00\u7684\u6570\u636E\u7C7B\u578B\u505A\u4E00\u6837\u7684\u4E8B\u60C5\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E2A\u8BED\u8A00\u4E2D\u7684\u51FD\u6570\u79F0\u4E3A<strong>\u4E00\u7B49\u516C\u6C11</strong>\u3002</p><p>\u7531\u4E8E\u51FD\u6570\u7684\u201C\u53EF\u88AB\u8C03\u7528\u201D\u7684\u7279\u6027\uFF0C\u4F7F\u5F97\u5B9E\u73B0\u51FD\u6570\u7684\u53EF\u8D4B\u503C\u3001\u53EF\u4F20\u53C2\u548C\u53EF\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7B49\u7279\u6027\u53D8\u5F97\u6709\u4E00\u70B9\u9EBB\u70E6\u3002</p><p>\u5728\u6267\u884C JavaScript \u51FD\u6570\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u53D8\u91CF\u7684\u67E5\u627E\uFF0CV8 \u4F1A\u4E3A\u5176\u7EF4\u62A4\u4E00\u4E2A\u4F5C\u7528\u57DF\u94FE\uFF0C\u5982\u679C\u51FD\u6570\u4E2D\u4F7F\u7528\u4E86\u67D0\u4E2A\u53D8\u91CF\uFF0C\u4F46\u662F\u5728\u51FD\u6570\u5185\u90E8\u53C8\u6CA1\u6709\u5B9A\u4E49\u8BE5\u53D8\u91CF\uFF0C\u90A3\u4E48\u51FD\u6570\u5C31\u4F1A\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u53BB\u5916\u90E8\u7684\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\u8BE5\u53D8\u91CF\u3002</p><p>\u5F53\u51FD\u6570\u5185\u90E8\u5F15\u7528\u4E86\u5916\u90E8\u7684\u53D8\u91CF\u65F6\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u8FDB\u884C\u8D4B\u503C\u3001\u4F20\u53C2\u6216\u4F5C\u4E3A\u8FD4\u56DE\u503C\uFF0C\u4F60\u8FD8\u9700\u8981\u4FDD\u8BC1\u8FD9\u4E9B\u88AB\u5F15\u7528\u7684\u5916\u90E8\u53D8\u91CF\u662F\u786E\u5B9A\u5B58\u5728\u7684\uFF0C\u8FD9\u5C31\u662F\u8BA9\u51FD\u6570\u4F5C\u4E3A\u4E00\u7B49\u516C\u6C11\u9EBB\u70E6\u7684\u5730\u65B9\uFF0C\u56E0\u4E3A\u865A\u62DF\u673A\u8FD8\u9700\u8981\u5904\u7406\u51FD\u6570\u5F15\u7528\u7684\u5916\u90E8\u53D8\u91CF\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> mybar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">mybar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u6240\u8C13\u7684\u201C\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11\u201D\u5C31\u4F53\u73B0\u5728\uFF0C\u5982\u679C\u8981\u8FD4\u56DE\u51FD\u6570 bar \u7ED9\u5916\u90E8\uFF0C\u90A3\u4E48\u5373\u4FBF foo \u51FD\u6570\u6267\u884C\u7ED3\u675F\u4E86\uFF0C\u5176\u5185\u90E8\u5B9A\u4E49\u7684 number \u53D8\u91CF\u4E5F\u4E0D\u80FD\u88AB\u9500\u6BC1\uFF0C\u56E0\u4E3A bar \u51FD\u6570\u4F9D\u7136\u5F15\u7528\u4E86\u8BE5\u53D8\u91CF\u3002\u6211\u4EEC\u4E5F\u628A\u8FD9\u79CD\u5C06\u5916\u90E8\u53D8\u91CF\u548C\u548C\u51FD\u6570\u7ED1\u5B9A\u8D77\u6765\u7684\u6280\u672F\u79F0\u4E3A\u95ED\u5305\u3002</p>`,24),o=[e];function r(t,c,i,d,y,F){return s(),n("div",null,o)}const A=a(l,[["render",r]]);export{v as __pageData,A as default};
