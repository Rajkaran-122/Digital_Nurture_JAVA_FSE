import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const exercises = [
  { num: '01', title: 'First React App', desc: 'Set up a React environment and create your first app with create-react-app.', tag: 'Setup', time: '30 min', path: '/ex01' },
  { num: '02', title: 'Student Portal', desc: 'Build Home, About & Contact class components for a student management portal.', tag: 'Components', time: '30 min', path: '/ex02' },
  { num: '03', title: 'Score Calculator', desc: 'Create a function component that calculates and displays student average scores.', tag: 'Functions', time: '30 min', path: '/ex03' },
  { num: '04', title: 'Blog App', desc: 'Fetch posts from JSONPlaceholder API using componentDidMount lifecycle hook.', tag: 'Lifecycle', time: '60 min', path: '/ex04' },
  { num: '05', title: 'Cohort Dashboard', desc: 'Style cohort details using CSS Modules with conditional inline styles.', tag: 'CSS Modules', time: '30 min', path: '/ex05' },
  { num: '06', title: 'Trainers App', desc: 'Implement React Router with trainer list, detail pages & URL parameters.', tag: 'Router', time: '60 min', path: '/ex06' },
  { num: '07', title: 'Shopping App', desc: 'Pass cart items and prices through props between components.', tag: 'Props', time: '60 min', path: '/ex07' },
  { num: '08', title: 'Counter App', desc: 'Track mall entry & exit counts using React state with increment/decrement.', tag: 'State', time: '60 min', path: '/ex08' },
  { num: '09', title: 'Cricket App', desc: 'Use ES6 map, filter, destructuring & array merge with player data.', tag: 'ES6', time: '60 min', path: '/ex09' },
  { num: '10', title: 'Office Rental', desc: 'Use JSX to create office listings with conditional rent-based coloring.', tag: 'JSX', time: '60 min', path: '/ex10' },
  { num: '11', title: 'Event Examples', desc: 'Handle click events, synthetic events, and build a currency converter.', tag: 'Events', time: '90 min', path: '/ex11' },
  { num: '12', title: 'Ticket Booking', desc: 'Conditional rendering with login/logout flow for guest vs user views.', tag: 'Conditional', time: '60 min', path: '/ex12' },
  { num: '13', title: 'Blogger App', desc: 'Display Book, Blog & Course details using multiple conditional rendering ways.', tag: 'Lists & Keys', time: '60 min', path: '/ex13' },
  { num: '14', title: 'Context Theme', desc: 'Use React Context API to share light/dark theme across nested components.', tag: 'Context API', time: '30 min', path: '/ex14' },
  { num: '15', title: 'Ticket Raising', desc: 'Build a complaint registration form with reference number generation.', tag: 'Forms', time: '60 min', path: '/ex15' },
  { num: '16', title: 'Mail Register', desc: 'Validate name, email & password fields with real-time form validation.', tag: 'Validation', time: '60 min', path: '/ex16' },
  { num: '17', title: 'Fetch User', desc: 'Consume REST API to fetch and display a random user profile.', tag: 'REST API', time: '60 min', path: '/ex17' },
  { num: '18', title: 'Unit Testing', desc: 'Write Jest + Enzyme unit tests for CohortDetails component.', tag: 'Testing', time: '90 min', path: '/ex18' },
  { num: '19', title: 'Mock Testing', desc: 'Mock axios calls to test GitClient module with Jest spies.', tag: 'Mocking', time: '60 min', path: '/ex19' },
];

export default function Home() {
  return (
    <div className="page-container">
      <div className="home-hero">
        <h1>ReactJS Labs</h1>
        <p>
          19 hands-on exercises covering React fundamentals — from setup
          to routing, state management, Context API, forms, REST APIs, and testing.
        </p>
        <div className="home-stats">
          <div className="home-stat">
            <div className="stat-value">19</div>
            <div className="stat-label">Exercises</div>
          </div>
          <div className="home-stat">
            <div className="stat-value">~18h</div>
            <div className="stat-label">Total Time</div>
          </div>
          <div className="home-stat">
            <div className="stat-value">9</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="home-stat">
            <div className="stat-value">React</div>
            <div className="stat-label">Technology</div>
          </div>
        </div>
      </div>

      <div className="exercises-grid">
        {exercises.map((ex) => (
          <Link to={ex.path} className="exercise-card" key={ex.num}>
            <div className="exercise-card-number">EX—{ex.num}</div>
            <h3>{ex.title}</h3>
            <p>{ex.desc}</p>
            <div className="exercise-card-footer">
              <span className="tag">{ex.tag}</span>
              <span className="tag time"><Clock size="1em" /> {ex.time}</span>
              <span className="arrow"><ArrowRight size="1em" /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
