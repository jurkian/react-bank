import React from 'react';

import '../style.scss';
import './style.scss';

type Props = {};

const MultiModuleButtons: React.FC<Props> = (props) => {
   return <div className="multi-module-btns">{props.children}</div>;
};

export default MultiModuleButtons;
