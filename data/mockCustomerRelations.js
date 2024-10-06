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
    { _id: 2, customer_type: 'INDIVIDUAL',
        first_name: 'Jane', middle_name: 'B',
        last_name: 'Smith', date_of_birth: '1990-02-15',
        gender: 'F', start_date: '2023-02-15', is_valid: true,
        addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }],
        aliases: mockCustomerAliases.filter(a=>a.mock__field__customerId == 2),
        current_policy_count: 0
    },
    { _id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson',
        date_of_birth: '1985-03-30', gender: 'M', start_date: '2022-03-30',
        is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }],
        aliases: mockCustomerAliases.filter(a=>a.mock__field__customerId == 3),
        current_policy_count: 1
    },
    { _id: 6,
        customer_type: 'BUSINESS',
        organisation_name: 'Tech Solutions Ltd',
        start_date: '2021-06-01', is_valid: true,
        addresses: [{ full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }],
        aliases: mockBusinessAliases,
        current_policy_count: 1
    },
    { _id: 7, customer_type: 'BUSINESS', organisation_name: 'Global Industries Inc', start_date: '2022-08-15', is_valid: true, addresses: [],
        aliases: mockBusinessAliases,
        current_policy_count: 0
    },
    {
        _id: 8,
        customer_type: 'INDIVIDUAL',
        first_name: 'Michael',
        middle_name: 'J',
        last_name: 'Johnson',
        date_of_birth: '1985-06-10',
        gender: 'M',
        start_date: '2023-03-10',
        is_valid: true,
        addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }],
        aliases: [],
        current_policy_count: 1
      },
      {
        _id: 9,
        customer_type: 'INDIVIDUAL',
        first_name: 'Emily',
        middle_name: 'A',
        last_name: 'Davis',
        date_of_birth: '1992-09-20',
        gender: 'F',
        start_date: '2023-04-05',
        is_valid: true,
        addresses: [{ full_address: '123 Elm St, City, Country', preferred: true, latitude: '41.8781', longitude: '-87.6298', country: 'USA' }],
        aliases: [],
        current_policy_count: 2
      },
      {
        _id: 10,
        customer_type: 'INDIVIDUAL',
        first_name: 'David',
        middle_name: 'L',
        last_name: 'Martinez',
        date_of_birth: '1978-12-30',
        gender: 'M',
        start_date: '2023-01-15',
        is_valid: false,
        addresses: [{ full_address: '456 Birch St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }],
        aliases: [],
        current_policy_count: 3
      },
      {
        _id: 11,
        customer_type: 'INDIVIDUAL',
        first_name: 'Sophia',
        middle_name: 'C',
        last_name: 'Garcia',
        date_of_birth: '1983-05-25',
        gender: 'F',
        start_date: '2023-06-01',
        is_valid: true,
        addresses: [{ full_address: '789 Maple St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }],
        aliases: [],
        current_policy_count: 1
      },
      {
        _id: 12,
        customer_type: 'INDIVIDUAL',
        first_name: 'James',
        middle_name: 'D',
        last_name: 'Wilson',
        date_of_birth: '1991-07-12',
        gender: 'M',
        start_date: '2023-07-20',
        is_valid: true,
        addresses: [{ full_address: '123 Cedar St, City, Country', preferred: false, latitude: '41.8781', longitude: '-87.6298', country: 'USA' }],
        aliases: [],
        current_policy_count: 0
      },
      {
        _id: 13,
        customer_type: 'INDIVIDUAL',
        first_name: 'Olivia',
        middle_name: 'E',
        last_name: 'Clark',
        date_of_birth: '1989-03-08',
        gender: 'F',
        start_date: '2023-08-15',
        is_valid: true,
        addresses: [{ full_address: '456 Ash St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }],
        aliases: [],
        current_policy_count: 2
      },
      {
        _id: 14,
        customer_type: 'INDIVIDUAL',
        first_name: 'Benjamin',
        middle_name: 'F',
        last_name: 'Hernandez',
        date_of_birth: '1994-11-05',
        gender: 'M',
        start_date: '2023-09-25',
        is_valid: true,
        addresses: [{ full_address: '789 Spruce St, City, Country', preferred: false, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }],
        aliases: [],
        current_policy_count: 0
      },
      {
        _id: 15,
        customer_type: 'INDIVIDUAL',
        first_name: 'Ava',
        middle_name: 'G',
        last_name: 'Lopez',
        date_of_birth: '1996-04-18',
        gender: 'F',
        start_date: '2023-10-10',
        is_valid: false,
        addresses: [{ full_address: '123 Redwood St, City, Country', preferred: true, latitude: '41.8781', longitude: '-87.6298', country: 'USA' }],
        aliases: [],
        current_policy_count: 1
      },
      {
        _id: 16,
        customer_type: 'INDIVIDUAL',
        first_name: 'Charlotte',
        middle_name: 'H',
        last_name: 'Lee',
        date_of_birth: '1987-08-30',
        gender: 'F',
        start_date: '2023-11-01',
        is_valid: true,
        addresses: [{ full_address: '456 Fir St, City, Country', preferred: false, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }],
        aliases: [],
        current_policy_count: 3
      },
      {
        _id: 17,
        customer_type: 'INDIVIDUAL',
        first_name: 'Liam',
        middle_name: 'I',
        last_name: 'Walker',
        date_of_birth: '1982-01-15',
        gender: 'M',
        start_date: '2023-12-05',
        is_valid: true,
        addresses: [{ full_address: '789 Willow St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }],
        aliases: [],
        current_policy_count: 0
      }      
];

export default mockCustomerRelations;