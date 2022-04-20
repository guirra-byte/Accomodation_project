import { IGuestRepository } from "../IGuestRepository";
import { Guest } from '../../Guest'
import { client } from "../../../../../prisma/client";

export class GuestRepository implements IGuestRepository {

  private constructor() { }
  private static INSTANCE: GuestRepository
  public static getInstance(): GuestRepository {

    if (!GuestRepository.INSTANCE) {

      GuestRepository.INSTANCE = new GuestRepository()
    }

    return GuestRepository.INSTANCE
  }

  async createGuest(name: string, email: string) {

    const guestName = name
    const guestEmail = email

    const newGuestProps = {

      name: guestName,
      email: guestEmail
    }

    const createGuest = new Guest(newGuestProps)

    const createInClient = await client.guest.create({

      data: {

        name,
        email
      }
    })

    return createInClient

  }

  async findOne(email: string) {

    const guestMail = email
    const findGuestByEmail = await client.guest.findUnique({

      where: { email: guestMail }

    })

    return findGuestByEmail


  }

  async findAll() {

    const findAllGuests = await client.guest.findMany()
    return findAllGuests
  }

  async remove(id: string) {

    const guestId = id
    const findAndRemoveGuest = await client.guest.delete({

      where: { id: guestId }
    })

    return findAndRemoveGuest
  }

  async update(id: string, name: string, email: string) {

    const guestId = id

    const findAndUpdate = await client.guest.update({

      where: { id: guestId },

      data: {
        name,
        email
      }
    })

    return findAndUpdate
  }
}