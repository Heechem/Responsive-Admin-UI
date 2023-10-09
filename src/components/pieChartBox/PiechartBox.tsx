import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './PiechartBox.scss';
type Props = {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
};

const PiechartBox = (props: Props) => {
  return (
    <div className="pieChartBox">
      <h1>Sales Pie Chart</h1>
      <div className="chart">
        <ResponsiveContainer
          width={'99%'}
          height={300}
        >
          <PieChart>
            <Tooltip contentStyle={{ borderRadius: '5px' }} />
            <Pie
              data={props.data}
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {props.data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="optionsContainer">
        {props.data.map((item) => (
          <div
            className="option"
            key={item.name}
          >
            <div className="title">
              <div
                style={{ backgroundColor: item.color }}
                className="dot"
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PiechartBox;
