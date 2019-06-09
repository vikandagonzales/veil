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
            {/* <Route path="/character-builder" component={CharacterBuilder} /> */}
            {/* {this.props.authorized ? <Route path="/invitation" component={Invitation} /> : null}
            <Route path="/" component={Main} /> */}
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