import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderBottom: '1px solid #ddd',
      marginBottom: '2rem'
    }}>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/start">Start Quiz</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;