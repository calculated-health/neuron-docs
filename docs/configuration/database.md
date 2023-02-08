# Database

Database configuration used to connect services such as Snowflake, Databricks or PostgresSQL.

::: warning NOTE
Neuron is capable of supporting more drivers than the ones listed below. However, we have not 
published them yet as we are still testing. We will continue to publish more drivers
in the future. If you are in need of a different driver sooner, [contact us](https://www.calculated.health/#contact-us) to see 
if we can prioritize it for you. 
:::


| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `driver` | `enum` | `default` | Yes | The database driver.  Options include: `default`, `postgres`, `databricks`, `snowflake` |
| `name` | `string` |  | Yes | The database name. |
| `host` | `string` |  | No | The database host url. |
| `username` | `string` |  | No | The database username. |
| `password` | `string` |  | No | The database password. |
| `schema` | `string` |  | No | The database schema. |
| `warehouse` | `string` |  | No | The database warehouse. Currently only used for the `snowflake` driver. |

## Example

```yaml
database:
 driver: 'snowflake'
 name: 'population_a'
 host: https://<snowflake-account>.azure.snowflakecomputing.com
 username: <snowflake-username>
 password: <snowflake-password>
 schema: <snowflake-scheam>
 warehouse: <snowflake-warehouse>
```