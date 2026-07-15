import { useState } from 'react';
import { Phone, Clock, Building2, GraduationCap } from 'lucide-react';

const sections = {
  home: {
    icon: <GraduationCap size="1em" />,
    title: 'Home',
    message: 'Welcome to the Home page of Student Management Portal',
    features: ['Dashboard Overview', 'Quick Links', 'Recent Activity'],
    image: '/assets/student_home.png'
  },
  about: {
    icon: <Building2 size="1em" />,
    title: 'About',
    message: 'Welcome to the About page of the Student Management Portal',
    features: ['Our Mission', 'Team Info', 'History'],
    image: '/assets/student_about.png'
  },
  contact: {
    icon: <Phone size="1em" />,
    title: 'Contact',
    message: 'Welcome to the Contact page of the Student Management Portal',
    features: ['Email Us', 'Phone Directory', 'Office Location'],
    image: '/assets/student_contact.png'
  },
};

export default function Ex02() {
  const [activeTab, setActiveTab] = useState('home');
  const section = sections[activeTab];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Components</span>
          <span className="tag time"><Clock size="1em" /> 30 min</span>
        </div>
        <h1>Student Management Portal</h1>
        <p>Create class components for Home, About, and Contact sections.</p>
        <div className="objectives-list">
          <span className="objective-chip">Class components</span>
          <span className="objective-chip">Multiple components</span>
          <span className="objective-chip">Render method</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="nav-tabs">
          {Object.entries(sections).map(([key, sec]) => (
            <button
              key={key}
              className={`nav-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {sec.icon} {sec.title}
            </button>
          ))}
        </div>

        <div className="demo-area" style={{ minHeight: '280px', display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ flex: 1, textAlign: 'left', padding: '16px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '16px',
              background: 'var(--bg-glass)', border: '1px solid var(--border-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', marginBottom: '24px',
            }}>
              {section.icon}
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
              {section.title}
            </h3>
            <p className="text-secondary" style={{ fontSize: '15px', lineHeight: 1.7, maxWidth: '420px', marginBottom: '24px' }}>
              {section.message}
            </p>
            <div className="flex flex-wrap gap-8">
              {section.features.map((f) => (
                <span key={f} className="tag">{f}</span>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: '100%', maxWidth: '380px', height: 'auto',
                borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)'
              }}
            />
          </div>
        </div>

        <div className="exercise-section mt-24">
          <h3>Component Structure</h3>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {Object.entries(sections).map(([key, sec]) => (
              <div
                key={key}
                className="card"
                style={{
                  padding: '20px', cursor: 'pointer',
                  borderColor: activeTab === key ? 'var(--border-active)' : undefined,
                }}
                onClick={() => setActiveTab(key)}
              >
                <div className="flex items-center gap-8" style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '18px' }}>{sec.icon}</span>
                  <span className="font-mono text-xs text-muted">src/Components/</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>{sec.title}.js</div>
                <div className="text-xs text-muted mt-8">
                  Class Component • render()
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
