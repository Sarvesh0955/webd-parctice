import "./CompA.css";
import CompC from "./CompC";

function CompB() {
  return (
    <div className="box">
      <h1>Component B</h1>
      <CompC />
    </div>
  );
}

export default CompB;
