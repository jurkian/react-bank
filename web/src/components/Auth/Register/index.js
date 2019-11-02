import React from 'react';
import SmallFormBox from 'components/UI/FormBoxes/Small';
import RegisterForm from './Form';
import Loader from 'components/UI/Loader';

const RegisterBox = props => (
   <SmallFormBox>
      {props.error ? <p>{props.error.message}</p> : null}
      {props.loading ? (
         <Loader />
      ) : (
         <RegisterForm history={props.history} onRegisterSubmit={props.onRegisterSubmit} />
      )}
   </SmallFormBox>
);

export default RegisterBox;
