import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import SimpleBarChart1 from './SimpleBarChart1';
import SimpleBarChart2 from './SimpleBarChart2';
import SimpleBarChart3 from './SimpleBarChart3';
import SimpleBarWithMissingDates from './SimpleBarChartWithMissingDates';
import DoubleBarChart1 from './DoubleBarChart1';
import DoubleBarChart2 from './DoubleBarChart2';
import DoubleBarChartWithFillingMissingDates from './DoubleBarChartWithFillingMissingDates';
import DoubleBarChart3 from './DoubleBarChart3';

const userSeries = [
    {
      date: "2020-12-12",
      newCount : 12,
      activeCount : 20
    },
    {
        date: "2020-12-13",
        newCount : 4,
        activeCount : 30
    },
    {
        date: "2020-12-16",
        newCount : 10,
        activeCount : 50
    },
    {
        date: "2020-12-20",
        newCount : 2,
        activeCount : 46
    }
  ];

  const memberSeriesData = userSeries.reduce((result, data) => {
      result.push({ key: moment(data["date"]).format("MMM-DD"), activeCount: data.activeCount, customersCreatedCount : data.newCount });
      return result;
    }, []);

const pointSeries =   {"collected": [
                        {
                            "collectedDate":"2020-12-12",
                            "totalCollectedPoints":50
                        },
                        {   "collectedDate":"2020-12-16",
                            "totalCollectedPoints": 34
                        },
                        {   "collectedDate":"2020-12-17",
                            "totalCollectedPoints": 18
                        }],
                        "redeemed":[
                            {
                                "redeemedDate":"2020-12-11",
                                "totalRedeemedPoints": 45
                            },
                            {   "redeemedDate":"2020-12-12",
                                "totalRedeemedPoints": 10
                            },
                            {   "redeemedDate":"2020-12-16",
                                "totalRedeemedPoints": 20
                            }
                        ]
                    };

    const pointRedeemed = pointSeries.redeemed.reduce((result, data) => {
        result.push({ date: moment(data["redeemedDate"]).format("MMM-DD"), pointCountRedeemed: data.totalRedeemedPoints });
        return result;
    }, []);

    const transformedCollected1 = pointSeries.collected.reduce((result, { collectedDate, totalCollectedPoints = 0 }) => {
        result[collectedDate] = { date: moment(collectedDate).format("MMM-DD"), collected: totalCollectedPoints, redeemed: 0 }
        return result;
    }, {});

    const transformed1 = pointSeries.redeemed.reduce((result, { redeemedDate, totalRedeemedPoints }) => {
        if (result[redeemedDate]) {
            result[redeemedDate].redeemed = totalRedeemedPoints;
        } else {
            result[redeemedDate] = {
                date: moment(redeemedDate).format("MMM-DD"),
                collected: 0,
                redeemed: totalRedeemedPoints
            };
        }

        return result;

    }, transformedCollected1);

    const transformedPointsArray1 = Object.values(transformed1);

    // Filling missing data 

    const getDatesSeries = (startDate, stopDate) => {
        let dateArray = [];
        let currentDate = moment(startDate);
        let endDate = moment(stopDate);
        while (currentDate <= endDate) {
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    };
    
    const fromDate = '2020-12-8';
    const toDate = '2020-12-20';
    
    const dateSeries = getDatesSeries(fromDate,toDate);

    const dateSeriesRedeemedChart = dateSeries.reduce((result, data) => {
        result[data] = { date: moment(data).format("MMM-DD"), pointCountRedeemed: 0 };
        return result;
    }, {});

    const pointRedeemedFill = pointSeries.redeemed.reduce((result,  { redeemedDate, totalRedeemedPoints=0 }) => {
        if (result[redeemedDate]) {
        result[redeemedDate] = { date: moment(redeemedDate).format("MMM-DD"), pointCountRedeemed: totalRedeemedPoints }
        }
        return result;
    }, dateSeriesRedeemedChart);

    const pointRedeemedArray = Object.values(pointRedeemedFill);

    

    // For missing dates in double bar chart

    const dateSeriesDoublebarChart = dateSeries.reduce((result, data) => {
        result[data] = { date: moment(data).format("MMM-DD"), collected: 0, redeemed: 0 };
        return result;
    }, {});

    const transformedCollected = pointSeries.collected.reduce((result, { collectedDate, totalCollectedPoints = 0 }) => {
        if (result[collectedDate]) {
        result[collectedDate] = { date: moment(collectedDate).format("MMM-DD"), collected: totalCollectedPoints, redeemed: 0 }
        }else {
            result[collectedDate] = {
                date: moment(collectedDate).format("MMM-DD"),
                collected: 0,
                redeemed: 0
            };
        }
        return result;
    }, dateSeriesDoublebarChart)

    const transformed = pointSeries.redeemed.reduce((result, { redeemedDate, totalRedeemedPoints }) => {
        if (result[redeemedDate]) {
            result[redeemedDate].redeemed = totalRedeemedPoints;
        } else {
            result[redeemedDate] = {
                date: moment(redeemedDate).format("MMM-DD"),
                collected: 0,
                redeemed: totalRedeemedPoints
            };
        }

        return result;

    }, transformedCollected);

    const transformedPointsArray = Object.values(transformed);

const Index = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart- Default Data Format</h6>
                <div className="p-2">
                   <SimpleBarChart1/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with complex data format 1</h6>
                <div className="p-2">
                    <SimpleBarChart2
                       data={memberSeriesData}
                        barOptions={{ xAxis: { key: "key", type: "category"}, bar: [{ key: 'customersCreatedCount'}] }}
                        color='#8884d8'
                    />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with complex data format 2</h6>
                <div className="p-2">
                    <SimpleBarChart3
                       data={pointRedeemed}
                        barOptions={{ xAxis: { key: "date", type: "category" }, bar: [{ key: 'pointCountRedeemed' }] }}
                        color='#64dbfe'
                    />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Bar Chart with filling missing dates</h6>
                <div className="p-2">
                   <SimpleBarWithMissingDates
                         data={pointRedeemedArray}
                         barOptions={{ xAxis: { key: "date", type: "category" }, bar: [{ key: 'pointCountRedeemed' }] }}
                         color='#64dbfe'
                   />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart- Default Data Format</h6>
                <div className="p-2">
                   <DoubleBarChart1/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with complex data format 1</h6>
                <div className="p-2">
                <DoubleBarChart2
                    data={memberSeriesData}
                    barOptions={{ xAxis: { key: "key", type: "category"}, bar: [{ key1: 'activeCount', key2:'customersCreatedCount'}] }}
                />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with complex data format 2</h6>
                <div className="p-2">
                    <DoubleBarChart3
                        data={transformedPointsArray1}
                        barOptions={{ yAxis: { type: "number", allowDecimals: false }, xAxis: { key: "date", type: "category" }, bar: [{ key1: 'collected', key2: 'redeemed' }] }}
                    />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with filling missing dates</h6>
                <div className="p-2">
                    <DoubleBarChartWithFillingMissingDates
                        data={transformedPointsArray}
                        barOptions={{ yAxis: { type: "number", allowDecimals: false }, xAxis: { key: "date", type: "category" }, bar: [{ key1: 'collected', key2: 'redeemed' }] }}
                    />
                </div>
            </Card>
        </div>
    )
}
export default Index