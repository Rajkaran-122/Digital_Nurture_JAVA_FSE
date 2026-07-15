import { useState, useEffect } from 'react';
import { MapPin, RefreshCw, AlertTriangle, Database, Clock, Phone, Smartphone } from 'lucide-react';

export default function Ex17() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://randomuser.me/api/');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setUser(data.results[0]);
      setFetchCount(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on mount (like componentDidMount)
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">REST API</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Fetch User</h1>
        <p>Consume a REST API to fetch and display a random user profile with avatar.</p>
        <div className="objectives-list">
          <span className="objective-chip">fetch() API</span>
          <span className="objective-chip">Async/Await</span>
          <span className="objective-chip">ComponentDidMount</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area" style={{ maxWidth: '480px' }}>
          <div className="flex items-center justify-between mb-16">
            <h4>Random User Profile</h4>
            <button className="btn btn-primary btn-sm" onClick={fetchUser} disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-8">
                  <span className="spinner" style={{ width: 12, height: 12 }} /> Loading
                </span>
              ) : (
                <span className="flex items-center gap-8">
                  <RefreshCw size="1em" /> New User ({fetchCount})
                </span>
              )}
            </button>
          </div>

          {error && <div className="alert alert-error"><AlertTriangle size="1em" /> {error}</div>}

          {loading && !user && (
            <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
              <div className="skeleton" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 16px' }} />
              <div className="skeleton" style={{ width: '60%', height: '18px', margin: '0 auto 8px' }} />
              <div className="skeleton" style={{ width: '40%', height: '14px', margin: '0 auto' }} />
            </div>
          )}

          {user && (
            <div className="card" style={{
              textAlign: 'center', padding: '32px',
              opacity: loading ? 0.5 : 1, transition: 'opacity 0.3s',
            }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    border: '3px solid var(--border-color)', objectFit: 'cover',
                    transition: 'border-color 0.3s',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: '2px', right: '2px',
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'var(--bg-card)', border: '2px solid var(--border-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px',
                }}>
                  {user.nat === 'US' ? '🇺🇸' : user.nat === 'GB' ? '🇬🇧' : user.nat === 'FR' ? '🇫🇷' : user.nat === 'DE' ? '🇩🇪' : user.nat === 'AU' ? '🇦🇺' : user.nat === 'BR' ? '🇧🇷' : user.nat === 'CA' ? '🇨🇦' : '🌍'}
                </div>
              </div>

              <div style={{ marginBottom: '4px' }}>
                <span className="tag">{user.name.title}</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginTop: '8px', marginBottom: '4px' }}>
                {user.name.first} {user.name.last}
              </h3>
              <p className="text-muted text-sm">{user.email}</p>

              <div className="divider" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <div className="text-xs text-dim" style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Age</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{user.dob.age}</div>
                </div>
                <div>
                  <div className="text-xs text-dim" style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Country</div>
                  <div style={{ fontWeight: 600, fontSize: '13px' }}>{user.nat}</div>
                </div>
                <div>
                  <div className="text-xs text-dim" style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Gender</div>
                  <div style={{ fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>{user.gender}</div>
                </div>
              </div>

              <div className="divider" />

              <dl className="detail-grid" style={{ textAlign: 'left' }}>
                <dt><MapPin size="1em" /> Location</dt>
                <dd>{user.location.city}, {user.location.country}</dd>
                <dt><Phone size="1em" /> Phone</dt>
                <dd>{user.phone}</dd>
                <dt><Smartphone size="1em" /> Cell</dt>
                <dd>{user.cell}</dd>
              </dl>
            </div>
          )}

          <div className="alert alert-info mt-16" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', lineHeight: 1.6 }}>
            <Database size={20} color="var(--info)" style={{ flexShrink: 0 }} />
            <div>
              Data fetched from <code style={{ background: 'rgba(0,0,0,0.2)', padding: '3px 6px', borderRadius: '4px', color: 'var(--info)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>https://randomuser.me/api/</code> using the Fetch API inside <code style={{ background: 'rgba(0,0,0,0.2)', padding: '3px 6px', borderRadius: '4px', color: 'var(--info)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>componentDidMount()</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
