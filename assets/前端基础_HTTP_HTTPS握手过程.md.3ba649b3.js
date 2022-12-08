import{_ as e,o as l,c as t,a as r}from"./app.aec7eb12.js";const S=JSON.parse('{"title":"HTTPS RSA\u63E1\u624B\u8FC7\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52A0\u5BC6\u6280\u672F","slug":"\u52A0\u5BC6\u6280\u672F","link":"#\u52A0\u5BC6\u6280\u672F","children":[{"level":3,"title":"\u6DF7\u5408\u52A0\u5BC6","slug":"\u6DF7\u5408\u52A0\u5BC6","link":"#\u6DF7\u5408\u52A0\u5BC6","children":[]},{"level":3,"title":"\u6458\u8981\u7B97\u6CD5","slug":"\u6458\u8981\u7B97\u6CD5","link":"#\u6458\u8981\u7B97\u6CD5","children":[]},{"level":3,"title":"\u6570\u5B57\u8BC1\u4E66","slug":"\u6570\u5B57\u8BC1\u4E66","link":"#\u6570\u5B57\u8BC1\u4E66","children":[]}]},{"level":2,"title":"\u62D3\u5C55","slug":"\u62D3\u5C55","link":"#\u62D3\u5C55","children":[{"level":3,"title":"DH\u5BC6\u94A5\u4EA4\u6362","slug":"dh\u5BC6\u94A5\u4EA4\u6362","link":"#dh\u5BC6\u94A5\u4EA4\u6362","children":[]}]}],"relativePath":"\u524D\u7AEF\u57FA\u7840/HTTP/HTTPS\u63E1\u624B\u8FC7\u7A0B.md","lastUpdated":1670483514000}'),i={name:"\u524D\u7AEF\u57FA\u7840/HTTP/HTTPS\u63E1\u624B\u8FC7\u7A0B.md"},o=r('<h1 id="https-rsa\u63E1\u624B\u8FC7\u7A0B" tabindex="-1">HTTPS RSA\u63E1\u624B\u8FC7\u7A0B <a class="header-anchor" href="#https-rsa\u63E1\u624B\u8FC7\u7A0B" aria-hidden="true">#</a></h1><blockquote><p><code>HTTP</code>\u4E0E<code>HTTPS</code>\u7684\u533A\u522B</p><ol><li>HTTP\u662F\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u4FE1\u606F\u662F\u660E\u6587\u4F20\u8F93\uFF0C<strong>\u5B58\u5728\u5B89\u5168\u98CE\u9669\u7684\u95EE\u9898</strong>\u3002HTTTPS\u5219\u662F\u89E3\u51B3HTTP\u4E0D\u5B89\u5168\u7684\u95EE\u9898\u3002\u5728TCP\u548CHTTP\u4E4B\u95F4<strong>\u52A0\u5165\u4E86SSL/TLS\u5B89\u5168\u534F\u8BAE</strong>\uFF0C\u4F7F\u5F97\u62A5\u6587\u80FD\u52A0\u5BC6\u4F20\u8F93\u3002</li><li>HTTP\u8FDE\u63A5\u5EFA\u7ACB\u76F8\u5BF9\u7B80\u5355\uFF0CTCP\u4E09\u6B21\u63E1\u624B\u4E4B\u540E\u4FBF\u53EF\u4EE5\u8FDB\u884CHTTP\u7684\u62A5\u6587\u4F20\u8F93\uFF0C\u800CHTTPS\u5728TCP\u4E09\u6B21\u63E1\u624B\u4E4B\u540E\uFF0C<strong>\u8FD8\u9700\u8981\u8FDB\u884CSSL/TLS\u7684\u63E1\u624B\u8FC7\u7A0B</strong>\uFF0C\u624D\u80FD\u8FDB\u5165\u52A0\u5BC6\u62A5\u6587\u4F20\u8F93\u3002</li><li>HTTP\u7684\u7AEF\u53E3\u53F7\u662F80\uFF0C<strong>HTTPS\u7684\u7AEF\u53E3\u53F7\u662F443</strong></li><li>HTTPS<strong>\u9700\u8981\u5411CA(\u8BC1\u4E66\u6743\u5A01\u673A\u6784)\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66</strong>\uFF0C\u6765\u4FDD\u8BC1\u670D\u52A1\u5668\u7684\u8EAB\u4EFD\u662F\u53EF\u4FE1\u7684\u3002</li></ol></blockquote><ul><li>HTTPS\u89E3\u51B3\u4E86\u54EA\u4E9B\u95EE\u9898 <ol><li>\u4FE1\u606F\u52A0\u5BC6\uFF1A\u4EA4\u4E92\u4FE1\u606F\u65E0\u6CD5\u7A83\u53D6</li><li>\u6821\u9A8C\u673A\u5236\uFF1A\u65E0\u6CD5\u7BE1\u6539\u901A\u4FE1\u5185\u5BB9\uFF0C\u7BE1\u6539\u4E86\u5C31\u4E0D\u80FD\u6B63\u5E38\u663E\u793A</li><li>\u8EAB\u4EFD\u8BC1\u4E66\uFF1A\u53EF\u4EE5\u8BC1\u660E\u662F\u771F\u5B9E\u7684\u7F51\u7AD9</li></ol></li></ul><h2 id="\u52A0\u5BC6\u6280\u672F" tabindex="-1">\u52A0\u5BC6\u6280\u672F <a class="header-anchor" href="#\u52A0\u5BC6\u6280\u672F" aria-hidden="true">#</a></h2><h3 id="\u6DF7\u5408\u52A0\u5BC6" tabindex="-1">\u6DF7\u5408\u52A0\u5BC6 <a class="header-anchor" href="#\u6DF7\u5408\u52A0\u5BC6" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u6DF7\u5408\u52A0\u5BC6\u7684\u65B9\u5F0F\u53EF\u4EE5\u4FDD\u8BC1\u4FE1\u606F\u7684\u673A\u5BC6\u6027\uFF0C\u89E3\u51B3\u4E86\u7A83\u542C\u7684\u98CE\u9669</p><blockquote><p>\u5BF9\u79F0\u52A0\u5BC6\u548C\u975E\u5BF9\u79F0\u52A0\u5BC6 \uFF081\uFF09\u5BF9\u79F0\u52A0\u5BC6\u52A0\u5BC6\u4E0E\u89E3\u5BC6\u4F7F\u7528\u7684\u662F\u540C\u6837\u7684\u5BC6\u94A5\uFF0C\u6240\u4EE5\u901F\u5EA6\u5FEB\uFF0C\u4F46\u7531\u4E8E\u9700\u8981\u5C06\u5BC6\u94A5\u5728\u7F51\u7EDC\u4F20\u8F93\uFF0C\u6240\u4EE5\u5B89\u5168\u6027\u4E0D\u9AD8\u3002</p><p>\uFF082\uFF09\u975E\u5BF9\u79F0\u52A0\u5BC6\u4F7F\u7528\u4E86\u4E00\u5BF9\u5BC6\u94A5\uFF0C\u516C\u94A5\u4E0E\u79C1\u94A5\uFF0C\u6240\u4EE5\u5B89\u5168\u6027\u9AD8\uFF0C\u4F46\u52A0\u5BC6\u4E0E\u89E3\u5BC6\u901F\u5EA6\u6162\u3002</p><p>\uFF083\uFF09 \u89E3\u51B3\u7684\u529E\u6CD5\u662F\u5C06\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u7684\u516C\u94A5\u8FDB\u884C\u52A0\u5BC6\uFF0C\u7136\u540E\u53D1\u9001\u51FA\u53BB\uFF0C\u63A5\u6536\u65B9\u4F7F\u7528\u79C1\u94A5\u8FDB\u884C\u89E3\u5BC6\u5F97\u5230\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\uFF0C\u7136\u540E\u53CC\u65B9\u53EF\u4EE5\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6\u6765\u8FDB\u884C\u6C9F\u901A\u3002</p></blockquote><p>HTTPS\u91C7\u7528\u7684\u662F <code>\u5BF9\u79F0\u52A0\u5BC6</code> \u548C <code>\u975E\u5BF9\u79F0\u52A0\u5BC6</code> \u7ED3\u5408\u7684<strong>\u6DF7\u5408\u52A0\u5BC6</strong>\u65B9\u5F0F\uFF1A</p><p>\u5728\u901A\u4FE1\u5EFA\u7ACB\u524D\u91C7\u7528<strong>\u975E\u5BF9\u79F0\u52A0\u5BC6</strong>\u7684\u65B9\u5F0F\u4EA4\u6362\u4F1A\u8BDD\u79D8\u94A5\uFF0C\u670D\u52A1\u5668\u628A\u516C\u94A5A\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\uFF0C<strong>\u6D4F\u89C8\u5668\u968F\u673A\u751F\u6210\u4E00\u4E2A\u7528\u4E8E\u5BF9\u79F0\u52A0\u5BC6\u7684\u79D8\u94A5X</strong>\uFF0C\u7528\u516C\u94A5A\u5BF9X\u8FDB\u884C\u52A0\u5BC6\u4F20\u56DE\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u7528\u79C1\u94A5B\u8FDB\u884C\u89E3\u5BC6\uFF0C\u5F97\u5230\u79D8\u94A5X\uFF0C\u8FD9\u6837\u5B50\u4E24\u8FB9\u90FD\u6709\u79D8\u94A5X\uFF0C\u800C\u522B\u4EBA\u65E0\u6CD5\u77E5\u9053\u5B83\uFF0C<strong>\u5728\u4E4B\u540E\u7684\u901A\u4FE1\u4E2D\uFF0C\u4F7F\u7528\u79D8\u94A5X\u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u89E3\u5BC6</strong>\u3002</p><h3 id="\u6458\u8981\u7B97\u6CD5" tabindex="-1">\u6458\u8981\u7B97\u6CD5 <a class="header-anchor" href="#\u6458\u8981\u7B97\u6CD5" aria-hidden="true">#</a></h3><p>\u6458\u8981\u7B97\u6CD5\u7528\u6765\u5B9E\u73B0\u5B8C\u6574\u6027\uFF0C\u80FD\u591F\u4E3A\u6570\u636E\u751F\u6210\u72EC\u4E00\u65E0\u4E8C\u7684\u300C\u6307\u7EB9\u300D\uFF0C\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7684\u5B8C\u6574\u6027\uFF0C\u89E3\u51B3\u4E86\u7BE1\u6539\u7684\u2EDB\u9669\u3002</p><p>\u5BA2\u6237\u7AEF\u5728\u53D1\u9001\u660E\u6587\u4E4B\u524D\u4F1A\u901A\u8FC7\u6458\u8981\u7B97\u6CD5\u7B97\u51FA\u660E\u6587\u7684\u300C\u6307\u7EB9\u300D\uFF0C<strong>\u53D1\u9001\u7684\u65F6\u5019\u628A\u300C\u6307\u7EB9 + \u660E\u6587\u300D\u4E00\u540C\u52A0\u5BC6\u6210\u5BC6\u6587\u540E\uFF0C\u53D1\u9001\u7ED9\u670D\u52A1\u5668</strong>\uFF0C\u670D\u52A1\u5668\u89E3\u5BC6\u540E\uFF0C\u7528\u76F8\u540C\u7684\u6458\u8981\u7B97\u6CD5\u7B97\u51FA\u53D1\u9001\u8FC7\u6765\u7684\u660E\u6587\u7684\u300C\u6307\u7EB9\u300D\uFF0C\u901A\u8FC7<strong>\u6BD4\u8F83\u5BA2\u6237\u7AEF\u643A\u5E26\u7684\u300C\u6307\u7EB9\u300D\u548C\u5F53\u524D\u7B97\u51FA \u7684\u300C\u6307\u7EB9\u300D</strong>\uFF0C\u82E5\u300C\u6307\u7EB9\u300D\u76F8\u540C\uFF0C\u8BF4\u660E\u6570\u636E\u662F\u5B8C\u6574\u7684\u3002</p><h3 id="\u6570\u5B57\u8BC1\u4E66" tabindex="-1">\u6570\u5B57\u8BC1\u4E66 <a class="header-anchor" href="#\u6570\u5B57\u8BC1\u4E66" aria-hidden="true">#</a></h3><h4 id="\u5982\u4F55\u4FDD\u8BC1\u516C\u94A5\u4E0D\u88AB\u7BE1\u6539\u548C\u4FE1\u4EFB\u5EA6" tabindex="-1">\u5982\u4F55\u4FDD\u8BC1\u516C\u94A5\u4E0D\u88AB\u7BE1\u6539\u548C\u4FE1\u4EFB\u5EA6? <a class="header-anchor" href="#\u5982\u4F55\u4FDD\u8BC1\u516C\u94A5\u4E0D\u88AB\u7BE1\u6539\u548C\u4FE1\u4EFB\u5EA6" aria-hidden="true">#</a></h4><p>\u501F\u52A9\u7B2C\u4E09\u65B9\u6743\u5A01\u673A\u6784 CA (\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784)\uFF0C\u5C06\u670D\u52A1\u5668\u516C\u94A5\u653E\u5728\u6570\u5B57\u8BC1\u4E66(\u7531\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u9881\u53D1)\u4E2D\uFF0C\u53EA\u8981\u8BC1\u4E66\u662F\u53EF\u4FE1\u7684\uFF0C\u516C\u94A5\u5C31\u662F\u53EF\u4FE1\u7684\u3002</p><p>\u670D\u52A1\u5668\u628A\u81EA\u5DF1\u7684\u516C\u94A5\u6CE8\u518C\u5230CA\uFF0CCA\u673A\u6784\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u5C06\u670D\u52A1\u5668\u7684\u516C\u94A5\u8FDB\u884C\u6570\u5B57\u7B7E\u540D\uFF0C\u5E76\u9881\u53D1\u6570\u5B57\u8BC1\u4E66\u3002\u5EFA\u7ACB\u901A\u4FE1\u4E4B\u524D\uFF0C\u670D\u52A1\u5668\u5148\u8FD4\u56DE\u516C\u94A5\u548CCA\u6570\u5B57\u7B7E\u540D\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u62FF\u5230\u6570\u5B57\u7B7E\u540D\u540E\uFF0C\u4F7F\u7528CA\u7684\u516C\u94A5\uFF08\u5DF2\u7ECF\u4E8B\u5148\u6CE8\u5165\u5230\u6D4F\u89C8\u5668\u6216\u8005\u7CFB\u7EDF\u4E2D\uFF09\u8FDB\u884C\u786E\u8BA4\u6570\u5B57\u8BC1\u4E66\u7684\u771F\u5B9E\u6027\uFF0C\u4ECE\u6570\u5B57\u8BC1\u4E66\u83B7\u53D6\u5230\u670D\u52A1\u5668\u7684\u516C\u94A5\u540E\uFF0C\u4F7F\u7528\u5B83\u5BF9\u62A5\u6587\u52A0\u5BC6\u540E\u53D1\u9001\uFF0C\u670D\u52A1\u5668\u4F7F\u7528\u79C1\u94A5\u8FDB\u884C\u89E3\u5BC6\u3002</p><h4 id="\u6570\u5B57\u8BC1\u4E66\u548C\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784-ca" tabindex="-1"><strong>\u6570\u5B57\u8BC1\u4E66</strong>\u548C<strong>\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784(CA)</strong> <a class="header-anchor" href="#\u6570\u5B57\u8BC1\u4E66\u548C\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784-ca" aria-hidden="true">#</a></h4><p>\u4E00\u4E2A\u6570\u5B57\u8BC1\u4E66\u4E00\u822C\u5305\u62EC\u4E86\uFF1A\u516C\u94A5\u3001\u6301\u6709\u8005\u4FE1\u606F\u3001CA\u673A\u6784\u7684\u4FE1\u606F\u3001CA\u5BF9\u8FD9\u4EFD\u6587\u4EF6\u7684\u6570\u5B57\u7B7E\u540D\u4EE5\u53CA\u4F7F\u7528\u7684\u7B97\u6CD5\u3001\u8BC1\u4E66\u7684\u6709\u6548\u671F\u3001\u8FD8\u6709\u4E00\u4E9B\u989D\u5916\u7684\u4FE1\u606F\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202203181106175.png" alt=""></p><ul><li><p>CA\u7B7E\u53D1\u8BC1\u4E66\u7684\u8FC7\u7A0B\u5982\u4E0B\uFF1A\u5BF9\u6301\u6709\u8005\u7684\u516C\u94A5\u3001\u7528\u9014\u3001\u9881\u53D1\u8005\u3001\u6709\u6548\u65F6\u95F4\u7B49\u4FE1\u606F\u6253\u5305\uFF0C\u7136\u540E\u5BF9\u8FD9\u4E9B\u4FE1\u606F\u8FDB\u884C<code>Hash</code>\u8BA1\u7B97\uFF0C\u5F97\u5230\u4E00\u4E2AHash\u503C\uFF1BCA\u4F1A\u4F7F\u7528\u81EA\u5DF1\u7684\u79D8\u94A5\u5BF9hash\u503C\u8FDB\u884C\u52A0\u5BC6\uFF0C\u751F\u6210\u6570\u5B57\u7B7E\u540D<code>Certificate Signature</code>\uFF0C\u540E\u7EED\u5C06\u6570\u5B57\u7B7E\u540D\u6DFB\u52A0\u5728\u6587\u4EF6\u8BC1\u4E66\u4E0A\uFF0C\u5F62\u6210\u6570\u5B57\u8BC1\u4E66\uFF1B</p></li><li><p>\u5BA2\u6237\u7AEF\u6821\u9A8C\u6570\u5B57\u8BC1\u4E66\u7684\u8FC7\u7A0B\uFF1A\u540C\u6837\u5BA2\u6237\u7AEF\u4F1A\u5C06\u540C\u6837\u7684Hash\u7B97\u6CD5\u83B7\u5F97\u8BE5\u8BC1\u4E66\u7684hash\u503CH1\uFF1B\u901A\u5E38\u6D4F\u89C8\u5668\u6216\u8005\u64CD\u4F5C\u7CFB\u7EDF\u5DF2\u7ECF\u96C6\u6210\u4E86CA\u7684\u516C\u94A5\u4FE1\u606F\uFF0C\u6D4F\u89C8\u5668\u6536\u5230\u8BC1\u4E66\u540E\u5C31\u53EF\u4EE5<strong>\u4F7F\u7528CA\u7684\u516C\u94A5\u89E3\u5BC6\u6570\u5B57\u7B7E\u540D</strong>\uFF0C\u5F97\u5230hash\u503CH2\uFF0C\u901A\u8FC7\u6BD4\u5BF9H1\u548CH2\u662F\u5426\u76F8\u540C\u6765\u5224\u65AD\u8BC1\u4E66\u662F\u5426\u53EF\u4FE1\u3002</p></li></ul><h4 id="\u8BC1\u4E66\u94FE" tabindex="-1">\u8BC1\u4E66\u94FE <a class="header-anchor" href="#\u8BC1\u4E66\u94FE" aria-hidden="true">#</a></h4><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u5411CA\u673A\u6784\u7533\u8BF7\u7684\u8BC1\u4E66\u90FD\u4E0D\u662F\u6839\u8BC1\u4E66\u9881\u53D1\u7684\uFF0C\u800C\u662F\u4E2D\u95F4\u8BC1\u4E66\u7B7E\u53D1\u7684\u3002\u5BA2\u6237\u7AEF\u6536\u5230\u7F51\u7AD9\u7684\u8BC1\u4E66\u65F6\uFF0C\u53D1\u73B0\u8BC1\u4E66\u7684\u7B7E\u53D1\u8005\u4E0D\u662F\u6839\u8BC1\u4E66\uFF0C\u5C31\u4F1A\u5411CA\u8BF7\u6C42\u4E2D\u95F4\u8BC1\u4E66\uFF1B\u62FF\u5230\u4E2D\u95F4\u8BC1\u4E66\u540E\uFF0C\u56DE\u53BB\u5224\u65AD\u5B83\u7684\u7B7E\u53D1\u8005\u662F\u4E0D\u662F\u6839\u8BC1\u4E66\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u68C0\u67E5\u6B64\u8BC1\u4E66\u662F\u5426\u5B58\u5728\u4E8E\u9884\u8F7D\u5165\u7684\u6839\u8BC1\u4E66\u6E05\u5355\u4E2D\uFF0C\u7136\u540E\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u901A\u8FC7\u5219\u8BA4\u4E3A\u4E2D\u95F4\u8BC1\u4E66\u6709\u6548\uFF0C\u518D\u7EE7\u7EED\u9A8C\u8BC1\u7F51\u7AD9\u7684\u8BC1\u4E66\u3002</p><p>\u4E00\u5C42\u5C42\u7684\u9A8C\u8BC1\u5F62\u6210\u4E86\u4E00\u6761\u4FE1\u4EFB\u94FE\uFF0C\u4E4B\u6240\u4EE5\u6709\u8FD9\u4E48\u591A\u4E2D\u95F4\u8BC1\u4E66\uFF0C\u662F\u4E3A\u4E86\u4FDD\u8BC1\u6839\u8BC1\u4E66\u7684\u7EDD\u5BF9\u5B89\u5168\u6027\uFF0C\u5C06\u6839\u8BC1\u4E66\u9694\u79BB\u5730\u8D8A\u4E25\u683C\u8D8A\u597D\uFF0C\u5426\u5219\u4E00\u65E6\u6839\u8BC1\u4E66\u5931\u5B88\uFF0C\u90A3\u4E48\u6574\u6761\u4FE1\u4EFB\u94FE\u90FD\u4F1A\u6709\u95EE\u9898\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202203181132782.png" alt=""></p><h4 id="ssl-tls\u534F\u8BAE" tabindex="-1">SSL/TLS\u534F\u8BAE <a class="header-anchor" href="#ssl-tls\u534F\u8BAE" aria-hidden="true">#</a></h4><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202203180007355.png" alt=""></p><p>\u57FA\u672C\u6D41\u7A0B\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u7D22\u8981\u5E76\u9A8C\u8BC1\u670D\u52A1\u5668\u7684\u516C\u94A5</li><li>\u53CC\u65B9\u534F\u5546\u4EA7\u751F\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D</li><li>\u53CC\u65B9\u91C7\u7528\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D\u8FDB\u884C\u52A0\u5BC6\u901A\u4FE1\u3002</li></ul><p>\u4E0A\u56FE\u7B80\u8FF0\u7684\u5C31\u662FTLS\u7684\u63E1\u624B \u{1F91D} \u8FC7\u7A0B\uFF0C\u5176\u5B9E\u6BCF\u4E00\u4E2A\u300C\u5B9E\u7EBF\u6846\u300D\u5C31\u662F\u4E00\u4E2A\u8BB0\u5F55\uFF0C<code>\u8BB0\u5F55</code>\u662FTLS\u6536\u53D1\u6570\u636E\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u7C7B\u4F3CTCP\u91CC\u7684segment\u3002\u591A\u4E2A\u8BB0\u5F55\u53EF\u4EE5\u7EC4\u5408\u6210\u4E00\u4E2ATCP\u5305\u53D1\u9001</p><p>\u524D\u4E24\u6B65\u5C31\u662F\u300E\u63E1\u624B\u9636\u6BB5\u300F\uFF0C\u5171\u6D89\u53CA4\u6B21\u901A\u4FE1\uFF0C\u9700\u89812\u4E2ARTT\u65F6\u5EF6\uFF1A</p><blockquote><p><strong>RTT</strong>(Round-Trip Time)\uFF0C\u5F80\u8FD4<strong>\u65F6\u5EF6</strong>\u3002 \u5728\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E2D\u5B83\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6027\u80FD\u6307\u6807\uFF0C\u8868\u793A\u4ECE\u53D1\u9001\u7AEF\u53D1\u9001\u6570\u636E\u5F00\u59CB\uFF0C\u5230\u53D1\u9001\u7AEF\u6536\u5230\u6765\u81EA\u63A5\u6536\u7AEF\u7684\u786E\u8BA4\uFF08\u63A5\u6536\u7AEF\u6536\u5230\u6570\u636E\u540E\u4FBF\u7ACB\u5373\u53D1\u9001\u786E\u8BA4\uFF09\uFF0C\u603B\u5171\u7ECF\u5386\u7684<strong>\u65F6\u5EF6</strong>\u3002 \u5F80\u8FD4<strong>\u5EF6\u65F6</strong>(<strong>RTT</strong>)\u7531\u4E09\u4E2A\u90E8\u5206\u51B3\u5B9A\uFF1A\u5373\u94FE\u8DEF\u7684\u4F20\u64AD\u65F6\u95F4\u3001\u672B\u7AEF\u7CFB\u7EDF\u7684\u5904\u7406\u65F6\u95F4\u4EE5\u53CA\u8DEF\u7531\u5668\u7684\u7F13\u5B58\u4E2D\u7684\u6392\u961F\u548C\u5904\u7406\u65F6\u95F4\u3002</p></blockquote><ol><li>\u9996\u5148\uFF0C\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u8D77\u52A0\u5BC6\u901A\u4FE1\u8BF7\u6C42\uFF0C\u4E5F\u5C31\u662F<code>ClientHello</code></li></ol><p>\u8FD9\u4E00\u6B65\uFF0C\u5BA2\u6237\u7AEF\u4E3B\u8981\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E0B\u5185\u5BB9</p><ul><li>\u5BA2\u6237\u7AEF\u652F\u6301\u7684SSL/TLS\u534F\u8BAE\u7248\u672C</li><li>\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u968F\u673A\u6570\uFF08<code>Client Random</code>\uFF09\uFF0C\u7528\u4E8E\u540E\u9762\u4EA7\u751F\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D</li><li>\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u5BC6\u7801\u5957\u4EF6\u5217\u8868\uFF0C\u5982RSA\u52A0\u5BC6\u7B97\u6CD5</li></ul><blockquote><p>\u5BC6\u7801\u5957\u4EF6\u7684\u547D\u540D\u4E5F\u662F\u6709\u89C4\u5219\u7684\uFF0C\u57FA\u672C\u5F62\u5F0F\u662F\uFF1A\u300C\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5+\u7B7E\u540D\u7B97\u6CD5+\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5+\u6458\u8981\u7B97\u6CD5\u300D \u4F8B\u5982\uFF1ATLS_RSA_WITH_AES_128_GCM_SHA256</p><ol><li>WITH\u524D\u53EA\u6709\u4E00\u4E2A\u5355\u8BCD\uFF0C\u8BF4\u660E\u63E1\u624B\u65F6\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\u548C\u7B7E\u540D\u7B97\u6CD5\u90FD\u662F\u4F7F\u7528RSA</li><li>\u63E1\u624B\u540E\u7684\u901A\u4FE1\u4F7F\u7528AES\u5BF9\u79F0\u7B97\u6CD5\uFF0C\u5BC6\u94A5\u957F\u5EA6128\uFF0C\u5206\u7EC4\u6A21\u5F0F\u662FGCM</li><li>\u6458\u8981\u7B97\u6CD5\u662FSHA256\u7528\u4E8E\u6D88\u606F\u8BA4\u8BC1\u548C\u4EA7\u751F\u968F\u673A\u6570</li></ol></blockquote><ol start="2"><li>\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u540E\uFF0C\u4F5C\u51FA\u54CD\u5E94\uFF0C\u4E5F\u5C31\u662F<code>ServerHello</code></li></ol><p>\u670D\u52A1\u5668\u56DE\u5E94\u7684\u5185\u5BB9\u6709\uFF1A</p><ul><li>\u786E\u8BA4SLL/TLS\u534F\u8BAE\u7248\u672C\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u5219\u5173\u95ED\u52A0\u5BC6\u901A\u4FE1</li><li>\u670D\u52A1\u5668\u751F\u6210\u7684\u968F\u673A\u6570\uFF08<code>Server Random</code>\uFF09\uFF0C\u7528\u4E8E\u540E\u9762\u751F\u4EA7\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D</li><li>\u786E\u8BA4\u5BC6\u7801\u5957\u4EF6\uFF0C\u5982RSA\u52A0\u5BC6\u7B97\u6CD5</li><li>\u670D\u52A1\u5668\u7684\u6570\u5B57\u8BC1\u4E66</li></ul><ol start="3"><li>\u5BA2\u6237\u7AEF\u6536\u5230\u56DE\u5E94\u540E\uFF0C\u9996\u5148\u901A\u8FC7\u6D4F\u89C8\u5668\uFF08\u6216\u8005\u64CD\u4F5C\u7CFB\u7EDF\uFF09\u4E2D\u7684CA\u516C\u94A5\uFF0C\u786E\u8BA4\u670D\u52A1\u5668\u7684\u6570\u5B57\u8BC1\u4E66\u7684\u771F\u5B9E\u6027\uFF0C\u5982\u679C\u8BC1\u4E66\u6CA1\u6709\u95EE\u9898\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u4ECE\u6570\u5B57\u8BC1\u4E66\u4E2D\u53D6\u51FA\u670D\u52A1\u5668\u516C\u94A5\uFF0C\u7136\u540E\u4F7F\u7528\u5B83\u52A0\u5BC6<code>\u7B2C\u4E09\u4E2A\u968F\u673A\u6570</code>\u3002</li></ol><p>\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E0B\u4FE1\u606F\uFF1A</p><ul><li>\u4E00\u4E2A\u968F\u673A\u6570\uFF08<code>pre-master</code>\uFF09\uFF0C\u4F1A\u88AB\u670D\u52A1\u5668\u516C\u94A5\u52A0\u5BC6\u3002</li><li><strong>\u52A0\u5BC6\u901A\u4FE1\u7B97\u6CD5\u6539\u53D8\u901A\u77E5<code>Change Cipher Spec</code></strong>\uFF0C\u8868\u793A\u968F\u540E\u7684\u4FE1\u606F\u90FD\u4F1A\u5C06\u7528\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D\u52A0\u5BC6\u901A\u4FE1\u3002</li><li><strong>\u5BA2\u6237\u7AEF\u63E1\u624B\u7ED3\u675F\u901A\u77E5<code>Encrypted Handshake Message(Finishd)</code></strong>\uFF0C\u8868\u793A\u5BA2\u6237\u7AEF\u63E1\u624B\u9636\u6BB5\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u540C\u65F6\u4F1A\u628A\u4E4B\u524D\u6240\u6709\u53D1\u9001\u7684\u6570\u636E\u505A\u4E2A\u6458\u8981\uFF0C\u518D\u7528\u4F1A\u8BDD\u5BC6\u94A5(master secret)\u52A0\u5BC6\u4E00\u4E0B\uFF0C\u8BA9\u670D\u52A1\u5668\u505A\u4E2A\u9A8C\u8BC1\uFF0C<strong>\u9A8C\u8BC1\u52A0\u5BC6\u901A\u4FE1\u662F\u5426\u53EF\u7528\u548C\u4E4B\u524D\u63E1\u624B\u4FE1\u606F\u662F\u5426\u6709\u88AB\u4E2D\u9014\u7BE1\u6539\u8FC7</strong>\u3002</li></ul><p>\u6B64\u65F6\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u5C31\u540C\u65F6\u6709\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u63A5\u7740\u6709\u53CC\u65B9\u534F\u5546\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C<strong>\u5404\u81EA\u751F\u6210</strong>\u672C\u6B21\u901A\u4FE1\u7684\u300C\u4F1A\u8BDD\u79D8\u94A5<code>Master Secret</code>\u300D\u3002</p><ol start="4"><li>\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\u540E\uFF0C\u5229\u7528\u79C1\u94A5\u89E3\u5BC6\u51FA\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u534F\u5546\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u8BA1\u7B97\u51FA\u901A\u4FE1\u7684\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D\u3002</li></ol><p>\u7136\u540E\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6700\u540E\u7684\u4FE1\u606F\uFF1A</p><ul><li><strong>\u52A0\u5BC6\u901A\u4FE1\u7B97\u6CD5\u6539\u53D8\u901A\u77E5<code>Change Cipher Spec</code></strong>\uFF0C\u8868\u793A\u968F\u540E\u7684\u4FE1\u606F\u90FD\u5C06\u7528\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D\u52A0\u5BC6\u901A\u4FE1\u3002</li><li><strong>\u670D\u52A1\u5668\u63E1\u624B\u7ED3\u675F\u901A\u77E5<code>Encrypted Handshake Message</code></strong>\u3002\u8868\u793A\u670D\u52A1\u5668\u63E1\u624B\u9636\u6BB5\u5DF2\u7ECF\u7ED3\u675F\u3002 \u5982\u679C\u53CC\u65B9\u90FD\u9A8C\u8BC1\u52A0\u5BC6\u548C\u89E3\u5BC6\u6CA1\u95EE\u9898\uFF0C\u90A3\u4E48\u63E1\u624B\u6B63\u5F0F\u5B8C\u6210\u3002</li></ul><p>\u81F3\u6B64\uFF0C\u6574\u4E2A SSL/TLS \u7684\u63E1\u624B\u9636\u6BB5\u5168\u90E8\u7ED3\u675F\u3002\u63A5\u4E0B\u6765\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u8FDB\u5165\u52A0\u5BC6\u901A\u4FE1\uFF0C\u5C31\u5B8C\u5168\u662F\u4F7F\u7528\u666E\u901A\u7684 HTTP \u534F\u8BAE\uFF0C\u53EA\u4E0D\u8FC7<strong>\u7528\u300C\u4F1A\u8BDD\u79D8\u94A5\u300D\u52A0\u5BC6\u5185\u5BB9</strong>\u3002</p><h2 id="\u62D3\u5C55" tabindex="-1">\u62D3\u5C55 <a class="header-anchor" href="#\u62D3\u5C55" aria-hidden="true">#</a></h2><h3 id="dh\u5BC6\u94A5\u4EA4\u6362" tabindex="-1">DH\u5BC6\u94A5\u4EA4\u6362 <a class="header-anchor" href="#dh\u5BC6\u94A5\u4EA4\u6362" aria-hidden="true">#</a></h3><p>\u4F7F\u7528RSA\u5BC6\u94A5\u534F\u5546\u7B97\u6CD5\u7684\u6700\u5927\u95EE\u9898\u662F<strong>\u4E0D\u652F\u6301\u524D\u5411\u4FDD\u5BC6</strong>\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u4F20\u9012\u968F\u673A\u6570\u7ED9\u670D\u52A1\u7AEF\u662F\u4F7F\u7528\u670D\u52A1\u7AEF\u516C\u94A5\u52A0\u5BC6\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u4E4B\u540E\uFF0C\u4F1A\u7528\u79D8\u94A5\u89E3\u5BC6\u5F97\u5230\u968F\u673A\u6570\u3002\u4E00\u65E6\u670D\u52A1\u7AEF\u7684\u79C1\u94A5\u88AB\u7B2C\u4E09\u65B9\u622A\u53D6\uFF0C\u90A3\u4E48\u6240\u4EE5\u7684TLS\u901A\u8BAF\u5BC6\u6587\u90FD\u4F1A\u88AB\u7834\u89E3\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u51FA\u73B0\u4E86DH\u5BC6\u94A5\u534F\u5546\u7B97\u6CD5\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202203181222044.png" alt=""></p><p>DH \u5BC6\u94A5\u4EA4\u6362\u8FC7\u7A0B\u4E2D\uFF0C\u5373\u4F7F\u7B2C\u4E09\u65B9\u622A\u83B7\u4E86 TLS \u63E1\u624B\u9636\u6BB5\u4F20\u9012\u7684\u516C\u94A5\uFF0C\u5728\u4E0D\u77E5\u9053\u7684\u79C1\u94A5\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u662F\u65E0\u6CD5\u8BA1\u7B97\u51FA\u5BC6\u94A5\u7684\uFF0C\u800C\u4E14\u6BCF\u4E00\u6B21\u5BF9\u79F0\u52A0\u5BC6\u5BC6\u94A5\u90FD\u662F\u5B9E\u65F6\u751F\u6210\u7684\uFF0C\u5B9E\u73B0<strong>\u524D\u5411\u4FDD\u5BC6</strong>\u3002</p><p>\u4F46\u56E0\u4E3A DH \u7B97\u6CD5\u7684\u8BA1\u7B97\u6548\u7387\u95EE\u9898\uFF0C\u540E\u9762\u51FA\u73B0\u4E86 ECDHE \u5BC6\u94A5\u534F\u5546\u7B97\u6CD5\uFF0C\u6211\u4EEC\u73B0\u5728\u5927\u591A\u6570\u7F51\u7AD9\u4F7F\u7528\u7684\u6B63\u662F ECDHE \u5BC6\u94A5\u534F\u5546\u7B97\u6CD5\u3002</p>',53),a=[o];function s(n,d,c,h,p,g){return l(),t("div",null,a)}const u=e(i,[["render",s]]);export{S as __pageData,u as default};
