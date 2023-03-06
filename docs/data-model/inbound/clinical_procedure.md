# Clinical Procedure

Procedure information aggregated from provider system or other sources (e.g. EHRs, registries, or other supplemental data sources) which can be used to track procedures at a patient-level, particularly those that do not make it in to the traditional claims workflow.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| start_date | `date` | No | 8 | Start date | `YYYYMMDD` |
| end_date | `date` | No | 8 | End Date | `YYYYMMDD` |
| code | `string` | No | 20 | The procedure code. |  |
| code_system | `string` | No | 1 | The procedure code system. | [See Procedure Code System Values](/data-model/inbound/ch_clinical_procedure#procedure-code-system-values) |
| status | `string` | No | 3 | Ordered or Performed? | `INT` = Ordered, `EVN` = Performed |

## Procedure Code System Values

| Value | Name |
| --- | --- |
| S | SNOMED |
| 9 | ICD-9 |
| X | ICD-10 |
| C | CPT |
| H | HCPCS |
| L | LOINC |
| D | Current Dental Terminology (CDT) codes |