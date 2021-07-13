import React from 'react';
import SmallFormBox from 'components/UI/FormBoxes/Small';
import LoginForm from './Form';
import Loader from 'components/UI/Loader';

const LoginBox = props => (
   <SmallFormBox>
      {props.error ? <p>{props.error.message}</p> : null}
      {props.loading ? (
         <Loader />
      ) : (
         <LoginForm history={props.history} onLoginSubmit={props.onLoginSubmit} />
      )}
   </SmallFormBox>
);

export default LoginBox;
