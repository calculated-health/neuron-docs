import{_ as s,c as a,o as e,a as n}from"./app.17669493.js";const _=JSON.parse('{"title":"StageJob","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"jobs/stage.md"}'),o={name:"jobs/stage.md"},l=n(`<h1 id="stagejob" tabindex="-1">StageJob <a class="header-anchor" href="#stagejob" aria-hidden="true">#</a></h1><p>The <strong>StageJob</strong> is used to load <code>.csv</code> files from your storage service into the inbound data model tables.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">spark-submit</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--class</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">health.calc.engine.job.StageJob</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--master</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local[</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/path/to/neuron.jar</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-cf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/neuron-config.yml</span></span>
<span class="line"></span></code></pre></div>`,4),t=[l];function p(c,r,i,C,d,h){return e(),a("div",null,t)}const y=s(o,[["render",p]]);export{_ as __pageData,y as default};
