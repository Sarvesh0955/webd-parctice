import "./CompA.css";
import CompD from "./CompD";

function CompC() {
  return (
    <div className="box">
      <h1>Component C</h1>
      <CompD></CompD>
    </div>
  );
}

export default CompC;
