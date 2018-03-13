import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from 'actions/profile';
import Form from './Form';

import loginIcon from 'components/Login/login-icon.png';

class ProfileChangeDetails extends Component {
   componentWillMount() {
      this.props.fetchProfile();  
   }
   
   render() {
      return (
         <div className="row panel-content">
            <div className="col-xs-12">
               <section className="login module">
                  <section className="login-icon">
                     <div className="icon-container">
                        <img src={loginIcon} className="img-responsive" alt="Login icon" />
                     </div>
                  </section>

                  <Form />
               </section>
            </div>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchProfile: () => dispatch(fetchProfile())
   }
}

export default connect(
   null,
   mapDispatchToProps
)(ProfileChangeDetails); 