
import React,{useState, useCallback} from 'react';
import { Link, withRouter } from "react-router-dom";
import { AppRoutes, AppRoute } from '../../routes/app-routes';

import './navigation.scss';


export interface IProps {
    history: any;
}


const NavigationConnect: React.FC<IProps>=props=>{

    //По-умолчанию All
    

    const [activeLink, setActiveLink]=useState(localStorage.getItem('route'));

    // const handleClick=(id:string='1') =>()=> {
    //     setActiveLink(id);
    //     localStorage.removeItem("route");
    //     localStorage.setItem('route', id)
    // }


    const handleClick=useCallback(
        (id:string) =>()=> {
            setActiveLink(id)
            localStorage.removeItem("route");
            localStorage.setItem('route', id)
        },
        [],
    )
    const linkClass='link btn ';

    return(
        <ul className='nav-bar row'>
            {AppRoutes.map((route: AppRoute) => (
            <li className="nav-li col" key={route.id} onClick={handleClick(route.id)}>
                <Link   to={route.path} 
                        className={
                            (route.id === activeLink ? 
                                linkClass+"active" : linkClass)
                        }>
                        {route.description}
                </Link>
            </li>
            ))}
        </ul>
    );
  };


  
  export const Navigation= withRouter(NavigationConnect as any);