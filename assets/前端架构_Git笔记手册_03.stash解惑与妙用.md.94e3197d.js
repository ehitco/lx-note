import{_ as t,o as s,c as e,a as d}from"./app.aec7eb12.js";const m=JSON.parse('{"title":"stash\u89E3\u60D1\u4E0E\u5999\u7528","description":"","frontmatter":{"title":"stash\u89E3\u60D1\u4E0E\u5999\u7528","date":"2018-09-07","permalink":"2018-09-07-git-stash"},"headers":[{"level":3,"title":"1. \u521D\u8BC6git stash","slug":"_1-\u521D\u8BC6git-stash","link":"#_1-\u521D\u8BC6git-stash","children":[]},{"level":3,"title":"2. \u5E94\u7528\u4E0E\u5B9E\u6218","slug":"_2-\u5E94\u7528\u4E0E\u5B9E\u6218","link":"#_2-\u5E94\u7528\u4E0E\u5B9E\u6218","children":[]},{"level":3,"title":"3. \u62D3\u5C55\u9605\u8BFB","slug":"_3-\u62D3\u5C55\u9605\u8BFB","link":"#_3-\u62D3\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u524D\u7AEF\u67B6\u6784/Git\u7B14\u8BB0\u624B\u518C/03.stash\u89E3\u60D1\u4E0E\u5999\u7528.md","lastUpdated":1670483514000}'),a={name:"\u524D\u7AEF\u67B6\u6784/Git\u7B14\u8BB0\u624B\u518C/03.stash\u89E3\u60D1\u4E0E\u5999\u7528.md"},o=d('<blockquote><p>\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u603B\u4F1A\u9047\u5230\u4EE3\u7801\u5199\u5230\u4E00\u534A\uFF08\u6CA1\u6CD5\u53BB\u6253<code>commit</code>\uFF09\uFF0C\u53BB\u5F00\u542F\u65B0\u7684\u5206\u652F \u4FEE\u590D Bug \u6216\u8005 \u589E\u52A0\u529F\u80FD \u7684\u60C5\u51B5\u3002\u5982\u679C\u4E0D\u5904\u7406\uFF0C\u672A\u4FEE\u6539\u7684\u4EE3\u7801\u5C31\u4F1A\u88AB\u5E26\u5165\u4E34\u65F6\u521B\u5EFA\u7684\u65B0\u7684\u5206\u652F\uFF0C\u6CA1\u5199\u5B8C\u7684\u4EE3\u7801 \u548C \u8981\u4FEE\u590D\u7684\u4EE3\u7801\u6DF7\u5408\u5728\u4E00\u8D77\uFF0C\u7EDD\u5BF9\u82E6\u903C\u3002\u800C Git \u4E2D\u7684<code>stash</code>\u5C31\u662F\u7528\u6765\u5BF9\u4ED8\u8FD9\u79CD\u60C5\u51B5\u3002</p></blockquote><h3 id="_1-\u521D\u8BC6git-stash" tabindex="-1">1. \u521D\u8BC6<code>git stash</code> <a class="header-anchor" href="#_1-\u521D\u8BC6git-stash" aria-hidden="true">#</a></h3><p><code>stash</code>\u5728\u82F1\u6587\u4E2D\u7684\u610F\u601D\u662F\uFF1A\u9690\u85CF\u3002\u5728 Git \u4EE3\u7801\u7BA1\u7406\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u7684\u4F5C\u7528\u4E5F\u662F\u9690\u85CF\u6CA1\u5B8C\u6210\u7684\u4EE3\u7801\uFF0C\u9632\u6B62\u5B83\u5E72\u6270 \u522B\u4EBA \u6216\u8005 \u65B0\u5206\u652F\u7684\u5DE5\u4F5C\u3002</p><p>\u5173\u4E8E<code>git stash</code>\uFF0C\u5E38\u7528\u547D\u4EE4\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>git stash</code></td><td>\u9690\u85CF\u5F53\u524D\u7684\u5DE5\u4F5C\u73B0\u573A, \u6B64\u65F6, <code>git status</code>\u7684\u7ED3\u679C\u662F <code>clean</code></td></tr><tr><td><code>git stash list</code></td><td>\u67E5\u770B\u6240\u6709\u9690\u85CF, \u6BCF\u4E00\u884C\u7684\u5192\u53F7\u524D\u9762\u7684\u5B57\u7B26\u4E32\u5C31\u662F\u6807\u8BC6\u6B64\u9690\u85CF\u7684<code>id</code></td></tr><tr><td><code>git stash apply &lt;id&gt;</code></td><td>\u91CD\u65B0\u663E\u793A\u6807\u8BC6\u4E3A id \u7684\u9690\u85CF</td></tr><tr><td><code>git stash drop &lt;id&gt;</code></td><td><code>git apply</code>\u6062\u590D\u9690\u85CF\u540E, \u9700\u8981\u624B\u52A8\u5220\u9664 list \u5217\u8868\u4E2D\u7684\u8BB0\u5F55</td></tr><tr><td><code>git stash pop</code></td><td>Apply last stash and remove it from the list</td></tr></tbody></table><h3 id="_2-\u5E94\u7528\u4E0E\u5B9E\u6218" tabindex="-1">2. \u5E94\u7528\u4E0E\u5B9E\u6218 <a class="header-anchor" href="#_2-\u5E94\u7528\u4E0E\u5B9E\u6218" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\uFF1A\u6B63\u5F53\u6211\u5728 master \u5206\u652F\u4E0A\u5199\u7740\u6587\u6863\u65F6\u5019\uFF08<em>\u6CA1\u6709\u5B8C\u6210\u3001\u6CA1\u6709\u63D0\u4EA4</em>\uFF09\uFF0C\u540C\u4E8B\u53D1\u73B0 <code>hello.py</code> \u8FD9\u4E2A\u811A\u672C\u6709\u95EE\u9898\uFF0C\u7D27\u6025\u62A5\u544A\u7ED9\u6211\u8FDB\u884C\u4FEE\u590D\u3002</p><p>\u6536\u5230\u62A5\u544A\uFF0C\u4E0B\u610F\u8BC6\u5C31\u662F\u5F00\u4E00\u4E2A debug \u5206\u652F\u6765\u5904\u7406 bug\u3002\u4F46\u662F\uFF0C\u73B0\u5728\u7684\u6587\u6863\u6CA1\u5B8C\u6210\uFF0C\u81EA\u7136\u65E0\u6CD5\u63D0\u4EA4\uFF0C\u53C8\u4E0D\u80FD\u628A\u6CA1\u63D0\u4EA4\u7684\u4E1C\u897F\u5E26\u5165\u5230\u65B0\u521B\u5EFA\u7684 debug \u5206\u652F\uFF08<em>\u6267\u610F\u5982\u6B64\uFF0C\u6211\u4E5F\u6CA1\u529E\u6CD5 : )</em>\uFF09\u3002\u76EE\u524D\uFF0Cstatus \u5982\u4E0B\uFF1A</p><p><img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/1.png" alt=""></p><p>\u4E3A\u4E86\u8FBE\u5230\u76EE\u7684\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A</p><ol><li>\u9690\u85CF\u4FEE\u6539\uFF1A<code>git stash</code> : <img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/2.png" alt=""></li><li>\u521B\u5EFA\u65B0\u5206\u652F\uFF1A<code>git branch debug</code> : <img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/3.png" alt=""></li><li>\u5728<code>debug</code>\u5206\u652F\u4E0A\u4FEE\u590D bug, \u5E76\u4E14\u5C06\u4FEE\u6539\u6DFB\u52A0\u5230 log \u4E2D : <img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/4.png" alt=""></li><li>\u56DE\u5230<code>master</code>\u5206\u652F, \u5408\u5E76<code>debug</code>\u5206\u652F\u7684\u4FEE\u6539, \u5E76\u4E14\u5220\u9664 <code>debug</code> \u5206\u652F : <img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/5.png" alt=""></li><li>\u91CD\u65B0\u663E\u793A\u9690\u85CF\u7684<code>stash</code>\uFF0C\u5E76\u4E14\u5C06\u5176\u4ECE<code>stash list</code>\u5217\u8868\u4E2D\u5220\u9664 : <img src="https://static.godbmw.com/images/Git/stash%E8%A7%A3%E6%83%91%E4%B8%8E%E5%A6%99%E7%94%A8/6.png" alt=""></li><li><strong>\u7136\u540E\u5C31\u53EF\u4EE5\u6109\u5FEB\u5730\u7EE7\u7EED\u505A\u81EA\u5DF1\u7684\u4E8B\u60C5\u5566\uFF01</strong></li></ol><p>\u611F\u8C22<a href="https://www.cnblogs.com/chucklu/" target="_blank" rel="noreferrer">chucklu</a>\u7684\u63D0\u9192\uFF1A\u4E0A\u9762\u7B2C\u4E94\u6B65\u7684\u4E24\u6761\u547D\u4EE4\uFF0C\u53EF\u4EE5\u7528<code>git stash pop</code>\u547D\u4EE4\u4EE3\u66FF\u3002</p><h3 id="_3-\u62D3\u5C55\u9605\u8BFB" tabindex="-1">3. \u62D3\u5C55\u9605\u8BFB <a class="header-anchor" href="#_3-\u62D3\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h3><p>\u5728\u5B9E\u9645\u751F\u4EA7\u8FC7\u7A0B\u4E2D\uFF0C\u96BE\u514D\u4F1A\u9047\u5230\u591A\u4E2A stash \u7684\u60C5\u51B5\u3002\u6B64\u65F6\uFF0C\u4ED6\u4EEC\u7684 id \u9ED8\u8BA4\u90FD\u662F\uFF1A<code>stash{0}</code>, <code>stash{1}</code>, <code>stash{2}</code> ... ...</p><p>\u5F53\u6211\u4EEC\u6062\u590D\u4E00\u4E2A stash \uFF0C\u5E76\u4E14\u5C06\u5B83\u4ECE stash list \u4E2D\u79FB\u9664\u7684\u65F6\u5019\uFF0C\u5728\u5176\u4E0B\u65B9\u7684 stash \u8BB0\u5F55\u7684 id \u4F1A\u81EA\u52A8\u53D8\u5C0F\uFF0C\u4EE5\u4FDD\u8BC1 id \u662F\u4ECE 0 \u5230 n \u7684\u8FDE\u7EED\u81EA\u7136\u6570\u5217\u3002<strong>\u6240\u4EE5\uFF0C\u5F53\u4ECE stash list \u79FB\u9664\u4E00\u4E2A stash \u540E\uFF0C\u4E00\u4E9B stash \u7684 id \u5C31\u4F1A\u53D1\u751F\u6539\u53D8</strong>\u3002\u6B64\u5904\u662F\u4E2A\u5751\u3002</p>',15),c=[o];function i(h,l,r,g,p,n){return s(),e("div",null,c)}const E=t(a,[["render",i]]);export{m as __pageData,E as default};
