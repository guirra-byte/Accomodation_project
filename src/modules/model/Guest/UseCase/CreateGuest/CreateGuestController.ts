import { CreateGuestUseCase } from "./CreateGuestUseCase";
import { Request, Response } from 'express'


export class CreateGuestController {

  constructor(private createGuestUseCase: CreateGuestUseCase) { }
  async handle(request: Request, response: Response) {

    const { name, email } = request.body

    try {

      const createGuest = await this.createGuestUseCase.execute(name, email)
      return response.status(201).send()

    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}