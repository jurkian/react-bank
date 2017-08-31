import React, { Component } from 'react';

import IncomeStats from '../Widgets/IncomeStats/index';
import IconedList from '../IconedList/index';

class Panel extends Component {
   constructor() {
      super();

      this.state = {
         client: '',
         listData: [
            { type: '', href: '/panel/accounts', title: '<strong>John Doe</strong> added new image', subtitle: '34 minutes ago' },
            { type: 'image', href: '', title: '<strong>John Doe</strong> added new image', subtitle: '34 minutes ago' }
         ]
      }
   }

   render() {
      return (
         <div className="container">
            <h1>Welcome {this.state.client.first_name} {this.state.client.last_name}</h1>
            <div className="row">
               <div className="col-xs-8">
                  <IncomeStats />
               </div>
               <div className="col-xs-4">
                  <IconedList items={this.state.listData} />
               </div>
            </div>
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      fetch('http://localhost:3001/clients/1')
      .then(res => res.json())
      .then(client => this.setState({ client }));
   }
}

export default Panel;