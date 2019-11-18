const speakers = (state = [], action) => {
    switch (action.type) {
        case 'INIT_SPEAKERS_INFORMATION' :
            return action.speakers;

        case 'GET_SPEAKERS' :
            return action.state;

        default:
            return state;
    }
};

export default speakers;
