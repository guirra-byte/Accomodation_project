

export interface IRoomRepository {

  createAccomodation(number: number, stayTimeIn: string, stayTimeOut: string): any
  findOneAccomodation(accomodationId: string): any
  findAllAccomodation(): any
  removeAccomodation(accomodationId: string): any
  updateAccomodationState(accomodationId: string, stayTimeIn: string, stayTimeOut: string): any
  createCalcAccomodation(stayTimeIn: string, stayTimeOut: string, id: string): any
}