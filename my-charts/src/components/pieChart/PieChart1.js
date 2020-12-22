import React, {useState, useCallback} from 'react';
import { PieChart, Pie,  Sector, Cell} from 'recharts';
import './PieChart1.css';

const COLORS = ['#FF9081', '#FFDA83', '#A3A0FB', '#82CA9D', '#64DBFE'];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 8;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text className="selected-label" x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <icon x={cx - 10} y={cy - 20} width={20} height={20} className="pie-chart-icon" />
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text className="pie-labels" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text className="pie-labels" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const PieChartCard = ({data,title, icon}) => {

   const [activeIndex, setActiveIndex] = useState(0);

   const onPieEnter = useCallback((data, index) => {
            setActiveIndex(index);
    },[setActiveIndex]);

    return (
        <div>
            <h5>{title}</h5>
            <PieChart width={330} height={220}>
                <Pie
                    data={data}
                    // cx={80}
                    // cy={80}
                    innerRadius={45}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={onPieEnter}
                    legendType="square"
                    startAngle={90}
                    endAngle={450}
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart> 
        </div>
    )
}

export default PieChartCard