import React from 'react';
import { useAppSelector } from '@hooks';

import IncomeStats from 'components/Widgets/IncomeStats';
import IconedList from 'components/Widgets/IconedList';
import SingleMessage from 'components/Widgets/SingleMessage';

const data = {
   listData: [
      {
         type: '',
         href: '/panel/accounts',
         title: '<strong>John Doe</strong> added new image',
         subtitle: '34 minutes ago',
      },
      {
         type: 'image',
         href: '',
         title: '<strong>John Doe</strong> added new image',
         subtitle: '34 minutes ago',
      },
   ],
   messageData: {
      title: 'Make logo smaller, trust me!',
      sender: 'Johny Depp, johnyd@symu.co',
      recipient: 'jakub.jurkian@example.com',
      content:
         '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>',
   },
};

type Props = {};

const PanelHome: React.FC<Props> = (props) => {
   const user = useAppSelector((state) => state.profile.data);

   return (
      <div className="row panel-content">
         <div className="col-md-12">
            <h1>
               Welcome {user.firstName} {user.lastName}
            </h1>
         </div>

         <div className="col-md-8">
            <IncomeStats />
         </div>
         <div className="col-md-4">
            <div className="row">
               <div className="col-sm-6 col-md-12">
                  <IconedList items={data.listData} />
               </div>
               <div className="col-sm-6 col-md-12">
                  <SingleMessage {...data.messageData} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PanelHome;
