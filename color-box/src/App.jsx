import "./App.css";
import ColorBox from "./ColorBox";
import ColorBoxes from "./ColorBoxes";

function App() {
  return (
    <>
      <ColorBoxes
        colorList={[
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#00FFFF",
          "#FF00FF",
          "#C0C0C0",
          "#FFA500",
          "#800080",
        ]}
      />
    </>
  );
}

export default App;
