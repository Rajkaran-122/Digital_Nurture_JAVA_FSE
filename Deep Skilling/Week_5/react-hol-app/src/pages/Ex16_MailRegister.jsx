import { useState } from 'react';
import { Check, Clock, MailCheck } from 'lucide-react';

export default function Ex16() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field, value) => {
    const errs = { ...errors };
    switch (field) {
      case 'name':
        if (value.length < 5) errs.name = 'Name must have at least 5 characters';
        else delete errs.name;
        break;
      case 'email':
        if (!value.includes('@') || !value.includes('.')) errs.email = 'Email must contain @ and .';
        else delete errs.email;
        break;
      case 'password':
        if (value.length < 8) errs.password = 'Password must have at least 8 characters';
        else delete errs.password;
        break;
    }
    setErrors(errs);
    return errs;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (touched[field]) validate(field, value);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validate(field, form[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, password: true };
    setTouched(allTouched);
    const e1 = validate('name', form.name);
    const e2 = validate('email', form.email);
    const e3 = validate('password', form.password);
    const allErrors = { ...e1, ...e2, ...e3 };
    if (Object.keys(allErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const isValid = (field) => touched[field] && !errors[field] && form[field].length > 0;

  if (submitted) {
    return (
      <div className="page-container">
        <div className="page-header">
          <div className="tag-row">
            <span className="tag">Form Validation</span>
            <span className="tag time"><Clock size="1em" /> 60 min</span>
          </div>
          <h1>Mail Register</h1>
        </div>
        <div className="demo-area" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <MailCheck size={64} color="var(--success)" style={{ margin: '0 auto' }} />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Registration Successful!</h3>
          <p className="text-muted text-sm mb-24">Your account has been created.</p>
          <div className="card" style={{ padding: '20px', textAlign: 'left' }}>
            <dl className="detail-grid">
              <dt>Name</dt><dd>{form.name}</dd>
              <dt>Email</dt><dd>{form.email}</dd>
              <dt>Password</dt><dd>{'•'.repeat(form.password.length)}</dd>
            </dl>
          </div>
          <button className="btn btn-secondary mt-24" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', password: '' }); setTouched({}); setErrors({}); }}>
            Register Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Form Validation</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Mail Register</h1>
        <p>Validate name, email, and password fields in real-time with event handlers.</p>
        <div className="objectives-list">
          <span className="objective-chip">Form validation</span>
          <span className="objective-chip">Controlled inputs</span>
          <span className="objective-chip">handleChange</span>
          <span className="objective-chip">handleSubmit</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area" style={{ maxWidth: '500px' }}>
          <h4>Registration Form</h4>
          <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your name (min 5 chars)"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                style={{
                  borderColor: touched.name ? (errors.name ? 'var(--error)' : 'var(--success)') : undefined,
                }}
              />
              {touched.name && errors.name && <div className="form-error">{errors.name}</div>}
              {isValid('name') && <div className="form-success"><Check size="1em" /> Valid name</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-input"
                placeholder="example@domain.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                style={{
                  borderColor: touched.email ? (errors.email ? 'var(--error)' : 'var(--success)') : undefined,
                }}
              />
              {touched.email && errors.email && <div className="form-error">{errors.email}</div>}
              {isValid('email') && <div className="form-success"><Check size="1em" /> Valid email</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-input"
                placeholder="Enter password (min 8 chars)"
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
                style={{
                  borderColor: touched.password ? (errors.password ? 'var(--error)' : 'var(--success)') : undefined,
                }}
              />
              {touched.password && errors.password && <div className="form-error">{errors.password}</div>}
              {isValid('password') && <div className="form-success"><Check size="1em" /> Valid password</div>}

              {form.password.length > 0 && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ height: '3px', background: 'var(--bg-glass)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${Math.min(100, (form.password.length / 8) * 100)}%`,
                      background: form.password.length >= 8 ? 'var(--success)' : form.password.length >= 5 ? 'var(--warning)' : 'var(--error)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                    }} />
                  </div>
                  <div className="text-xs text-muted mt-4">
                    {form.password.length < 5 ? 'Weak' : form.password.length < 8 ? 'Medium' : 'Strong'} • {form.password.length}/8 characters
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
