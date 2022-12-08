import{_ as e,o as a,c as l,a as i}from"./app.aec7eb12.js";const u=JSON.parse('{"title":"Webpack\u77E5\u8BC6\u4F53\u7CFB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662Fwebpack","slug":"\u4EC0\u4E48\u662Fwebpack","link":"#\u4EC0\u4E48\u662Fwebpack","children":[]},{"level":2,"title":"webpack\u6253\u5305\u6D41\u7A0B","slug":"webpack\u6253\u5305\u6D41\u7A0B","link":"#webpack\u6253\u5305\u6D41\u7A0B","children":[]},{"level":2,"title":"\u4F7F\u7528webpack","slug":"\u4F7F\u7528webpack","link":"#\u4F7F\u7528webpack","children":[]},{"level":2,"title":"Loader\u7EC4\u4EF6","slug":"loader\u7EC4\u4EF6","link":"#loader\u7EC4\u4EF6","children":[]},{"level":2,"title":"Plugin\u7EC4\u4EF6","slug":"plugin\u7EC4\u4EF6","link":"#plugin\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u5982\u4F55\u5B66\u4E60webpack","slug":"\u5982\u4F55\u5B66\u4E60webpack","link":"#\u5982\u4F55\u5B66\u4E60webpack","children":[]}],"relativePath":"\u9762\u8BD5\u9898\u5E93/\u5B57\u8282\u9752\u8BAD\u8425/Webpack\u77E5\u8BC6\u4F53\u7CFB.md","lastUpdated":1670483514000}'),r={name:"\u9762\u8BD5\u9898\u5E93/\u5B57\u8282\u9752\u8BAD\u8425/Webpack\u77E5\u8BC6\u4F53\u7CFB.md"},c=i('<h1 id="webpack\u77E5\u8BC6\u4F53\u7CFB" tabindex="-1">Webpack\u77E5\u8BC6\u4F53\u7CFB <a class="header-anchor" href="#webpack\u77E5\u8BC6\u4F53\u7CFB" aria-hidden="true">#</a></h1><blockquote><p><a href="https://bytedance.feishu.cn/file/boxcnjX3wzA3dU2zWwBNHgYgs9g" target="_blank" rel="noreferrer">\u8BFE\u4EF6\u94FE\u63A5</a><a href="https://gitmind.cn/app/doc/fac1c196e29b8f9052239f16cff7d4c7" target="_blank" rel="noreferrer">webpack5\u4F53\u7CFB\u601D\u7EF4\u5BFC\u56FE</a></p></blockquote><h2 id="\u4EC0\u4E48\u662Fwebpack" tabindex="-1">\u4EC0\u4E48\u662Fwebpack <a class="header-anchor" href="#\u4EC0\u4E48\u662Fwebpack" aria-hidden="true">#</a></h2><p>\u524D\u7AEF\u8D44\u6E90\u7684\u6253\u5305\u7BA1\u7406\u5DE5\u5177</p><ul><li>\u591A\u4EFD\u8D44\u6E90\u6587\u4EF6\u6253\u5305\u6210\u4E00\u4E2ABundle</li><li>\u652F\u6301Babel\u3001Eslint\u3001TS\u3001CoffeScript\u3001Less\u3001 Sass</li><li>\u652F\u6301\u6A21\u5757\u5316\u5904\u7406CSS\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u6587\u4EF6</li><li>\u652F\u6301HMR+\u5F00\u53D1\u670D\u52A1\u5668</li><li>\u652F\u6301\u6301\u7EED\u76D1\u542C\u3001\u6301\u7EED\u6784\u5EFA</li><li>\u652F\u6301\u4EE3\u7801\u5206\u79BB</li><li>\u652F\u6301Tree-shaking</li><li>\u652F\u6301Sourcemap</li><li>...</li></ul><h2 id="webpack\u6253\u5305\u6D41\u7A0B" tabindex="-1">webpack\u6253\u5305\u6D41\u7A0B <a class="header-anchor" href="#webpack\u6253\u5305\u6D41\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u5165\u53E3\u5904\u7406</li><li>\u4F9D\u8D56\u89E3\u6790</li><li>\u8D44\u6E90\u89E3\u6790</li><li>\uFF08\u6B65\u9AA42\u30013\u9012\u5F52\u8C03\u7528\uFF0C\u76F4\u5230\u5168\u90E8\u7684\u8D44\u6E90\u5168\u90E8\u5904\u7406\u5B8C\u6BD5\uFF09</li><li>\u8D44\u6E90\u5408\u5E76\u6253\u5305</li></ul><h2 id="\u4F7F\u7528webpack" tabindex="-1">\u4F7F\u7528webpack <a class="header-anchor" href="#\u4F7F\u7528webpack" aria-hidden="true">#</a></h2><ul><li>\u6D41\u7A0B\u7C7B <ul><li>\u8F93\u5165 <ul><li>entry</li><li>context</li></ul></li><li>\u6A21\u5757\u89E3\u6790 <ul><li>resolve</li><li>externals</li></ul></li><li>\u6A21\u5757\u8F6C\u8BD1 <ul><li>module</li></ul></li></ul></li><li>\u5DE5\u5177\u7C7B <img src="https://cdn.jsdelivr.net/gh/Merlin218/image-storage@master/picX/image.6hg7prnfn1mo.webp" alt="image"></li></ul><h2 id="loader\u7EC4\u4EF6" tabindex="-1">Loader\u7EC4\u4EF6 <a class="header-anchor" href="#loader\u7EC4\u4EF6" aria-hidden="true">#</a></h2><h2 id="plugin\u7EC4\u4EF6" tabindex="-1">Plugin\u7EC4\u4EF6 <a class="header-anchor" href="#plugin\u7EC4\u4EF6" aria-hidden="true">#</a></h2><h2 id="\u5982\u4F55\u5B66\u4E60webpack" tabindex="-1">\u5982\u4F55\u5B66\u4E60webpack <a class="header-anchor" href="#\u5982\u4F55\u5B66\u4E60webpack" aria-hidden="true">#</a></h2>',12),t=[c];function n(d,h,p,s,o,b){return a(),l("div",null,t)}const _=e(r,[["render",n]]);export{u as __pageData,_ as default};
