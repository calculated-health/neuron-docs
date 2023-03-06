# Metric Detail

- Contains patient level detail for the measure.
- Search on the `patient_key` column in order to get results for a single or group of patients.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| run_guid | `string` | No | 36 | Unique run GUID |  |
| run_ts | `timestamp` | No | 18 | Measure run timestamp |  |
| patient_key | `string` | No | 36 | Patient Key |  |
| metric_key | `string` | No | 100 | Metric Key |  |
| contract_key | `string` | No | 100 | Contract key |  |
| payer_type | `string` | No | 10 | Payer Type |  |
| gender | `string` | Yes | 10 | Male or Female | `M or `F` |
| age_group | `string` | Yes | 10 | Age range grouping. | Ex: `18-64` |
| ses_stratification | `string` | Yes | 10 | SES stratifications. |  |
| eligible_population | `boolean` | No | 1 | Is the patient or event in the eligible population? | `true` or `false` |
| required_exclusion | `boolean` | No | 1 | Is the patient or event a required exclusion? | `true` or `false` |
| optional_exclusion | `boolean` | No | 1 | Is the patient or event an optional exclusion? | `true` or `false` |
| numerator_supplemental | `boolean` | No | 1 | Is the patient or event numerator complaint by supplemental data? | `true` or `false` |
| numerator_administrative | `boolean` | No | 1 | Is the patient or event numerator compliant by administrative data? | `true` or `false` |

## Audit Fields

More to come.  Every `ch_metric_detail` table also contains a variety of audit columns that contain helpful information on how we arrived at the results.  These include data elements such as event keys, dates of service, performing provider specialties and much more.