import React from 'react';

const Layout: React.FC = (props) => {
   return <main className="app container">{props.children}</main>;
};

export default Layout;
