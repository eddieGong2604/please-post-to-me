import mockCustomerAliases from "./mockCustomerAliases.js";

const mockBusinessAliases = [
    {
        legal_entity: 'Innovative Tech Corp',
        is_valid: true,
        policies: [
            {
                policy_status: 'CURRENT',
                policy_end_date: '2025-12-31T00:00:00Z'
            },
            {
                policy_status: 'CANCELLED',
                policy_end_date: '2023-05-15T00:00:00Z'
            }
        ],
        contact_points: mockCustomerAliases[0].contact_points
    },
    {
        legal_entity: 'Tech Solutions Ltd',
        is_valid: true,
        policies: [
            {
                policy_status: 'LAPSED',
                policy_end_date: '2022-11-30T00:00:00Z'
            },
            {
                policy_status: 'CURRENT',
                policy_end_date: '2024-06-30T00:00:00Z'
            }
        ],
        contact_points: mockCustomerAliases[0].contact_points
    },
    {
        legal_entity: 'Global Industries Inc',
        is_valid: false,
        policies: [
            {
                policy_status: 'CANCELLED',
                policy_end_date: '2021-09-22T00:00:00Z'
            }
        ],
        contact_points: mockCustomerAliases[0].contact_points
    },
    {
        legal_entity: 'Creative Works LLC',
        is_valid: true,
        policies: [
            {
                policy_status: 'CURRENT',
                policy_end_date: '2024-10-10T00:00:00Z'
            }
        ],
        contact_points: mockCustomerAliases[0].contact_points
    },
    {
        legal_entity: 'Enterprise Holdings',
        is_valid: true,
        policies: [
            {
                policy_status: 'LAPSED',
                policy_end_date: '2023-01-10T00:00:00Z'
            },
            {
                policy_status: 'CURRENT',
                policy_end_date: '2026-07-01T00:00:00Z'
            }
        ],
        contact_points: mockCustomerAliases[0].contact_points
    }
];



const mockCustomerRelations = [
    { id: 2, customer_type: 'INDIVIDUAL',
        first_name: 'Jane', middle_name: 'B',
        last_name: 'Smith', date_of_birth: '1990-02-15',
        gender: 'Female', start_date: '2023-02-15', is_valid: true,
        addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }],
        aliases: mockCustomerAliases
    },
    { id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson',
        date_of_birth: '1985-03-30', gender: 'Male', start_date: '2022-03-30',
        is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }],
        aliases: mockCustomerAliases
    },
    { id: 6,
        customer_type: 'BUSINESS',
        organisation_name: 'Tech Solutions Ltd',
        start_date: '2021-06-01', is_valid: true,
        addresses: [{ full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }],
        aliases: mockBusinessAliases
    },
    { id: 7, customer_type: 'BUSINESS', organisation_name: 'Global Industries Inc', start_date: '2022-08-15', is_valid: true, addresses: [],
        aliases: mockBusinessAliases
    }
];

export default mockCustomerRelations;