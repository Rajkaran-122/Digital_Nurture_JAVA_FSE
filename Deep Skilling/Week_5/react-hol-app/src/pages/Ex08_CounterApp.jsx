import { useState } from 'react';
import { RefreshCw, Clock } from 'lucide-react';

export default function Ex08() {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);
  const [entryPulse, setEntryPulse] = useState(false);
  const [exitPulse, setExitPulse] = useState(false);
  const [log, setLog] = useState([]);

  const animateEntry = () => {
    setEntryCount(prev => prev + 1);
    setEntryPulse(true);
    setLog(prev => [{ type: 'entry', time: new Date().toLocaleTimeString() }, ...prev].slice(0, 8));
    setTimeout(() => setEntryPulse(false), 300);
  };

  const animateExit = () => {
    if (entryCount - exitCount <= 0) return;
    setExitCount(prev => prev + 1);
    setExitPulse(true);
    setLog(prev => [{ type: 'exit', time: new Date().toLocaleTimeString() }, ...prev].slice(0, 8));
    setTimeout(() => setExitPulse(false), 300);
  };

  const handleReset = () => {
    setEntryCount(0);
    setExitCount(0);
    setLog([]);
  };

  const insideMall = entryCount - exitCount;
  const capacityPercent = Math.min(100, (insideMall / 50) * 100);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">State</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Counter App</h1>
        <p>Track mall entry and exit counts using React state with constructor initialization.</p>
        <div className="objectives-list">
          <span className="objective-chip">React State</span>
          <span className="objective-chip">setState</span>
          <span className="objective-chip">Constructor</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <div className="flex items-center justify-between mb-16">
            <h4>Mall People Counter</h4>
            <button className="btn btn-ghost btn-sm" onClick={handleReset}>
              <RefreshCw size="1em" /> Reset
            </button>
          </div>

          {/* Capacity bar */}
          <div className="card mb-16" style={{ padding: '16px 20px' }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                Mall Capacity
              </span>
              <span className="font-mono text-xs text-muted">{insideMall} / 50</span>
            </div>
            <div style={{
              height: '6px', background: 'var(--bg-glass)', borderRadius: '3px', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: '3px',
                width: `${capacityPercent}%`,
                background: capacityPercent > 80 ? 'var(--error)' : capacityPercent > 50 ? 'var(--warning)' : 'var(--success)',
                transition: 'width 0.4s ease, background 0.4s ease',
              }} />
            </div>
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Entries
              </div>
              <div className={`counter-display ${entryPulse ? 'pulse' : ''}`} style={{ color: 'var(--success)' }}>
                {entryCount}
              </div>
              <button
                className="btn btn-success mt-24"
                onClick={animateEntry}
                style={{ width: '100%' }}
              >
                ↗ Entry
              </button>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Inside Mall
              </div>
              <div className="counter-display" style={{
                color: insideMall > 0 ? 'var(--text-primary)' : 'var(--text-dim)',
                transition: 'color 0.3s ease',
              }}>
                {insideMall}
              </div>
              <div className="text-xs text-muted mt-24">
                {insideMall === 0 ? 'Mall is empty' : insideMall === 1 ? '1 person inside' : `${insideMall} people inside`}
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Exits
              </div>
              <div className={`counter-display ${exitPulse ? 'pulse' : ''}`} style={{ color: 'var(--error)' }}>
                {exitCount}
              </div>
              <button
                className="btn btn-danger mt-24"
                onClick={animateExit}
                disabled={insideMall <= 0}
                style={{ width: '100%', opacity: insideMall <= 0 ? 0.3 : 1 }}
              >
                ↙ Exit
              </button>
            </div>
          </div>

          {/* Activity Log */}
          {log.length > 0 && (
            <div className="mt-24">
              <h4 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)', marginBottom: '10px' }}>
                Recent Activity
              </h4>
              <div className="flex flex-col gap-4">
                {log.map((entry, i) => (
                  <div key={i} className="flex items-center gap-8" style={{
                    padding: '6px 12px', borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-glass)', fontSize: '12px',
                    opacity: 1 - (i * 0.1),
                  }}>
                    <span style={{
                      color: entry.type === 'entry' ? 'var(--success)' : 'var(--error)',
                      fontWeight: 600,
                    }}>
                      {entry.type === 'entry' ? '↗ Entry' : '↙ Exit'}
                    </span>
                    <span className="text-muted font-mono text-xs">{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
