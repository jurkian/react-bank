import React, { Component } from 'react';
import LoginBox from 'components/Login/LoginBox';

class Login extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <LoginBox history={this.props.history} />
            </div>
         </div>
      );
   }

   componentDidMount() {
      // If user logged in, redirect to panel
      if (localStorage.getItem('user_token')) {
         this.props.history.push('/panel');
      }
   }
}

export default Login;
