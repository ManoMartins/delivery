import { Router } from "express"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController"
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController"
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController"
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController"
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController"
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController"
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient"
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman"

const routes = Router()

const createClientController = new CreateClientController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const createDeliverymanController = new CreateDeliverymanController()
const updateDeliverymanController = new UpdateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()


routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)
routes.patch("/delivery/updateDeliveryMan/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

routes.post("/clients", createClientController.handle)
routes.post("/clients/authenticate", authenticateClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

export { routes }