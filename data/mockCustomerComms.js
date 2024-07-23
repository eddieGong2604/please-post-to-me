
const mockCustomerComms =  [
    {
        customer_contact_start_date: '2023-01-10T00:00:00Z',
        policy_number_referenced: 'POL123456',
        outcome_description: 'Customer inquired about policy details and received a detailed explanation.',
        outcome_type: 'Inquiry Resolved',
        interaction_channel_name: "TelephoneCallED"
    },
    {
        customer_contact_start_date: '2023-02-20T00:00:00Z',
        policy_number_referenced: 'POL654321',
        outcome_description: 'Customer reported a billing error, which was corrected in the system.',
        outcome_type: 'Billing Issue Resolved',
        interaction_channel_name: "WebInteractionED"
    },
    {
        customer_contact_start_date: '2023-03-20T00:00:00Z',
        policy_number_referenced: 'POL654321',
        outcome_description: 'Customer sent an Email',
        outcome_type: 'Billing Issue Resolved',
        interaction_channel_name: "WebInteractionED"
    }
];

export default mockCustomerComms;
