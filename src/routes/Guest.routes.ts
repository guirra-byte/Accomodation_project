import { response, Router } from 'express'

import { createGuestController } from '../modules/model/Guest/UseCase/CreateGuest'
import { findOneGuestController } from '../modules/model/Guest/UseCase/FindOneGuest'
import { findAllGuestController } from '../modules/model/Guest/UseCase/FindAllGuest'
import { removeGuestController } from '../modules/model/Guest/UseCase/RemoveGuest'
import { updateGuestController } from '../modules/model/Guest/UseCase/UpdateGuest'

const guestRoutes = Router()

guestRoutes.post('/', (request, response) => {

  createGuestController.handle(request, response)
})

guestRoutes.get('/:email', (request, response) => {

  findOneGuestController.handle(request, response)
})

guestRoutes.get('/', (request, response) => {

  findAllGuestController.handle(request, response)
})

guestRoutes.delete('/:email', (request, response) => {

  removeGuestController.handle(request, response)
})

guestRoutes.patch('/:id', (request, response) => {

  updateGuestController.handle(request, response)
})

export { guestRoutes }