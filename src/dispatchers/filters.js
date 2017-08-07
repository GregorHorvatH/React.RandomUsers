import * as constants from '../constants/appConstants';

const filters = (state = constants.DEFAULT_FILTERS, action) => {
    switch (action.type) {
        case constants.SET_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.value,
                page: 1
            };
        case constants.SET_PAGE_SIZE:
            return {
                ...state,
                results: action.value,
                page: 1
            };
        case constants.SET_PAGE_NUMBER:
            return {
                ...state,
                page: action.pageNum
            };
        case constants.SET_GENDER:
            return {
                ...state,
                gender: action.value
            };
        case constants.SET_NATIONALITY:
            return {
                ...state,
                nat: action.value
            };
        default:
            return state;
    }
};

export default filters;