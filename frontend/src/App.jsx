import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [status, setStatus] = useState("Initializing Engine...");

  useEffect(() => {
    // Simulate backend connection check
    setTimeout(() => {
      fetch('http://localhost:8000/')
        .then(res => res.json())
        .then(data => setStatus(data.status))
        .catch(() => setStatus("Engine Offline. Awaiting Backend."));
    }, 1500);
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="glow-text">AlphaForge</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
            System Status: 
            <span style={{ color: status.includes("Online") ? 'var(--accent-neon)' : 'var(--accent-pink)', marginLeft: '0.5rem', fontWeight: 'bold' }}>
              {status}
            </span>
          </span>
          <button className="btn">Deploy Strategy</button>
        </div>
      </header>

      <main>
        <div className="dashboard-grid">
          <div className="card">
            <h3>Alpha Model X-1</h3>
            <div className="stat-value">+24.5%</div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Sharpe: 2.1 | Max DD: -8.4%</p>
          </div>
          
          <div className="card">
            <h3>Beta Reversion Y-2</h3>
            <div className="stat-value" style={{ color: 'var(--accent-pink)' }}>-3.2%</div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Sharpe: 0.8 | Max DD: -12.1%</p>
          </div>
          
          <div className="card glow-box">
            <h3>Active Compute Nodes</h3>
            <div className="stat-value">12 / 16</div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cluster load at 78% capacity</p>
          </div>
        </div>

        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Live Backtest Execution</h2>
          <div style={{ 
            height: '300px', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px', 
            background: 'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(0,255,204,0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--accent-neon)',
              boxShadow: '0 0 10px var(--accent-neon)'
            }}></div>
            <p style={{ color: 'var(--text-secondary)', letterSpacing: '2px' }}>[ EQUITY CURVE RENDERING ENGINE ]</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
