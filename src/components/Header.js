import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const navLinkStyle = {
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <header
      style={{
        backgroundColor: '#f5f5f5',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', // ? centers vertically
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
        <nav aria-label="Main navigation">
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center', // ? extra safeguard for vertical alignment
            }}
          >
            <li>
              <Link to="/about" style={navLinkStyle}>
                {"\u2139"} About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={navLinkStyle}>
                {"\u2709"} Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
