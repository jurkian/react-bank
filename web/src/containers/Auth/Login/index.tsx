import React, { useState } from 'react';
import { useAppDispatch } from '@hooks';
import * as H from 'history';

import * as actions from 'actions';
import LoginBox from 'components/Auth/Login';

type Props = {
   history: H.History;
};

const Login: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const onLoginSubmit = (identifier: string, password: string) => {
      setIsLoading(true);
      setError('');

      const loginData = {
         identifier,
         password,
      };

      dispatch(actions.login(loginData));
   };

   return (
      <div className="row">
         <div className="col">
            <LoginBox
               history={props.history}
               onLoginSubmit={onLoginSubmit}
               loading={isLoading}
               error={error}
            />
         </div>
      </div>
   );
};

export default Login;
