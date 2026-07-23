import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const exercises = [
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
        <h1>Week 6: React Masterclass</h1>
        <p>
          6 hands-on exercises built by Rajkaran covering advanced React fundamentals — from
          Context API, forms, REST APIs, to testing.
        </p>
        <div className="home-stats">
          <div className="home-stat">
            <div className="stat-value">6</div>
            <div className="stat-label">Exercises</div>
          </div>
          <div className="home-stat">
            <div className="stat-value">~18h</div>
            <div className="stat-label">Total Time</div>
          </div>
          <div className="home-stat">
            <div className="stat-value">3</div>
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
