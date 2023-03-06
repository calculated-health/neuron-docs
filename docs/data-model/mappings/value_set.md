# Value Set

Mapping entities that relate to corresponding population health event codes such as 
`ICD10`, `CPT`, `LOINC` and much more. Visit the [VSAC Repo](https://vsac.nlm.nih.gov/) for more info 
on all publicly available value sets.

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| oid | `string` | No | 20 | Value Set OID |  |
| code | `string` | No | 100 | Value Set Code |  |
| code_system | `string` | No | 100 | Value Set Code System |  |
| name | `string` | No | 36 | Value Set Name |  |
| description | `string` | Yes | 10 | Value Set Description |  |
| code_system_oid | `string` | No | 20 | Value Set Code System OID |  |
| code_system_version | `string` | No | 100 | Value Set Code System Version |  |