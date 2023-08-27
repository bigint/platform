import { SingleIntegrationDefinition } from '@app/definitions/single-integration.definition'
import { CreateOrderAction } from './actions/create-order.action'

export class OrdersDefinition extends SingleIntegrationDefinition {
  integrationKey = 'orders'
  integrationVersion = '1'
  schemaUrl = null

  triggers = []
  actions = [new CreateOrderAction()]
}