import React from 'react';
//import { Switch, Route } from 'react-router-dom';

//Роутинг
import { Route, Switch, Router } from "react-router-dom";
import history from '../../constants/history';
import { AppRoutes } from '../../routes/app-routes';

//Типы
import {AppRoute} from './../../types';

//todos 
//props: activeCount
import AppHeader from '../app-header/app-header';

//navigation: All, Active, Done
import Navigation from '../navigation/navigation';

//Add new Item
import AddItem from '../add-item/add-item';




import './app.scss';

const App : React.FC= () => {
  return (
    <div className="app-form">
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
        </div>
      </Router>
    </div>
  );
}

export default React.memo(App);
