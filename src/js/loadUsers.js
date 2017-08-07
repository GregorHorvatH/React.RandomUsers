import * as constants from '../constants/appConstants';

const getUsers = (filters, callback) => {
    const {totalItemsCount, results, page, gender, nat} = filters;
    const usersLeft = results * page <= totalItemsCount ? results : results - results * page % totalItemsCount;

    let url = `https://randomuser.me/api/1.1/?seed=${constants.SEED}`;
    url = results ? url + `&results=${usersLeft}` : url;
    url = page ? url + `&page=${page}` : url;
    url = gender && gender !== 'All' ? url + `&gender=${gender}` : url;
    url = nat && nat !== 'All' ? url + `&nat=${nat}` : url;

    fetch(url)
        .then(response => response.json())
        .then(response => response.results)
        .then(users => callback(users))
        .catch(error => console.log(error));
};

export default getUsers;