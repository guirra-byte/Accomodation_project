import { IRoomRepository } from "../IRoomRepository";
import { client } from "../../../../../prisma/client";
import { Room } from "../../Room";

export class RoomRepository implements IRoomRepository {

  private constructor() { }
  private static INSTANCE: RoomRepository

  public static getInstance(): RoomRepository {

    if (!RoomRepository.INSTANCE) {

      RoomRepository.INSTANCE = new RoomRepository()
    }

    return RoomRepository.INSTANCE
  }

  async createAccomodation(number: number, stayTimeIn: string, stayTimeOut: string) {

    const roomNumber = number
    const accomodationStayIn = stayTimeIn
    const accomodationStayOut = stayTimeOut

    const newAccomodationProps = {

      number: roomNumber,
      check_in: accomodationStayIn,
      check_out: accomodationStayOut

    }

    const newRoom = new Room(newAccomodationProps)
    const clientAccomodation = await client.room.create({

      data: {

        number,
        stayTimeIn,
        stayTimeOut
      }
    })

    return clientAccomodation
  }

  async findOneAccomodation(accomodationId: string) {

    const findAccomodation = await client.room.findUnique({

      where: { id: accomodationId }
    })

    return findAccomodation

  }

  async findAllAccomodation() {

    const findAllAccomodation = await client.room.findMany()
    return findAllAccomodation
  }

  async removeAccomodation(accomodationId: string) {

    const findAndRemoveAccomodation = await client.room.delete({

      where: { id: accomodationId }
    })

    return findAndRemoveAccomodation
  }

  async updateAccomodationState(accomodationId: string, stayTimeIn: string, stayTimeOut: string) {

    const findAndUpdateAccomodation = await client.room.update({

      where: { id: accomodationId },

      data: {

        stayTimeIn,
        stayTimeOut

      }
    })

    return findAndUpdateAccomodation
  }

  async createCalcAccomodation(stayTimeIn: string, stayTimeOut: string, accomodationId: string) {

    async function CalcAccomodation(stayTime: string) {

      //---- Data e Hora de entrada ----
      const [date, time] = stayTime.split(' ')
      //Desestruturação do Dia, Mês e Ano da Entrada
      const [day, month, year] = date.split('/')
      //Desestruturação da Hora, dos Minutos e dos Segundos da Entrada
      const [hour, minutes, seconds] = time.split(':')

      const newDate = new Date(year, month - 1, day, hour, minutes, seconds)
      return newDate.getTime()
    }

    const stayedTimeInSeconds =
      (await CalcAccomodation(stayTimeIn) - await CalcAccomodation(stayTimeOut)) / 1000

    //Formatar meu tempo de Estadia

    const dayInSeconds = 24 * 60 * 60
    const hourInSeconds = 60 * 60
    const minutesInSeconds = 60

    const days = Math.floor(stayedTimeInSeconds / dayInSeconds)

    const hours = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24

    const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60

    const seconds = stayedTimeInSeconds % 60

    console.log(days, hours, minutes, seconds)


    const clientAccomodationTime = await client.guest.update({
      where: { id: accomodationId },

      data: {

        stayTimeIn,
        stayTimeOut

        //Utilização de Relcaionamento Many to Many
        //room_rent -> para fazer o relacionamento e verificação 
        //Guest está associado a qual acomodação e vice-versa
      }
    })

    return clientAccomodationTime
  }

}