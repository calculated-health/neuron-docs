# ch_claim

The medical claim contains a variety of codes that indicate clinical diagnosis and procedures on the patient from
a health care billing perspective. 

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| claim_key | `string` | No | 100 | Unique claim key. |  |
| patient_key | `string` | No | 100 | Patient key. |  |
| provider_key | `string` | No | 100 | Provider key. |  |
| date_serviced | `date` | No | 8 | The date the patient was serviced. | `YYYYMMDD` |
| date_administered | `date` | Yes | 8 | The date the patient was administered. | `YYYYMMDD` |
| date_discharged | `date` | Yes | 8 | The date the patient was discharged. | `YYYYMMDD` |
| cpt | `string` | Yes | 5 | CPT (Current Procedural Terminology) code |  |
| cpt_modifier_1 | `string` | Yes | 2 | CPT modifier 1. No decimal point. |  |
| cpt_modifier_2 | `string` | Yes | 2 | CPT modifier 2. No decimal point. |  |
| hcpcs | `string` | Yes | 5 |  |  |
| cpt2 | `string` | Yes | 5 |  |  |
| cpt2_modifier | `string` | Yes | 2 |  |  |
| diagnosis_code_1 | `string` | No | 9 | Primary diagnosis code. |  |
| diagnosis_code_2 | `string` | Yes | 9 |  |  |
| diagnosis_code_3 | `string` | Yes | 9 |  |  |
| diagnosis_code_4 | `string` | Yes | 9 |  |  |
| diagnosis_code_5 | `string` | Yes | 9 |  |  |
| diagnosis_code_6 | `string` | Yes | 9 |  |  |
| diagnosis_code_7 | `string` | Yes | 9 |  |  |
| diagnosis_code_8 | `string` | Yes | 9 |  |  |
| diagnosis_code_9 | `string` | Yes | 9 |  |  |
| diagnosis_code_10 | `string` | Yes | 9 |  |  |
| diagnosis_code_11 | `string` | Yes | 9 |  |  |
| diagnosis_code_12 | `string` | Yes | 9 |  |  |
| diagnosis_code_13 | `string` | Yes | 9 |  |  |
| diagnosis_code_14 | `string` | Yes | 9 |  |  |
| diagnosis_code_15 | `string` | Yes | 9 |  |  |
| diagnosis_code_16 | `string` | Yes | 9 |  |  |
| diagnosis_code_17 | `string` | Yes | 9 |  |  |
| diagnosis_code_18 | `string` | Yes | 9 |  |  |
| diagnosis_code_19 | `string` | Yes | 9 |  |  |
| diagnosis_code_20 | `string` | Yes | 9 |  |  |
| procedure_code_1 | `string` | Yes | 8 |  |  |
| procedure_code_2 | `string` | Yes | 8 |  |  |
| procedure_code_3 | `string` | Yes | 8 |  |  |
| procedure_code_4 | `string` | Yes | 8 |  |  |
| procedure_code_5 | `string` | Yes | 8 |  |  |
| procedure_code_6 | `string` | Yes | 8 |  |  |
| icd_flag |  | No | 1 | ICD-9 or ICD10 code flag. | `9` or `X` |
| discharge_status |  | Yes | 2 |  |  |
| ub_revenue_code |  | Yes | 4 | Form Locator 22 values |  |
| ub_type_of_bill_code |  | Yes | 4 |  |  |
| place_of_service_code |  | Yes | 2 |  |  |
| claim_status |  | No | 1 | Paid or Denied | `1` - Paid, `2` - Denied |
| supplemental_data_source |  | No | 1 | Did the claim come a supplemental data source? | `Y` or `N` |
| meta_data_source | `string` | Yes | 100 | Custom label for identifying the source of this record. Used for auditing purposes.  |  |