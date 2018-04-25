import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleMultiButton = props => {
   const btnType = props.type ? props.type : 'button';

   return props.href ? (
      <Link to={props.href} className="btn btn-primary">
         {props.text}
      </Link>
   ) : (
      <button className="btn btn-primary" type={btnType}>
         {props.text}
      </button>
   );
};

SingleMultiButton.propTypes = {
   type: PropTypes.string,
   href: PropTypes.string,
   text: PropTypes.string
};

export default SingleMultiButton;
