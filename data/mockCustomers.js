import mockAliases from "./mockCustomerAliases.js";

const mockCustomers = [
    // INDIVIDUAL customers
    {
        id: 1,
        customer_type: 'INDIVIDUAL',
        first_name: 'John',
        middle_name: 'A',
        last_name: 'Doe',
        date_of_birth: '1980-01-01T00:00:00.000Z',
        gender: 'Male',
        start_date: '2022-01-01T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' },
            { full_address: '124 Main St, City, Country', preferred: false, country: 'USA' }
        ],
        aliases: mockAliases,
    },
    {
        id: 2,
        customer_type: 'INDIVIDUAL',
        first_name: 'Jane',
        middle_name: 'B',
        last_name: 'Smith',
        date_of_birth: '1990-02-15T00:00:00.000Z',
        gender: 'Female',
        start_date: '2023-02-15T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }
        ],
        aliases: mockAliases,
    },
    {
        id: 3,
        customer_type: 'INDIVIDUAL',
        first_name: 'Eddy',
        middle_name: 'C',
        last_name: 'Johnson',
        date_of_birth: '1985-03-30T00:00:00.000Z',
        gender: 'Male',
        start_date: '2022-03-30T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }
        ],
        aliases: mockAliases,
    },
    {
        id: 4,
        customer_type: 'INDIVIDUAL',
        first_name: 'Alice',
        middle_name: 'D',
        last_name: 'Brown',
        date_of_birth: '1988-07-20T00:00:00.000Z',
        gender: 'Female',
        start_date: '2021-07-20T00:00:00.000Z',
        is_valid: true,
        addresses: [],
        aliases: mockAliases,
    },
    {
        id: 5,
        customer_type: 'INDIVIDUAL',
        first_name: 'Bob',
        middle_name: 'E',
        last_name: 'Davis',
        date_of_birth: '1992-11-05T00:00:00.000Z',
        gender: 'Male',
        start_date: '2024-11-05T00:00:00.000Z',
        is_valid: false,
        addresses: [],
        aliases: mockAliases,
    },

    // BUSINESS customers
    {
        id: 6,
        customer_type: 'BUSINESS',
        organisation_name: 'Tech Solutions Ltd',
        date_of_birth: null,
        gender: null,
        start_date: '2021-06-01T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }
        ],
        aliases: mockAliases,
    },
    {
        id: 7,
        customer_type: 'BUSINESS',
        organisation_name: 'Global Industries Inc',
        date_of_birth: null,
        gender: null,
        start_date: '2022-08-15T00:00:00.000Z',
        is_valid: true,
        addresses: [],
    },
    {
        id: 8,
        customer_type: 'BUSINESS',
        organisation_name: 'Creative Works LLC',
        date_of_birth: null,
        gender: null,
        start_date: '2023-01-10T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }
        ],
        aliases: mockAliases,
    },
    {
        id: 9,
        customer_type: 'BUSINESS',
        organisation_name: 'Enterprise Holdings',
        date_of_birth: null,
        gender: null,
        start_date: '2021-09-22T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }
        ],
        aliases: mockAliases,
    }
];

export default mockCustomers;
