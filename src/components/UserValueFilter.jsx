import React from 'react';

const UserValueFilter = ({activeValue, filter, handleMouseOver}) => {
    return(
        <div className={`value ${filter}` + (activeValue === filter ? ' active' : '')}
             data-value={filter}
             onMouseOver={handleMouseOver} />
    );
};

export default UserValueFilter;