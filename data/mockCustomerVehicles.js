const mockVehicles = [
    {
        _id: 1,
        year: 2020,
        make: 'Toyota',
        model: 'Camry',
        policies: [
            {
                customerRoles: [
                    {
                        activeFrom: '2020-01-01T00:00:00Z',
                        activeTo: null,
                        role: 'DRIVER'
                    },
                    {
                        activeFrom: '2020-01-01T00:00:00Z',
                        activeTo: '2023-12-31T00:00:00Z',
                        role: 'INSURED'
                    }
                ],
                source_policy_key: 'POL123456',
                legal_entity: 'Insurance Co A',
                policy_end_date: '2024-12-31T00:00:00Z'
            }
        ],
        claims: [
            {
                claimDate: '2023-03-15T00:00:00Z',
                natureOfLoss: 'Collision',
                closeDate: null
            },
            {
                claimDate: '2022-05-20T00:00:00Z',
                natureOfLoss: 'Theft',
                closeDate: '2022-07-10T00:00:00Z'
            }
        ]
    },
    {
        _id: 2,
        year: 2019,
        make: 'Honda',
        model: 'Civic',
        policies: [
            {
                customerRoles: [
                    {
                        activeFrom: '2019-06-01T00:00:00Z',
                        activeTo: null,
                        role: 'DRIVER'
                    },
                    {
                        activeFrom: '2019-06-01T00:00:00Z',
                        activeTo: '2022-06-01T00:00:00Z',
                        role: 'INSURED'
                    }
                ],
                source_policy_key: 'POL654321',
                legal_entity: 'Insurance Co B',
                policy_end_date: '2025-05-15T00:00:00Z'
            }
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
    }
];

export default mockVehicles;
