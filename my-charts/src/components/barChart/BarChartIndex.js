import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';

const Index = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart- Default Data Format</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with complex data format 1</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with complex data format 2</h6>
                <div className="p-2">
                 
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with filling missing dates</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart- Default Data Format</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with complex data format 1</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with complex data format 2</h6>
                <div className="p-2">
                 
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with filling missing dates</h6>
                <div className="p-2">
                   
                </div>
            </Card>
        </div>
    )
}
export default Index