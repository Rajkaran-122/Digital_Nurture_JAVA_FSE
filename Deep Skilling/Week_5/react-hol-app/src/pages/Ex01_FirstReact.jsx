import { RefreshCw, ArrowRight, Clock } from 'lucide-react';
export default function Ex01() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Setup</span>
          <span className="tag time"><Clock size="1em" /> 30 min</span>
        </div>
        <h1>First React App</h1>
        <p>Set up a React environment using create-react-app and display a welcome message.</p>
        <div className="objectives-list">
          <span className="objective-chip">Define SPA & benefits</span>
          <span className="objective-chip">Understand Virtual DOM</span>
          <span className="objective-chip">Use create-react-app</span>
        </div>
      </div>

      <div className="exercise-content">
        {/* Terminal-style mockup */}
        <div className="demo-area" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: '#1a1a1a', borderBottom: '1px solid var(--border-color)',
            padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
            <span className="text-xs text-muted font-mono" style={{ marginLeft: '8px' }}>Terminal — myfirstreact</span>
          </div>
          <div style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 2 }}>
            <div style={{ color: 'var(--text-dim)' }}>$ npx create-react-app myfirstreact</div>
            <div style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--success)' }}>✔</span> Installing packages... done.
            </div>
            <div style={{ color: 'var(--text-dim)' }}>$ cd myfirstreact</div>
            <div style={{ color: 'var(--text-dim)' }}>$ npm start</div>
            <div style={{ color: 'var(--text-muted)' }}>
              Compiled successfully!
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              Local: &nbsp;&nbsp;<span style={{ color: 'var(--info)' }}>http://localhost:3000</span>
            </div>
          </div>
        </div>

        {/* Browser preview mockup */}
        <div className="demo-area mt-16" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: '#1a1a1a', borderBottom: '1px solid var(--border-color)',
            padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div className="flex items-center gap-8">
              <span className="text-muted" style={{ fontSize: '14px' }}>←</span>
              <span className="text-muted" style={{ fontSize: '14px' }}><ArrowRight size="1em" /></span>
              <span className="text-muted" style={{ fontSize: '14px' }}><RefreshCw size="1em" /></span>
            </div>
            <div style={{
              flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '6px',
              padding: '5px 12px', fontSize: '12px', fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
            }}>
              localhost:3000
            </div>
          </div>
          <div style={{ padding: '60px 32px', textAlign: 'center', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginBottom: '24px' }}>
              <svg width="80" height="80" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2" fill="#61dafb"></circle>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </div>
            <h2 style={{
              fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '12px',
              background: 'linear-gradient(180deg, #ffffff 0%, #888888 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Welcome to the first session of React
            </h2>
            <p className="text-muted" style={{ fontSize: '14px', maxWidth: '400px' }}>
              myfirstreact — Your first React application is running successfully!
            </p>
          </div>
        </div>

        <div className="exercise-section mt-24">
          <h3>Key Code — App.js</h3>
          <div className="code-block">
{`import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;`}
          </div>
        </div>

        {/* Setup steps */}
        <div className="exercise-section mt-24">
          <h3>Setup Steps</h3>
          <div className="flex flex-col gap-8 mt-16">
            {[
              { step: '01', cmd: 'npm install -g create-react-app', desc: 'Install create-react-app globally' },
              { step: '02', cmd: 'npx create-react-app myfirstreact', desc: 'Create a new React app' },
              { step: '03', cmd: 'cd myfirstreact', desc: 'Navigate into the project' },
              { step: '04', cmd: 'code .', desc: 'Open in VS Code' },
              { step: '05', cmd: 'npm start', desc: 'Run the development server' },
            ].map((s) => (
              <div key={s.step} className="list-item" style={{ cursor: 'default' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-glass)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px',
                  fontWeight: 600, color: 'var(--text-muted)', flexShrink: 0,
                }}>
                  {s.step}
                </div>
                <div className="item-content">
                  <div className="item-title font-mono text-sm">{s.cmd}</div>
                  <div className="item-subtitle">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
