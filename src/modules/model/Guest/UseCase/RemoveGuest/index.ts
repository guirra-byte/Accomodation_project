import { GuestRepository } from "../../Repository/Implementation/GuestRepository";
import { RemoveGuestUseCase } from "./RemoveGuestUseCase";
import { RemoveGuestController } from "./RemoveGuestController";

const guestRepository = GuestRepository.getInstance()

const removeGuestUseCase = new RemoveGuestUseCase(guestRepository)

const removeGuestController = new RemoveGuestController(removeGuestUseCase)

export { removeGuestController }