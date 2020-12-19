import React from 'react';
import {Card} from 'react-bootstrap';
import HeatMap from './HeatMap';
import HeatMap2 from './HeatMap2';
import HeatMap3 from './HeatMap3';
import HeatMap4 from './HeatMap4';


const Index = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Heat Maps</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Deafult Map with randomly generated values</h6>
                <div className="p-2">
                    <HeatMap2/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Map with mock data with filling empty cells by 0</h6>
                <div className="p-2">
                    <HeatMap/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Map with mock data without filling empty cells</h6>
                <div className="p-2">
                    <HeatMap3/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Map with mock data without values</h6>
                <div className="p-2">
                    <HeatMap4/>
                </div>
            </Card>
        </div>
    )
}
export default Index
