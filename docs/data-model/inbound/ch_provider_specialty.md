# ch_provider_specialty

> A unique list of providers with their corresponding specialties.
> 

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| provider_key | `string` | No | 100 | Unique provider key. |  |
| pcp | `string` | No | 1 | Is a primary care physician? | `YYYYMMDD` |
| obgyn | `string` | No | 1 | Is an OBGYN? | `YYYYMMDD` |
| mental_health | `string` | No | 1 | Is a mental health provider?  | `Y` or `N` |
| eye_care | `string` | No | 1 | Is an eye care provider? | `Y` or `N` |
| dentist | `string` | No | 1 | Is a dentist?  | `Y` or `N` |
| nephrologist | `string` | No | 1 | Is a nephrologist? | `Y` or `N` |
| anesthesiologist | `string` | No | 1 | Is an anesthesiologist? | `Y` or `N` |
| nurse_practitioner | `string` | No | 1 | Is a nurse_practitioner? | `Y` or `N` |
| physician_assistant | `string` | No | 1 | Is a physician_assistant? | `Y` or `N` |
| prescribing_privileges | `string` | No | 1 | Is a prescribing_privileges? | `Y` or `N` |
| clinical_pharmacist | `string` | No | 1 | Is a clinical_pharmacist? | `Y` or `N` |
| hospital | `string` | No | 1 | Is a hospital? | `Y` or `N` |
| surgeon | `string` | No | 1 | Is a surgeon? | `Y` or `N` |
| registered_nurse | `string` | No | 1 | Is a registered_nurse? | `Y` or `N` |