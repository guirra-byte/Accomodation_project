import { RoomRepository } from "../../Repository/Implementations/RoomRepository";


export class CreateAccomodationUseCase {

  constructor(private roomRepository: RoomRepository) { }
  async execute(number: number, stayTimeIn: string, stayTimeOut: string, id: string) {

    const verifyAccomodationAlreadyExists = await this.roomRepository.findOneAccomodation(id)

    if (!verifyAccomodationAlreadyExists) {

      throw new Error("This accomodation already exists")
    }

    const create = await this.roomRepository.createAccomodation(number, stayTimeIn, stayTimeOut)
    return create
  }
}