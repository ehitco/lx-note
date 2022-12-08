import{_ as l,o as i,c as e,a as t}from"./app.aec7eb12.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u653B\u51FB\u7BC7:","slug":"\u653B\u51FB\u7BC7","link":"#\u653B\u51FB\u7BC7","children":[]},{"level":3,"title":"\u9632\u5FA1\u7BC7:","slug":"\u9632\u5FA1\u7BC7","link":"#\u9632\u5FA1\u7BC7","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u9762\u8BD5\u9898\u5E93/\u5B57\u8282\u9752\u8BAD\u8425/Web\u5B89\u5168.md","lastUpdated":1670483514000}'),o={name:"\u9762\u8BD5\u9898\u5E93/\u5B57\u8282\u9752\u8BAD\u8425/Web\u5B89\u5168.md"},r=t('<h3 id="\u653B\u51FB\u7BC7" tabindex="-1">\u653B\u51FB\u7BC7: <a class="header-anchor" href="#\u653B\u51FB\u7BC7" aria-hidden="true">#</a></h3><ol><li><p>Cross-Site Scripting(XSS)</p><ul><li>\u8DE8\u7AD9\u811A\u672C\u653B\u51FB,\u653B\u51FB\u8005\u901A\u8FC7\u4E00\u4E9B\u65B9\u5F0F\u5C06\u81EA\u5DF1\u7684\u6076\u610F\u4EE3\u7801\u6CE8\u5165\u5230\u7F51\u9875\u4E2D,\u7528\u6237\u70B9\u51FB\u7F51\u9875\u5C31\u4F1A\u6267\u884C\u6076\u610F\u4EE3\u7801</li><li>\u56E0\u4E3A\u5F00\u53D1\u8005\u76F2\u76EE\u4FE1\u4EFB\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u5E76\u4E14\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5B57\u7B26\u4E32\u8F6C\u5316\u6210\u4E86DOM</li><li>XSS\u7279\u70B9: <ul><li>\u901A\u5E38\u96BE\u4EE5\u4ECE UI \u4E0A\u611F\u77E5\uFF08\u6697\u5730\u6267\u884C\u811A\u672C\uFF09</li><li>\u7A83\u53D6\u7528\u6237\u4FE1\u606F\uFF08cookie/token\uFF09</li><li>\u7ED8\u5236 UI(\u4F8B\u5982\u5F39\u7A97),\u8BF1\u9A97\u7528\u6237\u70B9\u51FB/\u586B\u5199\u8868\u5355</li></ul></li><li>XSS\u653B\u51FB\u7C7B\u578B: <ol><li>\u5B58\u50A8\u578B Stored XSS <ul><li>\u6076\u610F\u811A\u672C\u88AB\u5B58\u5728\u6570\u636E\u5E93\u4E2D</li><li>\u8BBF\u95EE\u9875\u9762,\u7136\u540E\u53EF\u4EE5\u8BFB,\u5199\u7528\u6237\u6570\u636E</li><li>\u5371\u5BB3\u6700\u5927,\u5BF9\u5168\u90E8\u7528\u6237\u53EF\u89C1</li></ul></li><li>\u53CD\u5C04\u578B Refleted XSS <ul><li>\u4E0D\u6D89\u53CA\u6570\u636E\u5E93,\u4E3B\u8981\u662F\u4ECEURL\u4E0A\u653B\u51FB</li></ul></li><li>\u57FA\u4E8EDOM DOM-based XSS <ul><li>\u4E0D\u9700\u8981\u670D\u52A1\u5668\u7684\u53C2\u4E0E</li><li>\u6076\u610F\u653B\u51FB\u7684\u53D1\u8D77 + \u6267\u884C,\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u5B8C\u6210</li></ul></li><li>Mutation-based XSS <ul><li>\u5229\u7528\u4E86\u6D4F\u89C8\u5668\u6E32\u67D3 DOM \u7684\u7279\u6027(\u72EC\u7279\u4F18\u5316)</li><li>\u4E0D\u540C\u6D4F\u89C8\u5668,\u4F1A\u6709\u533A\u522B(\u6309\u6D4F\u89C8\u5668\u8FDB\u884C\u653B\u51FB)</li></ul></li></ol></li></ul></li><li><p>Cross-Site request forgery(CSRF) \u8DE8\u7AD9\u4F2A\u9020\u8BF7\u6C42</p><ul><li>\u5728\u7528\u6237\u4E0D\u77E5\u60C5\u7684\u524D\u63D0\u4E0B</li><li>\u5229\u7528\u7528\u6237\u6743\u9650\uFF08cookie\uFF09</li><li>\u6784\u9020\u6307\u5B9A\u7684 HTTP \u8BF7\u6C42,\u7A83\u53D6\u6216\u4FEE\u6539\u7528\u6237\u654F\u611F\u4FE1\u606F</li></ul></li><li><p>Injection \u6CE8\u5165</p><ul><li>SQL injection:</li></ul><p>\u5411\u670D\u52A1\u5668\u53D1\u9001HTTP\u8BF7\u6C42\u5E26\u6709SQL\u53C2\u6570,\u670D\u52A1\u5668\u4F1A\u62FC\u63A5SQL\u4EE3\u7801\u6765\u6267\u884C,\u7136\u540E\u5C31\u53EF\u4EE5\u4FEE\u6539\u6216\u8005\u5220\u9664\u6570\u636E,\u6216\u8005\u83B7\u53D6\u6570\u636E</p><ul><li>CLI</li><li>OS command</li><li>Server-Side Request Forgery(SSRF):\u670D\u52A1\u7AEF\u4F2A\u9020\u8BF7\u6C42,SSRF\u4E0D\u662FInjection,\u4F46\u548CInjection\u539F\u7406\u7C7B\u4F3C</li></ul></li><li><p>Denial of Service(Dos):<br> \u901A\u8FC7\u67D0\u79CD\u5F62\u5F0F,\u5BFC\u81F4\u670D\u52A1\u5668\u8D44\u6E90\u88AB\u663E\u8457\u6D88\u8017,\u6765\u4E0D\u53CA\u76F8\u5E94\u66F4\u591A\u8BF7\u6C42,\u6700\u540E\u8BF7\u6C42\u8D8A\u538B\u8D8A\u591A,\u670D\u52A1\u5668\u5D29\u6E83</p><ul><li>ReDos:\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u62D2\u7EDD\u670D\u52A1\u653B\u51FB,\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u8D2A\u5A6A\u5339\u914D\u7B97\u6CD5\u8FDB\u884C\u653B\u51FB</li><li>Distributed DoS(DDoS):\u77ED\u65F6\u95F4\u5185\u6709\u5927\u91CF\u50F5\u5C38\u8BBE\u5907\u7684\u8BF7\u6C42,\u5BFC\u81F4\u670D\u52A1\u5668\u4E0D\u80FD\u5373\u4F7F\u5B8C\u6210\u5168\u90E8\u8BF7\u6C42,\u4F8B\u5982\u5229\u7528TCP\u8FDB\u884C\u8BF7\u6C42\u6700\u540E\u8BF7\u6C42\u8D8A\u538B\u8D8A\u591A,\u670D\u52A1\u5668\u5D29\u6E83<br> \u653B\u51FB\u7279\u70B9: <ul><li>\u76F4\u63A5\u8BBF\u95EE IP</li><li>\u4EFB\u610F API</li><li>\u6D88\u8017\u5927\u91CF\u5E26\u5BBD(\u8017\u5C3D)</li></ul></li></ul></li><li><p>\u4E2D\u95F4\u4EBA\u653B\u51FB,\u5229\u7528\u5C40\u57DF\u7F51\u7684\u4E00\u4E9B\u534F\u8BAE\u673A\u5236</p><ol><li>\u660E\u6587\u4F20\u8F93</li><li>\u4FE1\u606F\u7BE1\u6539\u4E0D\u53EF\u77E5</li><li>\u5BF9\u65B9\u8EAB\u4EFD\u672A\u9A8C\u8BC1</li></ol></li></ol><h3 id="\u9632\u5FA1\u7BC7" tabindex="-1">\u9632\u5FA1\u7BC7: <a class="header-anchor" href="#\u9632\u5FA1\u7BC7" aria-hidden="true">#</a></h3><ol><li>XSS <ul><li>\u6C38\u8FDC\u4E0D\u8981\u4FE1\u4EFB\u7528\u6237\u7684\u63D0\u4EA4\u5185\u5BB9</li><li>\u4E0D\u7528\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u4E4B\u95F4\u8F6C\u6362\u6210DOM</li><li>\u73B0\u6210\u5DE5\u5177: <ul><li>\u524D\u7AEF <ul><li>\u4E3B\u6D41\u6846\u67B6\u9632\u5FA1 XSS</li><li>google-closure-library</li></ul></li><li>\u670D\u52A1\u7AEF\uFF08Node\uFF09 <ul><li>DOMPurify</li></ul></li></ul></li><li>\u4E00\u4E9B\u6CE8\u610F: <ol><li>\u82E5\u8981\u8FDB\u884C\u5C06string\u8F6CDOM\u65F6\u8981\u4F7F\u7528\u8F6C\u4E49</li><li>\u8981\u4E0A\u4F20 svg \u6587\u4EF6\u65F6,\u8FDB\u884C\u4E00\u6B21\u626B\u63CF</li><li>\u5C3D\u91CF\u4E0D\u8981\u505A\u8BA9\u7528\u6237\u81EA\u5B9A\u4E49\u8DF3\u8F6C\u7684\u884C\u4E3A</li><li>\u8981\u7559\u610F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u4E1C\u897F</li></ol></li></ul></li><li>Content Security Pollicy(CSP) <ul><li>\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u54EA\u4E9B\u6E90(\u57DF\u540D)\u88AB\u8BA4\u4E3A\u662F\u5B89\u5168\u7684</li><li>\u6765\u81EA\u5B89\u5168\u6E90\u7684\u811A\u672C\u53EF\u4EE5\u6267\u884C,\u5426\u5219\u76F4\u63A5\u629B\u9519</li><li>\u62D2\u7EDDeval + inline script</li></ul></li><li>CSRF\u7684\u9632\u5FA1 <ul><li>\u5224\u65AD\u662F\u5426\u662F\u5408\u6CD5\u6765\u6E90</li><li>\u901A\u8FC7\u9650\u5236\u8BF7\u6C42\u6765\u6E90</li><li>\u53EF\u4EE5\u6821\u9A8C Origin \u548C Referer</li><li>\u5224\u65AD\u5408\u6CD5\u6765\u6E90\u7684\u65B9\u5F0F: <ol><li>if(\u8BF7\u6C42\u6765\u81EA\u5408\u6CD5\u9875\u9762)</li><li>then(\u670D\u52A1\u5668\u63A5\u6536\u8FC7\u9875\u9762\u8BF7\u6C42)</li><li>then(\u670D\u52A1\u5668\u53EF\u4EE5\u6807\u8BC6)</li></ol></li><li>\u901A\u8FC7\u4F20\u9012\u7ED9\u7528\u6237 token \u7136\u540E\u7528\u6237\u4E0B\u6B21\u4F7F\u7528 token + \u7528\u6237\u4FE1\u606F \u5C31\u53EF\u4EE5\u4E86</li><li>\u5C3D\u91CF\u5C06 GET \u548C POST \u7684\u8BF7\u6C42\u5355\u72EC\u64CD\u4F5C,\u4E0D\u8981\u5408\u5E76\u64CD\u4F5C</li></ul></li><li>Samesite cookie<br> cookie \u6709 Samesite \u5C5E\u6027,\u52A0\u4E0A Samesite \u540E,\u4F1A\u9650\u5236\u7B2C\u4E09\u65B9\u7F51\u7AD9,\u53EF\u4EE5\u7528\u6765\u9632\u5FA1 CSRF \u653B\u51FB,\u8FD8\u6709\u7528\u6237\u8FFD\u8E2A</li><li>Injection\u9632\u5FA1 <ol><li>\u627E\u5230\u67E5\u8BE2SQL\u7684\u5730\u65B9,\u4F7F\u7528 prepared statement \u53EF\u4EE5\u8BA9\u4EE3\u7801\u63D0\u524D\u7F16\u8BD1,\u8BA9SQL\u6CE8\u5165\u8BED\u53E5\u4E0D\u80FD\u6267\u884C</li><li>\u5BF9\u4E8E\u5176\u4ED6\u7684\u6CE8\u5165\u53EF\u4EE5\u4F7F\u7528: <ol><li>\u6700\u5C0F\u6743\u9650\u539F\u5219</li><li>\u5EFA\u7ACB\u5141\u8BB8\u540D\u5355 + \u8FC7\u6EE4</li><li>\u5BF9 URL \u7C7B\u578B\u53C2\u6570\u8FDB\u884C\u534F\u8BAE,\u57DF\u540D,ip\u7B49\u9650\u5236</li></ol></li></ol></li><li>Regex Dos\u9632\u5FA1 <ol><li>\u907F\u514D\u4F7F\u7528 \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u8D2A\u5A6A\u6A21\u5F0F</li><li>\u4EE3\u7801\u626B\u63CF + \u6B63\u5219\u6D4B\u8BD5\u6027\u80FD</li><li>\u62D2\u7EDD\u4F7F\u7528\u7528\u6237\u63D0\u4F9B\u7684\u6B63\u5219</li><li>\u4F7F\u7528 \u8D1F\u8F7D\u5747\u8861,AP\u7F51\u5173,CDN\u7B49\u8FDB\u884C\u8FC7\u6EE4</li><li>\u5FEB\u901F\u81EA\u52A8\u6269\u5BB9,\u975E\u6838\u5FC3\u670D\u52A1\u964D\u7EA7\u7B49\u65B9\u5F0F\u8FDB\u884C\u625B\u91CF</li></ol></li><li>\u9632\u5FA1\u4E2D\u95F4\u4EBA\u653B\u51FB <ul><li>\u4F7F\u7528HTTPS\u534F\u8BAE,HTTPS\u5177\u6709\u53EF\u9760\u6027(\u52A0\u5BC6),\u5B8C\u6574\u6027(MAC\u9A8C\u8BC1),\u4E0D\u53EF\u62B5\u8D56\u6027(\u6570\u5B57\u7B7E\u540D)</li></ul></li></ol><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ul><li>\u5B89\u5168\u65E0\u5C0F\u4E8B</li><li>\u4F7F\u7528\u7684\u4F9D\u8D56(npm package,\u751A\u81F3\u662FNode.js),\u53EF\u80FD\u6210\u4E3A\u6700\u8584\u5F31\u7684\u4E00\u73AF <ul><li>[left-pad\u4E8B\u4EF6]</li><li>[eslint-scope\u4E8B\u4EF6]</li><li>[event-stream\u4E8B\u4EF6]</li></ul></li><li>\u4FDD\u6301\u5B66\u4E60\u7684\u5FC3\u6001.</li></ul>',6),a=[r];function n(u,s,S,c,d,p){return i(),e("div",null,a)}const D=l(o,[["render",n]]);export{h as __pageData,D as default};
