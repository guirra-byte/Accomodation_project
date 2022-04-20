import { CalcAccomodationController } from "./CalcAccomodationController";
import { CalcAccomodationUseCase } from "./CalcAccomodationUseCase";
import { RoomRepository } from "../../Repository/Implementations/RoomRepository";

const roomRepository = RoomRepository.getInstance()

const calcAccomodationUseCase = new CalcAccomodationUseCase(roomRepository)

const calcAccomodationController = new CalcAccomodationController(calcAccomodationUseCase)

export { calcAccomodationController }