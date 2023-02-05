# ch_metric

- 1 table per measure (`ch_metric_<measure_key>`).  Example: `ch_metric_bcs`.
- The aggregated metrics table that is derived from the `ch_metric_detail` table and used to calculated the rate / quality of care.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| run_guid | `string` | No | 36 | Unique run GUID |  |
| run_ts | `timestamp` | No | 18 | Measure run timestamp | `YYYY-MM-DD HH:MM:SS` |
| metric_key | `string` | No | 100 |  |  |
| contract_key | `string` | No | 100 |  |  |
| payer_type | `string` | No | 10 |  |  |
| data_element_key | `string` | No | 100 |  |  |
| gender | `string` | Yes |  |  |  |
| ses_stratification | `string` | Yes | 10 |  |  |
| eligible_population | `number` | No | 20 | The total number of patients or events who are in the eligible population. |  |
| required_exclusion | `number` | Yes | 20 | The total number of patients or events who are a required exclusion from the measure. |  |
| optional_exclusion | `number` | Yes | 20 | The total number of patients who are optionally excluded from the measure. |  |
| numerator_supplemental | `number` | Yes | 20 | The total number of patients or events who are numerator compliant by supplemental data. |  |
| numerator_administrative | `number` | No | 20 | The total number of patients or events who are numerator compliant by administrative data. |  |

## More to come:

- Show other fields for the different types of metrics based on the metric type.