import{_ as t,c as e,o as a,a as n}from"./app.17669493.js";const D=JSON.parse('{"title":"Authentication","description":"","frontmatter":{},"headers":[{"level":2,"title":"Authentication Neuron","slug":"authentication-neuron","link":"#authentication-neuron","children":[]},{"level":2,"title":"Authentication Azure","slug":"authentication-azure","link":"#authentication-azure","children":[]},{"level":2,"title":"Authentication Azure ENV vars","slug":"authentication-azure-env-vars","link":"#authentication-azure-env-vars","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"configuration/authentication.md"}'),s={name:"configuration/authentication.md"},o=n(`<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h1><p>Authentication is used to configure access to the Neuron authorization service along with the relative cloud based services.</p><h2 id="authentication-neuron" tabindex="-1">Authentication Neuron <a class="header-anchor" href="#authentication-neuron" aria-hidden="true">#</a></h2><p>Neuron authentication properties.</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>service_url</code></td><td><code>string</code></td><td></td><td>Yes</td><td>The Neuron service url that used for authentication. Ex: <code>https:portal.calculated.health</code></td></tr><tr><td><code>service_key</code></td><td><code>string</code></td><td></td><td>Yes</td><td>Neuron public service key.</td></tr><tr><td><code>service_secret</code></td><td><code>string</code></td><td></td><td>Yes</td><td>Neuron private secret key.</td></tr><tr><td><code>subscription_key</code></td><td><code>string</code></td><td></td><td>Yes</td><td>Neuron product subscription key</td></tr><tr><td><code>product_key</code></td><td><code>string</code></td><td></td><td>Yes</td><td>Neuron product key.</td></tr></tbody></table><h2 id="authentication-azure" tabindex="-1">Authentication Azure <a class="header-anchor" href="#authentication-azure" aria-hidden="true">#</a></h2><p>Azure service account authorization properties.</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>application_id</code></td><td><code>string</code></td><td></td><td>No</td><td>Azure service principal application ID.</td></tr><tr><td><code>directory_id</code></td><td><code>string</code></td><td></td><td>No</td><td>Azure service principal directory ID.</td></tr><tr><td><code>client_secret</code></td><td><code>string</code></td><td></td><td>No</td><td>Azure service principal client secret key. NOTE: This can also be passed in through an ENV var.</td></tr></tbody></table><h2 id="authentication-azure-env-vars" tabindex="-1">Authentication Azure ENV vars <a class="header-anchor" href="#authentication-azure-env-vars" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>ENV_AZURE_CLIENT_SECRET_KEY</code></td><td><code>string</code></td><td></td><td>No</td><td>Azure service principal client secret key.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">service_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://portal.calculated.health</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">service_key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c6sebe48-0708-41f3-b3a3-3dbfd1d55ffa</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">subscription_key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bba1fd57-7b16-4ce4-9a85-dcf371e32907</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">product_key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">neuron_insights_engine</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">service_secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EAttK4YRh3FDh3K</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">azure</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">application_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">de4425b5-9452-431b-26af-3dc4e32sba2a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">directory_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b5300e39-47q6-4361-axb3-69cs5276817d</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">client_secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z4x8Q~Dj~beliFS0XSzqwZyigk3k5HBezQmnDdfc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,12),r=[o];function c(d,l,i,p,h,u){return a(),e("div",null,r)}const A=t(s,[["render",c]]);export{D as __pageData,A as default};
