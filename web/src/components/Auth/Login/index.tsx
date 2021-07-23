import React from 'react';
import SmallFormBox from 'components/UI/FormBoxes/Small';
import LoginForm from './Form';
import Loader from 'components/UI/Loader';

import * as H from 'history';

type Props = {
   history: H.History;
   onLoginSubmit: (identifier: string, password: string) => void;
   loading: boolean;
   error: string;
};

const LoginBox: React.FC<Props> = (props) => (
   <SmallFormBox>
      {props.error}
      {props.loading ? (
         <Loader />
      ) : (
         <LoginForm history={props.history} onLoginSubmit={props.onLoginSubmit} />
      )}
   </SmallFormBox>
);

export default LoginBox;
