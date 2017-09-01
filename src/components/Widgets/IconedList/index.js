import React from 'react';

import './style.css';
import SingleListItem from './SingleListItem/index';

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

export default IconedList;