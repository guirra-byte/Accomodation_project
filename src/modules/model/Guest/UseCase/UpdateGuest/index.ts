import { UpdateGuestUseCase } from "./UpdateGuestUseCase";
import { GuestRepository } from "../../Repository/Implementation/GuestRepository";
import { UpdateGuestController } from "./UpdateGuestController";

const guestRepository = GuestRepository.getInstance()

const updateGuestUseCase = new UpdateGuestUseCase(guestRepository)

const updateGuestController = new UpdateGuestController(updateGuestUseCase)

export { updateGuestController }