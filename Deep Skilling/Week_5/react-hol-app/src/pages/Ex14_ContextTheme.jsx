import { useState, createContext, useContext } from 'react';
import { employees } from '../data/mockData';
import { Sun, Building2, Moon, User, ArrowRight, Clock } from 'lucide-react';

const ThemeCtx = createContext('dark');

function EmployeeCard({ emp }) {
  const theme = useContext(ThemeCtx);
  const isDark = theme === 'dark';

  return (
    <div style={{
      background: isDark ? 'var(--bg-card)' : '#f5f5f5',
      border: `1px solid ${isDark ? 'var(--border-color)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      transition: 'all 0.4s ease',
    }}>
      <div className="flex items-center gap-12" style={{ marginBottom: '16px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', border: `1px solid ${isDark ? 'var(--border-color)' : 'rgba(0,0,0,0.1)'}`,
          transition: 'all 0.4s ease',
        }}>
          <User size="1em" />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px', color: isDark ? '#fff' : '#111', transition: 'color 0.4s' }}>
            {emp.name}
          </div>
          <div style={{ fontSize: '12px', color: isDark ? 'var(--text-muted)' : '#888', transition: 'color 0.4s' }}>
            {emp.role}
          </div>
        </div>
      </div>
      <div style={{
        padding: '10px 14px', borderRadius: 'var(--radius-sm)',
        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
        fontSize: '12px', color: isDark ? 'var(--text-secondary)' : '#555',
        marginBottom: '16px', transition: 'all 0.4s ease',
      }}>
        <Building2 size="1em" /> {emp.department}
      </div>
      <div className="flex gap-8">
        <button style={{
          padding: '7px 16px', borderRadius: 'var(--radius-sm)', fontSize: '12px',
          fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)',
          background: isDark ? '#fff' : '#111',
          color: isDark ? '#000' : '#fff',
          border: 'none', transition: 'all 0.3s ease', flex: 1,
        }}>
          View Profile
        </button>
        <button style={{
          padding: '7px 16px', borderRadius: 'var(--radius-sm)', fontSize: '12px',
          fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)',
          background: 'transparent',
          color: isDark ? 'var(--text-secondary)' : '#555',
          border: `1px solid ${isDark ? 'var(--border-color)' : 'rgba(0,0,0,0.15)'}`,
          transition: 'all 0.3s ease', flex: 1,
        }}>
          Edit
        </button>
      </div>
    </div>
  );
}

function EmployeeList() {
  return (
    <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} emp={emp} />
      ))}
    </div>
  );
}

function ThemeSwitch({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      onClick={onToggle}
      style={{
        position: 'relative', width: '60px', height: '30px',
        borderRadius: '15px', border: 'none', cursor: 'pointer',
        background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease', padding: 0,
      }}
    >
      <div style={{
        position: 'absolute',
        top: '3px', left: isDark ? '3px' : '33px',
        width: '24px', height: '24px', borderRadius: '50%',
        background: isDark ? '#fff' : '#111',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '12px',
      }}>
        {isDark ? '<Moon size="1em" />' : '<Sun size="1em" />'}
      </div>
    </button>
  );
}

export default function Ex14() {
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Context API</span>
          <span className="tag time"><Clock size="1em" /> 30 min</span>
        </div>
        <h1>Context Theme</h1>
        <p>Use React Context API to share theme across nested components without prop drilling.</p>
        <div className="objectives-list">
          <span className="objective-chip">createContext</span>
          <span className="objective-chip">Provider</span>
          <span className="objective-chip">useContext hook</span>
          <span className="objective-chip">Consumer</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area" style={{
          background: isDark ? 'var(--bg-card)' : '#e8e8e8',
          transition: 'background 0.4s ease',
        }}>
          <div className="flex items-center justify-between mb-24">
            <h4 style={{ color: isDark ? undefined : '#333', transition: 'color 0.4s' }}>
              Employee Management — {theme} mode
            </h4>
            <ThemeSwitch theme={theme} onToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
          </div>

          {/* Context flow visualization */}
          <div style={{
            padding: '12px 16px', borderRadius: 'var(--radius-md)',
            background: isDark ? 'rgba(96,165,250,0.05)' : 'rgba(96,165,250,0.1)',
            border: `1px solid ${isDark ? 'rgba(96,165,250,0.15)' : 'rgba(96,165,250,0.2)'}`,
            marginBottom: '20px', fontSize: '12px',
            color: isDark ? 'var(--info)' : '#2563eb',
            transition: 'all 0.4s ease',
          }}>
            <code style={{ fontFamily: 'var(--font-mono)' }}>ThemeContext.Provider value="{theme}"</code> <ArrowRight size="1em" /> <code style={{ fontFamily: 'var(--font-mono)' }}>EmployeeList</code> <ArrowRight size="1em" /> <code style={{ fontFamily: 'var(--font-mono)' }}>EmployeeCard (useContext)</code>
          </div>

          <ThemeCtx.Provider value={theme}>
            <EmployeeList />
          </ThemeCtx.Provider>
        </div>
      </div>
    </div>
  );
}
