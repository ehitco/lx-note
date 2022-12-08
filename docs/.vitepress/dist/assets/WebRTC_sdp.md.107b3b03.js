import{_ as s,o as a,c as n,a as l}from"./app.31720a63.js";const D=JSON.parse('{"title":"\u4EC0\u4E48\u662FSDP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E","slug":"\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E","link":"#\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E","children":[]},{"level":2,"title":"\u5E38\u89C1\u5C5E\u6027","slug":"\u5E38\u89C1\u5C5E\u6027","link":"#\u5E38\u89C1\u5C5E\u6027","children":[{"level":3,"title":"\u534F\u8BAE\u7248\u672C\u53F7\uFF1Av=","slug":"\u534F\u8BAE\u7248\u672C\u53F7-v","link":"#\u534F\u8BAE\u7248\u672C\u53F7-v","children":[]},{"level":3,"title":"\u4F1A\u8BDD\u53D1\u8D77\u8005\uFF1Ao","slug":"\u4F1A\u8BDD\u53D1\u8D77\u8005-o","link":"#\u4F1A\u8BDD\u53D1\u8D77\u8005-o","children":[]},{"level":3,"title":"\u4F1A\u8BDD\u540D s=","slug":"\u4F1A\u8BDD\u540D-s","link":"#\u4F1A\u8BDD\u540D-s","children":[]},{"level":3,"title":"\u8FDE\u63A5\u6570\u636E\uFF1Ac=","slug":"\u8FDE\u63A5\u6570\u636E-c","link":"#\u8FDE\u63A5\u6570\u636E-c","children":[]},{"level":3,"title":"\u5A92\u4F53\u63CF\u8FF0\uFF1Am=","slug":"\u5A92\u4F53\u63CF\u8FF0-m","link":"#\u5A92\u4F53\u63CF\u8FF0-m","children":[]},{"level":3,"title":"\u9644\u52A0\u5C5E\u6027\uFF1Aa=","slug":"\u9644\u52A0\u5C5E\u6027-a","link":"#\u9644\u52A0\u5C5E\u6027-a","children":[]},{"level":3,"title":"\u65F6\u95F4\uFF1At=","slug":"\u65F6\u95F4-t","link":"#\u65F6\u95F4-t","children":[]}]},{"level":2,"title":"WebRTC\u5B9E\u4F8B","slug":"webrtc\u5B9E\u4F8B","link":"#webrtc\u5B9E\u4F8B","children":[]},{"level":2,"title":"\u5199\u5728\u540E\u9762","slug":"\u5199\u5728\u540E\u9762","link":"#\u5199\u5728\u540E\u9762","children":[]},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5","link":"#\u76F8\u5173\u94FE\u63A5","children":[]}],"relativePath":"WebRTC/sdp.md","lastUpdated":1670480666000}'),p={name:"WebRTC/sdp.md"},e=l(`<h1 id="\u4EC0\u4E48\u662Fsdp" tabindex="-1">\u4EC0\u4E48\u662FSDP <a class="header-anchor" href="#\u4EC0\u4E48\u662Fsdp" aria-hidden="true">#</a></h1><hr><p>SDP\uFF08Session Description Protocol\uFF09\u662F\u4E00\u79CD\u901A\u7528\u7684\u4F1A\u8BDD\u63CF\u8FF0\u534F\u8BAE\uFF0C\u4E3B\u8981\u7528\u6765\u63CF\u8FF0\u591A\u5A92\u4F53\u4F1A\u8BDD\uFF0C\u7528\u9014\u5305\u62EC\u4F1A\u8BDD\u58F0\u660E\u3001\u4F1A\u8BDD\u9080\u8BF7\u3001\u4F1A\u8BDD\u521D\u59CB\u5316\u7B49\u3002</p><p>WebRTC\u4E3B\u8981\u5728\u8FDE\u63A5\u5EFA\u7ACB\u9636\u6BB5\u7528\u5230SDP\uFF0C\u8FDE\u63A5\u53CC\u65B9\u901A\u8FC7\u4FE1\u4EE4\u670D\u52A1\u4EA4\u6362\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u5305\u62EC\u97F3\u89C6\u9891\u7F16\u89E3\u7801\u5668(codec)\u3001\u4E3B\u673A\u5019\u9009\u5730\u5740\u3001\u7F51\u7EDC\u4F20\u8F93\u534F\u8BAE\u7B49\u3002</p><p>\u4E0B\u9762\u5148\u7B80\u5355\u4ECB\u7ECD\u4E0BSDP\u7684\u683C\u5F0F\u3001\u5E38\u7528\u5C5E\u6027\uFF0C\u7136\u540E\u901A\u8FC7WebRTC\u8FDE\u63A5\u5EFA\u7ACB\u8FC7\u7A0B\u751F\u6210\u7684SDP\u5B9E\u4F8B\u8FDB\u884C\u8FDB\u4E00\u6B65\u8BB2\u89E3\u3002</p><h2 id="\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E" tabindex="-1">\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E <a class="header-anchor" href="#\u534F\u8BAE\u683C\u5F0F\u8BF4\u660E" aria-hidden="true">#</a></h2><p>SDP\u7684\u683C\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u7531\u591A\u4E2A\u884C\u7EC4\u6210\uFF0C\u6BCF\u4E2A\u884C\u90FD\u662F\u5982\u4E0B\u683C\u5F0F\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;type&gt;=&lt;value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D\uFF1A</p><ul><li><code>&lt;type&gt;</code>\uFF1A\u5927\u5C0F\u5199\u654F\u611F\u7684\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4EE3\u8868\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982<code>v</code>\u4EE3\u8868\u7248\u672C\uFF1B</li><li><code>&lt;value&gt;</code>\uFF1A\u7ED3\u6784\u5316\u6587\u672C\uFF0C\u683C\u5F0F\u4E0E\u5C5E\u6027\u7C7B\u578B\u6709\u5173\uFF0CUTF8\u7F16\u7801\uFF1B</li><li><code>=</code>\u4E24\u8FB9\u4E0D\u5141\u8BB8\u5B58\u5728\u7A7A\u683C\uFF1B</li><li><code>=*</code>\u8868\u793A\u662F\u53EF\u9009\u7684\uFF1B</li></ul><h2 id="\u5E38\u89C1\u5C5E\u6027" tabindex="-1">\u5E38\u89C1\u5C5E\u6027 <a class="header-anchor" href="#\u5E38\u89C1\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u9762\u7684SDP\u4E3A\u4F8B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">v=0</span></span>
<span class="line"><span style="color:#A6ACCD;">o=alice 2890844526 2890844526 IN IP4 host.anywhere.com</span></span>
<span class="line"><span style="color:#A6ACCD;">s=</span></span>
<span class="line"><span style="color:#A6ACCD;">c=IN IP4 host.anywhere.com</span></span>
<span class="line"><span style="color:#A6ACCD;">t=0 0</span></span>
<span class="line"><span style="color:#A6ACCD;">m=audio 49170 RTP/AVP 0</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:0 PCMU/8000</span></span>
<span class="line"><span style="color:#A6ACCD;">m=video 51372 RTP/AVP 31</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:31 H261/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">m=video 53000 RTP/AVP 32</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:32 MPV/90000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u534F\u8BAE\u7248\u672C\u53F7-v" tabindex="-1">\u534F\u8BAE\u7248\u672C\u53F7\uFF1A<code>v=</code> <a class="header-anchor" href="#\u534F\u8BAE\u7248\u672C\u53F7-v" aria-hidden="true">#</a></h3><p>\u683C\u5F0F\u5982\u4E0B\uFF0C\u6CE8\u610F\uFF0C\u6CA1\u6709\u5B50\u7248\u672C\u53F7\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">v=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4F1A\u8BDD\u53D1\u8D77\u8005-o" tabindex="-1">\u4F1A\u8BDD\u53D1\u8D77\u8005\uFF1A<code>o</code> <a class="header-anchor" href="#\u4F1A\u8BDD\u53D1\u8D77\u8005-o" aria-hidden="true">#</a></h3><p>\u683C\u5F0F\u5982\u4E0B\uFF0C\u5176\u4E2D\uFF0Cusername\u3001session-id\u3001nettype\u3001addrtype\u3001unicast-address \u4E00\u8D77\uFF0C\u552F\u4E00\u6807\u8BC6\u4E00\u4E2A\u4F1A\u8BDD\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">o=&lt;username&gt; &lt;sess-id&gt; &lt;sess-version&gt; &lt;nettype&gt; &lt;addrtype&gt; &lt;unicast-address&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5404\u5B57\u6BB5\u542B\u4E49\u5982\u4E0B\uFF1A</p><ul><li>username\uFF1A\u53D1\u8D77\u8005\u7684\u7528\u6237\u540D\uFF0C\u4E0D\u5141\u8BB8\u5B58\u5728\u7A7A\u683C\uFF0C\u5982\u679C\u5E94\u7528\u4E0D\u652F\u6301\u7528\u6237\u540D\uFF0C\u5219\u4E3A<code>-</code>\u3002</li><li>sess-id\uFF1A\u4F1A\u8BDDid\uFF0C\u7531\u5E94\u7528\u81EA\u884C\u5B9A\u4E49\uFF0C\u89C4\u8303\u7684\u5EFA\u8BAE\u662FNTP(Network Time Protocol)\u65F6\u95F4\u6233\u3002</li><li>sess-version\uFF1A\u4F1A\u8BDD\u7248\u672C\uFF0C\u7528\u9014\u7531\u5E94\u7528\u81EA\u884C\u5B9A\u4E49\uFF0C\u53EA\u8981\u4F1A\u8BDD\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF08\u6BD4\u5982\u7F16\u7801\uFF09\uFF0Csess-version\u968F\u7740\u9012\u589E\u5C31\u884C\u3002\u540C\u6837\u7684\uFF0C\u89C4\u8303\u7684\u5EFA\u8BAE\u662FNTP\u65F6\u95F4\u6233\u3002</li><li>nettype\uFF1A\u7F51\u7EDC\u7C7B\u578B\uFF0C\u6BD4\u5982<code>IN</code>\u8868\u793A<code>Internet</code>\u3002</li><li>addrtype\uFF1A\u5730\u5740\u7C7B\u578B\uFF0C\u6BD4\u5982<code>IP4</code>\u3001<code>IV6</code></li><li>unicast-address\uFF1A\u57DF\u540D\uFF0C\u6216\u8005IP\u5730\u5740\u3002</li></ul><h3 id="\u4F1A\u8BDD\u540D-s" tabindex="-1">\u4F1A\u8BDD\u540D <code>s=</code> <a class="header-anchor" href="#\u4F1A\u8BDD\u540D-s" aria-hidden="true">#</a></h3><p>\u5FC5\u9009\uFF0C\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A<code>s=</code>\u5B57\u6BB5\uFF0C\u4E14\u4E0D\u80FD\u4E3A\u7A7A\u3002\u5982\u679C\u5B9E\u5728\u6CA1\u6709\u6709\u610F\u4E49\u7684\u4F1A\u8BDD\u540D\uFF0C\u53EF\u4EE5\u8D4B\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5373<code>s=</code>\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">s=&lt;session name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8FDE\u63A5\u6570\u636E-c" tabindex="-1">\u8FDE\u63A5\u6570\u636E\uFF1Ac= <a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E-c" aria-hidden="true">#</a></h3><p>\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">c=&lt;nettype&gt; &lt;addrtype&gt; &lt;connection-address&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u4E2ASDP\u81F3\u5C11\u9700\u8981\u5305\u542B\u4E00\u4E2A\u4F1A\u8BDD\u7EA7\u522B\u7684<code>c=</code>\u5B57\u6BB5\uFF0C\u6216\u8005\u5728\u6BCF\u4E2A\u5A92\u4F53\u63CF\u8FF0\u540E\u9762\u5404\u5305\u542B\u4E00\u4E2A<code>c=</code>\u5B57\u6BB5\u3002\uFF08\u5A92\u4F53\u63CF\u8FF0\u540E\u7684<code>c=</code>\u4F1A\u8986\u76D6\u4F1A\u8BDD\u7EA7\u522B\u7684<code>c=</code>\uFF09</p><ul><li>nettype\uFF1A\u7F51\u7EDC\u7C7B\u578B\uFF0C\u6BD4\u5982<code>IN</code>\uFF0C\u8868\u793A Internet\u3002</li><li>addrtype\uFF1A\u5730\u5740\u7C7B\u578B\uFF0C\u6BD4\u5982<code>IP4</code>\u3001<code>IP6</code>\u3002</li><li>connection-address\uFF1A\u5982\u679C\u662F\u5E7F\u64AD\uFF0C\u5219\u4E3A\u5E7F\u64AD\u5730\u5740\u7EC4\uFF1B\u5982\u679C\u662F\u5355\u64AD\uFF0C\u5219\u4E3A\u5355\u64AD\u5730\u5740\uFF1B</li></ul><p>\u4E3E\u4F8B01\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">c=IN IP4 224.2.36.42/127</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3E\u4F8B02\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">c=IN IP4 host.anywhere.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5A92\u4F53\u63CF\u8FF0-m" tabindex="-1">\u5A92\u4F53\u63CF\u8FF0\uFF1A<code>m=</code> <a class="header-anchor" href="#\u5A92\u4F53\u63CF\u8FF0-m" aria-hidden="true">#</a></h3><p>SDP\u53EF\u80FD\u540C\u65F6\u5305\u542B\u591A\u4E2A\u5A92\u4F53\u63CF\u8FF0\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">m=&lt;media&gt; &lt;port&gt; &lt;proto&gt; &lt;fmt&gt; ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D\uFF1A</p><ul><li><p>media\uFF1A\u5A92\u4F53\u7C7B\u578B\u3002\u5305\u62EC video\u3001audio\u3001text\u3001application\u3001message\u7B49\u3002</p></li><li><p>port\uFF1A\u4F20\u8F93\u5A92\u4F53\u6D41\u7684\u7AEF\u53E3\uFF0C\u5177\u4F53\u542B\u4E49\u53D6\u51B3\u4E8E\u4F7F\u7528\u7684\u7F51\u7EDC\u7C7B\u578B\uFF08\u5728<code>c=</code>\u4E2D\u58F0\u660E\uFF09\u548C\u4F7F\u7528\u7684\u534F\u8BAE(proto\uFF0C\u5728<code>m=</code>\u4E2D\u58F0\u660E)\u3002</p></li><li><p>proto\uFF1A\u4F20\u8F93\u534F\u8BAE\uFF0C\u5177\u4F53\u542B\u4E49\u53D6\u51B3\u4E8E<code>c=</code>\u4E2D\u5B9A\u4E49\u7684\u5730\u5740\u7C7B\u578B\uFF0C\u6BD4\u5982<code>c=</code>\u662FIP4\uFF0C\u90A3\u4E48\u8FD9\u91CC\u7684\u4F20\u8F93\u534F\u8BAE\u8FD0\u884C\u5728IP4\u4E4B\u4E0A\u3002\u6BD4\u5982\uFF1A</p></li><li><p>UDP\uFF1A\u4F20\u8F93\u5C42\u534F\u8BAE\u662FUDP\u3002</p></li><li><p>RTP/AVP\uFF1A\u9488\u5BF9\u89C6\u9891\u3001\u97F3\u9891\u7684RTP\u534F\u8BAE\uFF0C\u8DD1\u5728UDP\u4E4B\u4E0A\u3002</p></li><li><p>RTP/SAVP\uFF1A\u9488\u5BF9\u89C6\u9891\u3001\u97F3\u9891\u7684SRTP\u534F\u8BAE\uFF0C\u8DD1\u5728UDP\u4E4B\u4E0A\u3002</p></li><li><p>fmt\uFF1A\u5A92\u4F53\u683C\u5F0F\u7684\u63CF\u8FF0\uFF0C\u53EF\u80FD\u6709\u591A\u4E2A\u3002\u6839\u636E proto \u7684\u4E0D\u540C\uFF0Cfmt \u7684\u542B\u4E49\u4E5F\u4E0D\u540C\u3002\u6BD4\u5982 proto \u4E3A RTP/SAVP \u65F6\uFF0Cfmt \u8868\u793A RTP payload \u7684\u7C7B\u578B\u3002\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u8868\u793A\u5728\u8FD9\u6B21\u4F1A\u8BDD\u4E2D\uFF0C\u591A\u79CDpayload\u7C7B\u578B\u53EF\u80FD\u4F1A\u7528\u5230\uFF0C\u4E14\u7B2C\u4E00\u4E2A\u4E3A\u9ED8\u8BA4\u7684payload\u7C7B\u578B\u3002</p></li></ul><p>\u4E3E\u4F8B\uFF0C\u4E0B\u9762\u8868\u793A\u5A92\u4F53\u7C7B\u578B\u662F\u89C6\u9891\uFF0C\u91C7\u7528SRTP\u4F20\u8F93\u6D41\u5A92\u4F53\u6570\u636E\uFF0C\u4E14RTP\u5305\u7684\u7C7B\u578B\u53EF\u80FD\u662F122\u3001102...119\uFF0C\u9ED8\u8BA4\u662F122\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">m=video 9 UDP/TLS/RTP/SAVPF 122 102 100 101 124 120 123 119</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u4E8E RTP/SAVP\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cpayload type \u53C8\u5206\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ol><li>\u9759\u6001\u7C7B\u578B\uFF1A\u53C2\u8003 <a href="https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/RTP_audio_video_profile%23RTP/AVP_audio_and_video_payload_types" target="_blank" rel="noreferrer">RTP/AVP audio and video payload types</a>\u3002</li><li>\u52A8\u6001\u7C7B\u578B\uFF1A\u5728<code>a=fmtp:</code>\u91CC\u8FDB\u884C\u5B9A\u4E49\u3002(<code>a=</code>\u4E3A\u9644\u52A0\u5C5E\u6027\uFF0C\u89C1\u540E\u9762\u5C0F\u8282)</li></ol><p>\u4E3E\u4F8B\uFF0C\u4E0B\u9762\u7684SDP\u4E2D\uFF1A</p><ol><li>\u5BF9\u4E8Eaudio\uFF0C111 \u662F\u52A8\u6001\u7C7B\u578B\uFF0C\u8868\u793A<code>opus/48000/2</code>\u3002</li><li>\u5BF9\u4E8Evideo\uFF0C122 \u662F\u52A8\u6001\u7C7B\u578B\uFF0C\u8868\u793A<code>H264/90000</code>\u3002</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 126</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:111 opus/48000/2</span></span>
<span class="line"><span style="color:#A6ACCD;">m=video 9 UDP/TLS/RTP/SAVPF 122 102 100 101 124 120 123 119</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:122 H264/90000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u9644\u52A0\u5C5E\u6027-a" tabindex="-1">\u9644\u52A0\u5C5E\u6027\uFF1A<code>a=</code> <a class="header-anchor" href="#\u9644\u52A0\u5C5E\u6027-a" aria-hidden="true">#</a></h3><p>\u4F5C\u7528\uFF1A\u7528\u4E8E\u6269\u5C55SDP\u3002</p><p>\u6709\u4E24\u79CD\u4F5C\u7528\u8303\u56F4\uFF1A\u4F1A\u8BDD\u7EA7\u522B(session-level)\u3001\u5A92\u4F53\u7EA7\u522B\uFF08media-level\uFF09\u3002</p><ol><li>\u5A92\u4F53\u7EA7\u522B\uFF1A\u5A92\u4F53\u63CF\u8FF0\uFF08m=\uFF09\u540E\u9762\u53EF\u4EE5\u8DDF\u4EFB\u610F\u6570\u91CF\u7684 a= \u5B57\u6BB5\uFF0C\u5BF9\u5A92\u4F53\u63CF\u8FF0\u8FDB\u884C\u6269\u5C55\u3002</li><li>\u4F1A\u8BDD\u7EA7\u522B\uFF1A\u5728\u7B2C\u4E00\u4E2A\u5A92\u4F53\u5B57\u6BB5(media field)\u524D\uFF0C\u6DFB\u52A0\u7684 a= \u5B57\u6BB5\u662F\u4F1A\u8BDD\u7EA7\u522B\u7684\u3002</li></ol><p>\u6709\u5982\u4E0B\u4E24\u79CD\u683C\u5F0F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">a=&lt;attribute&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">a=&lt;attribute&gt;:&lt;value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u683C\u5F0F1\u4E3E\u4F8B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">a=recvonly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u683C\u5F0F2\u4E3E\u4F8B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">a=rtpmap:0 PCMU/8000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u65F6\u95F4-t" tabindex="-1">\u65F6\u95F4\uFF1A<code>t=</code> <a class="header-anchor" href="#\u65F6\u95F4-t" aria-hidden="true">#</a></h3><p>\u4F5C\u7528\uFF1A\u58F0\u660E\u4F1A\u8BDD\u7684\u5F00\u59CB\u3001\u7ED3\u675F\u65F6\u95F4\u3002</p><p>\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">t=&lt;start-time&gt; &lt;stop-time&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C<code>&lt;stop-time&gt;</code>\u662F0\uFF0C\u8868\u793A\u4F1A\u8BDD\u6CA1\u6709\u7ED3\u675F\u7684\u8FB9\u754C\uFF0C\u4F46\u662F\u9700\u8981\u5728<code>&lt;start-time&gt;</code>\u4E4B\u540E\u4F1A\u8BDD\u624D\u662F\u6D3B\u8DC3(active)\u7684\u3002\u5982\u679C<code>&lt;start-time&gt;</code>\u662F0\uFF0C\u8868\u793A\u4F1A\u8BDD\u662F\u6C38\u4E45\u7684\u3002</p><p>\u4E3E\u4F8B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">t=0 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="webrtc\u5B9E\u4F8B" tabindex="-1">WebRTC\u5B9E\u4F8B <a class="header-anchor" href="#webrtc\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u4F8B\u5B50\u6765\u81EA\u817E\u8BAF\u4E91WebRTC\u670D\u52A1\u7684\u8FDC\u7AEFoffer\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// sdp\u7248\u672C\u53F7\u4E3A0</span></span>
<span class="line"><span style="color:#A6ACCD;">v=0</span></span>
<span class="line"><span style="color:#A6ACCD;">// o=&lt;username&gt; &lt;sess-id&gt; &lt;sess-version&gt; &lt;nettype&gt; &lt;addrtype&gt; &lt;unicast-address&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7528\u6237\u540D\u4E3A\u7A7A\uFF0C\u4F1A\u8BDDid\u662F8100750360520823155\uFF0C\u4F1A\u8BDD\u7248\u672C\u662F2\uFF08\u540E\u9762\u5982\u679C\u6709\u7C7B\u4F3C\u6539\u53D8\u7F16\u7801\u7684\u64CD\u4F5C\uFF0Csess-version\u52A01\uFF09\uFF0C\u5730\u5740\u7C7B\u578B\u4E3AIP4\uFF0C\u5730\u5740\u4E3A127.0.0.1\uFF08\u8FD9\u91CC\u53EF\u4EE5\u5FFD\u7565\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">o=- 7595655801978680453 2 IN IP4 112.90.139.105</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F1A\u8BDD\u540D\u4E3A\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">s=-</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F1A\u8BDD\u7684\u8D77\u59CB\u65F6\u95F4\uFF0C\u90FD\u4E3A0\u8868\u793A\u6CA1\u6709\u9650\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">t=0 0</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ice-lite</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u97F3\u9891\u3001\u89C6\u9891\u7684\u4F20\u8F93\u7684\u4F20\u8F93\u91C7\u53D6\u591A\u8DEF\u590D\u7528\uFF0C\u901A\u8FC7\u540C\u4E00\u4E2ARTP\u901A\u9053\u4F20\u8F93\u97F3\u9891\u3001\u89C6\u9891\uFF0C\u53EF\u4EE5\u53C2\u8003 https://tools.ietf.org/html/draft-ietf-mmusic-sdp-bundle-negotiation-54</span></span>
<span class="line"><span style="color:#A6ACCD;">a=group:BUNDLE 0 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// WMS\u662FWebRTC Media Stram\u7684\u7F29\u5199\uFF0C\u8FD9\u91CC\u7ED9Media Stream\u5B9A\u4E49\u4E86\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u7B26\u3002\u4E00\u4E2AMedia Stream\u53EF\u4EE5\u6709\u591A\u4E2Atrack\uFF08video track\u3001audio track\uFF09\uFF0C\u8FD9\u4E9Btrack\u5C31\u662F\u901A\u8FC7\u8FD9\u4E2A\u552F\u4E00\u6807\u8BC6\u7B26\u5173\u8054\u8D77\u6765\u7684\uFF0C\u5177\u4F53\u89C1\u4E0B\u9762\u7684\u5A92\u4F53\u884C(m=)\u4EE5\u53CA\u5B83\u5BF9\u5E94\u7684\u9644\u52A0\u5C5E\u6027(a=ssrc:)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC http://tools.ietf.org/html/draft-ietf-mmusic-msid</span></span>
<span class="line"><span style="color:#A6ACCD;">a=msid-semantic: WMS 5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV</span></span>
<span class="line"><span style="color:#A6ACCD;">// m=&lt;media&gt; &lt;port&gt; &lt;proto&gt; &lt;fmt&gt; ...</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u672C\u6B21\u4F1A\u8BDD\u6709\u97F3\u9891\uFF0C\u7AEF\u53E3\u4E3A9\uFF08\u53EF\u5FFD\u7565\uFF0C\u7AEF\u53E39\u4E3ADiscard Protocol\u4E13\u7528\uFF09\uFF0C\u91C7\u7528UDP\u4F20\u8F93\u52A0\u5BC6\u7684RTP\u5305\uFF0C\u5E76\u4F7F\u7528\u57FA\u4E8ESRTCP\u7684\u97F3\u89C6\u9891\u53CD\u9988\u673A\u5236\u6765\u63D0\u5347\u4F20\u8F93\u8D28\u91CF\uFF0C111\u3001103\u3001104\u7B49\u662Faudio\u53EF\u80FD\u91C7\u7528\u7684\u7F16\u7801\uFF08\u53C2\u89C1\u524D\u9762m=\u7684\u8BF4\u660E\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 126</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u97F3\u9891\u53D1\u9001\u8005\u7684IP4\u5730\u5740\uFF0CWebRTC\u91C7\u7528ICE\uFF0C\u8FD9\u91CC\u7684 0.0.0.0 \u53EF\u76F4\u63A5\u5FFD\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">c=IN IP4 0.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">// RTCP\u91C7\u7528\u7684\u7AEF\u53E3\u3001IP\u5730\u5740\uFF08\u53EF\u5FFD\u7565\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp:9 IN IP4 0.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">// ice-ufrag\u3001ice-pwd \u5206\u522B\u4E3AICE\u534F\u5546\u7528\u5230\u7684\u8BA4\u8BC1\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ice-ufrag:58142170598604946</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ice-pwd:71696ad0528c4adb02bb40e1</span></span>
<span class="line"><span style="color:#A6ACCD;">// DTLS\u534F\u5546\u8FC7\u7A0B\u7684\u6307\u7EB9\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fingerprint:sha-256 7F:98:08:AC:17:6A:34:DB:CF:3B:EC:93:ED:57:3F:5A:9E:1F:4A:F3:DB:D5:BF:66:EE:17:58:E0:57:EC:1B:19</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F53\u524D\u5BA2\u6237\u7AEF\u5728DTLS\u534F\u5546\u8FC7\u7A0B\u4E2D\uFF0C\u65E2\u53EF\u4EE5\u4F5C\u4E3A\u5BA2\u6237\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u670D\u52A1\u7AEF\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 RFC4572</span></span>
<span class="line"><span style="color:#A6ACCD;">a=setup:actpass</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F53\u524D\u5A92\u4F53\u884C\u7684\u6807\u8BC6\u7B26\uFF08\u5728a=group:BUNDLE 0 1 \u8FD9\u884C\u91CC\u9762\u7528\u5230\uFF0C\u8FD9\u91CC0\u8868\u793Aaudio\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">a=mid:0</span></span>
<span class="line"><span style="color:#A6ACCD;">// RTP\u5141\u8BB8\u6269\u5C55\u9996\u90E8\uFF0C\u8FD9\u91CC\u8868\u793A\u91C7\u7528\u4E86RFC6464\u5B9A\u4E49\u7684\u9488\u5BF9audio\u7684\u6269\u5C55\u9996\u90E8\uFF0C\u7528\u6765\u8C03\u8282\u97F3\u91CF\uFF0C\u6BD4\u5982\u5728\u5927\u578B\u4F1A\u8BAE\u4E2D\uFF0C\u6709\u591A\u4E2A\u97F3\u9891\u6D41\uFF0C\u5C31\u53EF\u4EE5\u7528\u8FD9\u4E2A\u6765\u8C03\u6574\u97F3\u9891\u6DF7\u6D41\u7684\u7B56\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u91CC\u6CA1\u6709vad=1\uFF0C\u8868\u793A\u4E0D\u542F\u7528\u8FD9\u4E2A\u97F3\u91CF\u63A7\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8868\u793A\u65E2\u53EF\u4EE5\u53D1\u9001\u97F3\u9891\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u6536\u97F3\u9891</span></span>
<span class="line"><span style="color:#A6ACCD;">a=sendrecv</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8868\u793A\u542F\u7528\u591A\u8DEF\u590D\u7528\uFF0CRTP\u3001RTCP\u5171\u7528\u540C\u4E2A\u901A\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-mux</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E0B\u9762\u51E0\u884C\u90FD\u662F\u5BF9audio\u5A92\u4F53\u884C\u7684\u8865\u5145\u8BF4\u660E\uFF08\u9488\u5BF9111\uFF09\uFF0C\u5305\u62ECrtpmap\u3001rtcp-fb\u3001fmtp</span></span>
<span class="line"><span style="color:#A6ACCD;">// rtpmap\uFF1A\u7F16\u89E3\u7801\u5668\u4E3Aopus\uFF0C\u91C7\u6837\u7387\u662F48000\uFF0C2\u58F0\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:111 opus/48000/2</span></span>
<span class="line"><span style="color:#A6ACCD;">// rtcp-fb\uFF1A\u57FA\u4E8ERTCP\u7684\u53CD\u9988\u63A7\u5236\u673A\u5236\uFF0C\u53EF\u4EE5\u53C2\u8003 https://tools.ietf.org/html/rfc5124\u3001https://webrtc.org/experiments/rtp-hdrext/transport-wide-cc-02/</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:111 transport-cc</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:111 nack</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6700\u5C0F\u7684\u97F3\u9891\u6253\u5305\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:111 minptime=20</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8DDF\u524D\u9762\u7684rtpmap\u7C7B\u4F3C</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:126 telephone-event/8000</span></span>
<span class="line"><span style="color:#A6ACCD;">// ssrc\u7528\u6765\u5BF9\u5A92\u4F53\u8FDB\u884C\u63CF\u8FF0\uFF0C\u683C\u5F0F\u4E3Aa=ssrc:&lt;ssrc-id&gt; &lt;attribute&gt;:&lt;value&gt;\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 RFC5576</span></span>
<span class="line"><span style="color:#A6ACCD;">// cname\u7528\u6765\u552F\u4E00\u6807\u8BC6\u5A92\u4F53\u7684\u6570\u636E\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:16864608 cname:YZcxBwerFFm6GH69</span></span>
<span class="line"><span style="color:#A6ACCD;">// msid\u540E\u9762\u5E26\u4E24\u4E2Aid\uFF0C\u7B2C\u4E00\u4E2A\u662FMediaStream\u7684id\uFF0C\u7B2C\u4E8C\u4E2A\u662Faudio track\u7684id\uFF08\u8DDF\u540E\u9762\u7684mslabel\u3001label\u5BF9\u5E94\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:16864608 msid:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV 128f4fa0-81dd-4c3a-bbcd-22e71e29d178</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:16864608 mslabel:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:16864608 label:128f4fa0-81dd-4c3a-bbcd-22e71e29d178</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8DDFaudio\u7C7B\u4F3C\uFF0C\u4E0D\u8D58\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">m=video 9 UDP/TLS/RTP/SAVPF 122 102 125 107 124 120 123 119</span></span>
<span class="line"><span style="color:#A6ACCD;">c=IN IP4 0.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp:9 IN IP4 0.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ice-ufrag:58142170598604946</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ice-pwd:71696ad0528c4adb02bb40e1</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fingerprint:sha-256 7F:98:08:AC:17:6A:34:DB:CF:3B:EC:93:ED:57:3F:5A:9E:1F:4A:F3:DB:D5:BF:66:EE:17:58:E0:57:EC:1B:19</span></span>
<span class="line"><span style="color:#A6ACCD;">a=setup:actpass</span></span>
<span class="line"><span style="color:#A6ACCD;">a=mid:1</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:2 urn:ietf:params:rtp-hdrext:toffset</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:4 urn:3gpp:video-orientation</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01</span></span>
<span class="line"><span style="color:#A6ACCD;">a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay</span></span>
<span class="line"><span style="color:#A6ACCD;">a=sendrecv</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-mux</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-rsize</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:122 H264/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:122 ccm fir</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:122 nack</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:122 nack pli</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:122 goog-remb</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:122 transport-cc</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:122 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:102 rtx/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:102 apt=122</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:125 H264/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:125 ccm fir</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:125 nack</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:125 nack pli</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:125 goog-remb</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:125 transport-cc</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:107 rtx/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:107 apt=125</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:124 H264/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:124 ccm fir</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:124 nack</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:124 nack pli</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:124 goog-remb</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:124 transport-cc</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:120 rtx/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:120 apt=124</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:123 H264/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:123 ccm fir</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:123 nack</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:123 nack pli</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:123 goog-remb</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtcp-fb:123 transport-cc</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032</span></span>
<span class="line"><span style="color:#A6ACCD;">a=rtpmap:119 rtx/90000</span></span>
<span class="line"><span style="color:#A6ACCD;">a=fmtp:119 apt=123</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc-group:FID 33718809 50483271</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:33718809 cname:ovaCctnHP9Asci9c</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:33718809 msid:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV 1d7fc300-9889-4f94-9f35-c0bcc77a260d</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:33718809 mslabel:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:33718809 label:1d7fc300-9889-4f94-9f35-c0bcc77a260d</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:50483271 cname:ovaCctnHP9Asci9c</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:50483271 msid:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV 1d7fc300-9889-4f94-9f35-c0bcc77a260d</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:50483271 mslabel:5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV</span></span>
<span class="line"><span style="color:#A6ACCD;">a=ssrc:50483271 label:1d7fc300-9889-4f94-9f35-c0bcc77a260d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5199\u5728\u540E\u9762" tabindex="-1">\u5199\u5728\u540E\u9762 <a class="header-anchor" href="#\u5199\u5728\u540E\u9762" aria-hidden="true">#</a></h2><p>SDP\u534F\u8BAE\u683C\u5F0F\u672C\u8EAB\u5F88\u7B80\u5355\uFF0C\u96BE\u70B9\u4E00\u822C\u5728\u4E8E\u5E94\u7528\u5C42\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u6269\u5C55\u51FA\u6765\u7684\u5C5E\u6027\uFF0C\u4EE5\u53CA\u4E0D\u540C\u6269\u5C55\u5C5E\u6027\u5BF9\u5E94\u7684\u542B\u4E49\u3002\u6BD4\u5982\u4E0A\u9762\u4E3E\u7684\u4F8B\u5B50\uFF0C\u6269\u5C55\u5C5E\u6027\u3001\u5C5E\u6027\u503C\u7684\u8BF4\u660E\u5206\u6563\u5728\u6570\u5341\u4E2ARFC\u91CC\uFF0C\u67E5\u627E\u3001\u7406\u89E3\u90FD\u8D39\u4E86\u4E00\u756A\u529F\u592B\u3002</p><p>\u5982\u6709\u9519\u6F0F\uFF0C\u656C\u8BF7\u6307\u51FA\u3002</p><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><p><a href="https://link.zhihu.com/?target=https%3A//tools.ietf.org/html/rfc4566" target="_blank" rel="noreferrer">SDP: Session Description Protocol</a></p><p><a href="https://link.zhihu.com/?target=https%3A//datatracker.ietf.org/doc/draft-ietf-rtcweb-sdp/" target="_blank" rel="noreferrer">Annotated Example SDP for WebRTC</a></p>`,71),c=[e];function o(t,i,r,d,C,A){return a(),n("div",null,c)}const m=s(p,[["render",o]]);export{D as __pageData,m as default};
