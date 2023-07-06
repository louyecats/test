import React, { useState } from 'react';
import './App.css';


// ----- Images! ----  
import llama from './llama.webp';
import blue_llama from './assets/blue_llama.png';


function App() {
  const [isFadedIn, setIsFadedIn] = useState(false);

  const handleFadeToggle = () => {
    setIsFadedIn(!isFadedIn);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={llama} className="App-logo" alt="logo" />
        <h1>Hola senorita!</h1>
        <button className="fade-button" onClick={handleFadeToggle}>Que pasa?</button>
        <img src={blue_llama} className={`Blue_llama_css ${isFadedIn ? 'fade-in' : 'fade-out'}`} alt="Blue llama" />
        </header>
    </div>
  );
}

export default App;
