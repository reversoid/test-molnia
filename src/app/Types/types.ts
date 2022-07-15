export interface IUserPayload {
  name: string;
  surname: string;
  gender: Gender;
  personalNumber: string;
  mobileNumber: string;
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
