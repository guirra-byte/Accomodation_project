import { IGuestRepository } from "../../Repository/IGuestRepository";

export class FindOneGuestUseCase {

  constructor(private guestRepository: IGuestRepository) { }
  async execute(email: string) {

    const verifyGuestAlreadyExists = await this.guestRepository.findOne(email)

    if (!verifyGuestAlreadyExists) {

      throw new Error("This guest not exists")
    }

    return verifyGuestAlreadyExists
  }
}