import { FindOneGuestUseCase } from "./FindOneGuestUseCase";
import { Request, Response } from 'express'

export class FindOneGuestController {

  constructor(private findOneGuestUseCase: FindOneGuestUseCase) { }
  async handle(request: Request, response: Response) {

    const { email } = request.params

    try {

      const findOneGuest = await this.findOneGuestUseCase.execute(email)
      return response.status(200).send()
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}