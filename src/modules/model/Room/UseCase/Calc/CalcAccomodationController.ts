import { CalcAccomodationUseCase } from "./CalcAccomodationUseCase";
import { Request, Response } from 'express'

export class CalcAccomodationController {

  constructor(private calcAccomodationUseCase: CalcAccomodationUseCase) { }
  async handle(request: Request, response: Response) {

    const { stayIn, stayOut, id } = request.body

    try {

      const createCalc = await this.calcAccomodationUseCase.execute(stayIn, stayOut, id)
      return response.status(200).send()
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}