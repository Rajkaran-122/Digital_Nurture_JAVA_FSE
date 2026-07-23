import { useState } from 'react';
import { Clock, Check, Package, Zap } from 'lucide-react';

export default function Ex19() {
  const [repos, setRepos] = useState([
    'react-awesome-app', 'node-api-starter', 'python-ml-toolkit',
    'css-animation-lib', 'typescript-utils',
  ]);
  const [showMocked, setShowMocked] = useState(false);

  const mockedRepos = ['mocked-repo-1', 'mocked-repo-2', 'mocked-repo-3'];

  const testResult = {
    name: 'should return repository names for techiesyed',
    status: 'pass',
    desc: 'Mocked axios.get to return dummy data. Verified GitClient.getRepositories() returns mocked repos instead of real API call.',
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Mocking</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Mock Testing</h1>
        <p>Mock axios calls and test the GitClient module using Jest spies.</p>
        <div className="objectives-list">
          <span className="objective-chip">Jest mocking</span>
          <span className="objective-chip">axios mock</span>
          <span className="objective-chip">Isolation testing</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

          {/* App Output */}
          <div className="demo-area">
            <div className="flex items-center justify-between mb-16">
              <h4>App Output — GitHub Repos</h4>
              <div className="btn-group">
                <button
                  className={`btn btn-sm ${!showMocked ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setShowMocked(false)}
                >
                  Real Data
                </button>
                <button
                  className={`btn btn-sm ${showMocked ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setShowMocked(true)}
                >
                  Mocked Data
                </button>
              </div>
            </div>

            {(showMocked ? mockedRepos : repos).map((repo) => (
              <div key={repo} className="list-item" style={{ cursor: 'default' }}>
                <div className="item-icon"><Package size="1em" /></div>
                <div className="item-content">
                  <div className="item-title">{repo}</div>
                  <div className="item-subtitle">{showMocked ? 'Mocked via jest.mock()' : 'From api.github.com'}</div>
                </div>
              </div>
            ))}

            {showMocked && (
              <div className="alert alert-info mt-16">
                <Zap size="1em" /> These results come from <code className="font-mono">jest.mock('axios')</code> — no actual API calls made!
              </div>
            )}
          </div>

          {/* Test Result */}
          <div className="demo-area">
            <h4>Test Suite — "Git Client Tests"</h4>

            <div className="list-item mt-16" style={{ cursor: 'default' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(74, 222, 128, 0.1)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', flexShrink: 0,
                border: '1px solid rgba(74, 222, 128, 0.2)',
              }}>
                <Check size="1em" />
              </div>
              <div className="item-content">
                <div className="item-title" style={{ color: 'var(--success)' }}>{testResult.name}</div>
                <div className="item-subtitle">{testResult.desc}</div>
              </div>
              <span className="badge badge-ongoing">PASS</span>
            </div>

            <div className="card mt-16" style={{ padding: '16px' }}>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tests: <strong style={{ color: 'var(--success)' }}>1 passed</strong>, 1 total</span>
                <span className="text-sm text-muted">Time: 0.42s</span>
              </div>
            </div>

            <div className="divider" />

            <h4>Test Code</h4>
            <div className="code-block" style={{ marginTop: '12px' }}>
{`import axios from 'axios';
import GitClient from './GitClient';
import { Check, Package, Clock, Zap } from 'lucide-react';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', 
    async () => {
      const mockData = {
        data: [
          { name: 'mocked-repo-1' },
          { name: 'mocked-repo-2' },
          { name: 'mocked-repo-3' },
        ],
      };

      axios.get.mockResolvedValue(mockData);

      const repos = await GitClient
        .getRepositories('techiesyed');
      
      expect(repos).toEqual(mockData.data);
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/users/techiesyed/repos'
      );
    }
  );
});`}
            </div>

            <div className="divider" />

            <h4>GitClient Module</h4>
            <div className="code-block" style={{ marginTop: '12px' }}>
{`import axios from 'axios';

class GitClient {
  static async getRepositories(username) {
    const response = await axios.get(
      \`https://api.github.com/users/\${username}/repos\`
    );
    return response.data;
  }
}

export default GitClient;`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
