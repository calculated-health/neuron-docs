# Storage

The configuration used to connect services such Azure Storage, AWS S3 and GCP Storage. 

::: warning NOTE
Neuron is capable of supporting more drivers than the ones listed below. However, we have not 
published them yet as we are still testing. We will continue to publish more drivers
in the future. If you are in need of a different driver sooner, [contact us](https://www.calculated.health/#contact-us) to see 
if we can prioritize it for you. 
:::


## Base Storage

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `driver` | `enum` | `default` | No | The storage driver.  Options include: `default`, `azure`.  NOTE: `default` is used for local development.  More driver options to come. |

## Azure Storage

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `storage_account_name` | `string` |  | No | Azure storage account name |
| `synapse_linked_service` | `string` |  | No | Azure synapse linked service name.  Only used for the `synapse` runtime environment. |

## Example

```yaml
storage:
  driver: azure
  azure:
    storage_account_name: 'neuron-storage'
    synapse_linked_service: 'neuron-storage'
```