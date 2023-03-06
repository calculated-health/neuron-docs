# Monthly Membership

Contains critical enrollment and membership data for medicaid-based enrollment in the form of monthly enrollment segments/files.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Patient key. |  |
| run_date | `date` | Yes | 8 | Date the file was produced. | `YYYYMMDD` |
| payment_date | `string` | Yes | 6 | Payment month for the report. | `YYYYMM` |
| hospice | `string` | No | 1 | Indicator that the patient was in Hospice status. | `Y` or `N` |
| lti_flag | `string` | No | 1 | Indicator that the patient has Part C Long Term Institutional Status | `Y` or `N` |
| orec | `string` | No | 1 | Original Reason for Entitlement Code (OREC) | [See OREC Values](/data-model/inbound/monthly_membership#orec-values) |

## OREC Values

| Value | Name |
| --- | --- |
| 0 | Beneficiary insured due to age |
| 1 | Beneficiary insured due to disability |
| 2 | Beneficiary insured due to ESRD |
| 3 | Beneficiary insured due to disability and current
ESRD |
| 9 | None of the above |