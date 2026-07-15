import { Clock, GraduationCap } from 'lucide-react';
const students = [
  { name: 'Aarav Mehta', school: 'Delhi Public School', total: 456, goal: 500 },
  { name: 'Isha Gupta', school: 'St. Xavier\'s High', total: 489, goal: 500 },
  { name: 'Rohan Das', school: 'Kendriya Vidyalaya', total: 378, goal: 500 },
  { name: 'Priya Nair', school: 'DAV Public School', total: 425, goal: 500 },
];

function StudentCard({ name, school, total, goal }) {
  const average = ((total / goal) * 100).toFixed(1);
  const isGood = average >= 80;

  return (
    <div className="card" style={{ padding: '24px' }}>
      <div className="flex items-center gap-12" style={{ marginBottom: '16px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
          background: 'var(--bg-glass)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '20px', flexShrink: 0,
        }}>
          <GraduationCap size="1em" />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px' }}>{name}</div>
          <div className="text-muted text-sm">{school}</div>
        </div>
      </div>

      <div className="detail-grid" style={{ marginBottom: '16px' }}>
        <dt>Total Score</dt>
        <dd>{total} / {goal}</dd>
        <dt>Average</dt>
        <dd style={{ color: isGood ? 'var(--success)' : 'var(--error)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
          {average}%
        </dd>
      </div>

      <div style={{
        height: '4px', background: 'var(--bg-glass)', borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${average}%`, borderRadius: '2px',
          background: isGood ? 'var(--success)' : 'var(--error)',
          transition: 'width 0.8s ease',
        }} />
      </div>
    </div>
  );
}

export default function Ex03() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Function Components</span>
          <span className="tag time"><Clock size="1em" /> 30 min</span>
        </div>
        <h1>Score Calculator</h1>
        <p>Build a function component that calculates and displays student average scores.</p>
        <div className="objectives-list">
          <span className="objective-chip">Function components</span>
          <span className="objective-chip">Props passing</span>
          <span className="objective-chip">Styled components</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Live Output — Student Scores</h4>
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {students.map((s) => (
              <StudentCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
