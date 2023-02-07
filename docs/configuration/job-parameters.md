# Job Parameters

Job parameters are passed in as application CLI arguments to the Spark job or through ENV variables.     

::: warning NOTE
These params DO NOT live in the `.yaml` config file. They are used to configure how
the application will read the config file from its corresponding storage service. 
:::

## CLI Params

::: warning NOTE
Neuron is capable of supporting more environments than the ones listed below. However, we have not 
published them yet as we are still testing. We will continue to publish more environments
in the future. If you are in need of a different environment sooner, [contact us](https://www.calculated.health/#contact-us) to see 
if we can prioritize it for you. 
:::

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `-env` or `--environment` | `enum` | `local` | Yes | The runtime environment.  Options include: `local`, `azure_databricks`, `azure_synapse`. |
| `-cf` or `—config-file` | `string` |  | Yes | The storage path that points to the YAML config file.  NOTE: If reading from Azure Storage, make sure to add the ENV param below. |

### Example

```
-env azure_databricks -cf https://<mystorageaccount>.blob.core.windows.net/config/neuron_v1.yml
```

## ENV Params

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ENV_AZURE_STORAGE_ACCESS_KEY` | `string` |  | Yes, if your config file is hosted in an Azure Storage account. | The Azure storage account access key.  [Learn More](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#regenerate-access-keys) |

### Example

```bash
ENV_AZURE_STORAGE_ACCESS_KEY=AWnQd+hu2/e-KlyJ2fORwqzwSBqTFd8lmG0aJA0BckdsVU8v3L9qO0V38P3/7G3eRfSDDsdmJYzd+ASty5j5Rw==
```