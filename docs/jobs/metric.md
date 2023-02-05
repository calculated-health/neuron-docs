---
next: 'Configuration Overview'
---

# MetricJob

The **MetricJob** is responsible for aggregating the metric details and saving the results to their corresponding metric table.

## Example

```bash
spark-submit \
  --class health.calc.engine.job.MetricJob \
  --master local[*] \
  /path/to/neuron.jar \
  -cf /path/to/neuron-config.yml
```