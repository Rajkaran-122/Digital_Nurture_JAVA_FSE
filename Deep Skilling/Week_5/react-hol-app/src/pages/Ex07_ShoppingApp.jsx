import { useState } from 'react';
import { shoppingItems as initialItems } from '../data/mockData';
import { RefreshCw, Clock, ShoppingCart } from 'lucide-react';

function CartItem({ itemName, price, qty, onInc, onDec, onRemove }) {
  return (
    <div className="card" style={{ padding: '16px 20px', marginBottom: '8px' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12" style={{ flex: 1 }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
            background: 'var(--bg-glass)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '20px', border: '1px solid var(--border-color)',
          }}>
            <ShoppingCart size="1em" color="var(--text-secondary)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>{itemName}</div>
            <div className="text-muted text-xs">₹{price.toLocaleString()} each</div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          {/* Quantity controls */}
          <div className="flex items-center gap-4" style={{
            background: 'var(--bg-glass)', borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)', overflow: 'hidden',
          }}>
            <button onClick={onDec} style={{
              background: 'none', border: 'none', color: 'var(--text-secondary)',
              padding: '4px 10px', cursor: 'pointer', fontFamily: 'var(--font-sans)',
              fontSize: '14px', fontWeight: 600,
            }}>−</button>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
              minWidth: '24px', textAlign: 'center', padding: '4px 0',
            }}>{qty}</span>
            <button onClick={onInc} style={{
              background: 'none', border: 'none', color: 'var(--text-secondary)',
              padding: '4px 10px', cursor: 'pointer', fontFamily: 'var(--font-sans)',
              fontSize: '14px', fontWeight: 600,
            }}>+</button>
          </div>

          {/* Line total */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px',
            minWidth: '100px', textAlign: 'right',
          }}>
            ₹{(price * qty).toLocaleString()}
          </div>

          {/* Remove */}
          <button onClick={onRemove} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-dim)', fontSize: '16px', padding: '4px',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--error)'}
          onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Ex07() {
  const [cart, setCart] = useState(
    initialItems.map((item, i) => ({ ...item, id: i, qty: 1 }))
  );

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Props</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Shopping App</h1>
        <p>Pass cart item data through props from parent OnlineShopping component to Cart component.</p>
        <div className="objectives-list">
          <span className="objective-chip">Default Props</span>
          <span className="objective-chip">State vs Props</span>
          <span className="objective-chip">ReactDOM.render</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <div className="flex items-center justify-between mb-16">
            <h4>Shopping Cart ({itemCount} items)</h4>
            {cart.length < initialItems.length && (
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setCart(initialItems.map((item, i) => ({ ...item, id: i, qty: 1 })))}
              >
                <RefreshCw size="1em" /> Reset Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="card" style={{ padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px', color: 'var(--text-dim)', opacity: 0.5 }}><ShoppingCart size="1em" /></div>
              <p className="text-muted text-sm">Your cart is empty</p>
              <button
                className="btn btn-secondary btn-sm mt-16"
                onClick={() => setCart(initialItems.map((item, i) => ({ ...item, id: i, qty: 1 })))}
              >
                Add Items Back
              </button>
            </div>
          ) : (
            <>
              {/* Column headers */}
              <div className="flex items-center justify-between text-xs text-muted" style={{ padding: '0 20px 8px' }}>
                <span>Product</span>
                <div className="flex items-center gap-12">
                  <span style={{ minWidth: '80px', textAlign: 'center' }}>Qty</span>
                  <span style={{ minWidth: '100px', textAlign: 'right' }}>Total</span>
                  <span style={{ width: '24px' }}></span>
                </div>
              </div>

              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onInc={() => updateQty(item.id, 1)}
                  onDec={() => updateQty(item.id, -1)}
                  onRemove={() => removeItem(item.id)}
                />
              ))}

              <div className="divider" />

              <div style={{ padding: '0 20px' }}>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-muted">Subtotal ({itemCount} items)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '15px' }}>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-muted">Shipping</span>
                  <span className="text-sm" style={{ color: 'var(--success)' }}>Free</span>
                </div>
                <div className="divider" style={{ margin: '12px 0' }} />
                <div className="flex items-center justify-between">
                  <span style={{ fontWeight: 700, fontSize: '16px' }}>Total</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '24px',
                  }}>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
