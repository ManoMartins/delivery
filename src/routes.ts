import { Router } from "express"
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController"
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController"
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController"

const routes = Router()

const createClientController = new CreateClientController()
const createDeliveryController = new CreateDeliveryController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

routes.post("/delivery", createDeliveryController.handle)

routes.post("/clients", createClientController.handle)
routes.post("/clients/authenticate", authenticateClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

export { routes }