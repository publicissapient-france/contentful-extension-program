export const initSpeakersInformation = object => ({
    type: 'INIT_SPEAKERS_INFORMATION',
    speakers: object

});
export const getCurrentSpeakers = state => ({
    type: 'GET_SPEAKERS',
    speakers: state.speakers
});
