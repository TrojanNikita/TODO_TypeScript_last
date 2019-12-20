import React from 'react';
import './spinner.scss';

const Spinner:React.FC = () => {
  return (
        <div className='spinner-border' role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;