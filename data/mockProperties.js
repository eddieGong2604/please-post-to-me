// data/mockProperties.js

const generateMockProperties = (count) => {
    const properties = [];
    for (let i = 0; i < count; i++) {
        const gnafPID = `GNAFPID${String(i).padStart(5, '0')}`;
        properties.push({
            property_id: gnafPID, // Matching with gnaf_pid from addresses
            centroid: i%2==0 ? {
                coordinates: [151.15490977 + i, -34.06691731 + i]
            } : null,
            slope: i%3==0 ? "Flat/Gentle" : (i%3==1 ? "Freestanding": null), // Example slope value
            storage_small_count: i%3==0 ? 1 : (i%3==1 ? 0: null), // Random count
            storage_large_count: i%3==0 ? 1 : (i%3==1 ? 0: null), // Random count
            has_pool: i%3==0 ? true : (i%3==1 ? false: null), // Random boolean
            has_inground_pool: i%3==0 ? true : (i%3==1 ? false: null), // Random boolean
            has_spa: i%3==0 ? true : (i%3==1 ? false: null), // Random boolean
            has_tennis_court: i%3==0 ? true : (i%3==1 ? false: null), // Random boolean
            carport_count: i%3==0 ? 1 : (i%3==1 ? 0: null), 
            garage_count: i%3==0 ? 1 : (i%3==1 ? 0: null), 
            structures: generateMockStructures(i % 3 == 0 ? 2 : (i%3==1 ? 1 : 0)) // Generate an array of structures
        });
    }
    return properties;
};

// Function to generate mock structures
const generateMockStructures = (numberOfStructures) => {
    const structures = [];
    
    for (let j = 0; j < numberOfStructures; j++) {
        const is_primary = j === 0; // Mark the first structure as primary
        structures.push({
            construction_year: 2000 + Math.floor(j%3 * 23), // Random year from 2000 to 2022
            period_of_construction: ['Modern', 'Contemporary', 'Classic', 'Victorian'][j%3], // Random period
            number_of_levels: j%3==0 ? 1 : (j%3==1 ? 0: null), 
            number_of_units: j%3==0 ? 1 : (j%3==1 ? 0: null), 
            bedroom_count: j%3==0 ? 1 : (j%3==1 ? 0: null), 
            average_bedroom_size: j%3==0 ? "Average" : (j%3==1 ? "Small": null), 
            bedroom_small_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random small bedrooms or null
            bedroom_medium_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random medium bedrooms or null
            bedroom_large_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random large bedrooms or null
            bathroom_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random bathroom count between 1 and 3
            dining_room_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random dining room count between 1 and 2
            lounge_room_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random lounge room count between 1 and 2
            family_room_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random family room count between 0 and 1
            game_room_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random game room count between 0 and 1
            sun_room_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random sun room count between 0 and 1
            balcony_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random balcony count between 0 and 1
            verandah_count: j%3==0 ? 1 : (j%3==1 ? 0: null),  // Random verandah count between 0 and 1
            distance_to_bushland_category: j%3==0 ? "Within 10m" : (j%3==1 ? "Within 1m": null),  // Random distance in meters
            primary_roof_type: [null, 'Tile', 'Metal', 'Shingle', 'Slate'][j%3], // Random roof type
            has_solar_panels: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            primary_wall_type: [null,'Brick', 'Wood', 'Concrete', 'Steel'][j%3], // Random wall type
            quality_of_construction: [null,'High', 'Medium', 'Low'][j%3], // Random quality
            has_curved_wall: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            has_glass_glazing: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            has_plantation_shutter: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            has_european_appliances: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            has_heating_cooling: j%3==0 ? true : (j%3==1 ? false: null), // Random boolean // Random boolean or null
            heating_cooling_types: [null, ["ducted_air_con"],["modern"]][j%3], // Random heating/cooling type or null
            is_primary: is_primary // Only one structure is primary
        });
    }
    return structures;
};

// Generate 100 property entries
const mockProperties = generateMockProperties(100);

export default mockProperties;
