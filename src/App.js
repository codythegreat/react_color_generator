import './App.css';
import Header from './components/Header'
import ColorContainer from './components/ColorContainer';
import { useState, useEffect } from 'react';

function App() {
  const colors = require('nice-color-palettes/1000');
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random()*992));

  useEffect((colorIndex) => {
    function handleKeyDown(event) {
      if (event.code === "Space") {
        setColorIndex(Math.floor(Math.random() * 992));
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [])

  return (
    <div className="App" >
      <Header text={"Color Generator"} subtext={"Press the spacebar to generate a new palette"}></Header>
      <ColorContainer colors={colors[colorIndex]}>
      </ColorContainer>
    </div>
  );
}

export default App;
