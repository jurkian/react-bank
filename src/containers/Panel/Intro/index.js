import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'components/UI/Loader';

import IncomeStats from 'components/Widgets/IncomeStats';
import IconedList from 'components/Widgets/IconedList';
import SingleMessage from 'components/Widgets/SingleMessage';

class PanelHome extends Component {
   state = {
      client: '',
      listData: [
         {
            type: '',
            href: '/panel/accounts',
            title: '<strong>John Doe</strong> added new image',
            subtitle: '34 minutes ago'
         },
         {
            type: 'image',
            href: '',
            title: '<strong>John Doe</strong> added new image',
            subtitle: '34 minutes ago'
         }
      ],
      messageData: {
         title: 'Make logo smaller, trust me!',
         sender: 'Johny Depp, johnyd@symu.co',
         recipient: 'jakub.jurkian@example.com',
         content:
            '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>'
      },
      loaded: false
   };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <div className="row panel-content">
               <div className="col-md-12">
                  <h1>
                     Welcome {this.state.client.first_name} {this.state.client.last_name}
                  </h1>
               </div>

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
         );
      }
   }

   componentDidMount() {
      // Get logged in client info
      axios
         .get('/users_data/1')
         .then(res => res.data)
         .then(client => this.setState({ client, loaded: true }))
         .catch(() => this.setState({ loaded: 0 }));
   }
}

export default PanelHome;
