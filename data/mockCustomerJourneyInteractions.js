import { v4 as uuidv4 } from 'uuid';

const generateJourneyInteraction = (
  date,
  eventName,
  eventOutcomeDesc,
  journeyName,
  interactionChannelCode,
  pipelineName
) => {
  return {
    event_start_date_time: date,
    event_name: eventName,
    event_outcome_desc: eventOutcomeDesc,
    journey_name: journeyName,
    interaction_channel_code: interactionChannelCode,
    pipeline_name: pipelineName,
  };
};

const dates = [
  '2023-07-17T08:00:00Z',
  '2023-07-18T09:00:00Z',
  '2023-07-19T10:00:00Z',
  '2023-07-20T11:00:00Z',
  '2023-07-21T12:00:00Z',
];

const eventNames = [
  "MOBILE_APP_INSTALLED",
  "POLICY_RENEWAL",
  "CLAIM_SUBMITTED",
  "QUOTE_REQUESTED",
  "PAYMENT_MADE",
  "ACCOUNT_UPDATED",
  "LOGIN",
  "LOGOUT",
  "PASSWORD_RESET",
  "PROFILE_UPDATED",
];

const eventOutcomeDescs = [
  "Mobile App Installed",
  "Policy Renewed",
  "Claim Submitted",
  "Quote Requested",
  "Payment Made",
  "Account Updated",
  "Login Successful",
  "Logout Successful",
  "Password Reset",
  "Profile Updated",
];

const journeyNames = [
  "Help",
  "Renewal",
  "Claims",
  "Quotes",
  "Payments",
  "Account",
  "Security",
  "Profile",
];

const interactionChannelCodes = [
  "Telephone Call",
  "Web"
];

const pipelineNames = [
  "bc_activity_event",
  "cs_digital_event",
  "hb_response_event",
  "hb_sent_event",
  "kana_complaint_correspondence_event",
  "kana_complaint_decision_event",
  "kana_complaint_details_event",
  "kana_complaint_history_event",
  "kana_complaint_notes_event",
  "kana_contact_event",
  "pc_activity_event",
  "pc_lifecycle_event",
  "pc_risk_event"
];

// Ensure at least 3 records for each pipeline_name
let mockJourneyInteractions = pipelineNames.flatMap(pipelineName => 
  Array.from({ length: 3 }, (_, index) => 
    generateJourneyInteraction(
      dates[index % dates.length],
      eventNames[Math.floor(Math.random() * eventNames.length)],
      eventOutcomeDescs[Math.floor(Math.random() * eventOutcomeDescs.length)],
      journeyNames[Math.floor(Math.random() * journeyNames.length)],
      interactionChannelCodes[Math.floor(Math.random() * interactionChannelCodes.length)],
      pipelineName
    )
  )
);

// Generate the remaining records to reach a total of 100
while (mockJourneyInteractions.length < 100) {
  mockJourneyInteractions.push(
    generateJourneyInteraction(
      dates[Math.floor(Math.random() * dates.length)],
      eventNames[Math.floor(Math.random() * eventNames.length)],
      eventOutcomeDescs[Math.floor(Math.random() * eventOutcomeDescs.length)],
      journeyNames[Math.floor(Math.random() * journeyNames.length)],
      interactionChannelCodes[Math.floor(Math.random() * interactionChannelCodes.length)],
      pipelineNames[Math.floor(Math.random() * pipelineNames.length)]
    )
  );
}

export default mockJourneyInteractions;
