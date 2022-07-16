export interface IUserPayload {
  name: string;
  surname: string;
  gender: Gender;
  personalPhone: string;
  mobilePhone: string;
  legalAddress: {
    country: string;
    city: string;
    address: string;
  };
  photo?: string;
}

export interface IUser extends IUserPayload {
  id: number;
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
