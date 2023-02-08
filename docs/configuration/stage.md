# Stage

Staging configuration used to load data from your storage into the database, such as `.csv` files that map into
the **Inbound** data model along with **Value Sets** and **Meta** data models.

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `inbound_path` | `string` |  | No | The inbound storage path that contains CSV files that map to the inbound data model.  Ex: `abfss://inbound@<mystorageaccount>.dfs.core.windows.net/<dirname>` |
| `outbound_path` | `string` |  | No | The outbound storage path that will contain CSV or XML output files from the engine. Ex: `abfss://outbound@<mystorageaccount>.dfs.core.windows.net/<dirname>` |
| `value_set_path` | `string` |  | No | The storage path that points to all the value set CSV files that get loaded into the value set data model tables. |
| `meta_path` | `string` |  | No | The storage path that points to all the meta CSV files that get loaded into the meta data model tables. |
| `mode` | `enum` | `overwrite` | No  | `overwrite` - Will overwrite and fully refresh the inbound data model tables.  `append` - Will append data into the inbound data model tables.  |