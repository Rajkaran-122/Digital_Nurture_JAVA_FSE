import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const categories = [
  {
    title: 'Advanced',
    items: [
      { num: '14', label: 'Context Theme', path: '/ex14' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { num: '15', label: 'Ticket Raising', path: '/ex15' },
      { num: '16', label: 'Mail Register', path: '/ex16' },
    ],
  },
  {
    title: 'APIs & Testing',
    items: [
      { num: '17', label: 'Fetch User', path: '/ex17' },
      { num: '18', label: 'Unit Testing', path: '/ex18' },
      { num: '19', label: 'Mock Testing', path: '/ex19' },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const [collapsed, setCollapsed] = useState({});

  const toggleCategory = (title) => {
    setCollapsed(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 150,
        display: 'none',
      }} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-logo" onClick={onClose}>
            <img src="/rajkaran-logo.png" alt="Rajkaran Logo" className="sidebar-logo-img" />
            <div className="sidebar-logo-text">
              <h1>Rajkaran's Portfolio</h1>
              <span>Week 6</span>
            </div>
          </NavLink>
        </div>

        <nav className="sidebar-nav">
          {categories.map((cat) => (
            <div className="sidebar-category" key={cat.title}>
              <div
                className="sidebar-category-title"
                onClick={() => toggleCategory(cat.title)}
              >
                {cat.title}
                <span className={`chevron ${collapsed[cat.title] ? 'collapsed' : ''}`}>
                  ▾
                </span>
              </div>
              <div
                className="sidebar-category-items"
                style={{
                  maxHeight: collapsed[cat.title] ? '0px' : `${cat.items.length * 40}px`,
                  overflow: 'hidden',
                }}
              >
                {cat.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                    onClick={onClose}
                  >
                    <span className="link-number">{item.num}</span>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
