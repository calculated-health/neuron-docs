# Clinical Diagnosis

Pertinent diagnoses aggregated from provider system sources (e.g. EHRs, registries, or other supplemental data sources) which can be used to track critical diagnosis at a patient-level.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| start_date | `date` | No | 8 | Start date | `YYYYMMDD` |
| end_date | `date` | No | 8 | End Date | `YYYYMMDD` |
| code | `string` | No | 20 | Diagnosis code |  |
| code_system | `string` | No | 1 | Diagnosis code sytem | [See Diagnosis Code System Values](/data-model/inbound/clinical_diagnosis#diagnosis-code-system-values) |
| attribute_code | `string` | Yes | 20 | The activity code for the service. |  |

## Diagnosis Code System Values

| Value | Name |
| --- | --- |
| S | SNOMED |
| 9 | ICD-9 |
| X | ICD-10 |
| C | CPT |
| H | HCPCS |
| L | LOINC |
| D | Current Dental Terminology (CDT) codes |