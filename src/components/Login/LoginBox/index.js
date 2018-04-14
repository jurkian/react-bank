import React from 'react';
import SmallFormBox from 'components/UI/FormBoxes/Small';
import LoginForm from './Form';

const LoginBox = (props) => (
   <SmallFormBox>
      <LoginForm history={props.history} />
   </SmallFormBox>
);

export default LoginBox;