import BarChartBox from '../../components/barChartBox/BarChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';
import ChartBoxComp from '../../components/chartBox/ChartBoxComp';
import PiechartBox from '../../components/pieChartBox/PiechartBox';
import TopBox from '../../components/topBox/TopBox';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  pieChartData,
} from '../../data';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBoxComp {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBoxComp {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PiechartBox data={pieChartData} />
      </div>
      <div className="box box5">
        <ChartBoxComp {...chartBoxConversion} />
      </div>
      <div className="box box6">
        {' '}
        <ChartBoxComp {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
