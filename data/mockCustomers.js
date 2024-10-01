import mockAliases from "./mockCustomerAliases.js";
import mockAddresses from '../data/mockAddresses.js';

const mockCustomers = [
    // INDIVIDUAL customers
    {
        _id: 1,
        customer_type: 'INDIVIDUAL',
        first_name: 'John',
        middle_name: 'A',
        last_name: 'Doe',
        date_of_birth: '1980-01-01T00:00:00.000Z',
        gender: 'Male',
        start_date: '2022-01-01T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { ...mockAddresses[1], preferred: true, country: 'AU' },
            { ...mockAddresses[0], preferred: false, country: 'AU' }
        ],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 1),
        current_policy_count: 1,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234","CMDM-IAG524346456456"]
    },
    {
        _id: 2,
        customer_type: 'INDIVIDUAL',
        first_name: 'Jane',
        middle_name: 'B',
        last_name: 'Smith',
        date_of_birth: '1990-02-15T00:00:00.000Z',
        gender: 'Female',
        start_date: '2023-02-15T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { ...mockAddresses[2], preferred: true, country: 'AU' }
        ],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 2),
        current_policy_count: 1,
        customer_keys: ["CMDM-NOINTERACTION000","PMS-IAG234235234234"]
    },
    {
        _id: 3,
        customer_type: 'INDIVIDUAL',
        first_name: 'Eddy',
        middle_name: 'C',
        last_name: 'Johnson',
        date_of_birth: '1985-03-30T00:00:00.000Z',
        gender: 'Male',
        start_date: '2022-03-30T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { ...mockAddresses[3], preferred: true, country: 'AU' }
        ],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 3),
        current_policy_count: 0,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },
    {
        _id: 4,
        customer_type: 'INDIVIDUAL',
        first_name: 'Alice',
        middle_name: 'D',
        last_name: 'Brown',
        date_of_birth: '1988-07-20T00:00:00.000Z',
        gender: 'Female',
        start_date: '2021-07-20T00:00:00.000Z',
        is_valid: true,
        addresses: [],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 4),
        current_policy_count: 1,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },
    {
        _id: 5,
        customer_type: 'INDIVIDUAL',
        first_name: 'Bob',
        middle_name: 'E',
        last_name: 'Davis',
        date_of_birth: '1992-11-05T00:00:00.000Z',
        gender: 'Male',
        start_date: '2024-11-05T00:00:00.000Z',
        is_valid: false,
        addresses: [],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 5),
        current_policy_count: 0,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },

    // BUSINESS customers
    {
        _id: 6,
        customer_type: 'BUSINESS',
        organisation_name: 'Tech Solutions Ltd',
        date_of_birth: null,
        gender: null,
        abn: "65106533523",
        acn: null,
        start_date: '2021-06-01T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { ...mockAddresses[6], preferred: true, country: 'AU' }
        ],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 6),
        current_policy_count: 1,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },
    {
        _id: 7,
        customer_type: 'BUSINESS',
        organisation_name: 'Global Industries Inc',
        abn: null,
        acn: "4235235235",
        date_of_birth: null,
        gender: null,
        start_date: '2022-08-15T00:00:00.000Z',
        is_valid: true,
        addresses: [],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 7),
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },
    {
        _id: 8,
        customer_type: 'BUSINESS',
        organisation_name: 'Creative Works LLC',
        date_of_birth: null,
        abn: null,
        acn: null,
        gender: null,
        start_date: '2023-01-10T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { ...mockAddresses[6], preferred: true, country: 'AU' },
            { ...mockAddresses[7], preferred: false, country: 'AU' }
        ],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 8),
        current_policy_count: 0,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    },
    {
        _id: 9,
        customer_type: 'BUSINESS',
        organisation_name: 'Enterprise Holdings',
        date_of_birth: null,
        abn: "52435325235",
        acn: null,
        gender: null,
        start_date: '2021-09-22T00:00:00.000Z',
        is_valid: true,
        addresses: [],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 9),
        current_policy_count: 1,
        customer_keys: ["CMDM-IAG412512421523","PMS-IAG234235234234"]
    }
];

export default mockCustomers;
