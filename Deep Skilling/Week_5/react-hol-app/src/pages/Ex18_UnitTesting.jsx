import { Check, Clock } from 'lucide-react';

export default function Ex18() {
  const tests = [
    { name: 'should create the component', desc: 'Load CohortDetails component in isolation using shallow rendering', status: 'pass' },
    { name: 'should initialize the props', desc: 'Mount component, assign cohort object to props, verify with matchers', status: 'pass' },
    { name: 'should display cohort code in h3', desc: 'Mount component, find h3 element, verify cohort code text content', status: 'pass' },
    { name: 'should always render same html', desc: 'Capture and compare snapshot of the component', status: 'pass' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Testing</span>
          <span className="tag time"><Clock size="1em" /> 90 min</span>
        </div>
        <h1>Unit Testing</h1>
        <p>Write Jest + Enzyme unit tests for the CohortDetails component.</p>
        <div className="objectives-list">
          <span className="objective-chip">Jest framework</span>
          <span className="objective-chip">Enzyme library</span>
          <span className="objective-chip">describe() & test()</span>
          <span className="objective-chip">Snapshots</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Test Suite — "Cohort Details Component"</h4>

          <div style={{ marginTop: '16px' }}>
            {tests.map((t, i) => (
              <div key={i} className="list-item" style={{ cursor: 'default' }}>
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
                  <div className="item-title" style={{ color: 'var(--success)' }}>{t.name}</div>
                  <div className="item-subtitle">{t.desc}</div>
                </div>
                <span className="badge badge-ongoing">PASS</span>
              </div>
            ))}
          </div>

          <div className="card mt-24" style={{ padding: '16px' }}>
            <div className="flex items-center justify-between">
              <span className="text-sm">Test Suites: <strong style={{ color: 'var(--success)' }}>1 passed</strong>, 1 total</span>
              <span className="text-sm">Tests: <strong style={{ color: 'var(--success)' }}>4 passed</strong>, 4 total</span>
            </div>
          </div>
        </div>

        <div className="exercise-section mt-24">
          <h3>Test Code — CohortDetails.test.js</h3>
          <div className="code-block">
{`import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {

  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should initialize the props', () => {
    const cohort = CohortData[0];
    const wrapper = mount(
      <CohortDetails cohort={cohort} />
    );
    expect(wrapper.props().cohort).toEqual(cohort);
  });

  test('should display cohort code in h3', () => {
    const cohort = CohortData[0];
    const wrapper = mount(
      <CohortDetails cohort={cohort} />
    );
    const h3 = wrapper.find('h3');
    expect(h3.text()).toBe(cohort.code);
  });

  test('should always render same html', () => {
    const cohort = CohortData[0];
    const wrapper = shallow(
      <CohortDetails cohort={cohort} />
    );
    expect(wrapper).toMatchSnapshot();
  });

});`}
          </div>
        </div>

        <div className="exercise-section mt-24">
          <h3>Setup — setupTests.js</h3>
          <div className="code-block">
{`import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Check, Clock } from 'lucide-react';

configure({ adapter: new Adapter() });`}
          </div>
        </div>
      </div>
    </div>
  );
}
