# ch_lis_history

Low Income Subsidy (LIS) History.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| start_date | `date` | Yes | 8 | Low income period start date. | `YYYYMMDD` |
| end_date | `date` | Yes | 8 | Low income period end date. | `YYYYMMDD` |
| record_type | `string` | Yes | 1 | Detail Record (Always `D`) | `D` = Detail Record |