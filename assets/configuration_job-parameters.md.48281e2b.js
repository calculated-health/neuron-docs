import{_ as e,c as a,o as t,a as s}from"./app.17669493.js";const g=JSON.parse('{"title":"Job Parameters","description":"","frontmatter":{},"headers":[{"level":2,"title":"CLI Params","slug":"cli-params","link":"#cli-params","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"ENV Params","slug":"env-params","link":"#env-params","children":[{"level":3,"title":"Example","slug":"example-1","link":"#example-1","children":[]}]}],"relativePath":"configuration/job-parameters.md"}'),o={name:"configuration/job-parameters.md"},r=s(`<h1 id="job-parameters" tabindex="-1">Job Parameters <a class="header-anchor" href="#job-parameters" aria-hidden="true">#</a></h1><p>Job parameters are passed in as application CLI arguments to the Spark job or through ENV variables.</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>These params DO NOT live in the <code>.yaml</code> config file. They are used to configure how the application will read the config file from its corresponding storage service.</p></div><h2 id="cli-params" tabindex="-1">CLI Params <a class="header-anchor" href="#cli-params" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>-env</code> or <code>--environment</code></td><td><code>enum</code></td><td><code>local</code></td><td>Yes</td><td>The runtime environment. Options include: <code>local</code>, <code>azure_databricks</code>, <code>azure_synapse</code>.</td></tr><tr><td><code>-cf</code> or <code>—config-file</code></td><td><code>string</code></td><td></td><td>Yes</td><td>The storage path that points to the YAML config file. NOTE: If reading from Azure Storage, make sure to add the ENV param below.</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">-env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">azure_databricks</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-cf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">mystorageaccoun</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">.blob.core.windows.net/config/neuron_v1.yml</span></span>
<span class="line"></span></code></pre></div><h2 id="env-params" tabindex="-1">ENV Params <a class="header-anchor" href="#env-params" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>ENV_AZURE_STORAGE_ACCESS_KEY</code></td><td><code>string</code></td><td></td><td>Yes, if your config file is hosted in an Azure Storage account.</td><td>The Azure storage account access key. <a href="https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#regenerate-access-keys" target="_blank" rel="noreferrer">Learn More</a></td></tr></tbody></table><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">ENV_AZURE_STORAGE_ACCESS_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">AWnQd+hu2/e-KlyJ2fORwqzwSBqTFd8lmG0aJA0BckdsVU8v3L9qO0V38P3/7G3eRfSDDsdmJYzd+ASty5j5Rw==</span></span>
<span class="line"></span></code></pre></div>`,11),n=[r];function l(c,d,i,p,h,m){return t(),a("div",null,n)}const b=e(o,[["render",l]]);export{g as __pageData,b as default};
