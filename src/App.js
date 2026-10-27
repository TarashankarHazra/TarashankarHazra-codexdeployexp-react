
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSlide(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (showSlide) {
    return (
      <main className="slide-screen">
        <img
          src="/deployment-slide.jpeg"
          alt="AWS deployment presentation"
          className="presentation-image"
          onClick={() => setShowSlide(false)}
          title="Click to return to the Codex logo"
        />

        <button
          className="back-button"
          onClick={() => setShowSlide(false)}
          aria-label="Return to Codex logo"
        >
          ← Back
        </button>
      </main>
    );
  }

  return (
    <main className="logo-screen">
      <button
        className="logo-button"
        onClick={() => setShowSlide(true)}
        aria-label="Open presentation"
      >
        <img
          src="/codex-logo.jpeg"
          alt="Codex logo — click to open presentation"
          className="codex-logo"
        />
      </button>

      <p className="click-hint">CLICK TO ENTER</p>
    </main>
  );
}

export default App;
