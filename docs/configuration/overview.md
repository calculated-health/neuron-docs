# Configuration

You configure your Neuron application mostly through a `yaml` file that is stored in one of your **StorageService**’s.  Other configuration parameters can come through either **SystemENV** variables or other **SecreteManagerService**'s.

## Example YAML config:

```yaml
stage:
  mode: 'overwrite'
  inbound_path: abfss://inbound@<my-storage-account>.dfs.core.windows.net/population_a
  outbound_path: abfss://outbound@<my-storage-account>.dfs.core.windows.net/population_a
  value_set_path: abfss://core@<my-storage-account>.dfs.core.windows.net/population_a/value_set
  meta_path: abfss://core@<my-storage-account>.dfs.core.windows.net/population_a/meta
  skip_inbound: false
  skip_event: false
  skip_value_set: false
  skip_meta: false

measure:
  measure_year: 2022
  measure_keys: [bcs, cbp]
  # skip_measure_keys: [ccc]
  export_csv: true

metric:
  export_xml: false
  export_csv: false
  mode: 'overwrite'

database:
  driver: snowflake
  name: population_a
  host: https://<my-snowflake-account>.central-us.azure.snowflakecomputing.com
  username: <my-snowflake-username>
  password: <my-snowflake-password>
  schema: <my-snowflake-schema>
  warehouse: <my-snowflake-warehosue>

storage:
  driver: azure
  azure:
    storage_account_name: 'neuron-storage'

auth:
  product_key: neuron
  subscription_key: bba1fd57-7b16-4ce4-9a85-dcf371e32907
  service_url: https://portal.calculated.health
  service_key: c6febe48-0708-41f3-b2a3-3dbff1d55ffa
  service_secret: bbd1fd47-7b26-4ce4-9a65-dffs71532907
  azure:
    application_id: 'des42db5-9452-431b-26af-3dc4e32sba2a'
    directory_id: 'b5300e39-47q6-4361-axb3-69cs5276817d'
    client_secret: 'z4x8Q~Dj~beliFS0XSzqwZyigk3k5HBezQmnDdfc'
```