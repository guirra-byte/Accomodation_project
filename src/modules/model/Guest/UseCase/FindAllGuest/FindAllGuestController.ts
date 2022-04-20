import { FindAllGuestUseCase } from "./FindAllGuestUseCase";
import { Request, Response } from 'express'


export class FindAllGuestController {

  constructor(private findAllGuestUseCase: FindAllGuestUseCase) { }
  async handle(request: Request, response: Response) {

    try {

      const findAllGuest = await this.findAllGuestUseCase.execute()
      return response.status(200).send()
    }
    catch (exception) {

      return response.status(400).send()
    }
  }
}