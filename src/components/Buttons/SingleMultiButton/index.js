import React from 'react';
import { Link } from 'react-router-dom';

const SingleMultiButton = (props) => {
   const btnType = (props.type) ? `type="${props.type}"` : 'button';

   return (
      (props.href) ? (
         <Link to={props.href} className="btn btn-primary">{props.text}</Link>
      ) : (
         <button className="btn btn-primary" type={btnType}>{props.text}</button>
      )
   );
};

export default SingleMultiButton;