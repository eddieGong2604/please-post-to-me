import { v4 as uuidv4 } from 'uuid';

const generateAgreedValue = (agreedValue, date) => {
    return {
        agreedValue: agreedValue,
        date: date,
    };
};

const mockVehicleDetail = {
    _id: uuidv4(),
    year: 2020,
    make: 'Toyota',
    model: 'Camry',
    policies: [
        {
            agreedValues: [
                generateAgreedValue(15000, '2023-01-01T00:00:00Z'),
                generateAgreedValue(14500, '2022-01-01T00:00:00Z'),
                generateAgreedValue(14000, '2021-01-01T00:00:00Z'),
            ],
        },
    ],
    claims: [
        {
            claimDate: '2021-08-25T00:00:00Z',
            natureOfLoss: 'Fire',
            closeDate: null
        },
        {
            claimDate: '2023-01-15T00:00:00Z',
            natureOfLoss: 'Vandalism',
            closeDate: '2023-02-15T00:00:00Z'
        }
    ]
};

export default mockVehicleDetail;
