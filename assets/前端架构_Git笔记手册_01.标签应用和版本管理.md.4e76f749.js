import{_ as t,o as e,c as a,a as d}from"./app.aec7eb12.js";const m=JSON.parse('{"title":"\u6807\u7B7E\u5E94\u7528\u548C\u7248\u672C\u7BA1\u7406","description":"","frontmatter":{"title":"\u6807\u7B7E\u5E94\u7528\u548C\u7248\u672C\u7BA1\u7406","date":"2018-09-06","permalink":"2018-09-06-git-tag-and-version"},"headers":[{"level":3,"title":"1. \u73AF\u5883\u4EFF\u771F","slug":"_1-\u73AF\u5883\u4EFF\u771F","link":"#_1-\u73AF\u5883\u4EFF\u771F","children":[]},{"level":3,"title":"2. \u672C\u5730\u6807\u7B7E\u64CD\u4F5C","slug":"_2-\u672C\u5730\u6807\u7B7E\u64CD\u4F5C","link":"#_2-\u672C\u5730\u6807\u7B7E\u64CD\u4F5C","children":[]},{"level":3,"title":"3. \u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6","slug":"_3-\u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6","link":"#_3-\u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6","children":[]},{"level":3,"title":"4. \u6807\u7B7E\u7684\u5220\u9664","slug":"_4-\u6807\u7B7E\u7684\u5220\u9664","link":"#_4-\u6807\u7B7E\u7684\u5220\u9664","children":[]},{"level":3,"title":"5. \u62D3\u5C55\u9605\u8BFB","slug":"_5-\u62D3\u5C55\u9605\u8BFB","link":"#_5-\u62D3\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u524D\u7AEF\u67B6\u6784/Git\u7B14\u8BB0\u624B\u518C/01.\u6807\u7B7E\u5E94\u7528\u548C\u7248\u672C\u7BA1\u7406.md","lastUpdated":1670483514000}'),o={name:"\u524D\u7AEF\u67B6\u6784/Git\u7B14\u8BB0\u624B\u518C/01.\u6807\u7B7E\u5E94\u7528\u548C\u7248\u672C\u7BA1\u7406.md"},c=d(`<blockquote><p>\u5F53\u4E00\u4E2A\u4EE3\u7801\u4ED3\u5E93\u8FDB\u8FC7\u957F\u65F6\u95F4\u7684\u8FED\u4EE3\uFF0C\u9488\u5BF9\u4E0D\u540C\u7684\u65F6\u671F\u548C\u9700\u6C42\uFF0C\u5FC5\u5B9A\u4F1A\u6709\u4E0D\u540C\u7684\u7248\u672C\u3002\u800C\u501F\u52A9 Git \u63D0\u4F9B\u7684\u6807\u7B7E\u529F\u80FD\uFF0C\u53EF\u4EE5\u5FEB\u6377\u65B9\u4FBF\u5730\u8BB0\u5F55\u4EE3\u7801\u7248\u672C\u3002\u65E0\u8BBA\u4EC0\u4E48\u65F6\u5019\uFF0C\u60F3\u53D6\u56DE\u67D0\u4E2A\u7248\u672C\uFF0C\u4E0D\u518D\u9700\u8981\u67E5\u627E\u5197\u957F\u7684<code>commit_id</code>\uFF0C\u53EA\u9700\u8981\u53D6\u51FA\u6253\u6807\u7B7E\u7684\u5386\u53F2\u7248\u672C\u5373\u53EF\u3002</p></blockquote><p>\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3\uFF1A<strong>\u6807\u7B7E\u662F\u7248\u672C\u5E93\u7684\u4E00\u4E2A\u5FEB\u7167</strong>\u3002\u5728\u4E3B\u6D41\u7684 Git \u5E73\u53F0\u4E0A\uFF0C\u7248\u672C\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u7684\uFF0C\u8282\u7701\u4E86\u5F00\u53D1\u8005\u7684\u4E0D\u5C11\u7CBE\u529B\u3002</p><p>\u4E0B\u9762\u8BB0\u5F55\u4E0B\u5982\u4F55\u501F\u52A9 \u6807\u7B7E \u8FDB\u884C\u7248\u672C\u7BA1\u7406\u3002</p><h3 id="_1-\u73AF\u5883\u4EFF\u771F" tabindex="-1">1. \u73AF\u5883\u4EFF\u771F <a class="header-anchor" href="#_1-\u73AF\u5883\u4EFF\u771F" aria-hidden="true">#</a></h3><p>\u9996\u5148\u6211\u5728 github \u4E0A\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u4ED3\u5E93\u3002\u5982\u4F60\u6240\u89C1\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5168\u65B0\u4ED3\u5E93\uFF1A<a href="https://github.com/dongyuanxin/git-demos" target="_blank" rel="noreferrer">&gt;&gt;&gt; Star now</a></p><p><img src="https://static.godbmw.com/images/Git/%E6%A0%87%E7%AD%BE%E5%BA%94%E7%94%A8%E5%92%8C%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86/1.png" alt=""></p><p>\u6267\u884C<code>git clone git@github.com:dongyuanxin/git-demos.git</code>, \u5C06\u4EE3\u7801\u5E93 clone \u5230\u672C\u5730\u540E\u3002</p><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>hello.v1.py</code>\u6587\u4EF6\uFF1A<code>touch hello.v1.py</code>\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># hello.v1.py</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is version 1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u672C\u5730\u6807\u7B7E\u64CD\u4F5C" tabindex="-1">2. \u672C\u5730\u6807\u7B7E\u64CD\u4F5C <a class="header-anchor" href="#_2-\u672C\u5730\u6807\u7B7E\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u8BB0\u5F55\u4E86\u672C\u5730\u6807\u7B7E\u64CD\u4F5C\u7684\u5E38\u7528\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>git tag</code></td><td>\u67E5\u770B\u6240\u6709\u6807\u7B7E</td></tr><tr><td><code>git tag &lt;tagname&gt;</code></td><td>\u521B\u5EFA\u6807\u7B7E\uFF1Atagname</td></tr><tr><td><code>git tag -a &lt;tagname&gt; -m &lt;comment&gt;</code></td><td>\u4E3A\u6807\u7B7E tagname \u589E\u52A0\u8BF4\u660E comment</td></tr><tr><td><code>git show &lt;tagname&gt;</code></td><td>\u67E5\u770B\u6807\u7B7E\uFF1Atagname \u7684\u5185\u5BB9</td></tr><tr><td><code>git tag -d &lt;tagname&gt;</code></td><td>\u5220\u9664\u6807\u7B7E\uFF1Atagname</td></tr></tbody></table><p>\u5176\u4E2D\uFF0C\u521B\u5EFA\u6807\u7B7E tagname \u5E76\u4E14\u589E\u52A0\u8BF4\u660E comment\uFF0C\u53EF\u4EE5\u7B80\u5199\u6210\uFF1A<code>git tag &lt;tagname&gt; -m &lt;comment&gt;</code></p><p>Now, \u4E3A\u4EE3\u7801\u5E93\u5728\u672C\u5730\u6253\u4E0A\u6807\u7B7E\uFF1A<code>git tag v1.0.0 -m &#39;v1.0.0\u6B63\u5F0F\u7248\u672C&#39;</code>\u3002</p><h3 id="_3-\u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6" tabindex="-1">3. \u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6 <a class="header-anchor" href="#_3-\u6807\u7B7E\u7684\u8FDC\u7A0B\u63A8\u9001\u548C\u62C9\u53D6" aria-hidden="true">#</a></h3><p>\u5728\u672C\u5730\u6253\u597D\u6807\u7B7E\u540E\uFF0C\u9700\u8981\u5C06\u6807\u7B7E\u63A8\u9001\u5230 Git \u5E73\u53F0\uFF08\u6BD4\u5982 GitHub\uFF09\u4E0A\uFF0C\u624D\u80FD\u7559\u4E0B\u7248\u672C\u5FEB\u7167\uFF0C\u4F9B\u522B\u4EBA\u4E0B\u8F7D\u4F7F\u7528\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u6709\u53EF\u80FD\u5220\u9664\u5DF2\u7ECF\u53D1\u5E03\u7684\u6807\u7B7E\uFF08\u6BD4\u5982\u6807\u7B7E\u547D\u540D\u4E0D\u5408\u89C4\u8303\uFF09\u3002</p><p>\u4E0B\u9762\u8BB0\u5F55\u4E86\u8FDC\u7A0B\u6807\u7B7E\u64CD\u4F5C\u7684\u5E38\u7528\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>git push origin --tags</code></td><td>\u63A8\u9001\u6240\u6709\u6807\u7B7E</td></tr><tr><td><code>git push origin &lt;tagname&gt;</code></td><td>\u63A8\u9001\u6307\u5B9A\u6807\u7B7E</td></tr></tbody></table><p>\u6211\u4EEC\u9996\u5148\u5C06<code>v1.0.0</code>\u7248\u672C\u63A8\u9001\u5230 Github\uFF1A<code>git push origin v1.0.0</code></p><p>\u7136\u540E\uFF0C\u6253\u5F00\u4ED3\u5E93\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0<code>releases</code>\u6807\u7B7E\u5DF2\u7ECF\u53D8\u6210\u4E86 1\u3002 <img src="https://static.godbmw.com/images/Git/%E6%A0%87%E7%AD%BE%E5%BA%94%E7%94%A8%E5%92%8C%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86/2.png" alt=""></p><p>\u70B9\u8FDB\u53BB\uFF0C\u4F1A\u53D1\u73B0\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D<code>v1.0.0</code>\u7248\u672C\u3002\u6240\u4EE5\uFF0C\u6807\u7B7E\u662F\u7248\u672C\u7684\u5FEB\u7167\u3002 <img src="https://static.godbmw.com/images/Git/%E6%A0%87%E7%AD%BE%E5%BA%94%E7%94%A8%E5%92%8C%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86/3.png" alt=""></p><p>\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF1A<strong>\u6807\u7B7E\u4F1A\u968F\u7740<code>git clone</code>\u4ED3\u5E93\u65F6\u5019\uFF0C\u81EA\u52A8\u62C9\u53D6\u5230\u672C\u5730</strong>\u3002\u4E0D\u4FE1\u7684\u8BDD\u53EF\u4EE5 clone \u4E00\u4E0B\u8FD9\u4E2A\u4EE3\u7801\u4ED3\u5E93\uFF0C\u67E5\u770B\u662F\u4E0D\u662F\u5DF2\u7ECF\u6709\u4E86<code>v1.0.0</code>\u8FD9\u4E2A\u6807\u7B7E\u3002</p><h3 id="_4-\u6807\u7B7E\u7684\u5220\u9664" tabindex="-1">4. \u6807\u7B7E\u7684\u5220\u9664 <a class="header-anchor" href="#_4-\u6807\u7B7E\u7684\u5220\u9664" aria-hidden="true">#</a></h3><p>\u6807\u7B7E\u7684\u5220\u9664\u8BF7\u614E\u91CD\uFF0C\u5C24\u5176\u662F\u5220\u9664\u8FDC\u7A0B\u6807\u7B7E\uFF08<em>\u4E00\u822C\u6765\u8BF4\uFF0C\u6CA1\u6709\u4EBA\u4F1A\u8FD9\u4E48\u505A</em>\uFF09\u3002\u547D\u4EE4\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>git tag -d &lt;tagname&gt;</code></td><td>\u5220\u9664\u6307\u5B9A\u6807\u7B7E</td></tr><tr><td><code>git push origin :refs/tags/&lt;tagname&gt;</code></td><td>\u5220\u9664\u8FDC\u7A0B\u6807\u7B7E</td></tr></tbody></table><h3 id="_5-\u62D3\u5C55\u9605\u8BFB" tabindex="-1">5. \u62D3\u5C55\u9605\u8BFB <a class="header-anchor" href="#_5-\u62D3\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h3><p>\u7248\u672C\u7BA1\u7406\u53EF\u4EE5\u501F\u52A9 git \u7684 tag \u6765\u5B9E\u73B0\u3002\u4F46\u662F\uFF0C\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u53EF\u80FD\u6BCF\u6B21\u4FEE\u6539\u90FD\u6253\u6807\u7B7E\u7136\u540E\u53D1\u5E03\u3002</p><p>\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u4E00\u822C\u4F1A\u6709\u4E00\u4E2A<code>dev</code>\u5206\u652F\uFF0C\u4F5C\u4E3A\u5F00\u53D1\u7248\u672C\u5206\u652F\u3002\u5728\u6CA1\u6709\u5B8C\u6210\u6B64\u6B21\u5F00\u53D1\u4EFB\u52A1\u524D\uFF0C\u6240\u6709\u7684\u4EE3\u7801\u90FD\u662F\u5408\u5E76\u5230<code>dev</code>\u5206\u652F\u3002</p><p>\u5F53\u5B8C\u6210\u4E86\u5F00\u53D1\u4EFB\u52A1\uFF0C\u7BA1\u7406\u8005\u4F1A\u5C06<code>dev</code>\u5206\u652F\u5408\u5E76\u5230<code>master</code>\u5206\u652F\uFF0C\u7136\u540E\u5220\u9664<code>dev</code>\u5206\u652F\uFF0C\u5E76\u4E14\u901A\u8FC7\u6253\u6807\u7B7E\u6765\u53D1\u5E03\u7248\u672C\u3002</p><p>\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u5F88\u591A\u653E\u5F03\u7EF4\u62A4\u7684\u5927\u578B\u5F00\u6E90\u9879\u76EE\u53EA\u6709<code>master</code>\u5206\u652F\u7684\u539F\u56E0\u3002</p>`,31),n=[c];function i(s,r,l,p,g,h){return e(),a("div",null,n)}const E=t(o,[["render",i]]);export{m as __pageData,E as default};
