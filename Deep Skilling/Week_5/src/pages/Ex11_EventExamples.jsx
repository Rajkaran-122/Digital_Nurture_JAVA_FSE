import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function Ex11() {
  const [counter, setCounter] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(null);
  const [clickMsg, setClickMsg] = useState('');

  const doIncrement = () => {
    setCounter(p => p + 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  const doDecrement = () => {
    setCounter(p => p - 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  const sayHello = () => {
    setClickMsg('Hello! The counter was incremented and a greeting was sent.');
    setTimeout(() => setClickMsg(''), 3000);
  };

  const handleIncrementAndHello = () => {
    doIncrement();
    sayHello();
  };

  const convertCurrency = () => {
    const rate = 0.011; // approx INR to EUR
    const val = parseFloat(inr);
    if (!isNaN(val)) {
      setEur((val * rate).toFixed(2));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Events</span>
          <span className="tag time"><Clock size="1em" /> 90 min</span>
        </div>
        <h1>Event Examples</h1>
        <p>Handle various events — click, synthetic events, multiple handlers, and currency conversion.</p>
        <div className="objectives-list">
          <span className="objective-chip">onClick handler</span>
          <span className="objective-chip">Synthetic events</span>
          <span className="objective-chip">Event arguments</span>
          <span className="objective-chip">Multiple handlers</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

          {/* Counter Section */}
          <div className="demo-area">
            <h4>Counter with Multiple Events</h4>
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div className={`counter-display ${pulse ? 'pulse' : ''}`}>
                {counter}
              </div>
              <div className="btn-group mt-24" style={{ justifyContent: 'center' }}>
                <button className="btn btn-secondary" onClick={doDecrement}>− Decrement</button>
                <button className="btn btn-primary" onClick={handleIncrementAndHello}>+ Increment</button>
              </div>
              {clickMsg && (
                <div className="alert alert-info mt-16" style={{ textAlign: 'left' }}>
                  💬 {clickMsg}
                </div>
              )}
            </div>

            <div className="divider" />

            <h4>Synthetic Event & Arguments</h4>
            <div className="btn-group mt-16">
              <button className="btn btn-secondary" onClick={() => setClickMsg('Welcome! ')}>
                Say Welcome
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  setClickMsg(`I was clicked! Button: ${e.target.textContent}`);
                  setTimeout(() => setClickMsg(''), 3000);
                }}
              >
                OnPress Event
              </button>
            </div>
          </div>

          {/* Currency Converter */}
          <div className="demo-area">
            <h4>Currency Converter — INR to EUR</h4>
            <div style={{ padding: '16px 0' }}>
              <div className="form-group">
                <label className="form-label">Amount in Indian Rupees (₹)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Enter amount in INR"
                  value={inr}
                  onChange={(e) => setInr(e.target.value)}
                />
              </div>

              <button className="btn btn-primary" onClick={convertCurrency} style={{ width: '100%' }}>
                Convert to Euro <ArrowRight size="1em" />
              </button>

              {eur !== null && (
                <div className="card mt-16" style={{ textAlign: 'center', padding: '24px' }}>
                  <div className="text-xs text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
                    Converted Amount
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: 800 }}>
                    €{eur}
                  </div>
                  <div className="text-xs text-muted mt-8">
                    ₹{parseFloat(inr).toLocaleString()} × 0.011 rate
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
