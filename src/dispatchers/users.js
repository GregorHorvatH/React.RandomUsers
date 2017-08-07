import * as constants from '../constants/appConstants';

const users = (state = [], action) => {
    switch (action.type) {
        case constants.LOAD_USERS:
            return action.users.map(user => {
                return {
                    ...user,
                    activeValue: "userName"
                }
            });
        case constants.SET_ACTIVE_VALUE:
            return state.map((user, index) => {
                if (index !== action.index || user.activeValue === action.activeValue) {
                    return user;
                }
                return {
                    ...user,
                    activeValue: action.activeValue
                };
            });
        default:
            return state;
    }
};

export default users;