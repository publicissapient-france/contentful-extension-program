export const initSessions = object => ({
    type: 'INIT_SESSIONS',
    sessions: object
});


export const updatePricing = (target, property, value) => ({
    type: 'UPDATE_PRICING',
    target: target,
    property : property,
    value : value
});

export const updateDuration = (value) => ({
    type: 'UPDATE_DURATION',
    value : value
});

export const addSession = () => ({
    type: 'ADD_SESSION',
});

export const removeSession = (index) => ({
    type: 'REMOVE_SESSION',
    index : index
});


export const updateSession = (index, target, value) => ({
    type: 'UPDATE_SESSION',
    index : index,
    target: target,
    value : value
});
export const updatePromo = (index, target, value) => ({
    type: 'UPDATE_PROMO',
    target: target,
    index : index,
    value : value
});