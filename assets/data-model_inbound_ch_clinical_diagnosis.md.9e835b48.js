import{_ as t,c as d,o as e,a as i}from"./app.f673ca4d.js";const m=JSON.parse('{"title":"ch_clinical_diagnosis","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]},{"level":2,"title":"Diagnosis Code System Values","slug":"diagnosis-code-system-values","link":"#diagnosis-code-system-values","children":[]}],"relativePath":"data-model/inbound/ch_clinical_diagnosis.md"}'),a={name:"data-model/inbound/ch_clinical_diagnosis.md"},s=i('<h1 id="ch-clinical-diagnosis" tabindex="-1">ch_clinical_diagnosis <a class="header-anchor" href="#ch-clinical-diagnosis" aria-hidden="true">#</a></h1><p>Clinical diagnosis.</p><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>patient_key</td><td><code>string</code></td><td>No</td><td>100</td><td>Patient key.</td><td></td></tr><tr><td>start_date</td><td><code>date</code></td><td>No</td><td>8</td><td>Start date</td><td><code>YYYYMMDD</code></td></tr><tr><td>end_date</td><td><code>date</code></td><td>No</td><td>8</td><td>End Date</td><td><code>YYYYMMDD</code></td></tr><tr><td>code</td><td><code>string</code></td><td>No</td><td>20</td><td>Diagnosis code</td><td></td></tr><tr><td>code_system</td><td><code>string</code></td><td>No</td><td>1</td><td>Diagnosis code sytem</td><td><a href="/data-model/inbound/ch_clinical_diagnosis.html#diagnosis-code-system-values">See Diagnosis Code System Values</a></td></tr><tr><td>attribute_code</td><td><code>string</code></td><td>Yes</td><td>20</td><td>The activity code for the service.</td><td></td></tr></tbody></table><h2 id="diagnosis-code-system-values" tabindex="-1">Diagnosis Code System Values <a class="header-anchor" href="#diagnosis-code-system-values" aria-hidden="true">#</a></h2><table><thead><tr><th>Value</th><th>Name</th></tr></thead><tbody><tr><td>S</td><td>SNOMED</td></tr><tr><td>9</td><td>ICD-9</td></tr><tr><td>X</td><td>ICD-10</td></tr><tr><td>C</td><td>CPT</td></tr><tr><td>H</td><td>HCPCS</td></tr><tr><td>L</td><td>LOINC</td></tr><tr><td>D</td><td>Current Dental Terminology (CDT) codes</td></tr></tbody></table>',6),o=[s];function n(c,r,l,h,_,g){return e(),d("div",null,o)}const f=t(a,[["render",n]]);export{m as __pageData,f as default};
