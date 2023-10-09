import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import './chartbox.scss';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBoxComp = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img
            src={props.icon}
            alt=""
          />
          <span>{props.title}</span>
        </div>
        <h1>{props.title}</h1>
        <Link
          to="/"
          style={{ color: props.color }}
        >
          View all{' '}
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer
            width="99%"
            height="100%"
          >
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: -2, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                activeDot={{ r: 3 }}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? 'red' : 'limegreen' }}
          >
            {props.percentage}
          </span>
          <span className="duration">March</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBoxComp;
