import { IGuestRepository } from "../../Repository/IGuestRepository";

export class UpdateGuestUseCase {

  constructor(private guestRepository: IGuestRepository) { }
  async execute(name: string, email: string, id: string) {

    const verifyGuestExists = await this.guestRepository.findOne(email)
    if (!verifyGuestExists) {

      throw new Error("Not is possible update guest")
    }

    const udpateGuest = await this.guestRepository.update(id, name, email)
    return udpateGuest
  }
}