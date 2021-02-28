import './App.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { initializeApp } from './Store/appReducer';
import { Route, withRouter } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
const News = React.lazy(() => import('./components/News/News'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settin/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/login' render={() => { return <Suspense fallback={<Preloader />}><Login /></Suspense> }} />
          <Route path='/news' render={() => { return <Suspense fallback={<Preloader />}> <News /> </Suspense> }} />
          <Route path='/music' render={() => { return <Suspense fallback={<Preloader />}> <Music /> </Suspense> }} />
          <Route path='/settings' render={() => { return <Suspense fallback={<Preloader />}> <Settings /> </Suspense> }} />
          <Route path='/users' render={() => { return <Suspense fallback={<Preloader />}> <UsersContainer /> </Suspense> }} />
          <Route path='/messages' render={() => { return <Suspense fallback={<Preloader />}> <DialogsContainer /> </Suspense> }} />
          <Route path='/profile/:id?' render={() => { return <Suspense fallback={<Preloader />}><ProfileContainer /> </Suspense> }} />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);
