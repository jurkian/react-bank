import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';

// Store
import { store, history } from 'store';
import { ConnectedRouter } from 'connected-react-router';

// Render
ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <ConnectedRouter history={history}>
            <App />
         </ConnectedRouter>
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
