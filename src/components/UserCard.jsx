import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import UserValueFilter from './UserValueFilter.jsx';

import './UserCard.less';
import jSonCmp from '../js/jSonCmp';

const capitalizeFirstLetter = (str) => {
    return str.length ? str[0].toUpperCase() + str.slice(1) : str;
};

class UserCard extends Component {

    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver(evt) {
        const activeValue = evt.target.dataset.value;
        this.props.handleMouseOver(activeValue);
    }

    shouldComponentUpdate(nextProps) {
        return !jSonCmp(this.props.user, nextProps.user);
    }

    render() {
        const {user} = this.props;
        const {medium} = user.picture;
        const {first, last} = user.name;
        const {activeValue, phone, email, dob} = user;
        const {street} = user.location;
        const {password} = user.login;
        const fullName = `${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`;

        const filters = [{
            filterName: 'userName',
            userTitle: 'My name is',
            userValue: fullName
        }, {
            filterName: 'userEmail',
            userTitle: 'My email address is',
            userValue: email
        }, {
            filterName: 'userBirthday',
            userTitle: 'My birthday is',
            userValue: dob.slice(1, 10)
        }, {
            filterName: 'userAddress',
            userTitle: 'My address is',
            userValue: street
        }, {
            filterName: 'userPhone',
            userTitle: 'My phone number is',
            userValue: phone
        }, {
            filterName: 'userPassword',
            userTitle: 'My password is',
            userValue: password
        }];

        const currentFilter = filters.find(filter =>
            filter.filterName === user.activeValue
        );

        const style = {
            width: '100%',
            textAlign: 'center'
        };

        return (
            <div className="col-sm-6 col-md-4 user-card">
                <MuiThemeProvider>
                    <Paper style={style} zDepth={2}>
                        <div className="user-details">
                            <span className="horizontal-line" />
                            <div className="user-photo-wrapper">
                                <img src={medium} className="user-photo" />
                            </div>
                            <p className="user-title text-left">{currentFilter.userTitle}</p>
                            <p className="user-value">{currentFilter.userValue}</p>
                        </div>
                        <div className="values-list">
                            {
                                filters.map(filter =>
                                    <UserValueFilter
                                        key={filter.filterName}
                                        activeValue={activeValue}
                                        handleMouseOver={this.handleMouseOver}
                                        filter={filter.filterName}
                                    />
                                )
                            }
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default UserCard;