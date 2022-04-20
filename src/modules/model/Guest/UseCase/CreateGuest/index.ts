import { GuestRepository } from "../../Repository/Implementation/GuestRepository";
import { CreateGuestController } from "./CreateGuestController";
import { CreateGuestUseCase } from "./CreateGuestUseCase";

const guestRepository = GuestRepository.getInstance()

const createGuestUseCase = new CreateGuestUseCase(guestRepository)

const createGuestController = new CreateGuestController(createGuestUseCase)

export { createGuestController }