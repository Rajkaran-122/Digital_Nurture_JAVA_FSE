import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const categories = [
  {
    title: 'Basics',
    items: [
      { num: '01', label: 'First React App', path: '/ex01' },
      { num: '02', label: 'Student Portal', path: '/ex02' },
      { num: '03', label: 'Score Calculator', path: '/ex03' },
    ],
  },
  {
    title: 'Lifecycle & Styling',
    items: [
      { num: '04', label: 'Blog App', path: '/ex04' },
      { num: '05', label: 'Cohort Dashboard', path: '/ex05' },
    ],
  },
  {
    title: 'Routing',
    items: [
      { num: '06', label: 'Trainers App', path: '/ex06' },
    ],
  },
  {
    title: 'State & Props',
    items: [
      { num: '07', label: 'Shopping App', path: '/ex07' },
      { num: '08', label: 'Counter App', path: '/ex08' },
    ],
  },
  {
    title: 'ES6 & JSX',
    items: [
      { num: '09', label: 'Cricket App', path: '/ex09' },
      { num: '10', label: 'Office Rental', path: '/ex10' },
    ],
  },
  {
    title: 'Events & Rendering',
    items: [
      { num: '11', label: 'Event Examples', path: '/ex11' },
      { num: '12', label: 'Ticket Booking', path: '/ex12' },
      { num: '13', label: 'Blogger App', path: '/ex13' },
    ],
  },
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
            <div className="sidebar-logo-icon">R</div>
            <div className="sidebar-logo-text">
              <h1>ReactJS HOL</h1>
              <span>Week 5 · 19 Labs</span>
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
