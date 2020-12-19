import React from 'react';
import HeatMap from "react-heatmap-grid";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

const HeatMap4 = () => {

  return (
    <div style={{ fontSize: "12px", marginLeft: '-1.5rem' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        yLabelWidth={70}
        data={data}
        squares={false}
        height={38}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(214, 103, 245, ${1 - (max - value) / (max - min)})`,
          fontSize: "11px",
          color: "#444",
          border:"1px solid #efefef"
        })}
        title={(value, unit) => `${value}`}
        //cellRender={value => value && <div>{value}</div>}
      />
    </div>
  )
}

export default HeatMap4