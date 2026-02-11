import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Preserve query parameters during redirect
    const search = window.location.search;
    const hash = window.location.hash;
    window.location.href = `/index.html${search}${hash}`;
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, oklch(0.25 0.15 320) 0%, oklch(0.35 0.18 340) 50%, oklch(0.25 0.12 310) 100%)',
      color: 'oklch(0.95 0.05 340)',
      fontSize: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      Loading... 💖
    </div>
  );
}

export default App;
