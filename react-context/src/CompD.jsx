import "./CompA.css";
import { useContext } from "react";
import { UserContext } from "./CompA";

function CompD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <p>Bye {user}</p>
    </div>
  );
}

export default CompD;
