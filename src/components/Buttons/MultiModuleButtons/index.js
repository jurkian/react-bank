import React from 'react';

import '../style.css';
import './style.css';

const MultiModuleButtons = (props) => {
   return (
      <div className="multi-module-btns">
         {props.children}
      </div>
   );
};

export default MultiModuleButtons;