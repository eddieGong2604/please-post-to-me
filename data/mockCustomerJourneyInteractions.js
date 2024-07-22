import { v4 as uuidv4 } from 'uuid';

const generateJourneyInteraction = (date, eventName, eventOutcomeDesc, journeyName) => {
    return {
        event_start_date_time: date,
        event_name: eventName,
        event_outcome_desc: eventOutcomeDesc,
        journey_name: journeyName,
    };
};

const dates = [
    '2023-07-17T08:00:00Z',
    '2023-07-18T09:00:00Z',
    '2023-07-19T10:00:00Z',
];

const eventNames = [
    "MOBILE_APP_INSTALLED",
    "POLICY_RENEWAL",
    "CLAIM_SUBMITTED",
    "QUOTE_REQUESTED",
    "PAYMENT_MADE"
];

const eventOutcomeDescs = [
    "Mobile App Installed",
    "Policy Renewed",
    "Claim Submitted",
    "Quote Requested",
    "Payment Made"
];

const journeyNames = [
    "Help",
    "Renewal",
    "Claims",
    "Quotes",
    "Payments"
];

const mockJourneyInteractions = dates.flatMap((date, index) => [
    generateJourneyInteraction(date, eventNames[index % eventNames.length], eventOutcomeDescs[index % eventOutcomeDescs.length], journeyNames[index % journeyNames.length]),
    generateJourneyInteraction(date, eventNames[(index + 1) % eventNames.length], eventOutcomeDescs[(index + 1) % eventOutcomeDescs.length], journeyNames[(index + 1) % journeyNames.length]),
    generateJourneyInteraction(date, eventNames[(index + 2) % eventNames.length], eventOutcomeDescs[(index + 2) % eventOutcomeDescs.length], journeyNames[(index + 2) % journeyNames.length]),
]);

export default mockJourneyInteractions;