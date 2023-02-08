# ch_clinical_encounter

The clinical encounter with a provider.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| provider_key | `string` | No | 100 | Provider key. |  |
| start_date | `date` | No | 8 | The start date of the service. | `YYYYMMDD` |
| end_date | `date` | Yes | 8 | The end date of the service. | `YYYYMMDD` |
| activity_code | `date` | Yes | 20 | The encounter activity code. |  |
| activity_code_system | `string` | Yes | 1 | The encounter activity code system. | [See Activity Code System Values](/data-model/inbound/ch_clinical_encounter#activity-code-system-values) |
| diagnosis_code | `string` | Yes | 2 | Code indicating the type of discharge. |  |
| diagnosis_code_system | `string` | Yes | 5 |  | [See Diagnosis Code System Values](/data-model/inbound/ch_clinical_encounter#diagnosis-code-system-values) |
| status | `string` | Yes | 2 | Planned or Completed | `1` - Planned, `2` - Completed |

## Activity Code System Values

| Value | Name |
| --- | --- |
| S | SNOMED |
| 9 | ICD-9 |
| X | ICD-10 |
| C | CPT |
| H | HCPCS |
| L | LOINC |
| D | Current Dental Terminology (CDT) codes |

## Diagnosis Code System Values

| Value | Name |
| --- | --- |
| S | SNOMED |
| C | CPT |
| H | HCPCS |
| 9 | ICD-9 diagnosis |
| X | ICD-10 diagnosis |
| D | Current Dental Terminology (CDT) codes |