# Lab

Lab information aggregated from provider system sources (e.g. National, Regional, and Provider-based lab functions, EHRs, registries, or other supplemental data sources) which can be used to track critical lab activity at a patient-level, particularly those that do not make it in to the traditional claims workflow.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| date_serviced | `date` | Yes | 8 | The start date of the observation.  | `YYYYMMDD` |
| cpt | `string` | Yes | 5 | CPT (Current Procedural Terminology) code |  |
| loinc | `string` | Yes | 7 | LOINC code |  |
| supplemental_data_source | `string` | Yes | 1 | Did the claim come a supplemental data source? | `Y` or `N` |