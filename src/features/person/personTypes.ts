export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    prefix: string;
    birthday: string;
    nationality: string;
    IDcardnumber: number;
    Gender: string;
    PhoneNumber: string;
    passport: string;
    Expectedsalary: string;
  }
  
  export interface PersonState {
    data: Person[];
    loading: boolean;
    error: string | null;
  }