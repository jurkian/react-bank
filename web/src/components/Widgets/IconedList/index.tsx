import React from 'react';

import './style.scss';
import SingleListItem from './ListItem';

type Props = {
   items: {
      type: string;
      href: string;
      title: string;
      subtitle: string;
   }[];
};

const IconedList: React.FC<Props> = (props) => {
   // Prepare list items
   const listItems = props.items.map((item, index) => {
      const { ...listData } = item;

      return <SingleListItem key={index} {...listData} />;
   });

   // Show list
   return (
      <section className="module iconed-list">
         <ul>{listItems}</ul>
      </section>
   );
};

export default IconedList;
