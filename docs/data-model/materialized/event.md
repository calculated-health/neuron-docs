# Event

Events are the core elements within the **Neuron Data Model**. Most of Neurons logic runs against this table to measure population health.  
- Aggregated result set of the **Inbound Data Model** such as **Claims**, **Encounters**, **Pharmaceuticals**, **Labs** and others in order to improve performance along with quality assurance. [See Event Types](/data-model/materialized/event#event-types)
- Focuses on the time-series events between a given **Patient** and **Provider**, along with the relevant **Diagnosis**, **Procedures** and other clinical properties than can occur in any type health care visit.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| event_key | `string` | Yes | 100 | Event key.  Currently only populated by claims data. |  |
| patient_key | `string` | No | 100 | Patient key. |  |
| provider_key | `string` | No | 100 | Provider key. | `YYYYMMDD` |
| event_type | `string` | Yes | 20 |  | [See Event Types](/data-model/materialized/event#event-types) |
| date_serviced | `date` | Yes | 8 | The date the event was serviced or started. |  |
| date_administered | `date` | Yes | 8 | The date the event was administered if it was a claim type. |  |
| date_discharged | `date` | Yes | 8 | The date the event discharged or ended. |  |
| code | `string` | Yes | 100 | Event code |  |
| code_system | `string` | Yes | 100 | Event code system | [See Event Code Systems](/data-model/materialized/event#event-code-systems) |
| value | `number` | No | 20 |  |  |
| quantity | `number` | No | 20 |  |  |
| frequency | `number` | No | 20 |  |  |
| supply | `number` | No | 20 |  |  |
| units | `string` | No | 20 |  |  |
| primary | `boolean` | Yes | 1 |  |  |
| supplemental_data_source | `boolean` | Yes | 1 | `true` or `false` |  |
| claim_status_denied | `boolean` | Yes | 1 | `true` or `false` |  |
| independent_laboratory | `boolean` | Yes | 1 | `true` or `false` |  |
| procedure_status_ordered | `boolean` | Yes | 1 | `true` or `false` |  |
| discharge_status_death | `boolean` | Yes | 1 | `true` or `false` |  |

## Event Types

| Value |
| --- |
| claim | 
| claim_pharmacy | 
| clinical_encounter | 
| clinical_diagnosis | 
| clinical_procedure |
| clinical_observation |
| clinical_observation |
| lab |

## Event Code Systems

| Value |
| --- |
| CPT |
| Modifier |
| CPT-CAT-II |
| HCPCS |
| UBTOB |
| UBREV |
| POS |
| ICD10CM |
| ICD9CM |
| ICD10PCS |
| ICD9PCS |
| CLAIM_STATUS |
| DISCHARGE_STATUS |
| SNOMED CT US Edition |
| NDC |
| CVX |
| RXNORM |