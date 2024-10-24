import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.CEPXK3ud.js";const c=JSON.parse('{"title":"日期处理","description":"","frontmatter":{"sidebar_position":4},"headers":[],"relativePath":"zh/joinus/advanced/pub-date.md","filePath":"zh/joinus/advanced/pub-date.md","lastUpdated":1729784498000}'),n={name:"zh/joinus/advanced/pub-date.md"};function l(h,s,p,k,r,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="日期处理" tabindex="-1">日期处理 <a class="header-anchor" href="#日期处理" aria-label="Permalink to &quot;日期处理&quot;">​</a></h1><p>当你访问网站时，网站通常会提供一个日期或时间戳。本指南将展示如何在代码中正确处理它们。</p><h2 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-label="Permalink to &quot;规范&quot;">​</a></h2><h3 id="没有日期" tabindex="-1">没有日期 <a class="header-anchor" href="#没有日期" aria-label="Permalink to &quot;没有日期&quot;">​</a></h3><ul><li>当网站没有提供日期时，<strong>请勿</strong>添加日期，<code>pubDate</code> 应当被留空。</li><li>当网站提供一个日期但没有准确的时间时，只需要解析日期并<strong>不要添加时间</strong>到 <code>pubDate</code> 中。</li></ul><p><code>pubDate</code> 必须是：</p><ol><li><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noreferrer">Date 对象</a></li><li><strong>不推荐</strong>: 使用字符串时，要确保可正确解析，因为它们的行为可能会在部署环境中发生不一致。请尽量避免 <code>Date.parse()</code>。</li></ol><p>从路由传入的 <code>pubDate</code> 应该对应于<strong>服务器使用的时区 / 时间</strong>。有关更多详细信息，请参见下方工具类：</p><h2 id="使用工具类" tabindex="-1">使用工具类 <a class="header-anchor" href="#使用工具类" aria-label="Permalink to &quot;使用工具类&quot;">​</a></h2><p>我们推荐使用 <a href="https://github.com/iamkun/dayjs" target="_blank" rel="noreferrer">day.js</a> 进行日期处理和时区调整。有两个相关的工具类：</p><h3 id="日期时间" tabindex="-1">日期时间 <a class="header-anchor" href="#日期时间" aria-label="Permalink to &quot;日期时间&quot;">​</a></h3><p>RSSHub 工具类包括了一个 <a href="https://github.com/iamkun/dayjs" target="_blank" rel="noreferrer">day.js</a> 的包装函数，它允许你直接解析日期字符串并在大多数情况下获得一个 <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noreferrer">Date 对象</a>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { parseDate } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/parse-date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2020/12/30&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2020/12/30&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YYYY/MM/DD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以参考 <a href="https://day.js.org/docs/zh-CN/parse/string-format#%E6%94%AF%E6%8C%81%E7%9A%84%E8%A7%A3%E6%9E%90%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer">day.js 文档</a> 查看所有可用日期格式。</p></div><p>如果你需要解析相对日期，请使用 <code>parseRelativeDate</code>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { parseRelativeDate } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/parse-date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseRelativeDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2天前&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseRelativeDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;前天 15:36&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="时区" tabindex="-1">时区 <a class="header-anchor" href="#时区" aria-label="Permalink to &quot;时区&quot;">​</a></h3><p>从网站解析日期时，考虑时区非常重要。有些网站可能不会根据访问者的位置转换时区，导致日期不准确地反映用户的本地时间。为避免此问题，你可以手动指定时区。</p><p>要在代码中手动指定时区，可以使用以下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timezone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/timezone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timezone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2020/12/30 13:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>timezone</code> 函数接受两个参数：第一个是 <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noreferrer">日期对象</a>，第二个是时区偏移量。偏移量以小时为单位指定，在此示例中使用了 UTC+1 的时区。</p><p>这样做将时间转换为服务器时间，方便后续中间件进行处理。</p>`,22)]))}const g=a(n,[["render",l]]);export{c as __pageData,g as default};
