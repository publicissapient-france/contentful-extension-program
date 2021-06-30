import update from 'react-addons-update';
import {sortByIncreasingStart} from "../utils/functions";

const sessions = (state = [], action) => {
    switch (action.type) {
        case 'INIT_SESSIONS' :
            return action.sessions;

        case 'UPDATE_DURATION' :
            return update(state, {
                duration: {$set: action.value}
            });


        case 'UPDATE_PRICING' :
            if (!state.pricing || !state.pricing[action.target]) {
                const targetValue = {
                    [action.property]: action.value
                }
                return update(state, {
                    pricing: {
                        $merge: {
                            [action.target]: targetValue
                        }
                    }
                });

            } else {
                return update(state, {
                    pricing: {
                        [action.target]: {
                            [action.property]: {$set: action.value}
                        }
                    }
                });
            }

        case 'ADD_SESSION' :
            return update(state, {
                schedule: {
                    $push: [
                        {
                            startTime: [],
                            endTime: [],
                            type: '',
                            promo: {
                                available: false,
                                price: ''
                            }
                        }
                    ]
                }
            });


        case 'REMOVE_SESSION' :
            return update(state, {
                schedule: {
                    $set: [
                        ...state.schedule.slice(0, action.index),
                        ...state.schedule.slice(action.index + 1)
                    ]
                }
            });


        case 'UPDATE_SESSION' :
            return update(state, {
                schedule: {
                    [action.index]: {
                        [action.target]: {$set: action.value}
                    }
                }
            });

        case 'ORDER_SESSIONS' :
            const currentSchedule = [...state.schedule];

            return update(state, {
                schedule: {
                    $set: sortByIncreasingStart(currentSchedule)
                }
            });

        case 'UPDATE_PROMO' :
            return update(state, {
                schedule: {
                    [action.index]: {
                        promo: {
                            [action.target]: {$set: action.value}
                        }
                    }
                }
            });

        default:
            return state;
    }
};

export default sessions;

