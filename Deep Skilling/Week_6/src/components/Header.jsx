import { useLocation } from 'react-router-dom';

const titleMap = {
  '/': 'Dashboard',
  '/ex14': 'Ex 14 · Context Theme',
  '/ex15': 'Ex 15 · Ticket Raising',
  '/ex16': 'Ex 16 · Mail Register',
  '/ex17': 'Ex 17 · Fetch User',
  '/ex18': 'Ex 18 · Unit Testing',
  '/ex19': 'Ex 19 · Mock Testing',
};

export default function Header({ onMenuClick }) {
  const location = useLocation();
  const pathBase = '/' + (location.pathname.split('/')[1] || '');
  const title = titleMap[pathBase] || 'ReactJS HOL';

  return (
    <header className="content-header">
      <div className="flex items-center gap-12">
        <button
          className="btn-ghost mobile-menu-btn"
          onClick={onMenuClick}
          style={{ display: 'none' }}
        >
          ☰
        </button>
        <h2>{title}</h2>
      </div>
      <div className="breadcrumb">
        <span>Week 6</span>
        <span>›</span>
        <span style={{ color: 'var(--text-secondary)' }}>
          {pathBase === '/' ? 'Home' : title}
        </span>
      </div>
    </header>
  );
}
