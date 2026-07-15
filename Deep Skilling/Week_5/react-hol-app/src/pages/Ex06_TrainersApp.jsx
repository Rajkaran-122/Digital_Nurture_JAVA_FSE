import { useState } from 'react';
import { trainers } from '../data/mockData';
import { User, ArrowRight, Clock, GraduationCap } from 'lucide-react';

function TrainerDetail({ trainer, onBack }) {
  return (
    <div>
      <button className="btn btn-ghost" onClick={onBack} style={{ marginBottom: '16px' }}>
        ← Back to list
      </button>
      <div className="card" style={{ padding: '32px' }}>
        <div className="flex items-center gap-16" style={{ marginBottom: '24px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-glass)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '28px', border: '1px solid var(--border-color)',
          }}>
            <User size="1em" />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>
              {trainer.name}
            </h2>
            <div className="text-muted text-sm">{trainer.trainerId}</div>
          </div>
        </div>

        <dl className="detail-grid" style={{ marginBottom: '24px' }}>
          <dt>Email</dt>
          <dd>{trainer.email}</dd>
          <dt>Phone</dt>
          <dd>{trainer.phone}</dd>
          <dt>Technology</dt>
          <dd>{trainer.technology}</dd>
        </dl>

        <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)', marginBottom: '10px' }}>
          Skills
        </h4>
        <div className="flex flex-wrap gap-8">
          {trainer.skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Ex06() {
  const [selectedId, setSelectedId] = useState(null);
  const [view, setView] = useState('home'); // 'home' | 'list' | 'detail'

  const selectedTrainer = trainers.find((t) => t.trainerId === selectedId);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">React Router</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Trainers App</h1>
        <p>Implement React Router with trainer list, detail view, and URL parameter passing.</p>
        <div className="objectives-list">
          <span className="objective-chip">BrowserRouter</span>
          <span className="objective-chip">Routes & Route</span>
          <span className="objective-chip">Link & NavLink</span>
          <span className="objective-chip">useParams hook</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="nav-tabs">
          <button className={`nav-tab ${view === 'home' ? 'active' : ''}`} onClick={() => { setView('home'); setSelectedId(null); }}>
            Home
          </button>
          <button className={`nav-tab ${view === 'list' || view === 'detail' ? 'active' : ''}`} onClick={() => { setView('list'); setSelectedId(null); }}>
            Trainers
          </button>
        </div>

        <div className="demo-area">
          <h4>{view === 'home' ? '/ Home' : view === 'list' ? '/trainers' : `/trainers/${selectedId}`}</h4>

          {view === 'home' && (
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '24px 0' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '40px', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  <GraduationCap size="1em" />
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
                  Cognizant Academy
                </h2>
                <p className="text-secondary" style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
                  Trainer Management Portal — Browse our elite instructors and explore their technical expertise areas.
                </p>
                <button className="btn btn-primary" onClick={() => setView('list')} style={{ padding: '12px 24px', fontSize: '14px' }}>
                  View Trainers <ArrowRight size="1em" />
                </button>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img
                  src="/assets/trainers_home.png"
                  alt="Trainers Home"
                  style={{
                    width: '100%', maxWidth: '380px', height: 'auto',
                    borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
              </div>
            </div>
          )}

          {view === 'list' && (
            <div>
              {trainers.map((t) => (
                <div
                  key={t.trainerId}
                  className="list-item"
                  onClick={() => { setSelectedId(t.trainerId); setView('detail'); }}
                >
                  <div className="item-icon"><User size="1em" /></div>
                  <div className="item-content">
                    <div className="item-title">{t.name}</div>
                    <div className="item-subtitle">{t.technology} • {t.trainerId}</div>
                  </div>
                  <span style={{ color: 'var(--text-dim)' }}><ArrowRight size="1em" /></span>
                </div>
              ))}
            </div>
          )}

          {view === 'detail' && selectedTrainer && (
            <TrainerDetail
              trainer={selectedTrainer}
              onBack={() => { setView('list'); setSelectedId(null); }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
