import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
// import Movies from './components/movies/movies.component';
import MovieForm from './components/movie-form/movieForm.component';
import Customers from './pages/customers/customers';
import Rentals from './pages/rental/rentals';
import NotFound from './components/not-found/notFound.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignOut from './components/sign-out/sign-out.component';
import SignUp from './pages/sign-up/sign-up.component';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Header user={user} />
      <main className='container'>
        <Switch>
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/logout' component={SignOut} />
          <ProtectedRoute path='/movies/:id' component={MovieForm} />
          {/* <Route
            path='/movies'
            render={props => <Movies {...props} user={user} />}
          /> */}
          <Route
            path='/movies'
            render={props => <HomePage {...props} user={user} />}
          />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
