import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import WebFontLoader from 'webfontloader';

import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import store, {history} from './store';

import './components/style/styles.css';
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
<Provider store={store}>
 <ConnectedRouter history={history}>
    <App />
 </ConnectedRouter>
</Provider>, document.getElementById('root'));
//registerServiceWorker();
