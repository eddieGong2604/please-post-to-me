import { v4 as uuidv4 } from 'uuid';

const getRandomTimeSpent = () => Math.floor(Math.random() * 100) + 3;

const generateActivity = (date) => {
    const startTimes = [
        `${date}T08:00:00Z`,
        `${date}T09:00:00Z`,
        `${date}T10:00:00Z`,
    ];

    return startTimes.map((startTime, index) => {
        const timeSpent = getRandomTimeSpent();
        const endTime = new Date(new Date(startTime).getTime() + timeSpent * 1000).toISOString();

        return {
            page_name: `/iag-home/page${index + 1}`,
            site_brand: ['NRMA', 'CGU', 'SGIO'][index % 3],
            visit_page_start_time: startTime,
            visit_page_end_time: endTime,
            time_spent_on_page_seconds: timeSpent,
        };
    });
};

const dates = ['2023-07-17', '2023-07-18', '2023-07-19'];

const mockCustomerOnlineActivities = dates.flatMap(date => generateActivity(date));

export default mockCustomerOnlineActivities;
