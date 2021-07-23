import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonTypes } from '@types';

type Props = {
   type?: ButtonTypes;
   href?: string;
   text: string;
};

const SingleMultiButton: React.FC<Props> = (props) => {
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

export default SingleMultiButton;
