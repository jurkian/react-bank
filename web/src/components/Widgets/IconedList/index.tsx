import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import SingleListItem from './ListItem';

const IconedList = props => {
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

IconedList.propTypes = {
   items: PropTypes.array
};

export default IconedList;
