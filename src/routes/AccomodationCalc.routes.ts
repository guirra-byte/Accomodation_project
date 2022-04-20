import { response, Router } from 'express'
import { calcAccomodationController } from '../modules/model/Room/UseCase/Calc'

const checkOutRoutes = Router()

checkOutRoutes.post('/', (request, response) => {

  calcAccomodationController.handle(request, response)

})

export { checkOutRoutes } 