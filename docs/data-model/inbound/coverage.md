# Coverage

Coverage (i.e., enrollment) segments in which each patient was covered by an insurance payer or other coverage program, along with benefit information, and basic contract identification information.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Unique patient key. |  |
| start_date | `date` | No | 8 | Start of coverage period. | `YYYYMMDD` |
| end_date | `date` | No | 8 | End of coverage period. | `YYYYMMDD` |
| benefit_list | `list<string>` | Yes | max | A list of medical benefits for the period. | [See Benefit List Values](/data-model/inbound/coverage#benefit-list-values) |
| payer_type | `string` | No | 1 | The type of payer the member was covered by during the period. | [See Payer Type Values](/data-model/inbound/coverage#payer-type-values) |
| contract_key | `string` | Yes | 100 | The value-based contract key that the patient was associated with during the period.   |  |

## Benefit List Values
| Value |
| --- |
| dental |
| drug |
| mental_health_inpatient |
| mental_health_intensive_outpatient |
| mental_health_outpatient |
| chemical_dependency_inpatient |
| chemical_dependency_intensive_outpatient |
| chemical_dependency_outpatient |

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