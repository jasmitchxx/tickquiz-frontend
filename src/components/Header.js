import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [accessGranted, setAccessGranted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const granted = localStorage.getItem('quizAccessGranted') === 'true';
    const progress = JSON.parse(localStorage.getItem('quizProgress')) || {};
    setAccessGranted(granted);
    setQuizFinished(progress.finished === true);
  }, []);

  const handleStartClick = () => {
    if (!accessGranted) {
      alert('?? Please complete payment before starting the quiz.');
      return;
    }

    navigate(quizFinished ? '/results' : '/start');
  };

  const handleQuizClick = (e) => {
    if (!accessGranted) {
      e.preventDefault();
      alert('?? Access denied. Please make payment first.');
    }
  };

  const navLinkStyle = {
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <header
      style={{
        backgroundColor: '#f5f5f5',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <img
        src="/tickquiz-logo.png"
        alt="TickQuiz Logo"
        style={{
          height: '50px',
          objectFit: 'contain',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      />

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
      >
        <button
          onClick={handleStartClick}
          style={{
            background: 'none',
            border: 'none',
            color: accessGranted ? '#007bff' : '#888',
            cursor: accessGranted ? 'pointer' : 'not-allowed',
            ...navLinkStyle,
          }}
        >
          ?? Start Quiz
        </button>

        <Link
          to="/quiz"
          onClick={handleQuizClick}
          style={{
            color: accessGranted ? '#007bff' : '#888',
            pointerEvents: accessGranted ? 'auto' : 'none',
            ...navLinkStyle,
          }}
        >
          ?? Quiz
        </Link>

        <Link to="/about" style={navLinkStyle}>
          ?? About
        </Link>

        <Link to="/contact" style={navLinkStyle}>
          ?? Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;