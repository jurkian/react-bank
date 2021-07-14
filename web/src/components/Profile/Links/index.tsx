import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

type SingleLinkProps = {
   href: string;
   icon: string;
   text: string;
};

type ProfileLinksProps = {
   links: SingleLinkProps[];
};

const ProfileLinks: React.FC<ProfileLinksProps> = (props) => {
   const links = props.links.map((link, index) => {
      return <SingleLink key={index} href={link.href} text={link.text} icon={link.icon} />;
   });

   return <section className="profile-links">{links}</section>;
};

const SingleLink: React.FC<SingleLinkProps> = (props) => {
   return (
      <Link to={props.href}>
         <i className={props.icon} />
         <span>{props.text}</span>
      </Link>
   );
};

export default ProfileLinks;
