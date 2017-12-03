import React, { Component } from 'react';
import axios from 'axios';

import IncomeStats from 'components/Widgets/IncomeStats/index';
import IconedList from 'components/Widgets/IconedList/index';
import SingleMessage from 'components/Widgets/SingleMessage/index';

class Panel extends Component {
   constructor() {
      super();

      this.state = {
         client: '',
         listData: [
            { type: '', href: '/panel/accounts', title: '<strong>John Doe</strong> added new image', subtitle: '34 minutes ago' },
            { type: 'image', href: '', title: '<strong>John Doe</strong> added new image', subtitle: '34 minutes ago' }
         ],
         messageData: {
            title: 'Make logo smaller, trust me!',
            sender: 'Johny Depp, johnyd@symu.co',
            recipient: 'jakub.jurkian@example.com',
            content: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>'
         }
      }
   }

   render() {
      return (
         <div>
            <h1>Welcome {this.state.client.first_name} {this.state.client.last_name}</h1>
            <div className="row">
               <div className="col-md-8">
                  <IncomeStats />
               </div>
               <div className="col-md-4">
                  <div className="row">
                     <div className="col-sm-6 col-md-12">
                        <IconedList items={this.state.listData} />
                     </div>
                     <div className="col-sm-6 col-md-12">
                        <SingleMessage {...this.state.messageData} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      axios.get('http://localhost:3001/clients/1')
      .then(res => res.data)
      .then(client => this.setState({ client }));
   }
}

export default Panel;