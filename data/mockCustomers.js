import mockVehicles from "./mockCustomerVehicles.js";
import mockCustomerComms from "./mockCustomerComms.js";

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
        relations: [
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson', date_of_birth: '1985-03-30', gender: 'Male', start_date: '2022-03-30', is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }] },
            { id: 6, customer_type: 'BUSINESS', organisation_name: 'Tech Solutions Ltd', start_date: '2021-06-01', is_valid: true, addresses: [{ full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }] },
            { id: 7, customer_type: 'BUSINESS', organisation_name: 'Global Industries Inc', start_date: '2022-08-15', is_valid: true, addresses: [] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]
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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 4, customer_type: 'INDIVIDUAL', first_name: 'Alice', middle_name: 'D', last_name: 'Brown', date_of_birth: '1988-07-20', gender: 'Female', start_date: '2021-07-20', is_valid: true, addresses: [] },
            { id: 8, customer_type: 'BUSINESS', organisation_name: 'Creative Works LLC', start_date: '2023-01-10', is_valid: true, addresses: [{ full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }] },
            { id: 9, customer_type: 'BUSINESS', organisation_name: 'Enterprise Holdings', start_date: '2021-09-22', is_valid: true, addresses: [{ full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]

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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 4, customer_type: 'INDIVIDUAL', first_name: 'Alice', middle_name: 'D', last_name: 'Brown', date_of_birth: '1988-07-20', gender: 'Female', start_date: '2021-07-20', is_valid: true, addresses: [] },
            { id: 8, customer_type: 'BUSINESS', organisation_name: 'Creative Works LLC', start_date: '2023-01-10', is_valid: true, addresses: [{ full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }] },
            { id: 9, customer_type: 'BUSINESS', organisation_name: 'Enterprise Holdings', start_date: '2021-09-22', is_valid: true, addresses: [{ full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]


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
        relations: [
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson', date_of_birth: '1985-03-30', gender: 'Male', start_date: '2022-03-30', is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }] },
            { id: 8, customer_type: 'BUSINESS', organisation_name: 'Creative Works LLC', start_date: '2023-01-10', is_valid: true, addresses: [{ full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }] },
            { id: 9, customer_type: 'BUSINESS', organisation_name: 'Enterprise Holdings', start_date: '2021-09-22', is_valid: true, addresses: [{ full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]



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
        relations: [
            { id: 6, customer_type: 'BUSINESS', organisation_name: 'Tech Solutions Ltd', start_date: '2021-06-01', is_valid: true, addresses: [{ full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }] },
            { id: 7, customer_type: 'BUSINESS', organisation_name: 'Global Industries Inc', start_date: '2022-08-15', is_valid: true, addresses: [] },
            { id: 8, customer_type: 'BUSINESS', organisation_name: 'Creative Works LLC', start_date: '2023-01-10', is_valid: true, addresses: [{ full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }] },
            { id: 9, customer_type: 'BUSINESS', organisation_name: 'Enterprise Holdings', start_date: '2021-09-22', is_valid: true, addresses: [{ full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15',
                complaint_finalised_date: '2023-02-01'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05',
                complaint_finalised_date: '2023-04-20'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22',
                complaint_finalised_date: '2023-06-15'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]



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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 8, customer_type: 'BUSINESS', organisation_name: 'Creative Works LLC', start_date: '2023-01-10', is_valid: true, addresses: [{ full_address: '505 Aspen St, City, Country', preferred: true, latitude: '40.7306', longitude: '-73.9352', country: 'USA' }] },
            { id: 9, customer_type: 'BUSINESS', organisation_name: 'Enterprise Holdings', start_date: '2021-09-22', is_valid: true, addresses: [{ full_address: '606 Fir St, City, Country', preferred: true, latitude: '32.7157', longitude: '-117.1611', country: 'USA' }] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]


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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson', date_of_birth: '1985-03-30', gender: 'Male', start_date: '2022-03-30', is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }] },
            { id: 4, customer_type: 'INDIVIDUAL', first_name: 'Alice', middle_name: 'D', last_name: 'Brown', date_of_birth: '1988-07-20', gender: 'Female', start_date: '2021-07-20', is_valid: true, addresses: [] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]

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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 6, customer_type: 'BUSINESS', organisation_name: 'Tech Solutions Ltd', start_date: '2021-06-01', is_valid: true, addresses: [{ full_address: '303 Cedar St, City, Country', preferred: true, latitude: '36.1699', longitude: '-115.1398', country: 'USA' }] },
            { id: 7, customer_type: 'BUSINESS', organisation_name: 'Global Industries Inc', start_date: '2022-08-15', is_valid: true, addresses: [] }
        ],
        vehicles: mockVehicles,
        complaints: [
            {
                complaint_category_type: 'Product Quality',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand A',
                complaint_portfolio: 'Portfolio 1',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-01-15T00:00:00Z',
                complaint_finalised_date: '2023-02-01T00:00:00Z'
            },
            {
                complaint_category_type: 'Service Delay',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand B',
                complaint_portfolio: 'Portfolio 2',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-03-10T00:00:00Z',
                complaint_finalised_date: null
            },
            {
                complaint_category_type: 'Billing Issue',
                complaint_level: 'Low',
                complaint_harmonized_brand: 'Brand C',
                complaint_portfolio: 'Portfolio 3',
                harmonized_outcome: 'Resolved',
                complaint_received_date: '2023-04-05T00:00:00Z',
                complaint_finalised_date: '2023-04-20T00:00:00Z'
            },
            {
                complaint_category_type: 'Product Defect',
                complaint_level: 'High',
                complaint_harmonized_brand: 'Brand D',
                complaint_portfolio: 'Portfolio 4',
                harmonized_outcome: 'Unresolved',
                complaint_received_date: '2023-05-22T00:00:00Z',
                complaint_finalised_date: '2023-06-15T00:00:00Z'
            },
            {
                complaint_category_type: 'Customer Service',
                complaint_level: 'Medium',
                complaint_harmonized_brand: 'Brand E',
                complaint_portfolio: 'Portfolio 5',
                harmonized_outcome: 'Pending',
                complaint_received_date: '2023-07-01T00:00:00Z',
                complaint_finalised_date: null
            }
        ],
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]
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
        relations: [
            { id: 1, customer_type: 'INDIVIDUAL', first_name: 'John', middle_name: 'A', last_name: 'Doe', date_of_birth: '1980-01-01', gender: 'Male', start_date: '2022-01-01', is_valid: true, addresses: [{ full_address: '123 Main St, City, Country', preferred: true, latitude: '40.7128', longitude: '-74.0060', country: 'USA' }] },
            { id: 2, customer_type: 'INDIVIDUAL', first_name: 'Jane', middle_name: 'B', last_name: 'Smith', date_of_birth: '1990-02-15', gender: 'Female', start_date: '2023-02-15', is_valid: true, addresses: [{ full_address: '456 Oak St, City, Country', preferred: true, latitude: '34.0522', longitude: '-118.2437', country: 'USA' }] },
            { id: 3, customer_type: 'INDIVIDUAL', first_name: 'Eddy', middle_name: 'C', last_name: 'Johnson', date_of_birth: '1985-03-30', gender: 'Male', start_date: '2022-03-30', is_valid: true, addresses: [{ full_address: '789 Pine St, City, Country', preferred: true, latitude: '37.7749', longitude: '-122.4194', country: 'USA' }] },
            { id: 4, customer_type: 'INDIVIDUAL', first_name: 'Alice', middle_name: 'D', last_name: 'Brown', date_of_birth: '1988-07-20', gender: 'Female', start_date: '2021-07-20', is_valid: true, addresses: [] }
        ],
        vehicles: mockVehicles,
        comms: mockCustomerComms,
        invitations: [
            {
                journey_date: '2023-01-15T00:00:00Z',
                journey: 'Onboarding',
                touchpoint: 'Email',
                brand: 'Brand A',
                product_type: 'Insurance',
                product_sub_type: 'Health'
            },
            {
                journey_date: '2023-02-20T00:00:00Z',
                journey: 'Renewal',
                touchpoint: 'Phone Call',
                brand: 'Brand B',
                product_type: 'Insurance',
                product_sub_type: 'Car'
            }
        ],
        policies: [
            {
                policy_start_date: '2022-01-01T00:00:00Z',
                source_policy_key: 'POL123456',
                policy_end_date: '2024-12-31T00:00:00Z',
                claims: [
                    {
                        claimDate: '2023-03-15T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM123456'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-05-20T00:00:00Z',
                        claimNumber: 'CLM654321'
                    }
                ]
            },
            {
                policy_start_date: '2021-06-01T00:00:00Z',
                source_policy_key: 'POL654321',
                policy_end_date: '2025-05-15T00:00:00Z',
                claims: [
                    {
                        claimDate: '2022-08-25T00:00:00Z',
                        closeDate: null,
                        claimNumber: 'CLM789012'
                    },
                    {
                        claimDate: null,
                        closeDate: '2023-01-30T00:00:00Z',
                        claimNumber: 'CLM210987'
                    }
                ]
            }
        ],
        fnols: [
            {
                incident_datetime: '2023-01-01T10:00:00Z',
                severity: 'High',
                incident_address: '123 Elm St, City, Country',
                _id: 'FNOL123'
            },
            {
                incident_datetime: '2023-02-15T15:30:00Z',
                severity: 'Medium',
                incident_address: '456 Maple St, City, Country',
                _id: 'FNOL456'
            }
        ]
    }
];

export default mockCustomers;
