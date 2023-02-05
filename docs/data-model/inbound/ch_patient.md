# ch_patient

> Demographics and other administrative information about a patient receiving care and other health-related services.
> 

## Notes

- All patients must be unique.
- All patients much exist within this table in order to be counted in any measure.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| patient_key | `string` | No | 100 | Unique patient key. |  |
| gender | `string` | No | 1 |  | `M` or `F` |
| birth_date | `date` | No | 8 |  | `YYYYMMDD` |
| first_name | `string` | No | 100 | Patient first name |  |
| last_name | `string` | No | 100 | Patient last name |  |
| middle_name_initial | `string` | Yes | 1 | Patient middle name initial |  |
| family_subscriber_key | `string` | Yes | 100 | For use with family members who share a subscriber ID. |  |
| race | `string` | No | 1 |  | [See Race Values](/data-model/inbound/ch_patient#race-values) |
| ethnicity | `string` | No | 1 |  | [See Ethnicity Values](/data-model/inbound/ch_patient#ethnicity-values) |
| race_data_source | `string` | No | 1 |  | [See Race Data Source Values](/data-model/inbound/ch_patient#race-data-source-values) |
| ethnicity_data_source | `string` | No | 1 |  | [See Ethnicity Data Source Values](/data-model/inbound/ch_patient#ethnicity-data-source-values) |
| spoken_language | `string` | No | 1 |  | [See Spoken Language Values](/data-model/inbound/ch_patient#spoken-language-values) |
| spoken_language_source | `string` | No | 1 |  | [See Spoken Language Source Values](/data-model/inbound/ch_patient#spoken-language-source-values) |
| written_language | `string` | No | 1 |  | [See Written Language Values](/data-model/inbound/ch_patient#written-language-values) |
| written_language_source | `string` | No | 1 |  | [See Written Language Source Values](/data-model/inbound/ch_patient#written-language-source-values) |
| other_language | `string` | No | 1 |  | [See Other Language Values](/data-model/inbound/ch_patient#other-lanague-values) |
| other_language_source | `string` | No | 1 |  | [See Other Language Source Values](/data-model/inbound/ch_patient#other-lanague-source-values) |

## Race Values

| Value | Name |
| --- | --- |
| 1 | White |
| 2 | Black or African American |
| 3 | American Indian and Alaska Native |
| 4 | Asian |
| 5 | Native Hawaiian and Other Pacific Islander |
| 6 | Some other race |
| 7 | Two or more races |
| 8 | Asked but No Answer |
| 9 | Unknown race |

## Ethnicity Values

| Value | Name |
| --- | --- |
| 11 | Hispanic or Latino |
| 12 | Not Hispanic or Latino |
| 18 | Asked but No Answer |
| 19 | Unknown ethnicity |

## Race Data Source Values

| Value | Name |
| --- | --- |
| 21 | CMS Databases |
| 22 | State Databases |
| 23 | Surname Analysis |
| 24 | Geo-Coding Analysis |
| 25 | Health Plan Direct |
| 28 | Unknown Data Collection Method (HPDI Only) |
| 29 | Other Direct |

## Ethnicity Data Source Values

| Value | Name |
| --- | --- |
| 91 | CMS Databases |
| 92 | State Databases |
| 93 | Surname Analysis |
| 94 | Geo-Coding Analysis |
| 95 | Health Plan Direct |
| 98 | Unknown Data Collection Method (HPDI Only) |
| 99 | Other Direct |

## Spoken Language Values

| Value | Name |
| --- | --- |
| 31 | English |
| 32 | Non-English |
| 38 | Declined |
| 39 | Unknown |

## Spoken Language Source Values

| Value | Name |
| --- | --- |
| 41 | Health Plan Direct |
| 42 | CMS Databases |
| 43 | State Databases |
| 49 | Other |

## Written Language Values

| Value | Name |
| --- | --- |
| 51 | English |
| 52 | Non-English |
| 58 | Declined |
| 59 | Unknown |

## Written Language Source Values

| Value | Name |
| --- | --- |
| 61 | Health Plan Direct |
| 62 | CMS Databases |
| 63 | State Databases |
| 69 | Other |

## Other Language Values

| Value | Name |
| --- | --- |
| 71 | English |
| 72 | Non-English |
| 78 | Declined |
| 79 | Unknown |

## Other Language Source Values

| Value | Name |
| --- | --- |
| 81 | Health Plan Direct |
| 82 | CMS Databases |
| 83 | State Databases |
| 89 | Other |