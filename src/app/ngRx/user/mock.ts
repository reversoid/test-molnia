import { Gender, IUser } from "src/app/Types/types";

export const mockUsers: IUser[] = [
    {
        id: 1,
        gender: Gender.MALE,
        name: 'Alex',
        surname: 'Vazovski',
        personalPhone: '79995554444',
        mobilePhone: '995554444',
        legalAddress: {
            address: '1st street ABC',
            city: 'Moscow',
            country: 'Russia',
        }
    },
    {
        id: 2,
        gender: Gender.FEMALE,
        name: 'Mirina',
        surname: 'Vazovski',
        personalPhone: '79995554444',
        mobilePhone: '995554444',
        legalAddress: {
            address: '1st street ABC',
            city: 'Moscow',
            country: 'Russia',
        }
    },
    {
        id: 3,
        gender: Gender.MALE,
        name: 'Mike',
        surname: 'Vazovski',
        personalPhone: '79995554444',
        mobilePhone: '995554444',
        legalAddress: {
            address: '1st street ABC',
            city: 'Moscow',
            country: 'Russia',
        }
    }
];