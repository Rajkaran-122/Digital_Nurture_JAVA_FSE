import { useState } from 'react';
import { books, blogs, courses } from '../data/mockData';
import { BookOpen, Book, PenTool, Clock, GraduationCap, FileText } from 'lucide-react';

export default function Ex13() {
  const [activeTab, setActiveTab] = useState('books');

  const renderContent = () => {
    switch (activeTab) {
      case 'books':
        return (
          <div>
            {books.map((b) => (
              <div key={b.id} className="list-item" style={{ cursor: 'default' }}>
                <div className="item-icon"><BookOpen size="1em" /></div>
                <div className="item-content">
                  <div className="item-title">{b.title}</div>
                  <div className="item-subtitle">by {b.author}</div>
                </div>
                <span className="tag">{b.genre}</span>
              </div>
            ))}
          </div>
        );
      case 'blogs':
        return (
          <div>
            {blogs.map((b) => (
              <div key={b.id} className="list-item" style={{ cursor: 'default' }}>
                <div className="item-icon"><FileText size="1em" /></div>
                <div className="item-content">
                  <div className="item-title">{b.title}</div>
                  <div className="item-subtitle">by {b.author} • {b.date}</div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'courses':
        return (
          <div>
            {courses.map((c) => (
              <div key={c.id} className="list-item" style={{ cursor: 'default' }}>
                <div className="item-icon"><GraduationCap size="1em" /></div>
                <div className="item-content">
                  <div className="item-title">{c.title}</div>
                  <div className="item-subtitle">{c.instructor} • {c.duration}</div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Inline conditional: show count
  const getCount = () => {
    if (activeTab === 'books') return books.length;
    if (activeTab === 'blogs') return blogs.length;
    return courses.length;
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="tag-row">
          <span className="tag">Lists & Keys</span>
          <span className="tag time"><Clock size="1em" /> 60 min</span>
        </div>
        <h1>Blogger App</h1>
        <p>Display Books, Blogs & Courses using multiple conditional rendering techniques.</p>
        <div className="objectives-list">
          <span className="objective-chip">if/else rendering</span>
          <span className="objective-chip">Switch statement</span>
          <span className="objective-chip">Ternary operator</span>
          <span className="objective-chip">Logical && operator</span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="demo-area">
          <h4>Conditional Rendering — {getCount()} items</h4>

          <div className="nav-tabs mt-16">
            {['books', 'blogs', 'courses'].map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {renderContent()}

          {/* Inline conditional rendering demo */}
          {activeTab === 'books' && (
            <div className="alert alert-info mt-16">
              <Book size="1em" /> Showing Book Details — rendered using <code className="font-mono">switch</code> statement
            </div>
          )}
          {activeTab === 'blogs' && (
            <div className="alert alert-info mt-16">
              <PenTool size="1em" /> Showing Blog Details — rendered using <code className="font-mono">&&</code> logical operator
            </div>
          )}
          {activeTab === 'courses' && (
            <div className="alert alert-info mt-16">
              <GraduationCap size="1em" /> Showing Course Details — rendered using <code className="font-mono">ternary</code> operator
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
