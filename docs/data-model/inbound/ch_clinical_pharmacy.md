# ch_clinical_pharmacy

> Clinical pharmacy prescriptions
> 

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| start_date | `date` | No | 8 | The date the medication should start. | `YYYYMMDD` |
| end_date | `date` | Yes | 8 | The date the medication should end. | `YYYYMMDD` |
| order_date | `date` | Yes | 8 | The date the medication was ordered. | `YYYYMMDD` |
| dispensed_date | `date` | Yes | 8 | The date the medication was dispensed. | `YYYYMMDD` |
| code | `string` | No | 20 | The drug code indicating the medication. |  |
| code_system | `string` | No | 1 | RxNorm or CVX. | `R` = RxNorm, `C` = CVX |
| quantity | `number` | Yes | 3 | Dose quantity. |  |
| frequency | `number` | Yes | 3 | Number of doses per day. |  |
| immunization_year | `string` | Yes | 4 | The year the immunization was given. |  |
| active_flag | `string` | No | 1 | Active or Not Active. | `1` = Active, `0` = Not Active |