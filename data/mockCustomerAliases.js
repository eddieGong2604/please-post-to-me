// data/mockCustomerAliases.js

const riskTypes = [
    "Bike Comprehensive", "Bike Third Party Property Damage", "Bike Third Party Fire And Theft", "Boat", "Farm",
    "Business", "Commercial Motor", "Commercial Motor Vehicle", "MDBI", "Padlock", "Liability", "Other Commercial",
    "Stand-Alone Liability", "Motor Trades", "Construction", "Industrial Risks Insurance", "Crop", "Motor Fleet",
    "Home Owners Warranty", "Commercial Strata", "Marine", "Engineering", "Livestock", "Stand-Alone Accident",
    "Commercial Workers Compensation", "General Property", "Professional Indemnity", "Pleasurecraft", "Stand-Alone Fire",
    "Commercial Financial Protection", "Commercial Other", "Commercial Travel", "Car Comprehensive",
    "Private Motor Vehicle", "Car Third Party Property Damage", "Car Third Party Fire And Theft",
    "Car Veteran And Vintage", "Car Other", "Caravan Touring", "Caravan", "Caravan Trailer", "Caravan Onsite",
    "Trailer", "Consumer Other", "Other Personal", "Domestic Workers Compensation", "Transport Accident Insurance",
    "Consumer Financial Protection", "Home Security", "Life", "Mortgage Protection", "Funeral", "CTP NSW", "CTP ACT",
    "CTP QLD", "Contents", "Building", "Home Owners", "Landlord Contents", "Landlord Building", "Home Contents",
    "Landlord", "Residential Strata", "Personal Effects", "Travel"
];

const generateMockCustomerAliases = (customerId) => {
    return {
        is_valid: true, // All aliases are valid
        mock__field__customerId: customerId, // Mapping to customer ID
        ...(customerId != 2 ? {policies: generateMockPolicies()}: {}), // Generate policies
        contact_points: generateMockContactPoints(), // Generate contact points
    };
};

const generateMockPolicies = () => {
    const policies = [];
    let usedRiskTypes = new Set();

    for (let i = 0; i < 3; i++) { // 3 Policies
        const risks = generateMockPolicyRisks(usedRiskTypes);
        policies.push({
            is_valid: true,
            policy_status: "CURRENT",
            policy_start_date: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString(),
            policy_end_date: new Date(2024 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString(),
            policyNumber: `POLICY${Math.floor(Math.random() * 100000)}`,
            asset_description: `Asset Description ${i + 1}`,
            svx_policy_key: `SVXKEY${Math.floor(Math.random() * 100000)}`,
            source_policy_key: `SOURCEKEY${Math.floor(Math.random() * 100000)}`,
            risks: [...risks, ...risks], // Assign 3 different risks & duplicate
        });
    }

    return policies;
};

const generateMockPolicyRisks = (usedRiskTypes) => {
    const risks = [];
    let riskCount = 0;

    while (riskCount < 3) { // 3 different risks
        let riskType;

        do {
            riskType = riskTypes[Math.floor(Math.random() * riskTypes.length)];
        } while (usedRiskTypes.has(riskType)); // Ensure no duplicates

        usedRiskTypes.add(riskType);
        risks.push({
            risk_type_code: riskType,
        });

        riskCount++;
    }

    return risks;
};

const generateMockContactPoints = () => {
    const contactMethods = ["PHONE", "EMAIL"];
    const contactQualifiers = ["MP", "HP", "WP"];

    const contactPoints = [];

    // 50% chance to have a contact point
    if (Math.random() < 0.5) {
        const contact_method = contactMethods[Math.floor(Math.random() * contactMethods.length)];

        let contact_point = {
            contact_method: contact_method,
            contact_value: contact_method === 'PHONE' ? `+61${Math.floor(100000000 + Math.random() * 900000000)}` : `user${Math.floor(Math.random() * 10000)}@example.com`,
            contact_qualifier: contact_method === 'PHONE' ? contactQualifiers[Math.floor(Math.random() * contactQualifiers.length)] : null,
            contact_country_code: contact_method === 'PHONE' ? '+61' : null,
        };

        contactPoints.push(contact_point);
    }

    return contactPoints;
};

// Utility to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate mock data for customer IDs 1 to 9, each with 3 aliases
const mockCustomerAliases = [];
for (let customerId = 1; customerId <= 9; customerId++) {
    for (let i = 0; i < 3; i++) { // 3 Aliases per customer
        mockCustomerAliases.push(generateMockCustomerAliases(customerId));
    }
}

export default mockCustomerAliases;
