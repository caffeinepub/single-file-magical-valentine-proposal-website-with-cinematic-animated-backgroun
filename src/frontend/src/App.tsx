import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirect to the standalone HTML page
    window.location.href = '/index.html';
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, oklch(0.25 0.15 320) 0%, oklch(0.35 0.18 340) 25%, oklch(0.45 0.12 350) 50%, oklch(0.35 0.15 330) 75%, oklch(0.25 0.12 310) 100%)',
      color: 'oklch(0.95 0.05 340)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.5rem'
    }}>
      Loading Valentine's Proposal... 💖
    </div>
  );
}

export default App;
