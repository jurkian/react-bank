import React from 'react';
import { Link } from 'react-router-dom';

import '../style.css';
import './style.css';

const SingleModuleButton = (props) => {
   const btnType = (props.type) ? props.type : 'button';

   return (
      <div className="single-module-btn">
         {(props.href) ? (
            <Link to={props.href} className="btn btn-primary">{props.text}</Link>
         ) : (
            <button className="btn btn-primary" type={btnType}>{props.text}</button>
         )}
      </div>
   );
};

export default SingleModuleButton;