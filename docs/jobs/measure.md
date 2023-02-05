# MeasureJob

The **MeasureJob** is responsible for submitting a measure service to the Spark cluster in order to process the selected list of measures and save the results back to their corresponding metric tables. 

## Example

```bash
spark-submit \
  --class health.calc.engine.job.MeasureJob \
  --master local[*] \
  /path/to/neuron.jar \
  -cf /path/to/neuron-config.yml
```