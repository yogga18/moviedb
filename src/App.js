import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailMovies from './pages/DetailMovies';
import ScrollableTabsButtonAuto from './pages/One';


function App() {
  return (
    <Router>
      <Fragment>

        <Switch>
          <Route path="/" exact component={ScrollableTabsButtonAuto}/>
          <Route path="/DetailMovies/:id" component={DetailMovies} />
        </Switch>

      </Fragment>
    </Router>
  )
}

export default App;