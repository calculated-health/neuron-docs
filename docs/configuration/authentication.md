# Authentication

Authentication is used to configure access to the Neuron authorization service along with the relative cloud based services.

## Authentication Neuron

Neuron authentication properties. 

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `service_url` | `string` |  | Yes | The Neuron service url that used for authentication. Ex: `https://portal.calculated.health` |
| `service_key` | `string` |  | Yes | Neuron public service key. |
| `service_secret` | `string` |  | Yes | Neuron private secret key. |
| `subscription_key` | `string` |  | Yes | Neuron product subscription key |
| `product_key` | `string` |  | Yes | Neuron product key. |

## Authentication Azure

Azure service account authorization properties. 

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `application_id` | `string` |  | No | Azure service principal application ID. |
| `directory_id` | `string` |  | No | Azure service principal directory ID. |
| `client_secret` | `string` |  | No | Azure service principal client secret key. NOTE: This can also be passed in through an ENV var. |

## Authentication Azure ENV vars

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ENV_AZURE_CLIENT_SECRET_KEY` | `string` |  | No | Azure service principal client secret key. |

## Example

```yaml
auth:
  service_url: https://portal.calculated.health
  service_key: c6sebe48-0708-41f3-b3a3-3dbfd1d55ffa
  subscription_key: bba1fd57-7b16-4ce4-9a85-dcf371e32907
  product_key: neuron_insights_engine
  service_secret: EAttK4YRh3FDh3K
  azure:
    application_id: 'de4425b5-9452-431b-26af-3dc4e32sba2a'
    directory_id: 'b5300e39-47q6-4361-axb3-69cs5276817d'
    client_secret: 'z4x8Q~Dj~beliFS0XSzqwZyigk3k5HBezQmnDdfc'
```