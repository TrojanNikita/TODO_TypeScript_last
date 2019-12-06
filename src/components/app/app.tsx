import React from 'react';
//import { Switch, Route } from 'react-router-dom';

import { Route, Switch, Router } from "react-router-dom";

import { AppRoutes, AppRoute } from '../../routes/app-routes';
import history from '../../constants/history';

//todos 
//props: activeCount
import AppHeader from '../app-header/app-header';

//navigation: All, Active, Done
import {Navigation} from '../navigation/navigation';

//Add new Item
import AddItem from '../add-item/add-item';


import Tools from '../tools/tools';


import './app.scss';

const App : React.FC= () => {
  return (
    <div className="todo-app">
      <Router history={history}>
        <div>
            <AppHeader/>
            <Navigation/>
            <AddItem/>
            <Switch>
                  {
                    AppRoutes.map((route: AppRoute) => (
                      <Route  exact={route.exact} 
                              path={route.path} 
                              component={route.component}
                              key={route.path} />))
                  }
            </Switch>
            <Tools />
        </div>
      </Router>
    </div>
  );
}

export default React.memo(App);
