import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailMovies from './pages/DetailMovies';
import MainPage from './pages/index.jsx';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/DetailMovies/:id' component={DetailMovies} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
