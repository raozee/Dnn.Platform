import ActionTypes from "../constants/actionTypes/visiblePageSettingsActionTypes";

const visiblePageSettingsInitialState = {};
const visiblePageSettings = (state = visiblePageSettingsInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_CUSTOM_PAGE_SETTINGS:
            return state;
        case ActionTypes.HIDE_CUSTOM_PAGE_SETTINGS:
            return state;
        default:
            return state;
    }
};

export default visiblePageSettings;