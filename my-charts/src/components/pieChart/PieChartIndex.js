import React from 'react';
import {Card} from 'react-bootstrap';
import PieChart1 from './PieChart1';

const pieChartData = {
    "gender":{
        "male":17,
        "female":5
    },
    "age":{
        "18-30":4,
        "31-40":1,
        "40-50":7,
        "50-60":20,
        "other":13
    },
    "tier":{
        "bronze":2,
        "gold":5,
        "silver":2
    }
};

const genderData = Object.keys(pieChartData.gender).map((key) => ({ 'name' : key, 'value' : pieChartData.gender[key]}));
const ageData = Object.keys(pieChartData.age).map((key) => ({ 'name' : key, 'value' : pieChartData.age[key]}));
const tierData = Object.keys(pieChartData.tier).map((key) => ({ 'name' : key, 'value' : pieChartData.tier[key]}));

const PieChartIndex = () => {
    return (
        <div>
            <h2>Custom pie charts</h2>
            <div className='mb-3 d-flex justify-content-between'>
                <Card className='p-3 mb-3 mr-2'>
                    <PieChart1 title='Tier Distribution' data={tierData} />
                </Card>
                <Card className='p-3 mb-3 mr-2'>
                    <PieChart1 title='Age Distribution' data={ageData} />
                </Card>
                <Card className='p-3 mb-3'>
                    <PieChart1 title='Gender Distribution' data={genderData} />
                </Card>
            </div>
        </div>
    )
}

export default PieChartIndex
