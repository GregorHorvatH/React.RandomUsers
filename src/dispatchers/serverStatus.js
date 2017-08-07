import * as constants from '../constants/appConstants';

const serverStatus = (state = "unknown", action) => {
    switch (action.type) {
        case constants.SET_SERVER_STATUS:
            return action.status;
        default:
            return state;
    }
};

export default serverStatus;