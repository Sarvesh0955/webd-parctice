import './ColorBox.css';
import { useState } from 'react';

function ColorBox({backgroundColor = "white"}) {
    const [color, setColor] = useState(backgroundColor);
    const changeColor = () => {
        setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
  return (
    <div className="color-box" style={{backgroundColor:color}} onClick={changeColor} >
    </div>
  );
}

export default ColorBox;