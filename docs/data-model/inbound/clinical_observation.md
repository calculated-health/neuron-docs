# Clinical Observation

Observation information aggregated from provider system sources (e.g. EHRs, registries, or other supplemental data sources) which can be used to track critical observation activity at a patient-level, particularly those that do not make it in to the traditional claims workflow.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| start_date | `date` | No | 8 | The start date of the observation.  | `YYYYMMDD` |
| end_date | `date` | No | 8 | The end date of the observation | `YYYYMMDD` |
| code | `string` | No | 8 | The observation code |  |
| code_system | `string` | No | 8 | The observation code system | [See Observation Code System Values](/data-model/inbound/clinical_diagnosis#diagnosis-code-system-values) |
| value | `number` | Yes | 20 | The value of the observation test outcome. |  |
| units | `string` | Yes | 10 | The units of the observation result in UCUM. |  |
| status | `string` | Yes | 1 | Ordered, Performed or Result? | `1` = Ordered, `2` = Performed, `3` = Result |
| result_value_flag | `number` | Yes | 1 | SNOWMED | `S` = SNOWMED |
| type_flag | `number` | Yes | 1 | Vital or Lab? | `V` = Vital, `L` = Lab |

## Observation Code System Values

| Value | Name |
| --- | --- |
| S | SNOMED |
| 9 | ICD-9 |
| X | ICD-10 |
| C | CPT |
| H | HCPCS |
| L | LOINC |
| D | Current Dental Terminology (CDT) codes |