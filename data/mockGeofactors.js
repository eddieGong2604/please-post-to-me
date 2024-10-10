// data/mockGeofactors.js

const generateMockGeofactors = (count) => {
    const geofactors = [];
    for (let i = 0; i < count; i++) {
        const gnaf_pid = `GNAFPID${String(i).padStart(5, '0')}`; // Generates GNAFPID00000, GNAFPID00001, etc.
        geofactors.push({
            gnaf_pid: gnaf_pid,
            aspect: ((i%3 * 360).toFixed(2)).toString(), // Aspect in degrees as string
            elevation: ((i%3 * 1000).toFixed(2)).toString(), // Elevation in meters as string
            slope: ((i%3 * 100).toFixed(2)).toString(), // Slope percentage as string
            dt_education: ((i%3 * 10000).toFixed(2)).toString(), // Distance to education facilities as string
            dt_emergency: ((i%3 * 10000).toFixed(2)).toString(), // Distance to emergency services as string
            dt_shop: ((i%3 * 10000).toFixed(2)).toString(), // Distance to shops as string
            dt_trainstations: ((i%3 * 10000).toFixed(2)).toString(), // Distance to train stations as string
            dt_nightlife: ((i%3 * 10000).toFixed(2)).toString() // Distance to nightlife as string
        });
    }
    return geofactors;
};

// Generate 100 geofactor entries
const mockGeofactors = generateMockGeofactors(100);

export default mockGeofactors;
