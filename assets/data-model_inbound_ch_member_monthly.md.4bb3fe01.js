import{_ as t,c as e,o as d,a as o}from"./app.17669493.js";const f=JSON.parse('{"title":"ch_monthly_membership","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]},{"level":2,"title":"OREC Values","slug":"orec-values","link":"#orec-values","children":[]}],"relativePath":"data-model/inbound/ch_member_monthly.md"}'),a={name:"data-model/inbound/ch_member_monthly.md"},r=o('<h1 id="ch-monthly-membership" tabindex="-1">ch_monthly_membership <a class="header-anchor" href="#ch-monthly-membership" aria-hidden="true">#</a></h1><blockquote><p>Monthly Membership Data File</p></blockquote><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>patient_key</td><td><code>string</code></td><td>No</td><td>100</td><td>Patient key.</td><td></td></tr><tr><td>run_date</td><td><code>date</code></td><td>Yes</td><td>8</td><td>Date the file was produced.</td><td><code>YYYYMMDD</code></td></tr><tr><td>payment_date</td><td><code>string</code></td><td>Yes</td><td>6</td><td>Payment month for the report.</td><td><code>YYYYMM</code></td></tr><tr><td>hospice</td><td><code>string</code></td><td>No</td><td>1</td><td>Indicator that the patient was in Hospice status.</td><td><code>Y</code> or <code>N</code></td></tr><tr><td>lti_flag</td><td><code>string</code></td><td>No</td><td>1</td><td>Indicator that the patient has Part C Long Term Institutional Status</td><td><code>Y</code> or <code>N</code></td></tr><tr><td>orec</td><td><code>string</code></td><td>No</td><td>1</td><td>Original Reason for Entitlement Code (OREC)</td><td><a href="/neuron-docs/data-model/inbound/ch_member_monthly.html#orec-values">See OREC Values</a></td></tr></tbody></table><h2 id="orec-values" tabindex="-1">OREC Values <a class="header-anchor" href="#orec-values" aria-hidden="true">#</a></h2><table><thead><tr><th>Value</th><th>Name</th></tr></thead><tbody><tr><td>0</td><td>Beneficiary insured due to age</td></tr><tr><td>1</td><td>Beneficiary insured due to disability</td></tr><tr><td>2</td><td>Beneficiary insured due to ESRD</td></tr><tr><td>3</td><td>Beneficiary insured due to disability and current</td></tr><tr><td>ESRD</td><td></td></tr><tr><td>9</td><td>None of the above</td></tr></tbody></table>',6),i=[r];function n(h,c,s,l,m,_){return d(),e("div",null,i)}const b=t(a,[["render",n]]);export{f as __pageData,b as default};
