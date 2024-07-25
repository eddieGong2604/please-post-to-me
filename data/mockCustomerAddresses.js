const generateAddress = (fullAddress, gnafPid, latitude, longitude, preferred, country) => {
    return {
        full_address: fullAddress,
        gnaf_pid: gnafPid,
        latitude: latitude,
        longitude: longitude,
        preferred: preferred,
        country: country,
    };
};

const mockCustomerAddresses = [
    generateAddress(
        '123 Main St, Sydney, NSW 2000',
        'AGAWA_148016413',
        -33.8688,
        151.2093,
        true,
        'Australia'
    ),
    generateAddress(
        '456 Elm St, Melbourne, VIC 3000',
        'AGAWA_148016414',
        -37.8136,
        144.9631,
        false,
        'Australia'
    ),
    generateAddress(
        '789 Maple St, Brisbane, QLD 4000',
        'AGAWA_148016415',
        -27.4698,
        153.0251,
        true,
        'Australia'
    ),
    generateAddress(
        '101 Oak St, Perth, WA 6000',
        'AGAWA_148016416',
        -31.9505,
        115.8605,
        false,
        'Australia'
    ),
    generateAddress(
        '202 Pine St, Adelaide, SA 5000',
        'AGAWA_148016417',
        -34.9285,
        138.6007,
        true,
        'Australia'
    ),
];

export default mockCustomerAddresses;
