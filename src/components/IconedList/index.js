import React from 'react';

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

const SingleListItem = (props) => {

   // Default type: comment
   const type = props.type ? props.type : 'comment';

   return (
      <li className={`list-type-${type}`}>
         <div>
            <span className="list-title" dangerouslySetInnerHTML={{__html: props.title}} />
            <span className="list-subtitle">{props.subtitle}</span>
         </div>
      </li>
   );
}

export default IconedList;