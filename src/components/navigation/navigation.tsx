
import React,{useState, useCallback, useEffect} from 'react';
import { Link,  useLocation } from "react-router-dom";
import { AppRoutes } from '../../routes/app-routes';

import {AppRoute} from './../../types'



import {setStatus} from './../../actions/actionStatusMode'



import {ActionTypeStatusMode} from './../../actions/actionStatusMode' 
import { connect } from 'react-redux';

import './navigation.scss';



interface INavigation {
    setStatus:(status: string) => ActionTypeStatusMode;
}

//useLocation вместо withRouter и тд

const NavigationConnect:React.FC<INavigation>=({setStatus})=>{

    let location = useLocation()

    const [activeLink, setActiveLink]=useState<AppRoute>(AppRoutes.find(
        (route)=>(route.path===location.pathname))||AppRoutes[1]);

    useEffect(
        () => {
            setStatus(activeLink.description)
        },
        [location,setStatus,activeLink]
        )

    const handleClick=useCallback(
        (route:AppRoute) =>()=> {
            setActiveLink(route);
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


  const mapDispatchToProps={
    setStatus
};

//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
export default connect(null, mapDispatchToProps)(NavigationConnect);
  
  