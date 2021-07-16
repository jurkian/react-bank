import React, { useState } from 'react';
import { useAppDispatch } from '@hooks';
import * as H from 'history';

import * as actions from 'actions';
import RegisterBox from 'components/Auth/Register';

type Props = {
   history: H.History;
};

const Register: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const onRegisterSubmit = (email: string, password: string) => {
      setIsLoading(true);
      setError('');

      const loginData = {
         email,
         password,
      };

      dispatch(actions.register(loginData));
   };

   return (
      <div className="row">
         <div className="col">
            <RegisterBox
               history={props.history}
               onRegisterSubmit={onRegisterSubmit}
               loading={isLoading}
               error={error}
            />
         </div>
      </div>
   );
};

export default Register;
