import React, {Component} from 'react';
import UserCard from './UserCard.jsx';

import getUsers from '../js/loadUsers';
import * as constants from '../constants/appConstants';

// actions
const setServerStatus = (status) => {
    return {
        type: constants.SET_SERVER_STATUS,
        status
    };
};
const loadUsers = (users) => {
    return {
        type: constants.LOAD_USERS,
        users
    };
};
const setActiveValue = (activeValue, index) => {
    return {
        type: constants.SET_ACTIVE_VALUE,
        activeValue,
        index
    };
};

class UserList extends Component {

    componentDidMount() {
        const {store} = this.context;
        const {filters} = store.getState();

        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
        new Promise((resolve, reject) => {
            // check if the server is available
            let img = document.createElement("img");
            img.onload = () => resolve("online");
            img.onerror = () => reject("offline");
            img.src = "https://randomuser.me/api/portraits/lego/0.jpg";
        })
            .then((result) => {
                const {store} = this.context;
                store.dispatch(setServerStatus(result));
                console.log(`%c server status: ${result}`, 'color: #4ef442');
                getUsers(
                    filters,
                    (users) => store.dispatch(loadUsers(users))
                );
            })
            .catch((error) => {
                const {store} = this.context;
                store.dispatch(setServerStatus(error));
                console.error(`server status: ${error}`);
                console.log(error);
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.context;
        const {users, serverStatus} = store.getState();

        if (serverStatus === 'offline') {
            return (
                <div className="server-offline">
                    <h2>Server is unavailable &#9785;</h2>
                    <img src="../../img/offline.jpg"/>
                </div>
            );
        }

        return (
            <div className="row user-list">
                {
                    users.map((user, index) =>
                        <UserCard
                            key={index}
                            user={user}
                            handleMouseOver={(activeValue) => store.dispatch(
                                setActiveValue(activeValue, index)
                            )}
                        />)
                }
            </div>
        );
    }
}
UserList.contextTypes = {
    store: React.PropTypes.object
};

export default UserList;
