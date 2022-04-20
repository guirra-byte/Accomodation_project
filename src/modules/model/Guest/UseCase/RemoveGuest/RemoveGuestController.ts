import { Request, Response } from 'express'
import { RemoveGuestUseCase } from "./RemoveGuestUseCase";

export class RemoveGuestController {

  constructor(private removeGuestUseCase: RemoveGuestUseCase) { }
  async handle(request: Request, response: Response) {

    const { email } = request.params

    try {

      const findGuestNadRemove = await this.removeGuestUseCase.execute(email)
      return response.status(204).send()
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}