import React from 'react';
import './app-header.scss';


interface AppProps{
    activeCount?: number;
}


const AppHeader: React.FC<AppProps>=({activeCount=4})=>{
  return(
    <div className="app-header d-flex">
        <h1 className="app-header-title d-flex">
          todos
        </h1>
        <h2 className="app-header-subtitle d-flex">
          {activeCount} more to do
        </h2>
    </div>
  );
};

export default AppHeader;