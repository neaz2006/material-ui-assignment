import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

const App = () => {
 
  return (
    
       <Router>
         <Switch>
           <Route path="/Home">
              <Home></Home>
           </Route>
           <Route  path="/post/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          <Route  path="*">
              <NoMatch/>
            </Route>
         </Switch>
       </Router>      
  );
};

export default App;