# Measure

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `measure_year` | `number` |  | Yes | The contextual measure year for your set of measures. Ex: `2022` |
| `measure_keys` | `list[string]` |  | No | List of measure keys to run. If empty, the engine will run all measures in the catalog. |
| `skip_measure_keys` | `list[string]` |  | No | List of measure keys to skip during a run.  This is useful if you want to run most measures minus a few. |
| `export_csv` | `boolean` | `false` | No | If `true`, the MeasureJob will export the results to your configured storage account.  |