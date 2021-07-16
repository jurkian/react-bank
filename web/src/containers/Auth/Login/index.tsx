import React, { useState } from 'react';
import * as actions from 'actions';
import { useAppDispatch } from '@hooks';

import * as H from 'history';

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

      // Dispatch auth action
      // There will be automatic redirect to panel, in HOC
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
