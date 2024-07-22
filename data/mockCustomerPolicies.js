const mockCustomerPolicies = [
    {
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "CTP",
        policy_status: "CURRENT",
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
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "CTP",
        policy_status: "LAPSED",
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
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "CTP",
        policy_status: "CANCELLED",
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
        asset_type: "MOTOR",
        policy_status: "CANCELLED",
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
    },
    {
        policy_start_date: '2021-06-01T00:00:00Z',
        source_policy_key: 'POL654321',
        policy_end_date: '2025-05-15T00:00:00Z',
        asset_type: "MOTOR",
        policy_status: "LAPSED",
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
    },
    {
        policy_start_date: '2021-06-01T00:00:00Z',
        source_policy_key: 'POL654321',
        policy_end_date: '2025-05-15T00:00:00Z',
        asset_type: "MOTOR",
        policy_status: "CURRENT",
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
    },
    {
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "HOME",
        policy_status: "CURRENT",
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
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "HOME",
        policy_status: "LAPSED",
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
        policy_start_date: '2022-01-01T00:00:00Z',
        asset_type: "HOME",
        policy_status: "CANCELLED",
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
    }
]

export default mockCustomerPolicies;