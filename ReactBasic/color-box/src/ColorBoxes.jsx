import ColorBox from "./ColorBox";
import './ColorBoxes.css';

function ColorBoxes({colorList}) {
  return (
    <div className="color-boxes">
        {colorList.map((color) => (
            <ColorBox backgroundColor={color} />
        ))}
    </div>
  );
}

export default ColorBoxes;