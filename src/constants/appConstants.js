//actions
export const LOAD_USERS = 'LOAD_USERS';
export const SET_SERVER_STATUS = 'SET_SERVER_STATUS';
export const SET_ACTIVE_VALUE = 'SET-ACTIVE-VALUE';
export const SET_USERS_COUNT = 'SET_USERS_COUNT';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const SET_GENDER = 'SET_GENDER';
export const SET_NATIONALITY = 'SET_NATIONALITY';

// other values
export const SEED = 'RandomUsers';
export const NATIONALITIES = [
    'AU', 'BR', 'CA', 'CH',
    'DE', 'DK', 'ES', 'FI',
    'FR', 'GB', 'IE', 'IR',
    'NL', 'NZ', 'TR', 'US'
];

export const DEFAULT_FILTERS = {
    totalItemsCount: 20, // Total users in test
    results: 3, // Results per page
    page: 1, // Page number
    gender: 'All', // Gender
    nat: 'All' // Nationality
};