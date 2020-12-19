import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='m-3 p-2'>
            <Link to='/' className='btn btn-info mb-2 w-100'>Home</Link> <br/>
            <Link to='/heat-map' className='btn btn-info mb-2 w-100'>Heat Map</Link> <br/>
        </div>
    )
}

export default Navigation;