import update from 'react-addons-update';

const sessions = (state = [], action) => {
    switch (action.type) {
        case 'INIT_SESSIONS' :
            return action.sessions;

        case 'UPDATE_DURATION' :
            if (!state.informations || !state.informations[action.target]) {
                const targetValue =  action.value;

                return update(state, {
                    informations: {
                        $merge: {
                            [action.target]: targetValue
                        }
                    }
                });

            } else {
                return update(state, {
                    informations: {
                        [action.target]: {$set: action.value}
                    }
                });
            }


        case 'UPDATE_INFORMATIONS' :
            if (!state.informations || !state.informations[action.target]) {
                const targetValue = {
                    [action.property]: action.value
                }
                return update(state, {
                    informations: {
                        $merge: {
                            [action.target]: targetValue
                        }
                    }
                });

            } else {
                return update(state, {
                    informations: {
                        [action.target]: {
                            [action.property]: {$set: action.value}
                        }
                    }
                });
            }


        default:
            return state;
    }
};

export default sessions;
