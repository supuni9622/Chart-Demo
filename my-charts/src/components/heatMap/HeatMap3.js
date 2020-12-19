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
  .fill('')
  .map(() =>
    new Array(xLabels.length).fill('')
  );

const data = [
    {
        "hourOfDay":"10",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Friday",
                "count":12
            }
        ]
    },
    {
        "hourOfDay":"1",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Monday",
                "count":30
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
    },
    {
        "hourOfDay":"2",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Saturday",
                "count":3
            }
        ]
    },
    {
        "hourOfDay":"10",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Monday",
                "count":8
            }
        ]
    },
    {
        "hourOfDay":"14",
        "dayOfWeekValues":[
            {
                "dayOfWeek":"Wednesday",
                "count":16
            }
        ]
    }
];

const HeatMap3 = () => {

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
          background: `rgb(81, 255, 0, ${1 - (max - value) / (max - min)})`,
          fontSize: "11px",
          color: "#444",
          border:"1px solid #efefef"
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>
  )
}

export default HeatMap3