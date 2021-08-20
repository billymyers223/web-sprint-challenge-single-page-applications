import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home'
import OrderPizza from "./OrderPizza";
const App = () => {
  return (
    <>
 
    <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route exact path = '/pizza'>
          <OrderPizza/>
        </Route>

    </Switch>
    </>
  );
};
export default App;
