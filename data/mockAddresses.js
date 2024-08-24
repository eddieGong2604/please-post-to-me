function generateRandomAddress(index) {
    const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Canberra", "Darwin", "Cairns", "Gold Coast"];
    const streets = ["Example Street", "Another Ave", "Random Rd", "Different St", "Beach Blvd", "Lakeview Ave", "Hills Rd", "Mountain Pass", "Riverbank Dr", "Ocean View"];
    const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];
    const randomCity = cities[index % cities.length];
    const randomStreet = streets[index % streets.length];
    const randomState = states[index % states.length];
    const randomStreetNumber = Math.floor(Math.random() * 1000) + 1;
    const randomPostcode = Math.floor(Math.random() * 9000) + 1000;

    // Generate predictable gnafPID based on index
    const gnafPID = index % 2 === 0 ? `GNAFPID${String(index).padStart(5, '0')}` : null;
    const dpid = gnafPID ? null : `DPID${String(index).padStart(5, '0')}`;

    // Generate random latitude and longitude as strings
    const latitude = (Math.random() * 180 - 90).toFixed(6).toString();
    const longitude = (Math.random() * 360 - 180).toFixed(6).toString();

    return {
        fullAddress: `${randomStreetNumber} ${randomStreet}, ${randomCity}, ${randomState} ${randomPostcode}`,
        gnafPID,
        dpid,
        latitude,
        longitude
    };
}

function generateMockAddresses(count) {
    const addresses = [];
    for (let i = 0; i < count; i++) {
        addresses.push(generateRandomAddress(i));
    }
    return addresses;
}

// Generate 100 mock addresses
const mockAddresses = generateMockAddresses(100);

export default mockAddresses;
