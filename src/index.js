// Import dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import utils
import * as serviceWorker from './serviceWorker';
// Import styles
import './styles/main.scss';
// Import components
import App from './components/App';
// Import pages
import Home from './pages/Home';
import Api from './pages/Api';
import About from './pages/About';

// Import store
import initStore from './store/store';

const store = initStore();

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/api" component={Api}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
