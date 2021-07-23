import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonTypes } from '@types';

type Props = {
   color?: string;
   size: string;
   type?: ButtonTypes;
   href: string;
   text: string;
};

const SingleButton: React.FC<Props> = (props) => {
   const btnColor = props.color ? `btn-${props.color}` : 'btn-primary';
   const btnSize = props.size ? `btn-${props.size}` : '';
   const btnType = props.type ? props.type : 'button';

   return props.href ? (
      <Link to={props.href} className={`btn ${btnColor} ${btnSize}`}>
         {props.text}
      </Link>
   ) : (
      <button className={`btn ${btnColor} ${btnSize}`} type={btnType}>
         {props.text}
      </button>
   );
};

export default SingleButton;
