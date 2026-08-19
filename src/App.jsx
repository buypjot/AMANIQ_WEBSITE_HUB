import React, { useState } from 'react';
import { Container, Cpu, Layers, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      
      <main className="container">
        <div className="hero-card">
          <div className="badge">
            <span className="badge-dot"></span>
            Docker Container Active
          </div>

          <h1 className="title">
            Welcome to <span className="highlight">My React Project</span>
          </h1>

          <p className="subtitle">
            A clean, minimal, and modern React application setup running seamlessly inside Docker Compose on port 9016.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Container size={22} />
              </div>
              <h3 className="feature-title">Docker Compose</h3>
              <p className="feature-desc">Mapped to port 9016 on host for local development.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Cpu size={22} />
              </div>
              <h3 className="feature-title">Vite + React 18</h3>
              <p className="feature-desc">Ultra-fast bundling and immediate Hot Module Replacement.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Layers size={22} />
              </div>
              <h3 className="feature-title">Clean Structure</h3>
              <p className="feature-desc">Lightweight design with zero unnecessary overhead.</p>
            </div>
          </div>

          <div className="interactive-section">
            <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
              <Sparkles size={18} />
              Interactive Test: {count}
            </button>
            <div className="counter-badge">
              Status: Ready
            </div>
          </div>
        </div>

        <footer className="footer-info">
          <div className="footer-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Environment: Development</span>
          </div>
          <span>•</span>
          <div className="footer-item">
            <Heart size={16} color="#ef4444" />
            <span>Port 9016</span>
          </div>
        </footer>
      </main>
    </>
  );
}
