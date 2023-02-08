# ch_claim_pharmacy

Pharmaceutical claims.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| service_date | `date` | No | 100 | Provider key. | `YYYYMMDD` |
| provider_npi | `string` | Yes | 10 | Provider National Provider Number |  |
| pharmacy_npi | `string` | Yes | 10 | Pharmacy Nation Provider Number |  |
| ndc | `string` | Yes | 20 | Nation Drug Code |  |
| quantity_dispensed | `number` | No | 10 |  |  |
| claim_status | `string` | Yes | 2 | Paid or Denied | `1` - Paid, `2` - Denied |
| supplemental_data_source | `string` | Yes | 2 | Did the claim come a supplemental data source? |  |