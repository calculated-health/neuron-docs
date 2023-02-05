---
next: 'Quality Health Measures'
---

# Architecture

## Overview

Neuron was designed to run in multiple environments such as [Azure](https://azure.microsoft.com/), [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/gcp) or [on-prem](https://spark.apache.org/docs/latest/running-on-kubernetes.html). It is made up of three core architectural components: **Database**, **Runtime Environment** and **File Storage**.

<br/>

![Neuron Arch Diagram](/assets/neuron-arch-3.png)

## Database

Designed to run against some of the most popular database solutions in the market, both cloud based and open-source.  Load your clinical data into the Neuron inbound data model to process and the store results back into population heath metric tables.

## Runtime

You can run it in any environment capable of managing [Apache Spark](https://spark.apache.org/) clusters.  Popular cloud-based platforms include [Azure Synapse](https://azure.microsoft.com/en-us/products/synapse-analytics/), [Databricks](https://www.databricks.com/blog/2022/05/10/introducing-databricks-workflows.html), [AWS EMR](https://aws.amazon.com/emr/), [GCP Dataproc](https://cloud.google.com/dataproc) or your own custom on-prem solution through [Kubernetes](https://spark.apache.org/docs/latest/running-on-kubernetes.html).

## Storage

File storage is used to stage unstructured inbound data for staging clinical inputs into your data warehouse, along with hosting the Neuron application itself.  Simply upload Neuron to any file storage service and point to it when you submit your Neuron job. File storage is also used to host your Neuron configuration YAML files. 