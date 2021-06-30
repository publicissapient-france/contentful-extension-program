
export const sortByIncreasingStart = (sessions) => sessions.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
});

export const sortDateAsc = (dates) => dates.sort((a, b) => {
    return new Date(a) - new Date(b);
});

export const daysToString = (days) =>  days.map(day => day.toLocaleDateString()).join(', ');
export const daysToISOString = (days) =>  days.map(day => day.toISOString());

export const isPassed = (date) => {
    const currentDate = new Date();
    return new Date(date).getTime() <= currentDate.getTime()
}