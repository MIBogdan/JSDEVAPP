export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    email:string,
    telefon: string,
    cnp?:string,
    datanastere:Date, //string
    dataadaugare?:Date,
    poza?:string,
    actiune?:string
  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }