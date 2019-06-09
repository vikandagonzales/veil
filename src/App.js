// REACT
import React from 'react';

// ROUTER
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {getUser} from './state/actions/auth';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// CONTAINERS
import Home from './containers/Home';

// ==========

class App extends React.Component {
  componentDidMount() {
    // this.props.getUser();
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            {/* <Route path="/blog" component={Blog} /> */}
            {/* {this.props.authorized ? <Route path="/profile" component={Profile} /> : null} */}
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

const mapStateToProps = state => ({
  // user: state.auth.user,
  // authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);