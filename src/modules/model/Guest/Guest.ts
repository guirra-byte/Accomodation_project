import { Entity } from "../Entity";

type GuestProps = {

  name: string
  email: string
}

export class Guest extends Entity<GuestProps>{

  constructor(props: GuestProps) {

    super(props)
  }
}