import Audit from "./Audit";
import History from "./History";
import { useState } from "react";
import "./Deployment.css";
const Deployment = () => {
  const [tabState, setTabState] = useState(1);
  return (
    <>
      <button
        className={tabState === 1 ? "deploy__btn-active" : "deploy__btn"}
        onClick={() => setTabState(1)}
      >
        History
      </button>
      <button
        className={tabState === 0 ? "deploy__btn-active" : "deploy__btn"}
        onClick={() => setTabState(0)}
      >
        Audit
      </button>
      <div className="deploy__container">
        {tabState === 1 ? <History /> : <Audit />}
      </div>
    </>
  );
};

export default Deployment;
