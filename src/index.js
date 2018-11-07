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
import Api from './pages/Api';
import About from './pages/About';
import ModeRelativeToNow from './pages/ModeRelativeToNow';
import ModeBetweenTwoDates from './pages/ModeBetweenTwoDates';
import ModeDiscoverMoments from './pages/ModeDiscoverMoments';

// Import store
import initStore from './store/store';

const store = initStore();

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter basename="/moments">
      <App>
        <Switch>
          <Route exact path="/moments/" component={ModeRelativeToNow}/>
          <Route exact path="/moments/api" component={Api}/>
          <Route exact path="/moments/about" component={About}/>
          <Route exact path="/moments/relative-to-now" component={ModeRelativeToNow}/>
          <Route exact path="/moments/between-two-dates" component={ModeBetweenTwoDates}/>
          <Route exact path="/moments/discover-moment" component={ModeDiscoverMoments}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
