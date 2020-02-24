import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckSquare, faCoffee, faSignInAlt, faUserPlus);

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
//Pages
const HomePage = React.lazy(() => import('./views/Homepage'));
const ContactUs = React.lazy(() => import('./views/ContactUs'));


class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/contactus" name="Contact Us" render={props => <ContactUs {...props}/>} />
              <Route path="/" name="Home" render={props => <HomePage {...props}/>} />            
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;


ReactDOM.render(
  <App />, document.getElementById("container")
);