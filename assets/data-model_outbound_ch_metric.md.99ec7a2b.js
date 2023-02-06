import{_ as t,c as d,o as e,a as r}from"./app.17669493.js";const p=JSON.parse('{"title":"ch_metric","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field Definitions","slug":"field-definitions","link":"#field-definitions","children":[]},{"level":2,"title":"More to come:","slug":"more-to-come","link":"#more-to-come","children":[]}],"relativePath":"data-model/outbound/ch_metric.md"}'),o={name:"data-model/outbound/ch_metric.md"},i=r('<h1 id="ch-metric" tabindex="-1">ch_metric <a class="header-anchor" href="#ch-metric" aria-hidden="true">#</a></h1><ul><li>1 table per measure (<code>ch_metric_&lt;measure_key&gt;</code>). Example: <code>ch_metric_bcs</code>.</li><li>The aggregated metrics table that is derived from the <code>ch_metric_detail</code> table and used to calculated the rate / quality of care.</li></ul><h2 id="field-definitions" tabindex="-1">Field Definitions <a class="header-anchor" href="#field-definitions" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Nullable?</th><th>Length</th><th>Description</th><th>Values</th></tr></thead><tbody><tr><td>run_guid</td><td><code>string</code></td><td>No</td><td>36</td><td>Unique run GUID</td><td></td></tr><tr><td>run_ts</td><td><code>timestamp</code></td><td>No</td><td>18</td><td>Measure run timestamp</td><td><code>YYYY-MM-DD HH:MM:SS</code></td></tr><tr><td>metric_key</td><td><code>string</code></td><td>No</td><td>100</td><td></td><td></td></tr><tr><td>contract_key</td><td><code>string</code></td><td>No</td><td>100</td><td></td><td></td></tr><tr><td>payer_type</td><td><code>string</code></td><td>No</td><td>10</td><td></td><td></td></tr><tr><td>data_element_key</td><td><code>string</code></td><td>No</td><td>100</td><td></td><td></td></tr><tr><td>gender</td><td><code>string</code></td><td>Yes</td><td></td><td></td><td></td></tr><tr><td>ses_stratification</td><td><code>string</code></td><td>Yes</td><td>10</td><td></td><td></td></tr><tr><td>eligible_population</td><td><code>number</code></td><td>No</td><td>20</td><td>The total number of patients or events who are in the eligible population.</td><td></td></tr><tr><td>required_exclusion</td><td><code>number</code></td><td>Yes</td><td>20</td><td>The total number of patients or events who are a required exclusion from the measure.</td><td></td></tr><tr><td>optional_exclusion</td><td><code>number</code></td><td>Yes</td><td>20</td><td>The total number of patients who are optionally excluded from the measure.</td><td></td></tr><tr><td>numerator_supplemental</td><td><code>number</code></td><td>Yes</td><td>20</td><td>The total number of patients or events who are numerator compliant by supplemental data.</td><td></td></tr><tr><td>numerator_administrative</td><td><code>number</code></td><td>No</td><td>20</td><td>The total number of patients or events who are numerator compliant by administrative data.</td><td></td></tr></tbody></table><h2 id="more-to-come" tabindex="-1">More to come: <a class="header-anchor" href="#more-to-come" aria-hidden="true">#</a></h2><ul><li>Show other fields for the different types of metrics based on the metric type.</li></ul>',6),a=[i];function c(n,s,l,h,m,u){return e(),d("div",null,a)}const f=t(o,[["render",c]]);export{p as __pageData,f as default};
