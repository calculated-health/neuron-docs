# ch_coverage

> Enrollment periods in which each patient was covered by their insurance payer.
> 

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Unique patient key. |  |
| start_date | `date` | No | 8 | Start of coverage period. | `YYYYMMDD` |
| end_date | `date` | No | 8 | End of coverage period. | `YYYYMMDD` |
| dental | `string` | No | 1 | Has dental coverage?  | `Y` or `N` |
| drug | `string` | No | 1 | Has mental health inpatient coverage? | `Y` or `N` |
| mental_health_inpatient | `string` | No | 1 | Has mental health intensive inpatient coverage? | `Y` or `N` |
| mental_health_intensive_outpatient | `string` | No | 1 | Has mental health intensive outpatient coverage? | `Y` or `N` |
| mental_health_outpatient | `string` | No | 1 | Has mental health outpatient coverage? | `Y` or `N` |
| chemical_dependency_inpatient | `string` | No | 1 | Has chemical dependency inpatient coverage? | `Y` or `N` |
| chemical_dependency_intensive_outpatient | `string` | No | 1 | Has chemical dependency intensive outpatient coverage? | `Y` or `N` |
| chemical_dependency_outpatient | `string` | No | 1 | Has chemical dependency outpatient coverage? | `Y` or `N` |
| payer_type | `string` | No | 1 | The type of payer the member was covered by during the period. | [See Payer Type Values](/data-model/inbound/ch_coverage#payer-type-values) |
| health_plan_employee_flag | `string` | No | 1 | Is the patient a health plan employee? | `Y` or `N` |
| po_mco_indicator | `string` | Yes | 3 | Enrolled in either a PO or MCO? | `PO` or `MCO` |
| contract_key | `string` | Yes | 100 | The value-based contract key that the patient was associated with during the period.   |  |

## Payer Type Values

| Value | Name |
| --- | --- |
| CEP | Commercial EPO |
| HMO | Commercial HMO |
| POS | Commercial POS |
| PPO | Commercial PPO |
| MEP | Exchange EPO |
| MMO | Exchange HMO |
| MOS | Exchange POS |
| MPO | Exchange PPO |
| MD | Medicaid Disabled HMO |
| MDE | Medicaid Dual Eligible HMO |
| MLI | Medicaid Low Income HMO |
| MRB | Medicaid Restricted Benefit HMO |
| MCR | Medicare Advantage HMO |
| MCS | Medicare Advantage POS |
| MP | Medicare Advantage PPO |
| MC | Medicare Cost |
| MMP | Medicare-Medicaid Plans |
| SN1 | Special Needs Plan—Chronic Condition |
| SN2 | Special Needs Plan—Institutionalized |
| SN3 | Special Needs Plan—Dual Eligible |
| COF | Commercial FFS (only used in TLM test deck) |
| MRF | Medicare FFS (only used in TLM test deck) |
| MCF | Medicaid FFS (only used in TLM test deck) |