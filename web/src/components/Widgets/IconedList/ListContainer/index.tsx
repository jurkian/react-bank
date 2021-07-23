import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
   href: string;
};

// Change default <div> container to <a> if a link is requested
const ListContainer: React.FC<Props> = (props) => {
   return props.href ? <Link to={props.href}>{props.children}</Link> : <div>{props.children}</div>;
};

export default ListContainer;
