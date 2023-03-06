import{_ as t,c as d,o as e,a}from"./app.5ea01563.js";const u=JSON.parse('{"title":"Lab","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]}],"relativePath":"data-model/inbound/lab.md"}'),o={name:"data-model/inbound/lab.md"},i=a('<h1 id="lab" tabindex="-1">Lab <a class="header-anchor" href="#lab" aria-hidden="true">#</a></h1><p>Lab information aggregated from provider system sources (e.g. National, Regional, and Provider-based lab functions, EHRs, registries, or other supplemental data sources) which can be used to track critical lab activity at a patient-level, particularly those that do not make it in to the traditional claims workflow.</p><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>patient_key</td><td><code>string</code></td><td>No</td><td>100</td><td>Patient key.</td><td></td></tr><tr><td>date_serviced</td><td><code>date</code></td><td>Yes</td><td>8</td><td>The start date of the observation.</td><td><code>YYYYMMDD</code></td></tr><tr><td>cpt</td><td><code>string</code></td><td>Yes</td><td>5</td><td>CPT (Current Procedural Terminology) code</td><td></td></tr><tr><td>loinc</td><td><code>string</code></td><td>Yes</td><td>7</td><td>LOINC code</td><td></td></tr><tr><td>supplemental_data_source</td><td><code>string</code></td><td>Yes</td><td>1</td><td>Did the claim come a supplemental data source?</td><td><code>Y</code> or <code>N</code></td></tr></tbody></table>',4),r=[i];function n(s,c,l,h,_,p){return e(),d("div",null,r)}const b=t(o,[["render",n]]);export{u as __pageData,b as default};
