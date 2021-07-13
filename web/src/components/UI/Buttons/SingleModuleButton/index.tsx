import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../style.scss';
import './style.scss';

const SingleModuleButton = props => {
   const btnType = props.type ? props.type : 'button';

   return (
      <div className="single-module-btn">
         {props.href ? (
            <Link to={props.href} className="btn btn-primary">
               {props.text}
            </Link>
         ) : (
            <button className="btn btn-primary" type={btnType}>
               {props.text}
            </button>
         )}
      </div>
   );
};

SingleModuleButton.propTypes = {
   type: PropTypes.string,
   href: PropTypes.string,
   text: PropTypes.string
};

export default SingleModuleButton;
