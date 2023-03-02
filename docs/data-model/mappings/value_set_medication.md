# ch_value_set_medication

## Field Definitions

| Name | Type | Nullable? | Length | Description | Values |
| --- | --- | --- | --- | --- | --- |
| oid | `string` | No | 20 | Value Set OID |  |
| code | `string` | No | 100 | Value Set Code |  |
| code_system | `string` | No | 100 | Value Set Code System |  |
| name | `string` | No | 36 | Value Set Name |  |
| generic_name | `string` | Yes | 1000 | Medication Generic Name |  |
| brand_name | `string` | Yes | 1000 | Medication Brand Name |  |
| route | `string` | Yes | 100 | Medication consumption route |  |
| package_size | `float` | Yes | 10 | Medication Package Size |  |
| unit | `string` | Yes | 100 | Medication Unit of Measurement |  |
| code_system_oid | `string` | No | 20 | Value Set Code System OID |  |
| code_system_version | `string` | No | 100 | Value Set Code System Version |  |