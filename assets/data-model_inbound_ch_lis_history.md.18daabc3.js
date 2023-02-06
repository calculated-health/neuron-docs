import{_ as t,c as d,o as e,a as i}from"./app.17669493.js";const y=JSON.parse('{"title":"ch_lis_history","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]}],"relativePath":"data-model/inbound/ch_lis_history.md"}'),o={name:"data-model/inbound/ch_lis_history.md"},a=i('<h1 id="ch-lis-history" tabindex="-1">ch_lis_history <a class="header-anchor" href="#ch-lis-history" aria-hidden="true">#</a></h1><blockquote><p>Low Income Subsidy (LIS) History</p></blockquote><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>patient_key</td><td><code>string</code></td><td>No</td><td>100</td><td>Patient key.</td><td></td></tr><tr><td>start_date</td><td><code>date</code></td><td>Yes</td><td>8</td><td>Low income period start date.</td><td><code>YYYYMMDD</code></td></tr><tr><td>end_date</td><td><code>date</code></td><td>Yes</td><td>8</td><td>Low income period end date.</td><td><code>YYYYMMDD</code></td></tr><tr><td>record_type</td><td><code>string</code></td><td>Yes</td><td>1</td><td>Detail Record (Always <code>D</code>)</td><td><code>D</code> = Detail Record</td></tr></tbody></table>',4),r=[a];function s(c,n,h,l,_,f){return e(),d("div",null,r)}const u=t(o,[["render",s]]);export{y as __pageData,u as default};