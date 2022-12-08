import{_ as s,o as n,c as a,a as l}from"./app.31720a63.js";const i=JSON.parse('{"title":"\u5FEB\u901F\u6392\u5E8F(Quick Sort)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0","link":"#\u5B9E\u73B0","children":[{"level":3,"title":"1. \u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2A quickSort \u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002","slug":"_1-\u9996\u5148-\u5B9A\u4E49\u4E00\u4E2A-quicksort-\u51FD\u6570-\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002","link":"#_1-\u9996\u5148-\u5B9A\u4E49\u4E00\u4E2A-quicksort-\u51FD\u6570-\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002","children":[]},{"level":3,"title":"2. \u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E 1\uFF0C\u5C31\u8FD4\u56DE\u3002","slug":"_2-\u7136\u540E-\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570-\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E-1-\u5C31\u8FD4\u56DE\u3002","link":"#_2-\u7136\u540E-\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570-\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E-1-\u5C31\u8FD4\u56DE\u3002","children":[]},{"level":3,"title":"3. \u63A5\u7740\uFF0C\u9009\u62E9\\"\u57FA\u51C6\\"\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","slug":"_3-\u63A5\u7740-\u9009\u62E9-\u57FA\u51C6-pivot-\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB-\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4-\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","link":"#_3-\u63A5\u7740-\u9009\u62E9-\u57FA\u51C6-pivot-\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB-\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4-\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","children":[]},{"level":3,"title":"4. \u63A5\u7740\uFF0C\u9009\u62E9\\"\u57FA\u51C6\\"\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","slug":"_4-\u63A5\u7740-\u9009\u62E9-\u57FA\u51C6-pivot-\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB-\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4-\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","link":"#_4-\u63A5\u7740-\u9009\u62E9-\u57FA\u51C6-pivot-\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB-\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4-\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","children":[]},{"level":3,"title":"5. \u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002","slug":"_5-\u6700\u540E-\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B-\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002","link":"#_5-\u6700\u540E-\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B-\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002","children":[]}]},{"level":2,"title":"\u7B80\u5316\u5199\u6CD5|\u53BB\u91CD&\u4E0D\u53BB\u91CD","slug":"\u7B80\u5316\u5199\u6CD5-\u53BB\u91CD-\u4E0D\u53BB\u91CD","link":"#\u7B80\u5316\u5199\u6CD5-\u53BB\u91CD-\u4E0D\u53BB\u91CD","children":[]},{"level":2,"title":"\u5B66\u5230\u4E86\u4EC0\u4E48","slug":"\u5B66\u5230\u4E86\u4EC0\u4E48","link":"#\u5B66\u5230\u4E86\u4EC0\u4E48","children":[]},{"level":2,"title":"more","slug":"more","link":"#more","children":[]},{"level":2,"title":"\u672A\u89E3","slug":"\u672A\u89E3","link":"#\u672A\u89E3","children":[]},{"level":2,"title":"go","slug":"go","link":"#go","children":[]},{"level":2,"title":"\u590D\u4E60\u56DE\u5934\u5199","slug":"\u590D\u4E60\u56DE\u5934\u5199","link":"#\u590D\u4E60\u56DE\u5934\u5199","children":[]}],"relativePath":"\u6570\u636E\u4E0E\u7B97\u6CD5/\u6392\u5E8F/2.quick.md","lastUpdated":1670480666000}'),p={name:"\u6570\u636E\u4E0E\u7B97\u6CD5/\u6392\u5E8F/2.quick.md"},o=l("",43),e=[o];function t(c,r,F,y,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
