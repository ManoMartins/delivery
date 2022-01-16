import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController"
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController"

const routes = Router()

const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

routes.post("/clients/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.post("/clients", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)

export { routes }