import{_ as e,o as a,c as t,a as l}from"./app.31720a63.js";const m=JSON.parse('{"title":"33.\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0","link":"#\u9898\u76EE\u63CF\u8FF0","children":[]},{"level":2,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":2,"title":"AC \u4EE3\u7801","slug":"ac-\u4EE3\u7801","link":"#ac-\u4EE3\u7801","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5B57\u8282\u6821\u56ED66\u9898/33.\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4.md","lastUpdated":1670480666000}'),n={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u5B57\u8282\u6821\u56ED66\u9898/33.\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4.md"},r=l('<h1 id="_33-\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" tabindex="-1">33.\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 <a class="header-anchor" href="#_33-\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u6574\u6570\u6570\u7EC4 nums \u6309\u5347\u5E8F\u6392\u5217\uFF0C\u6570\u7EC4\u4E2D\u7684\u503C \u4E92\u4E0D\u76F8\u540C \u3002</p><p>\u5728\u4F20\u9012\u7ED9\u51FD\u6570\u4E4B\u524D\uFF0Cnums \u5728\u9884\u5148\u672A\u77E5\u7684\u67D0\u4E2A\u4E0B\u6807 k\uFF080 &lt;= k &lt; nums.length\uFF09\u4E0A\u8FDB\u884C\u4E86 \u65CB\u8F6C\uFF0C\u4F7F\u6570\u7EC4\u53D8\u4E3A [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]\uFF08\u4E0B\u6807 \u4ECE 0 \u5F00\u59CB \u8BA1\u6570\uFF09\u3002\u4F8B\u5982\uFF0C [0,1,2,4,5,6,7] \u5728\u4E0B\u6807 3 \u5904\u7ECF\u65CB\u8F6C\u540E\u53EF\u80FD\u53D8\u4E3A\xA0[4,5,6,7,0,1,2] \u3002</p><p>\u7ED9\u4F60 \u65CB\u8F6C\u540E \u7684\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u6574\u6570 target \uFF0C\u5982\u679C nums \u4E2D\u5B58\u5728\u8FD9\u4E2A\u76EE\u6807\u503C target \uFF0C\u5219\u8FD4\u56DE\u5B83\u7684\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE\xA0-1\xA0\u3002</p><p>\u793A\u4F8B 1\uFF1A \u8F93\u5165\uFF1Anums = [4,5,6,7,0,1,2], target = 0 \u8F93\u51FA\uFF1A4</p><p>\u793A\u4F8B\xA02\uFF1A \u8F93\u5165\uFF1Anums = [4,5,6,7,0,1,2], target = 3 \u8F93\u51FA\uFF1A-1</p><p>\u793A\u4F8B 3\uFF1A \u8F93\u5165\uFF1Anums = [1], target = 0 \u8F93\u51FA\uFF1A-1</p><h2 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h2><ol><li><blockquote><p>\u8FD9\u9053\u9898\u8003\u5BDF\u4E86\u4EC0\u4E48\u601D\u60F3\uFF1F\u4F60\u7684\u601D\u8DEF\u662F\u4EC0\u4E48\uFF1F</p></blockquote></li><li><blockquote><p>\u505A\u9898\u7684\u65F6\u5019\u662F\u4E0D\u662F\u4E00\u6B21\u901A\u8FC7\u7684\uFF0C\u9047\u5230\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\u7EC6\u8282\uFF1F</p></blockquote></li><li><blockquote><p>\u6709\u51E0\u79CD\u89E3\u6CD5\uFF0C\u54EA\u79CD\u89E3\u6CD5\u65F6\u95F4\u590D\u6742\u5EA6\u6700\u4F4E\uFF0C\u54EA\u79CD\u89E3\u6CD5\u7A7A\u95F4\u590D\u6742\u5EA6\u6700\u4F4E\uFF0C\u6700\u4F18\u89E3\u6CD5\u662F\u4EC0\u4E48\uFF1F\u5176\u4ED6\u4EBA\u7684\u9898\u89E3\u662F\u4EC0\u4E48\uFF0C\u8C01\u7684\u6548\u7387\u66F4\u597D\u4E00\u4E9B\uFF1F\u7528\u4E0D\u540C\u8BED\u8A00\u5B9E\u73B0\u7684\u8BDD\uFF0C\u54EA\u4E2A\u8BED\u8A00\u901F\u5EA6\u6700\u5FEB\uFF1F</p></blockquote></li></ol><h2 id="ac-\u4EE3\u7801" tabindex="-1">AC \u4EE3\u7801 <a class="header-anchor" href="#ac-\u4EE3\u7801" aria-hidden="true">#</a></h2><blockquote><p>xxxxx</p></blockquote><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><blockquote><p>\u5982\u679C\u4F60\u8FD8\u6709\u66F4\u591A\u7684\u601D\u8003\u3001\u5206\u6790\u3001\u603B\u7ED3\uFF0C\u901A\u901A\u90FD\u52A0\u4E0A\u6765\u5427~</p></blockquote>',14),i=[r];function s(o,c,d,h,_,u){return a(),t("div",null,i)}const k=e(n,[["render",s]]);export{m as __pageData,k as default};
