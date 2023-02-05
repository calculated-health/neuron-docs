# Jobs Overview

Jobs are the main drivers of Neuron that execute upon a set of analytical instructions mostly based around staging, measuring and metric building.  Jobs are executed using the Apache Spark `spark-submit` function.  Learn more [here](https://spark.apache.org/docs/latest/submitting-applications.html).

## Example

```bash
spark-submit \
  --class <main-class> \
  --master <master-url> \
  --deploy-mode <deploy-mode> \
  --conf <key>=<value> \
  ... # other options
  <application-jar> \
  [application-arguments]
```