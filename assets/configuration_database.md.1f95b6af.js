import{_ as s,c as a,o as e,a as t}from"./app.5ea01563.js";const u=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"configuration/database.md"}'),o={name:"configuration/database.md"},n=t(`<h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-hidden="true">#</a></h1><p>Database configuration used to connect services such as Snowflake, Databricks or PostgresSQL.</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>Neuron is capable of supporting more drivers than the ones listed below. However, we have not published them yet as we are still testing. We will continue to publish more drivers in the future. If you are in need of a different driver sooner, <a href="https://www.calculated.health/#contact-us" target="_blank" rel="noreferrer">contact us</a> to see if we can prioritize it for you.</p></div><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>driver</code></td><td><code>enum</code></td><td><code>default</code></td><td>Yes</td><td>The database driver. Options include: <code>default</code>, <code>postgres</code>, <code>databricks</code>, <code>snowflake</code></td></tr><tr><td><code>name</code></td><td><code>string</code></td><td></td><td>Yes</td><td>The database name.</td></tr><tr><td><code>host</code></td><td><code>string</code></td><td></td><td>No</td><td>The database host url.</td></tr><tr><td><code>username</code></td><td><code>string</code></td><td></td><td>No</td><td>The database username.</td></tr><tr><td><code>password</code></td><td><code>string</code></td><td></td><td>No</td><td>The database password.</td></tr><tr><td><code>schema</code></td><td><code>string</code></td><td></td><td>No</td><td>The database schema.</td></tr><tr><td><code>warehouse</code></td><td><code>string</code></td><td></td><td>No</td><td>The database warehouse. Currently only used for the <code>snowflake</code> driver.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">snowflake</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">population_a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://&lt;snowflake-account&gt;.azure.snowflakecomputing.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;snowflake-username&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;snowflake-password&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;snowflake-scheam&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">warehouse</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;snowflake-warehouse&gt;</span></span>
<span class="line"></span></code></pre></div>`,6),d=[n];function l(r,c,p,i,h,y){return e(),a("div",null,d)}const C=s(o,[["render",l]]);export{u as __pageData,C as default};