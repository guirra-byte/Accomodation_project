import { Entity } from "../Entity";

type RoomProps = {

  number: number
  check_in: string
  check_out: string
}

export class Room extends Entity<RoomProps>{

  constructor(props: RoomProps) {

    super(props)
  }
}