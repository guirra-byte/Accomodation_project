import { IGuestRepository } from '../../Repository/IGuestRepository'

export class RemoveGuestUseCase {

  constructor(private guestRepository: IGuestRepository) { }
  async execute(email: string) {

    const verifyGuestExists = await this.guestRepository.findOne(email)
    if (!verifyGuestExists) {

      throw new Error("Not is possible remove guest")
    }

    const removeGuest = await this.guestRepository.remove(email)
    return removeGuest

  }
}