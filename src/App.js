import ReactChart from "./charts/chartjs.js";
import Rechart from "./charts/rechart.js";
import Victory from "./charts/victory.js";

const App = () => {
  return (
    <div>
      <h1>ChartJs</h1>
      <ReactChart />
      <br />
      <h1>Rechart</h1>
      <Rechart />
      <br />
      <h1>Victory</h1>
      <Victory />
      <br />
    </div>
  );
};

export default App;
