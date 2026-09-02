import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [x, setX] = useState(0);
  
  const onButtonClick = (color, x) => () => {
    const initialBackground = backgroundColor;
    setBackgroundColor(color);
    if (!(initialBackground === color)) {
      setX(x + 1); 
    }

  };

  return (
    <div
      className="App"
      style={{
        backgroundColor
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color, x)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      
      ))}
      <button>
        {x}
      </button>
    </div>
  );
}

export default App;
