import { IGuestRepository } from "../../Repository/IGuestRepository";

export class CreateGuestUseCase {

  constructor(private guestRepository: IGuestRepository) { }
  async execute(name: string, email: string) {

    const verifyGuestAlreadyExists = await this.guestRepository.findOne(email)

    if (verifyGuestAlreadyExists) {

      throw new Error("This Guest already exists")
    }

    const createNewGuest = await this.guestRepository.createGuest(name, email)
    return createNewGuest

  }
}
