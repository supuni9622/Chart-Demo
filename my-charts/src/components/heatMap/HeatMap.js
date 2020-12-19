import React from 'react';
import HeatMap from "react-heatmap-grid";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

const daySlotMap = {
  "Monday": 0,
  "Tuesday": 1,
  "Wednesday": 2,
  "Thursday": 3,
  "Friday": 4,
  "Saturday": 5,
  "Sunday": 6

}
const yLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dataMap = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0)
  );

const data = [
    {
        "hourOfDay":"10",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Friday",
                "count":7
            }
        ]
    },
    {
        "hourOfDay":"11",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Monday",
                "count":6
            }
        ]
    },
    {
        "hourOfDay":"20",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Tuesday",
                "count":20
            }
        ]
    }
];

const SalesHeatMap = () => {

  data.forEach(({ hourOfDay, dayOfWeekValues = [] }) => {
    dayOfWeekValues.forEach(({
      dayOfWeek,
      count
    }) => {
      dataMap[daySlotMap[dayOfWeek]][hourOfDay] = count;
    });

  });


  return (
    <div style={{ fontSize: "12px", marginLeft: '-1.5rem' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        //xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        yLabelWidth={70}
        data={dataMap}
        squares
        height={38}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, dataMap, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "11px",
          color: "#444",
          border:"1px solid #efefef"
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>
  )
}

export default SalesHeatMap