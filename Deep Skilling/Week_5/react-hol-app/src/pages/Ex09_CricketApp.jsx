import { useState } from 'react';
import { players, t20Players, ranjiPlayers } from '../data/mockData';
import { Clock } from 'lucide-react';

export default function Ex09() {
  const [showFlag, setShowFlag] = useState(true);

  // ES6: filter — players with score below 70
  const belowSeventy = players.filter((p) => p.score < 70);
  const aboveSeventy = players.filter((p) => p.score >= 70);

  // ES6: destructuring — odd and even indexed
  const oddTeam = players.filter((_, i) => i % 2 !== 0);
  const evenTeam = players.filter((_, i) => i % 2 === 0);

  // ES6: merge
  const mergedPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">ES6 Features</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Cricket App</h1>
        <p>Use ES6 map, filter, destructuring, and array merge features with cricket player data.</p>
        <div className="objectives-list">
          <span className="objective-chip">Array.map()</span>
          <span className="objective-chip">Arrow functions</span>
          <span className="objective-chip">Destructuring</span>
          <span className="objective-chip">Spread operator</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="flex items-center gap-12 mb-16">
          <span className="text-sm text-muted">Toggle View:</span>
          <button
            className={`btn btn-sm ${showFlag ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setShowFlag(true)}
          >
            Flag = true
          </button>
          <button
            className={`btn btn-sm ${!showFlag ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setShowFlag(false)}
          >
            Flag = false
          </button>
        </div>

        {showFlag ? (
          <div className="demo-area">
            <h4>ListOfPlayers — All Players (map + filter)</h4>

            <div className="grid-2 mt-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--success)' }}>
                  Score ≥ 70 ({aboveSeventy.length})
                </h3>
                {aboveSeventy.map((p) => (
                  <div key={p.name} className="list-item" style={{ cursor: 'default' }}>
                    <div className="item-icon">🏏</div>
                    <div className="item-content">
                      <div className="item-title">{p.name}</div>
                    </div>
                    <span className="font-mono text-sm" style={{ color: 'var(--success)' }}>{p.score}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--error)' }}>
                  Score &lt; 70 ({belowSeventy.length})
                </h3>
                {belowSeventy.map((p) => (
                  <div key={p.name} className="list-item" style={{ cursor: 'default' }}>
                    <div className="item-icon">🏏</div>
                    <div className="item-content">
                      <div className="item-title">{p.name}</div>
                    </div>
                    <span className="font-mono text-sm" style={{ color: 'var(--error)' }}>{p.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="demo-area">
            <h4>IndianPlayers — Destructuring & Merge</h4>

            <div className="grid-2 mt-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Odd Team Players</h3>
                {oddTeam.map((p) => (
                  <div key={p.name} className="list-item" style={{ cursor: 'default' }}>
                    <div className="item-icon">🧑‍💼</div>
                    <div className="item-content">
                      <div className="item-title">{p.name}</div>
                      <div className="item-subtitle">Score: {p.score}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Even Team Players</h3>
                {evenTeam.map((p) => (
                  <div key={p.name} className="list-item" style={{ cursor: 'default' }}>
                    <div className="item-icon">👨‍💼</div>
                    <div className="item-content">
                      <div className="item-title">{p.name}</div>
                      <div className="item-subtitle">Score: {p.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" />

            <h4>💼 Merged Array — T20 + Ranji Players</h4>
            <div className="flex flex-wrap gap-8 mt-16">
              {mergedPlayers.map((name) => (
                <span key={name} className="tag">{name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
