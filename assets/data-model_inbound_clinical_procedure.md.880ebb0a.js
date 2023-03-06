import{_ as t,c as d,o as e,a as r}from"./app.5ea01563.js";const m=JSON.parse('{"title":"Clinical Procedure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]},{"level":2,"title":"Procedure Code System Values","slug":"procedure-code-system-values","link":"#procedure-code-system-values","children":[]}],"relativePath":"data-model/inbound/clinical_procedure.md"}'),o={name:"data-model/inbound/clinical_procedure.md"},a=r('<h1 id="clinical-procedure" tabindex="-1">Clinical Procedure <a class="header-anchor" href="#clinical-procedure" aria-hidden="true">#</a></h1><p>Procedure information aggregated from provider system or other sources (e.g. EHRs, registries, or other supplemental data sources) which can be used to track procedures at a patient-level, particularly those that do not make it in to the traditional claims workflow.</p><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>patient_key</td><td><code>string</code></td><td>No</td><td>100</td><td>Patient key.</td><td></td></tr><tr><td>start_date</td><td><code>date</code></td><td>No</td><td>8</td><td>Start date</td><td><code>YYYYMMDD</code></td></tr><tr><td>end_date</td><td><code>date</code></td><td>No</td><td>8</td><td>End Date</td><td><code>YYYYMMDD</code></td></tr><tr><td>code</td><td><code>string</code></td><td>No</td><td>20</td><td>The procedure code.</td><td></td></tr><tr><td>code_system</td><td><code>string</code></td><td>No</td><td>1</td><td>The procedure code system.</td><td><a href="/data-model/inbound/clinical_procedure.html#procedure-code-system-values">See Procedure Code System Values</a></td></tr><tr><td>status</td><td><code>string</code></td><td>No</td><td>3</td><td>Ordered or Performed?</td><td><code>INT</code> = Ordered, <code>EVN</code> = Performed</td></tr></tbody></table><h2 id="procedure-code-system-values" tabindex="-1">Procedure Code System Values <a class="header-anchor" href="#procedure-code-system-values" aria-hidden="true">#</a></h2><table><thead><tr><th>Value</th><th>Name</th></tr></thead><tbody><tr><td>S</td><td>SNOMED</td></tr><tr><td>9</td><td>ICD-9</td></tr><tr><td>X</td><td>ICD-10</td></tr><tr><td>C</td><td>CPT</td></tr><tr><td>H</td><td>HCPCS</td></tr><tr><td>L</td><td>LOINC</td></tr><tr><td>D</td><td>Current Dental Terminology (CDT) codes</td></tr></tbody></table>',6),c=[a];function i(s,n,l,h,u,p){return e(),d("div",null,c)}const f=t(o,[["render",i]]);export{m as __pageData,f as default};