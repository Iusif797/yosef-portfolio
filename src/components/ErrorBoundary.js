import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#fff',
          fontFamily: "'Inter', sans-serif",
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Something went wrong
          </h1>
          <p style={{
            color: '#a1a1aa',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '400px',
            lineHeight: 1.6,
          }}>
            An unexpected error occurred. Please try reloading the page.
          </p>
          <button
            onClick={this.handleReload}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#fff',
              background: '#6366f1',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.85'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
