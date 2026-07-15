import { useState, useEffect } from 'react';
import { RefreshCw, AlertTriangle, Clock } from 'lucide-react';

export default function Ex04() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Lifecycle</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Blog App</h1>
        <p>Fetch posts from JSONPlaceholder API using componentDidMount lifecycle hook.</p>
        <div className="objectives-list">
          <span className="objective-chip">componentDidMount</span>
          <span className="objective-chip">componentDidCatch</span>
          <span className="objective-chip">Fetch API</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Live Output — Blog Posts</h4>
          {error && <div className="alert alert-error"><AlertTriangle size="1em" /> {error}</div>}

          {loading ? (
            <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card" style={{ padding: '24px' }}>
                  <div className="skeleton" style={{ height: '16px', width: '60%', marginBottom: '12px' }} />
                  <div className="skeleton" style={{ height: '12px', width: '100%', marginBottom: '6px' }} />
                  <div className="skeleton" style={{ height: '12px', width: '85%', marginBottom: '6px' }} />
                  <div className="skeleton" style={{ height: '12px', width: '70%' }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {posts.map((post) => (
                <div key={post.id} className="card" style={{ padding: '24px' }}>
                  <div className="font-mono text-xs text-muted" style={{ marginBottom: '8px' }}>
                    Post #{post.id}
                  </div>
                  <h3 style={{
                    fontSize: '15px', fontWeight: 600, lineHeight: 1.4,
                    marginBottom: '10px', textTransform: 'capitalize',
                  }}>
                    {post.title}
                  </h3>
                  <p className="text-secondary" style={{ fontSize: '12px', lineHeight: 1.7 }}>
                    {post.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <button className="btn btn-secondary" onClick={loadPosts} disabled={loading}>
              {loading ? <span className="spinner" style={{ width: 14, height: 14 }} /> : '<RefreshCw size="1em" />'} Reload Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
