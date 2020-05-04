export const initSessions = object => ({
    type: 'INIT_SESSIONS',
    sessions: object
});


export const updateInfo = (target, property, value) => ({
    type: 'UPDATE_INFORMATIONS',
    target: target,
    property : property,
    value : value
});

export const updateDuration = (target, value) => ({
    type: 'UPDATE_DURATION',
    target: target,
    value : value
});
