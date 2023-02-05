# StageJob

The **StageJob** is used to load `.csv` files from your storage service into the inbound data model tables.

## Example

```bash
spark-submit \
  --class health.calc.engine.job.StageJob \
  --master local[*] \
  /path/to/neuron.jar \
  -cf /path/to/neuron-config.yml
```