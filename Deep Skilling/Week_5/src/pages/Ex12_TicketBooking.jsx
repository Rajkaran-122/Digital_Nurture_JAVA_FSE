import { useState } from 'react';
import { PlaneTakeoff, Ticket, CheckCircle2, Lock, Check, LogOut, ArrowRight, Clock } from 'lucide-react';
import { flights } from '../data/mockData';

function GuestPage() {
  return (
    <div>
      <div style={{
        textAlign: 'center', padding: '32px 0 24px',
        borderBottom: '1px solid var(--border-color)', marginBottom: '24px',
      }}>
        <div style={{ marginBottom: '14px', color: 'var(--text-primary)' }}><Ticket size={48} /></div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>Browse Available Flights</h2>
        <p className="text-muted text-sm">Please login to book tickets</p>
      </div>
      {flights.map((f) => (
        <div key={f.id} className="flight-card">
          <div className="flex items-center gap-16" style={{ flex: 1 }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-glass)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '18px', border: '1px solid var(--border-color)',
              flexShrink: 0,
            }}>
              <PlaneTakeoff size={20} color="var(--text-secondary)" />
            </div>
            <div>
              <div className="flex items-center gap-8 mb-4">
                <span className="font-mono text-xs text-muted">{f.id}</span>
                <span className="tag">{f.airline}</span>
              </div>
              <div className="flex items-center gap-8">
                <span style={{ fontWeight: 600 }}>{f.from}</span>
                <span className="text-dim"><ArrowRight size="1em" /></span>
                <span style={{ fontWeight: 600 }}>{f.to}</span>
              </div>
              <div className="text-xs text-muted mt-4">
                <Clock size="1em" /> {f.departure} — {f.arrival}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '18px' }}>
              ₹{f.price.toLocaleString()}
            </div>
            <div className="text-xs text-muted">per person</div>
          </div>
        </div>
      ))}
      <div className="alert alert-info mt-16">
        <Lock size="1em" /> You must be logged in to book flights. Click <strong>Login</strong> above to continue.
      </div>
    </div>
  );
}

function UserPage({ onLogout, username }) {
  const [booked, setBooked] = useState([]);

  return (
    <div>
      <div className="flex items-center justify-between mb-24" style={{
        padding: '16px 20px', borderRadius: 'var(--radius-md)',
        background: 'var(--bg-glass)', border: '1px solid var(--border-color)',
      }}>
        <div className="flex items-center gap-12">
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--accent-dim)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '16px', fontWeight: 700,
            border: '1px solid var(--border-color)',
          }}>
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Welcome, {username}!</div>
            <div className="text-xs text-muted">You can now book flights</div>
          </div>
        </div>
        <button className="btn btn-danger btn-sm" onClick={onLogout}><LogOut size="1em" /> Logout</button>
      </div>

      {booked.length > 0 && (
        <div className="alert alert-success mb-16">
          <CheckCircle2 size="1em" /> {booked.length} flight{booked.length > 1 ? 's' : ''} booked! Reference: <strong className="font-mono">{booked.map(b => b.id).join(', ')}</strong>
        </div>
      )}

      {flights.map((f) => {
        const isBooked = booked.some(b => b.id === f.id);
        return (
          <div key={f.id} className="flight-card" style={{
            opacity: isBooked ? 0.5 : 1,
            borderColor: isBooked ? 'rgba(74, 222, 128, 0.2)' : undefined,
          }}>
            <div className="flex items-center gap-16" style={{ flex: 1 }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
                background: isBooked ? 'rgba(74,222,128,0.1)' : 'var(--bg-glass)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', border: `1px solid ${isBooked ? 'rgba(74,222,128,0.2)' : 'var(--border-color)'}`,
                flexShrink: 0, transition: 'all 0.3s',
              }}>
                {isBooked ? <CheckCircle2 size={20} color="var(--success)" /> : <PlaneTakeoff size={20} color="var(--text-secondary)" />}
              </div>
              <div>
                <div className="flex items-center gap-8 mb-4">
                  <span className="font-mono text-xs text-muted">{f.id}</span>
                  <span className="tag">{f.airline}</span>
                  {isBooked && <span className="badge badge-ongoing">Booked</span>}
                </div>
                <div className="flex items-center gap-8">
                  <span style={{ fontWeight: 600 }}>{f.from}</span>
                  <span className="text-dim"><ArrowRight size="1em" /></span>
                  <span style={{ fontWeight: 600 }}>{f.to}</span>
                </div>
                <div className="text-xs text-muted mt-4">
                  <Clock size="1em" /> {f.departure} — {f.arrival}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>
                ₹{f.price.toLocaleString()}
              </div>
              <button
                className={`btn btn-sm ${isBooked ? 'btn-ghost' : 'btn-primary'}`}
                onClick={() => !isBooked && setBooked(prev => [...prev, f])}
                disabled={isBooked}
              >
                {isBooked ? 'Booked <Check size="1em" />' : 'Book Now'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Ex12() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loginInput, setLoginInput] = useState('');

  const handleLogin = () => {
    if (loginInput.trim()) {
      setUsername(loginInput.trim());
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Conditional Rendering</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Ticket Booking</h1>
        <p>Implement login/logout flow where guests can browse but only logged-in users can book.</p>
        <div className="objectives-list">
          <span className="objective-chip">Conditional rendering</span>
          <span className="objective-chip">Element variables</span>
          <span className="objective-chip">Prevent rendering</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <div className="flex items-center justify-between mb-16">
            <h4>{isLoggedIn ? '<Check size="1em" /> Logged In' : '○ Guest'}</h4>
            {!isLoggedIn && (
              <div className="flex items-center gap-8">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter name..."
                  style={{ width: '160px', padding: '6px 12px', fontSize: '12px' }}
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button className="btn btn-primary btn-sm" onClick={handleLogin} disabled={!loginInput.trim()}>
                  Login
                </button>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <UserPage username={username} onLogout={() => { setIsLoggedIn(false); setLoginInput(''); }} />
          ) : (
            <GuestPage />
          )}
        </div>
      </div>
    </div>
  );
}
