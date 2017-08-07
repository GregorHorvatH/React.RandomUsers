import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// components
import Filters from "./Filters.jsx";
import UserList from "./UserList.jsx";
import PageNumbers from './PageNumbers.jsx';
import Footer from "./Footer.jsx";

injectTapEventPlugin();

const RandomUsersApp = () => {
    return (
        <div className="container random-users">
            <Filters />
            <UserList />
            <PageNumbers />
            <Footer />
        </div>
    );
};

export default RandomUsersApp;