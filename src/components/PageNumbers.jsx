import React, {Component} from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";

import * as constants from '../constants/appConstants';
import getUsers from '../js/loadUsers';

// actions
const setPageNumber = (pageNum) => {
    return {
        type: constants.SET_PAGE_NUMBER,
        pageNum
    };
};
const loadUsers = (users) => {
    return {
        type: constants.LOAD_USERS,
        users
    };
};

class PageNumbers extends Component {
    render() {
        const {filters, dispatch} = this.props;
        const {results, page, totalItemsCount} = filters;

        return (
            <div className="row page-numbers text-center">
                <Pagination
                    hideDisabled
                    activePage={page}
                    itemsCountPerPage={results}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={6}
                    onChange={pageNum => {
                        dispatch(setPageNumber(pageNum));
                        filters.page = pageNum;
                        getUsers(
                            filters,
                            (users) => dispatch(loadUsers(users))
                        );
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PageNumbers);