import React from 'react';

import '../style.scss';
import './style.scss';

const MultiModuleButtons = props => {
   return <div className="multi-module-btns">{props.children}</div>;
};

export default MultiModuleButtons;
