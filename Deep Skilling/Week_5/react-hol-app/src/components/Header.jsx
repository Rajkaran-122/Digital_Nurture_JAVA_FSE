import { useLocation } from 'react-router-dom';

const titleMap = {
  '/': 'Dashboard',
  '/ex01': 'Ex 01 · First React App',
  '/ex02': 'Ex 02 · Student Portal',
  '/ex03': 'Ex 03 · Score Calculator',
  '/ex04': 'Ex 04 · Blog App',
  '/ex05': 'Ex 05 · Cohort Dashboard',
  '/ex06': 'Ex 06 · Trainers App',
  '/ex07': 'Ex 07 · Shopping App',
  '/ex08': 'Ex 08 · Counter App',
  '/ex09': 'Ex 09 · Cricket App',
  '/ex10': 'Ex 10 · Office Rental',
  '/ex11': 'Ex 11 · Event Examples',
  '/ex12': 'Ex 12 · Ticket Booking',
  '/ex13': 'Ex 13 · Blogger App',
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
        <span>Week 5</span>
        <span>›</span>
        <span style={{ color: 'var(--text-secondary)' }}>
          {pathBase === '/' ? 'Home' : title}
        </span>
      </div>
    </header>
  );
}
