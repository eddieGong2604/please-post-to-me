// data/mockProperties.js

const generateMockProperties = (count) => {
    const properties = [];
    for (let i = 0; i < count; i++) {
        const gnafPID = `GNAFPID${String(i).padStart(5, '0')}`;
        properties.push({
            property_id: gnafPID, // Matching with gnaf_pid from addresses
            slope: (Math.random() * 100).toFixed(2), // Example slope value
            storage_small_count: Math.floor(Math.random() * 10), // Random count
            storage_large_count: Math.floor(Math.random() * 10), // Random count
            has_pool: Math.random() < 0.5 ? true : false, // Random boolean
            has_inground_pool: Math.random() < 0.5 ? true : false, // Random boolean
            has_spa: Math.random() < 0.5 ? true : false, // Random boolean
            has_tennis_court: Math.random() < 0.5 ? true : false, // Random boolean
            carport_count: Math.floor(Math.random() * 5), // Random count
            garage_count: Math.floor(Math.random() * 5), // Random count
            structures: generateMockStructures() // Generate an array of structures
        });
    }
    return properties;
};

// Function to generate mock structures
const generateMockStructures = () => {
    const numberOfStructures = Math.floor(Math.random() * 3); // Random count of structures between 0 to 2
    const structures = [];
    
    for (let j = 0; j < numberOfStructures; j++) {
        const is_primary = j === 0; // Mark the first structure as primary
        structures.push({
            construction_year: 2000 + Math.floor(Math.random() * 23), // Random year from 2000 to 2022
            period_of_construction: ['Modern', 'Contemporary', 'Classic', 'Victorian'][Math.floor(Math.random() * 4)], // Random period
            number_of_levels: Math.floor(Math.random() * 3) + 1, // Random levels between 1 and 3
            number_of_units: Math.floor(Math.random() * 10), // Random number of units
            bedroom_count: Math.floor(Math.random() * 6) + 1, // Random bedroom count between 1 and 6
            average_bedroom_size: `${Math.floor(Math.random() * 20) + 10} m²`, // Random size between 10 and 30 m²
            bedroom_small_count: Math.random() < 0.5 ? Math.floor(Math.random() * 3) : null, // Random small bedrooms or null
            bedroom_medium_count: Math.random() < 0.5 ? Math.floor(Math.random() * 3) : null, // Random medium bedrooms or null
            bedroom_large_count: Math.random() < 0.5 ? Math.floor(Math.random() * 3) : null, // Random large bedrooms or null
            bathroom_count: Math.floor(Math.random() * 3) + 1, // Random bathroom count between 1 and 3
            dining_room_count: Math.floor(Math.random() * 2) + 1, // Random dining room count between 1 and 2
            lounge_room_count: Math.floor(Math.random() * 2) + 1, // Random lounge room count between 1 and 2
            family_room_count: Math.floor(Math.random() * 2), // Random family room count between 0 and 1
            game_room_count: Math.floor(Math.random() * 2), // Random game room count between 0 and 1
            sun_room_count: Math.floor(Math.random() * 2), // Random sun room count between 0 and 1
            balcony_count: Math.floor(Math.random() * 2), // Random balcony count between 0 and 1
            verandah_count: Math.floor(Math.random() * 2), // Random verandah count between 0 and 1
            distance_to_bushland_category: `${Math.floor(Math.random() * 500)} meters`, // Random distance in meters
            primary_roof_type: ['Tile', 'Metal', 'Shingle', 'Slate'][Math.floor(Math.random() * 4)], // Random roof type
            has_solar_panels: Math.random() < 0.5 ? true : null, // Random boolean or null
            primary_wall_type: ['Brick', 'Wood', 'Concrete', 'Steel'][Math.floor(Math.random() * 4)], // Random wall type
            quality_of_construction: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)], // Random quality
            has_curved_wall: Math.random() < 0.5 ? true : null, // Random boolean or null
            has_glass_glazing: Math.random() < 0.5 ? true : null, // Random boolean or null
            has_plantation_shutter: Math.random() < 0.5 ? true : null, // Random boolean or null
            has_european_appliances: Math.random() < 0.5 ? true : null, // Random boolean or null
            has_heating_cooling: Math.random() < 0.5 ? true : null, // Random boolean or null
            heating_cooling_types: ["ducted_air_con"], // Random heating/cooling type or null
            is_primary: is_primary // Only one structure is primary
        });
    }
    return structures;
};

// Generate 100 property entries
const mockProperties = generateMockProperties(100);

export default mockProperties;
