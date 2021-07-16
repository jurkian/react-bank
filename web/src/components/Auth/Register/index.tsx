import React from 'react';
import SmallFormBox from 'components/UI/FormBoxes/Small';
import RegisterForm from './Form';
import Loader from 'components/UI/Loader';

import * as H from 'history';

type Props = {
   history: H.History;
   onRegisterSubmit: (email: string, password: string) => void;
   loading: boolean;
   error: string;
};

const RegisterBox: React.FC<Props> = (props) => (
   <SmallFormBox>
      {props.error}
      {props.loading ? (
         <Loader />
      ) : (
         <RegisterForm history={props.history} onRegisterSubmit={props.onRegisterSubmit} />
      )}
   </SmallFormBox>
);

export default RegisterBox;
