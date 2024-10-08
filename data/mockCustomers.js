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
        gender: 'M',
        start_date: '2022-01-01T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: mockAddresses[10].fullAddress, gnaf_pid: mockAddresses[10].gnafPID, latitude: mockAddresses[10].latitude, longitude: mockAddresses[10].longitude, preferred: false, country: mockAddresses[10].country },
            { full_address: mockAddresses[11].fullAddress, gnaf_pid: mockAddresses[11].gnafPID, latitude: mockAddresses[11].latitude, longitude: mockAddresses[11].longitude, preferred: false, country: mockAddresses[11].country },
            { full_address: mockAddresses[12].fullAddress, gnaf_pid: mockAddresses[12].gnafPID, latitude: mockAddresses[12].latitude, longitude: mockAddresses[12].longitude, preferred: false, country: mockAddresses[12].country },
            { full_address: mockAddresses[1].fullAddress, gnaf_pid: mockAddresses[1].gnafPID, latitude: mockAddresses[1].latitude, longitude: mockAddresses[1].longitude, preferred: true, country: mockAddresses[1].country },
            { full_address: mockAddresses[0].fullAddress, dpid: "DP042024", latitude: mockAddresses[0].latitude, longitude: mockAddresses[0].longitude, preferred: false, country: mockAddresses[0].country }
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
        gender: 'F',
        start_date: '2023-02-15T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: mockAddresses[10].fullAddress, gnaf_pid: mockAddresses[10].gnafPID, latitude: mockAddresses[10].latitude, longitude: mockAddresses[10].longitude, preferred: false, country: mockAddresses[10].country },
            { full_address: mockAddresses[2].fullAddress, dpid: "DPID123123", latitude: mockAddresses[2].latitude, longitude: mockAddresses[2].longitude, preferred: true, country: mockAddresses[2].country }
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
        gender: 'M',
        start_date: '2022-03-30T00:00:00.000Z',
        is_valid: true,
        addresses: [
            { full_address: mockAddresses[10].fullAddress, gnaf_pid: mockAddresses[10].gnafPID, latitude: mockAddresses[10].latitude, longitude: mockAddresses[10].longitude, preferred: false, country: mockAddresses[10].country },
            { full_address: mockAddresses[3].fullAddress, gnaf_pid: mockAddresses[3].gnafPID, latitude: mockAddresses[3].latitude, longitude: mockAddresses[3].longitude, preferred: true, country: mockAddresses[3].country }
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
        gender: 'F',
        start_date: '2021-07-20T00:00:00.000Z',
        is_valid: true,
        addresses: [],
        aliases: mockAliases.filter(ma=>ma.mock__field__customerId == 4),
        current_policy_count: 1,
        customer_keys: ["PMS-IAG234235234234"]
    },
    {
        _id: 5,
        customer_type: 'INDIVIDUAL',
        first_name: 'Bob',
        middle_name: 'E',
        last_name: 'Davis',
        date_of_birth: '1992-11-05T00:00:00.000Z',
        gender: 'M',
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
            { full_address: mockAddresses[10].fullAddress, gnaf_pid: mockAddresses[10].gnafPID, latitude: mockAddresses[10].latitude, longitude: mockAddresses[10].longitude, preferred: false, country: mockAddresses[10].country },
            { full_address: mockAddresses[6].fullAddress, gnaf_pid: mockAddresses[6].gnafPID, latitude: mockAddresses[6].latitude, longitude: mockAddresses[6].longitude, preferred: true, country: mockAddresses[6].country }
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
            { full_address: mockAddresses[6].fullAddress, gnaf_pid: mockAddresses[6].gnafPID, latitude: mockAddresses[6].latitude, longitude: mockAddresses[6].longitude, preferred: true, country: mockAddresses[6].country },
            { full_address: mockAddresses[7].fullAddress, dpid: "DPID77777", latitude: mockAddresses[7].latitude, longitude: mockAddresses[7].longitude, preferred: false, country: mockAddresses[7].country }
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
