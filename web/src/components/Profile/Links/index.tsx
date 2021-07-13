import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const ProfileLinks = props => {
   const links = props.links.map((link, index) => {
      return <SingleLink key={index} href={link.href} text={link.text} icon={link.icon} />;
   });

   return <section className="profile-links">{links}</section>;
};

ProfileLinks.propTypes = {
   links: PropTypes.array
};

const SingleLink = props => {
   return (
      <Link to={props.href}>
         <i className={props.icon} />
         <span>{props.text}</span>
      </Link>
   );
};

SingleLink.propTypes = {
   href: PropTypes.string,
   icon: PropTypes.string,
   text: PropTypes.string
};

export default ProfileLinks;
