import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const IconedList = (props) => {

   // Prepare list items
   const listItems = props.items.map((item, index) => {

      // Destructure data
      const {...listData} = item;

      return <SingleListItem key={index} {...listData} />;
   });

   // Show list
   return (
      <section className="iconed-list module">
         <ul>{listItems}</ul>
      </section>
   );
};

// Change default <div> container to <a> if a link is requested
const ListContainer = (props) => {
   return (props.href) ? (
      <Link to={props.href}>{props.children}</Link>
   ) : (
      <div>{props.children}</div>
   );
}

// Single list item
const SingleListItem = (props) => {

   // Default type: comment
   const type = props.type ? props.type : 'comment';

   return (
      <li className={`list-type-${type}`}>
         <ListContainer href={props.href}>
            <span className="list-title" dangerouslySetInnerHTML={{__html: props.title}} />
            <span className="list-subtitle">{props.subtitle}</span>
         </ListContainer>
      </li>
   );
}

export default IconedList;