import { IGuestRepository } from "../../Repository/IGuestRepository";

export class FindAllGuestUseCase {

  constructor(private guestRepository: IGuestRepository) { }
  async execute() {

    const findAndReturnAllGuest = await this.guestRepository.findAll()
    return findAndReturnAllGuest
  }
}