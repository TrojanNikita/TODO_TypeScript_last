
import React,{useState, useCallback} from 'react';
import { Link, withRouter,RouteComponentProps } from "react-router-dom";
import { AppRoutes } from '../../routes/app-routes';

import {AppRoute} from './../../types'

import './navigation.scss';




const NavigationConnect:React.FC<RouteComponentProps>=({history}:RouteComponentProps)=>{


    const [activeLink, setActiveLink]=useState(AppRoutes.find(
        (route)=>(route.path===history.location.pathname)) );

    const handleClick=useCallback(
        (route:AppRoute) =>()=> {
            setActiveLink(route)
        },
        [],
    )
    const linkClass='link btn ';

    return(
        <ul className='nav-bar row'>
            {AppRoutes.map((route: AppRoute) => (
            <li className="nav-li col" key={route.id} onClick={handleClick(route)}>
                <Link   to={route.path} 
                        className={
                            (route === activeLink ? 
                                linkClass+"active" : linkClass)
                        }>
                        {route.description}
                </Link>
            </li>
            ))}
        </ul>
    );
  };


  
  export const Navigation= withRouter(NavigationConnect);