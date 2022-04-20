import { IRoomRepository } from "../../Repository/IRoomRepository";


export class CalcAccomodationUseCase {

  constructor(private roomRepository: IRoomRepository) { }
  async execute(stayIn: string, stayOut: string, id: string) {

    const verifyAccomodationExists = await this.roomRepository.findOneAccomodation(id)

    if (!verifyAccomodationExists) {

      throw new Error("This accomodation not exists")
    }

    const calcAccomodation = await this.roomRepository.createCalcAccomodation(stayIn, stayOut, id)
    return calcAccomodation

  }
}