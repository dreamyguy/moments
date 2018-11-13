// Import dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
    <HashRouter basename="/">
      <App>
        <Switch>
          <Route exact path="/" component={ModeRelativeToNow}/>
          <Route exact path="/api" component={Api}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/relative-to-now" component={ModeRelativeToNow}/>
          <Route exact path="/between-two-dates" component={ModeBetweenTwoDates}/>
          <Route exact path="/discover-moment" component={ModeDiscoverMoments}/>
          <Route exact path="/1/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/" component={ModeRelativeToNow}/>
          <Route exact path="/2/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/date-b/:urlTargetYear/:urlTargetMonth/:urlTargetDay/:urlTargetHour/:urlTargetMinute/:urlTargetSecond" component={ModeBetweenTwoDates}/>
          <Route exact path="/3/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/" component={ModeDiscoverMoments}/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
