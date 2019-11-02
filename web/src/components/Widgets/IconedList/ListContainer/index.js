import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Change default <div> container to <a> if a link is requested
const ListContainer = props => {
   return props.href ? <Link to={props.href}>{props.children}</Link> : <div>{props.children}</div>;
};

ListContainer.propTypes = {
   href: PropTypes.string
};

export default ListContainer;
