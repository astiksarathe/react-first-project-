import "./App.css";
//import Deployment from "./deployment/Deployment";
import "react-table-6/react-table.css";
import TimeTracking from "./time-tracking/TimeTracking";
import Overview from "./overview/Overview";
const App = () => {
  return (
    <div className="App">
      //<Deployment />
//     <TimeTracking />
     <Overview />
    </div>
  );
};

export default App;
