import{_ as e,o as i,c as l,a as o}from"./app.aec7eb12.js";const b=JSON.parse('{"title":"Web \u548C HTTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5","slug":"\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5","link":"#\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5","children":[]},{"level":2,"title":"HTTP\u62A5\u6587\u683C\u5F0F","slug":"http\u62A5\u6587\u683C\u5F0F","link":"#http\u62A5\u6587\u683C\u5F0F","children":[]},{"level":2,"title":"cookie","slug":"cookie","link":"#cookie","children":[{"level":3,"title":"\u8FC7\u7A0B","slug":"\u8FC7\u7A0B","link":"#\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"Web\u7F13\u5B58\uFF08CDN\u6280\u672F\uFF09","slug":"web\u7F13\u5B58-cdn\u6280\u672F","link":"#web\u7F13\u5B58-cdn\u6280\u672F","children":[{"level":3,"title":"\u8FC7\u7A0B","slug":"\u8FC7\u7A0B-1","link":"#\u8FC7\u7A0B-1","children":[]},{"level":3,"title":"\u597D\u5904","slug":"\u597D\u5904","link":"#\u597D\u5904","children":[]},{"level":3,"title":"CDN","slug":"cdn","link":"#cdn","children":[]}]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/HTTP/Web\u548CHTTP.md","lastUpdated":1670483514000}'),t={name:"\u524D\u7AEF\u57FA\u7840/HTTP/Web\u548CHTTP.md"},a=o('<h1 id="web-\u548C-http" tabindex="-1">Web \u548C HTTP <a class="header-anchor" href="#web-\u548C-http" aria-hidden="true">#</a></h1><p>Web\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u662FHTTP\uFF0C\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u901A\u8FC7\u4EA4\u6362HTTP\u62A5\u6587\u7684\u65B9\u5F0F\u8FDB\u884C\u4F1A\u8BDD\u3002</p><p>HTTP\u4F7F\u7528TCP\u4F5C\u4E3A\u5B83\u652F\u6491\u7684\u8FD0\u8F93\u534F\u8BAE\uFF0CHTTP\u5BA2\u6237\u9996\u5148\u53D1\u8D77\u4E00\u4E2A\u4E0E\u670D\u52A1\u5668\u7684 TCP\u8FDE\u63A5\u3002\u4E00\u65E6\u8FDE\u63A5\u5EFA\u7ACB\uFF0C\u8BE5\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u8FDB\u7A0B\u5C31\u53EF\u4EE5\u901A\u8FC7\u5957\u63A5\u5B57\u63A5\u53E3\u8BBF\u95EE TCP\u3002</p><blockquote><p>\u5206\u5C42\u4F53\u7CFB\u7ED3\u6784\u6700\u5927\u7684\u4F18\u70B9\uFF0C\u5373 HTTP \u534F\u8BAE \u4E0D\u7528\u62C5\u5FC3\u6570\u636E\u4E22\u5931\uFF0C \u4E5F\u4E0D\u5173\u6CE8 TCP \u4ECE\u7F51\u7EDC\u7684\u6570\u636E\u4E22\u5931\u548C\u4E71\u5E8F\u6545\u969C\u4E2D\u6062\u590D\u7684\u7EC6\u8282 \u3002</p></blockquote><p>HTTP\u662F\u65E0\u72B6\u6001\u534F\u8BAE\uFF0CWeb\u4F7F\u7528\u7684\u4E5F\u662F\u5BA2\u6237-\u670D\u52A1\u5668\u7684\u5E94\u7528\u7A0B\u5E8F\u4F53\u7CFB\u7ED3\u6784\uFF0CWeb \u670D\u52A1\u5668\u603B\u662F\u6253\u5F00\u7684\uFF0C\u5177\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684 IP \u5730\u5740\uFF0C \u4E14\u5B83\u670D\u52A1\u4E8E\u53EF\u80FD\u6765\u81EA\u6570\u4EE5\u767E\u4E07\u8BA1\u7684\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42 \u3002</p><h2 id="\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5" tabindex="-1">\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5 <a class="header-anchor" href="#\u975E\u6301\u7EED\u8FDE\u63A5\u548C\u6301\u7EED\u8FDE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u975E\u6301\u7EED\u8FDE\u63A5\uFF08HTTP 1.0\uFF09</li></ul><p>\u6BCF\u4E2A TCP \u8FDE\u63A5\u5728\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2A\u5BF9\u8C61\u540E\u5173\u95ED\uFF0C\u5373\u8BE5\u8FDE\u63A5\u5E76\u4E0D\u4E3A\u5176\u4ED6\u7684\u5BF9\u8C61\u800C\u5F85\u7EED\u4E0B\u6765 \u3002 \u503C\u5F97\u6CE8\u610F\u7684\u662F\u6BCF\u4E2A TCP \u8FDE\u63A5\u53EA\u4F20\u8F93\u4E00\u4E2A\u8BF7\u6C42\u62A5\u6587\u548C\u4E00\u4E2A\u54CD\u5E94\u62A5\u6587\u3002</p><blockquote><p>\u4E8B\u5B9E\u4E0A\uFF0C\u7528\u6237\u80FD\u591F\u914D\u7F6E\u73B0\u4EE3\u6D4F\u89C8\u5668\u6765\u63A7\u5236\u8FDE\u63A5\u7684\u5E76\u884C\u5EA6 \u3002\u5728\u9ED8\u8BA4\u65B9\u5F0F\u4E0B\uFF0C\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u6253\u5F00 5 -10 \u4E2A\u5E76\u884C\u7684 TCP \u8FDE\u63A5\uFF0C\u800C\u6BCF\u6761\u8FDE\u63A5\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\u54CD\u5E94\u4E8B\u52A1 \u3002</p></blockquote><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0CTCP\u8FDE\u63A5\u4E09\u6B21\u63E1\u624B\uFF0C\u524D\u4E24\u4E2A\u90E8\u5206\u4F1A\u6D88\u8017\u4E00\u4E2ARTT\u65F6\u95F4\uFF0C\u7B2C\u4E09\u6B21\u63E1\u624B\u65F6\u643A\u5E26\u8BF7\u6C42\u7684HTTP\u62A5\u6587\uFF0C\u4EE5\u53CA\u670D\u52A1\u5668\u8FD4\u56DE\u54CD\u5E94\u62A5\u6587\u5E76\u643A\u5E26HTML\u6587\u4EF6\uFF0C\u5360\u7528\u4E00\u4E2ARTT\u3002\u7C97\u7565\u5730\u8BB2\uFF0C\u603B\u7684\u54CD\u5E94\u65F6\u95F4\u5C31\u662F\u4E24\u4E2A RTT \u52A0\u4E0A\u670D\u52A1\u5668\u4F20\u8F93 HTML \u6587\u4EF6\u7684\u65F6\u95F4 \u3002</p><blockquote><p>\u7F3A\u70B9\uFF1A</p><ol><li>Web\u670D\u52A1\u5668\u8D1F\u62C5\u91CD\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u8981\u5EFA\u7ACB\u548C\u7EF4\u62A4\u4E00\u4E2A\u5168\u65B0\u7684\u8FDE\u63A5\uFF0C\u5BA2\u6237\u548C\u670D\u52A1\u5668\u90FD\u8981\u5206\u914DTCP\u7F13\u5B58\u548C\u4FDD\u6301TCP\u53D8\u91CF\u3002</li><li>\u7ECF\u53D7\u4E24\u500DRTT\u65F6\u5EF6\u3002</li></ol></blockquote><ul><li>\u6301\u7EED\u8FDE\u63A5</li></ul><p>\u5728<strong>\u91C7\u7528 HTTP 1. 1 \u6301\u7EED\u8FDE\u63A5</strong>\u7684\u6E05\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u5728\u53D1\u9001\u54CD\u5E94\u540E\u4FDD\u6301\u8BE5 TCP \u8FDE\u63A5\u6253\u5F00 \u3002 \u5728\u76F8\u540C\u7684\u5BA2\u6237\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u540E\u7EED\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u62A5\u6587\u80FD\u591F\u901A\u8FC7\u76F8\u540C\u7684\u8FDE\u63A5\u8FDB\u884C\u4F20\u9001 \u3002<strong>\u5BF9\u5BF9\u8C61\u7684\u8FD9\u4E9B\u8BF7\u6C42\u53EF\u4EE5\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u53D1\u51FA\uFF0C\u800C\u4E0D\u5FC5\u7B49\u5F85\u5BF9\u672A\u51B3\u8BF7\u6C42(\u6D41\u6C34\u7EBF)\u7684\u56DE\u7B54 \u3002</strong></p><p>HTTP/2<code>[ RFC 7540 ]</code>\u662F\u5728 HTTP 1. 1 \u57FA\u7840\u4E0A\u6784\u5EFA \u7684\uFF0C\u5B83\u5141\u8BB8\u5728\u76F8\u540C\u8FDE\u63A5\u4E2D\u591A\u4E2A\u8BF7\u6C42\u548C\u56DE\u7B54\u4EA4\u9519\uFF0C\u5E76\u589E\u52A0\u4E86\u5728\u8BE5\u8FDE\u63A5\u4E2D\u4F18\u5316 HTTP \u62A5\u6587\u8BF7\u6C42 \u548C\u56DE\u7B54\u7684\u673A\u5236 \u3002</p><h2 id="http\u62A5\u6587\u683C\u5F0F" tabindex="-1">HTTP\u62A5\u6587\u683C\u5F0F <a class="header-anchor" href="#http\u62A5\u6587\u683C\u5F0F" aria-hidden="true">#</a></h2><ul><li>\u8BF7\u6C42\u62A5\u6587 <ul><li>\u8BF7\u6C42\u884C\uFF1A\u8BF7\u6C42\u65B9\u6CD5\uFF0CURL\u3001HTTP\u7248\u672C</li><li>\u9996\u90E8\u884C <ul><li>Host\uFF1A\u5BF9\u8C61\u6240\u5728\u7684\u4E3B\u673A</li><li>Connection\uFF1Aclose\uFF08\u8868\u793A\u4E0D\u4F7F\u7528\u6301\u7EED\u8FDE\u63A5\uFF09\uFF0Ckeep-alive\uFF08\u6301\u7EED\u8FDE\u63A5\uFF09</li><li>User-agent\uFF1A\u6307\u660E\u7528\u6237\u4EE3\u7406\uFF0C\u6D4F\u89C8\u5668\u7C7B\u578B</li><li>Accept-language\uFF1A\u6587\u4EF6\u7684\u8BED\u8A00\u7248\u672C</li></ul></li><li>\u5B9E\u4F53\u4F53</li></ul></li><li>\u54CD\u5E94\u62A5\u6587 <ul><li>\u72B6\u6001\u884C\uFF1AHTTP\u7248\u672C\u3001\u72B6\u6001\u7801\u3001\u77ED\u8BED</li><li>\u9996\u90E8\u884C <ul><li>Content-Length\uFF1A\u5185\u5BB9\u957F\u5EA6</li><li>Last-Modified\uFF1A\u5185\u5BB9\u6700\u540E\u4FEE\u6539\u65F6\u95F4</li><li>Content-Type\uFF1A\u5B9E\u4F53\u4F53\u4E2D\u5BF9\u8C61\u7684\u7C7B\u578B</li></ul></li><li>\u5B9E\u4F53\u4F53</li></ul></li></ul><h2 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h2><p>HTTP\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F7F\u7528cookie\u6765\u8DDF\u8E2A\u7528\u6237\u7684\u72B6\u6001\u3002</p><p>cookie\u6280\u672F\u67094\u4E2A\u7EC4\u4EF6:</p><ol><li>\u5728HTTP\u54CD\u5E94\u62A5\u6587\u4E2D\u7684\u4E00\u4E2Acookie\u9996\u90E8\u884C</li><li>\u5728 HTTP\u8BF7\u6C42\u62A5\u6587\u4E2D\u7684\u4E00\u4E2A cookie\u9996\u90E8\u884C</li><li>\u5728\u7528\u6237\u7AEF\u7CFB\u7EDF\u4E2D\u4FDD\u7559\u6709\u4E00\u4E2A cookie \u6587\u4EF6\uFF0C\u5E76\u7531\u7528\u6237\u7684\u6D4F\u89C8\u5668\u8FDB\u884C\u7BA1\u7406</li><li>\u4F4D\u4E8E Web \u7AD9\u70B9\u7684\u4E00\u4E2A\u540E\u7AEF\u6570\u636E\u5E93\u3002</li></ol><h3 id="\u8FC7\u7A0B" tabindex="-1">\u8FC7\u7A0B <a class="header-anchor" href="#\u8FC7\u7A0B" aria-hidden="true">#</a></h3><ol><li>\u5F53\u8BF7\u6C42\u62A5\u6587\u5230\u8FBE\u670D\u52A1\u5668\u65F6\uFF0C<strong>\u4EA7\u751F\u4E00\u4E2A\u552F\u4E00\u8BC6\u522B\u7801</strong>\uFF0C\u5E76\u4EE5\u6B64\u4F5C\u4E3A\u7D22\u5F15\u5728\u5B83\u7684\u540E\u7AEF\u6570\u636E\u5E93\u4E2D\u4EA7\u751F\u4E00\u4E2A\u8868\u9879\u3002</li><li>\u63A5\u4E0B\u6765\u670D\u52A1\u5668\u7528\u4E00\u4E2A\u5305\u542B <code>Set-cookie</code>\u9996\u90E8\u7684HTTP\u54CD\u5E94\u62A5\u6587\u5BF9\u6D4F\u89C8\u5668\u8FDB\u884C\u54CD\u5E94\uFF0C\u5176\u4E2DSet-cookie: \u9996\u90E8\u542B\u6709\u8BE5\u8BC6\u522B\u7801\uFF08\u4F8B\u5982\u662F<code>Set-cookie: 1678</code>\uFF09</li><li>\u5F53\u6D4F\u89C8\u5668\u6536\u5230\u4E86\u8BE5 HTTP \u54CD\u5E94\u62A5\u6587\u65F6\uFF0C\u5B83\u4F1A\u770B\u5230\u8BE5 Set-cookie: \u9996\u90E8\u3002 \u8BE5\u6D4F\u89C8\u5668\u5728\u5B83\u7BA1\u7406\u7684\u7279\u5B9A cookie\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u884C\uFF0C<strong>\u8BE5\u884C\u5305\u542B\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D\u548C\u5728 Set-cookie: \u9996\u90E8\u4E2D\u7684\u8BC6\u522B\u7801</strong>\u3002</li><li>\u6BCF\u8BF7\u6C42\u4E00\u4E2A\u8BE5\u7AD9\u70B9\u4E0B\u7684Web\u9875\u9762\u65F6\uFF0C \u5176\u6D4F\u89C8\u5668\u5C31\u4F1A\u67E5\u8BE2\u8BE5 cookie \u6587\u4EF6\u5E76\u62BD\u53D6\u5BF9\u8FD9\u4E2A\u7F51\u7AD9\u7684\u8BC6\u522B\u7801\uFF0C\u5E76\u653E\u5230 HTTP \u8BF7\u6C42\u62A5\u6587\u4E2D\u5305\u62EC\u8BC6\u522B\u7801\u7684 cookie \u9996\u90E8\u3002</li></ol><p>\u5728\u8FD9\u79CD\u65B9\u5F0F\u4E0B\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u8DDF\u7528\u6237\u7AD9\u70B9\u7684\u6D3B\u52A8\u3002\u5B83\u786E\u5207\u5730\u77E5\u9053\u7528\u6237 1678 \u6309\u7167\u4EC0\u4E48\u987A\u5E8F\u3001\u5728\u4EC0\u4E48\u65F6\u95F4\u3001 \u8BBF\u95EE\u4E86\u54EA\u4E9B\u9875\u9762\uFF01</p><p>\u56E0\u6B64\uFF0Ccookie \u53EF\u4EE5\u7528\u4E8E\u6807\u8BC6\u4E00\u4E2A\u7528\u6237\u3002</p><h2 id="web\u7F13\u5B58-cdn\u6280\u672F" tabindex="-1">Web\u7F13\u5B58\uFF08CDN\u6280\u672F\uFF09 <a class="header-anchor" href="#web\u7F13\u5B58-cdn\u6280\u672F" aria-hidden="true">#</a></h2><p>Web \u7F13\u5B58\u5668 (Web cache) \u4E5F\u53EB\u4EE3\u7406 \u670D\u52A1\u5668 (proxy server) , \u5B83\u662F\u80FD\u591F\u4EE3\u8868\u521D \u59CB Web \u670D\u52A1\u5668\u6765\u6EE1\u8DB3 HTTP \u8BF7\u6C42\u7684\u7F51\u7EDC\u5B9E\u4F53\u3002</p><p>Web \u7F13\u5B58\u5668\u6709\u81EA\u5DF1\u7684\u78C1\u76D8\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5E76\u5728\u5B58\u50A8\u7A7A\u95F4\u4E2D\u4FDD\u5B58\u6700\u8FD1\u8BF7\u6C42\u8FC7\u7684\u5BF9\u8C61\u7684\u526F\u672C\u3002</p><h3 id="\u8FC7\u7A0B-1" tabindex="-1">\u8FC7\u7A0B <a class="header-anchor" href="#\u8FC7\u7A0B-1" aria-hidden="true">#</a></h3><ol><li>\u6D4F\u89C8\u5668\u5148\u521B\u5EFA\u4E00\u4E2A\u5230Web\u7F13\u5B58\u5668\u7684TCP\u8FDE\u63A5\uFF0C\u5E76\u53D1\u9001\u4E00\u4E2AHTTP\u8BF7\u6C42\u3002</li><li>Web \u7F13\u5B58\u5668\u8FDB\u884C\u68C0\u67E5\uFF0C\u770B\u770B\u672C\u5730\u662F\u5426\u5B58\u50A8\u4E86\u8BE5\u5BF9\u8C61\u526F\u672C \u3002 \u5982\u679C\u6709\uFF0C Web \u7F13\u5B58\u5668\u5C31\u5411\u5BA2\u6237\u6D4F\u89C8\u5668\u7528 HTTP \u54CD\u5E94\u62A5\u6587\u8FD4\u56DE\u8BE5\u5BF9\u8C61 \u3002</li><li>\u5982\u679C Web \u7F13\u5B58\u5668\u4E2D\u6CA1\u6709\u8BE5\u5BF9\u8C61\uFF0C\u5B83\u5C31\u6253\u5F00\u4E00\u4E2A\u4E0E\u8BE5\u5BF9\u8C61\u7684\u521D\u59CB\u670D\u52A1\u5668\u7684TCP\u8FDE\u63A5\u3002 Web\u7F13\u5B58\u5668\u5219\u5728\u8FD9\u4E2A\u7F13\u5B58\u5668\u5230\u670D\u52A1\u5668\u7684TCP\u8FDE\u63A5\u4E0A\u53D1\u9001\u4E00\u4E2A\u5BF9\u8BE5\u5BF9\u8C61\u7684 HTTP \u8BF7\u6C42 \u3002 \u5728\u6536\u5230\u8BE5\u8BF7\u6C42\u540E\uFF0C\u521D\u59CB\u670D\u52A1\u5668\u5411\u8BE5 Web \u7F13\u5B58\u5668\u53D1\u9001\u5177\u6709\u8BE5 \u5BF9\u8C61\u7684 HTTP \u54CD\u5E94 \u3002</li><li>\u5F53 Web\u7F13\u5B58\u5668\u63A5\u6536\u5230\u8BE5\u5BF9\u8C61\u65F6\uFF0C\u5B83\u5728\u672C\u5730\u5B58\u50A8\u7A7A\u95F4\u5B58\u50A8\u4E00\u4EFD\u526F\u672C\uFF0C\u5E76\u5411\u5BA2\u6237\u7684\u6D4F\u89C8 \u5668\u7528 HTTP \u54CD\u5E94\u62A5\u6587\u53D1\u9001\u8BE5\u526F\u672C\uFF08\u901A\u8FC7\u73B0\u6709\u7684\u5BA2\u6237\u6D4F\u89C8\u5668\u548C Web \u7F13\u5B58\u5668\u4E4B\u95F4\u7684 TCP \u8FDE\u63A5\uFF09\u3002</li></ol><p><strong>Web \u7F13\u5B58\u5668\u65E2\u662F\u670D\u52A1\u5668\u53C8\u662F\u5BA2\u6237\u3002\u5F53\u5B83\u63A5\u6536\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\u5E76\u53D1\u56DE\u54CD\u5E94\u65F6\uFF0C\u5B83\u662F\u4E00\u4E2A\u670D\u52A1\u5668 \u3002\u5F53\u5B83\u5411\u521D\u59CB\u670D\u52A1\u5668\u53D1\u51FA\u8BF7\u6C42\u5E76\u63A5\u6536\u54CD\u5E94\u65F6\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BA2\u6237 \u3002</strong></p><h3 id="\u597D\u5904" tabindex="-1">\u597D\u5904 <a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a></h3><ul><li>Web \u7F13\u5B58\u5668\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u5BF9\u5BA2\u6237\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4</li><li>Web \u7F13\u5B58\u5668\u80FD\u591F\u5927\u5927\u51CF\u5C11\u63A5\u5165\u94FE\u8DEF\u5230\u56E0\u7279\u7F51\u7684\u901A\u4FE1\u91CF\uFF0C\u4ECE\u800C\u964D\u4F4E\u5BF9\u5E26\u5BBD\u7684\u8981\u6C42\uFF0C\u964D\u4F4E\u4E86\u6210\u672C\u3002</li></ul><h3 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u4F7F\u7528\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC (Content Distribution Network, CDN) , Web \u7F13\u5B58\u5668\u6B63\u5728\u56E0\u7279\u7F51\u4E2D\u53D1\u6325\u7740\u8D8A\u6765\u8D8A\u91CD\u8981\u7684\u4F5C\u7528\u3002CDN \u516C\u53F8\u5728\u56E0\u7279\u7F51\u4E0A\u5B89\u88C5\u4E86\u8BB8\u591A\u5730\u7406\u4E0A\u5206\u6563\u7684\u7F13\u5B58\u5668\uFF0C\u56E0\u800C\u4F7F\u5927\u91CF\u6D41\u91CF\u5B9E\u73B0\u4E86\u672C\u5730\u5316\u3002</p>',34),T=[a];function n(c,r,d,h,s,p){return i(),l("div",null,T)}const u=e(t,[["render",n]]);export{b as __pageData,u as default};
