
import React,{useState, useCallback, useEffect} from 'react';
import { Link,  useLocation } from "react-router-dom";
import { AuthRoutes } from '../routes/auth-routes';

import {AuthRoute} from './../types'




import { connect } from 'react-redux';




interface INavigation {
}

//useLocation вместо withRouter и тд

const AuthButton:React.FC<INavigation>=()=>{

    let location = useLocation()

    const [activeLink, setActiveLink]=useState<AuthRoute>(AuthRoutes.find(
        (route)=>(route.path===location.pathname))||AuthRoutes[1]);

    useEffect(
        () => {
            
        },
        [location,activeLink]
        )

    const handleClick=useCallback(
        (route:AuthRoute) =>()=> {
            setActiveLink(route);
        },
        [],
    )
    const linkClass='link btn ';

    return(
        <ul className='nav-bar row'>
            {AuthRoutes.map((route: AuthRoute) => (
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



//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
export default AuthButton;
  
  