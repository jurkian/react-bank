import React, { useEffect } from 'react';

import * as H from 'history';

type Props = {
   history: H.History;
};

const Logout: React.FC<Props> = (props) => {
   useEffect(() => {
      localStorage.removeItem('token');
      props.history.push('/');
   }, []);

   return null;
};

export default Logout;
