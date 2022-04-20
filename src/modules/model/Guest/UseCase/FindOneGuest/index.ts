import { GuestRepository } from "../../Repository/Implementation/GuestRepository";
import { FindOneGuestUseCase } from "./FindOneGuestUseCase";
import { FindOneGuestController } from "./FindOneGuestController";

const guestRepository = GuestRepository.getInstance()

const findOneGuestUseCase = new FindOneGuestUseCase(guestRepository)

const findOneGuestController = new FindOneGuestController(findOneGuestUseCase)

export { findOneGuestController }
