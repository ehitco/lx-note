import{_ as p,o as e,c as t,a as i}from"./app.aec7eb12.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7F6E\u77E5\u8BC6","slug":"\u524D\u7F6E\u77E5\u8BC6","link":"#\u524D\u7F6E\u77E5\u8BC6","children":[]},{"level":2,"title":"\u6808\uFF08Stack\uFF09\u2014\u2014\u53EA\u7528 pop \u548C push \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","slug":"\u6808-stack-\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4","link":"#\u6808-stack-\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4","children":[]},{"level":2,"title":"\u961F\u5217\uFF08Queue\uFF09\u2014\u2014\u53EA\u7528 push \u548C shift \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","slug":"\u961F\u5217-queue-\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4","link":"#\u961F\u5217-queue-\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784/1.\u6808\u961F\u5217.md","lastUpdated":1670483514000}'),s={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784/1.\u6808\u961F\u5217.md"},a=i('<h2 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1">\u524D\u7F6E\u77E5\u8BC6 <a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u4E2D\uFF0C\u6808\u548C\u961F\u5217\u7684\u5B9E\u73B0\u4E00\u822C\u90FD\u8981\u4F9D\u8D56\u4E8E\u6570\u7EC4\uFF0C\u53EF\u4EE5\u628A\u6808\u548C\u961F\u5217\u90FD\u770B\u4F5C\u662F\u201C\u7279\u522B\u7684\u6570\u7EC4\u201D\u3002</p><p>\u4E24\u8005\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5B83\u4EEC\u5404\u81EA\u5BF9\u6570\u7EC4\u7684\u589E\u5220\u64CD\u4F5C\u6709\u7740\u4E0D\u4E00\u6837\u7684\u9650\u5236\u3002</p><p><strong>\u6570\u7EC4\u7684\u65B9\u6CD5</strong></p><p>\u6DFB\u52A0\u5143\u7D20\u65B9\u6CD5</p><ul><li><p>unshift \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5934\u90E8</p></li><li><p>push \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5C3E\u90E8</p></li><li><p>splice \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u4EFB\u4F55\u4F4D\u7F6E(\u7B2C\u4E09\u4E2A\u53C2\u6570)</p></li></ul><p>\u5220\u9664\u5143\u7D20\u65B9\u6CD5</p><ul><li><p>shift \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u5934\u90E8\u7684\u5143\u7D20</p></li><li><p>pop \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u5C3E\u90E8\u7684\u5143\u7D20</p></li><li><p>splice \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u4EFB\u610F\u4F4D\u7F6E\u7684\u5143\u7D20</p></li></ul><h2 id="\u6808-stack-\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4" tabindex="-1">\u6808\uFF08Stack\uFF09\u2014\u2014\u53EA\u7528 pop \u548C push \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D <a class="header-anchor" href="#\u6808-stack-\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4" aria-hidden="true">#</a></h2><p>\u6808\u662F\u4E00\u79CD\u540E\u8FDB\u5148\u51FA(LIFO\uFF0CLast In First Out)\u7684\u6570\u636E\u7ED3\u6784\u3002</p><ul><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20</li><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u53D6\u51FA\u5143\u7D20</li></ul><p>\u5BF9\u5E94\u5230\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u521A\u597D\u5C31\u662F push \u548C pop\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u5728 JavaScript \u4E2D\uFF0C\u6808\u5C31\u662F\u9650\u5236\u53EA\u80FD\u7528 push \u6765\u6DFB\u52A0\u5143\u7D20\uFF0C\u540C\u65F6\u53EA\u80FD\u7528 pop \u6765\u79FB\u9664\u5143\u7D20\u7684\u4E00\u79CD\u7279\u6B8A\u7684\u6570\u7EC4\u3002</p><p>\u529B\u6263\u4E0A\u5173\u4E8E\u6808\u7684\u9898\u76EE 20,155,232,844,224,682,496</p><h2 id="\u961F\u5217-queue-\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4" tabindex="-1">\u961F\u5217\uFF08Queue\uFF09\u2014\u2014\u53EA\u7528 push \u548C shift \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D <a class="header-anchor" href="#\u961F\u5217-queue-\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684-\u6570\u7EC4" aria-hidden="true">#</a></h2><p>\u961F\u5217\u662F\u4E00\u79CD\u5148\u8FDB\u5148\u51FA\uFF08FIFO\uFF0CFirst In First Out\uFF09\u7684\u6570\u636E\u7ED3\u6784\u3002</p><ul><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20</li><li>\u53EA\u5141\u8BB8\u4ECE\u5934\u90E8\u79FB\u9664\u5143\u7D20</li></ul><p>\u4E5F\u5C31\u662F\u8BF4\u6574\u4E2A\u8FC7\u7A0B\u53EA\u6D89\u53CA\u4E86\u6570\u7EC4\u7684 push \u548C shift \u65B9\u6CD5\u3002</p>',17),l=[a];function h(u,r,c,n,o,d){return e(),t("div",null,l)}const k=p(s,[["render",h]]);export{f as __pageData,k as default};
