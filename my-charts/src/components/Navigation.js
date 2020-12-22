import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='m-3 p-2'>
            <Link to='/' className='btn btn-dark mb-2 w-100'>Home</Link> <br/>
            <Link to='/heat-map' className='btn btn-dark mb-2 w-100'>Heat Map</Link> <br/>
            <Link to='/line-chart' className='btn btn-dark mb-2 w-100'>Line Chart</Link> <br/>
            <Link to='/bar-chart' className='btn btn-dark mb-2 w-100'>Bar Chart</Link> <br/>
            <Link to='/pie-chart' className='btn btn-dark mb-2 w-100'>Pie Chart</Link> <br/>
        </div>
    )
}

export default Navigation;