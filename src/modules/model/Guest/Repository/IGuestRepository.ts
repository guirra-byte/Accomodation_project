

export interface IGuestRepository {

  createGuest(name: string, email: string): any
  findOne(id: string): any
  findAll(): any
  remove(id: string): any
  update(id: string, name: string, email: string): any
}