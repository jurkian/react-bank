import React from 'react';
import { Link } from 'react-router-dom';

import '../style.scss';
import './style.scss';

import { ButtonTypes } from '@types';

type Props = {
   type?: ButtonTypes;
   href?: string;
   text: string;
};

const SingleModuleButton: React.FC<Props> = (props) => {
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

export default SingleModuleButton;
