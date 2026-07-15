import { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export default function Ex15() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !complaint.trim()) return;
    const ref = 'CMP-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    setRefNumber(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setComplaint('');
    setSubmitted(false);
    setRefNumber('');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Forms</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Ticket Raising</h1>
        <p>Build a complaint registration form that generates a unique reference number on submission.</p>
        <div className="objectives-list">
          <span className="objective-chip">Controlled components</span>
          <span className="objective-chip">Form handling</span>
          <span className="objective-chip">handleSubmit</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area" style={{ maxWidth: '500px' }}>
          <h4>Complaint Register</h4>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}><CheckCircle2 size="1em" /></div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                Complaint Submitted!
              </h3>
              <p className="text-muted text-sm mb-24">
                Your complaint has been registered successfully.
              </p>

              <div className="card" style={{ padding: '20px', marginBottom: '16px' }}>
                <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
                  Reference Number
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, letterSpacing: '1px' }}>
                  {refNumber}
                </div>
              </div>

              <div className="card" style={{ padding: '16px', textAlign: 'left' }}>
                <dl className="detail-grid">
                  <dt>Name</dt>
                  <dd>{name}</dd>
                  <dt>Complaint</dt>
                  <dd>{complaint}</dd>
                </dl>
              </div>

              <button className="btn btn-secondary mt-24" onClick={handleReset}>
                Raise Another Complaint
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
              <div className="form-group">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Complaint Details</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Describe your complaint..."
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={!name.trim() || !complaint.trim()}
              >
                Submit Complaint
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
