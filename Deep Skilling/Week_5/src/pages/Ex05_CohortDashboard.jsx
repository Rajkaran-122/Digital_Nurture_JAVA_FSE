import { cohorts } from '../data/mockData';
import { Clock } from 'lucide-react';

function CohortCard({ cohort }) {
  const isOngoing = cohort.status === 'ongoing';
  return (
    <div className="card" style={{ padding: '24px' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
        <h3 style={{
          fontSize: '16px', fontWeight: 600,
          color: isOngoing ? 'var(--success)' : 'var(--info)',
        }}>
          {cohort.code}
        </h3>
        <span className={`badge ${isOngoing ? 'badge-ongoing' : 'badge-completed'}`}>
          {cohort.status}
        </span>
      </div>

      <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
        {cohort.name}
      </div>

      <dl className="detail-grid">
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
        <dt>Participants</dt>
        <dd>{cohort.participants}</dd>
      </dl>
    </div>
  );
}

export default function Ex05() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">CSS Modules</span>
          <span className="tag time"><Clock size="1em" /> 30 min</span>
        </div>
        <h1>Cohort Dashboard</h1>
        <p>Style cohort details using CSS Modules with conditional inline styles — green for ongoing, blue for completed.</p>
        <div className="objectives-list">
          <span className="objective-chip">CSS Modules</span>
          <span className="objective-chip">className property</span>
          <span className="objective-chip">Conditional styles</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Live Output — Cohort Details</h4>
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {cohorts.map((c) => (
              <CohortCard key={c.code} cohort={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
