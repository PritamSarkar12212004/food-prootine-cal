import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage and attach attribute
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved : (prefersDark ? 'dark' : 'light');
    const shouldDark = initial === 'dark';
    setIsDark(shouldDark);
    document.documentElement.setAttribute('data-theme', shouldDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const navItems = [
    { path: '/', label: 'Calculator' },
    { path: '/image-analysis', label: 'AI Analysis' }
  ];

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/" className="logo">
          NutriScan
        </Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="btn btn-secondary btn-sm" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
