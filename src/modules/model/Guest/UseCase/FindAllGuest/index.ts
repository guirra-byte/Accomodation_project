import { GuestRepository } from "../../Repository/Implementation/GuestRepository";
import { FindAllGuestUseCase } from "./FindAllGuestUseCase";
import { FindAllGuestController } from "./findAllGuestController";

const guestRepository = GuestRepository.getInstance()

const findAllGuestUseCase = new FindAllGuestUseCase(guestRepository)

const findAllGuestController = new FindAllGuestController(findAllGuestUseCase)

export { findAllGuestController }