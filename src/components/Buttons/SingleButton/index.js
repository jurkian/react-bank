import React from 'react';
import { Link } from 'react-router-dom';

const SingleButton = (props) => {
   const btnColor = (props.color) ? `btn-${props.color}` : 'btn-primary';
   const btnSize = (props.size) ? `btn-${props.size}` : '';
   const btnType = (props.type) ? props.type : 'button';

   return (
      (props.href) ? (
         <Link to={props.href} className={`btn ${btnColor} ${btnSize}`}>{props.text}</Link>
      ) : (
         <button className={`btn ${btnColor} ${btnSize}`} type={btnType}>{props.text}</button>
      )
   );
};

export default SingleButton;