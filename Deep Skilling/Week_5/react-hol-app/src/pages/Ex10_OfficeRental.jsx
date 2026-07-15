import { offices } from '../data/mockData';
import { Clock } from 'lucide-react';

export default function Ex10() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">JSX</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Office Space Rental</h1>
        <p>Use React JSX to create elements and render office listings with conditional rent-based coloring.</p>
        <div className="objectives-list">
          <span className="objective-chip">JSX syntax</span>
          <span className="objective-chip">React.createElement</span>
          <span className="objective-chip">Inline CSS</span>
          <span className="objective-chip">Conditional styling</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Live Output — Available Office Spaces</h4>
          <div className="grid-2 mt-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {offices.map((office) => {
              const isExpensive = office.rent >= 60000;
              return (
                <div key={office.name} className="card" style={{ padding: '24px' }}>
                  <div className="flex items-center gap-12" style={{ marginBottom: '16px' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: 'var(--radius-md)',
                      overflow: 'hidden', border: '1px solid var(--border-color)', flexShrink: 0
                    }}>
                      <img src={office.image} alt={office.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '16px' }}>{office.name}</div>
                      <div className="text-muted text-xs">{office.address}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between" style={{
                    padding: '12px 16px', borderRadius: 'var(--radius-md)',
                    background: isExpensive ? 'rgba(74, 222, 128, 0.05)' : 'rgba(248, 113, 113, 0.05)',
                    border: `1px solid ${isExpensive ? 'rgba(74, 222, 128, 0.15)' : 'rgba(248, 113, 113, 0.15)'}`,
                  }}>
                    <span className="text-sm text-muted">Monthly Rent</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '18px',
                      color: isExpensive ? 'var(--success)' : 'var(--error)',
                    }}>
                      ₹{office.rent.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-xs text-muted mt-8" style={{ textAlign: 'right' }}>
                    {isExpensive ? '● Above ₹60,000 — Premium' : '● Below ₹60,000 — Budget'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
