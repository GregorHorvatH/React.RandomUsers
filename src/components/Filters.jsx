import React, {Component} from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import getUsers from '../js/loadUsers';
import * as constants from '../constants/appConstants';
import './Filters.less';

// actions
const setUsersCount = (value) => {
    return {
        type: constants.SET_USERS_COUNT,
        value
    };
};
const setPageSize = (value) => {
    return {
        type: constants.SET_PAGE_SIZE,
        value
    };
};
const setGender = (value) => {
    return {
        type: constants.SET_GENDER,
        value
    };
};
const setNationality = (value) => {
    return {
        type: constants.SET_NATIONALITY,
        value
    };
};
const loadUsers = (users) => {
    return {
        type: constants.LOAD_USERS,
        users
    };
};

class Filters extends Component {
    render() {
        const {filters, dispatch} = this.props;
        const {totalItemsCount, results, gender, nat} = filters;

        return (
            <div className="row filters">
                <MuiThemeProvider>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <div className="navbar-header">
                                <button type="button"
                                        className="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <a className="navbar-brand" href="#">Random users</a>
                            </div>

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <TextField
                                            fullWidth={true}
                                            hintText="Total users"
                                            floatingLabelText="Total users"
                                            type="number"
                                            value={totalItemsCount}
                                            onChange={e => dispatch(
                                                setUsersCount(parseInt(e.target.value))
                                            )}
                                        /><br />
                                    </div>
                                    <div className="col-sm-2">
                                        <TextField
                                            fullWidth={true}
                                            hintText="Users in page"
                                            floatingLabelText="Users in page"
                                            type="number"
                                            value={results}
                                            onChange={e => dispatch(
                                                setPageSize(parseInt(e.target.value))
                                            )}
                                        /><br />
                                    </div>
                                    <div className="col-sm-2">
                                        <SelectField
                                            fullWidth={true}
                                            floatingLabelText="Gender"
                                            value={gender}
                                            onChange={(event, key, value) => dispatch(
                                                setGender(value)
                                            )}
                                        >
                                            <MenuItem value={'All'} primaryText="All"/>
                                            <MenuItem value={'male'} primaryText="Male"/>
                                            <MenuItem value={'female'} primaryText="Female"/>
                                        </SelectField>
                                    </div>
                                    <div className="col-sm-2">
                                        <SelectField
                                            fullWidth={true}
                                            floatingLabelText="Nationalities"
                                            value={nat}
                                            onChange={(event, key, value) => dispatch(
                                                setNationality(value)
                                            )}
                                        >
                                            <MenuItem value={'All'} primaryText="All"/>
                                            {
                                                constants.NATIONALITIES.map(nat =>
                                                    <MenuItem
                                                        key={nat}
                                                        value={nat}
                                                        primaryText={nat}/>
                                                )
                                            }
                                        </SelectField>
                                    </div>
                                    <div className="col-sm-2 text-center load-button">
                                        <RaisedButton
                                            label="Load"
                                            primary={true}
                                            onTouchTap={() =>
                                                getUsers(filters, (users) => dispatch(
                                                    loadUsers(users)
                                                ))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </MuiThemeProvider>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Filters);