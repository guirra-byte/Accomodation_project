import { UpdateGuestUseCase } from "./UpdateGuestUseCase";
import { Request, Response } from 'express'


export class UpdateGuestController {

  constructor(private updateGuestUseCase: UpdateGuestUseCase) { }
  async handle(request: Request, response: Response) {

    const { name, email } = request.body
    const { id } = request.params

    try {

      const findAndUpdate = await this.updateGuestUseCase.execute(id, name, email)
      return response.status(200).send()
    }
    catch (exception) {

      return response.status(200).send(exception)
    }
  }
}
