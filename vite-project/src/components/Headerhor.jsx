import { Link } from 'react-router-dom';
import './Headerhor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Headerhor = ({ isCollapsed }) => {
  return (
    <header className={`header-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="buttons-container">
        <Link to="/login" className="button sign-in-button">Sign In</Link>
        <Link to="/signup" className="button register-button">Register</Link>
      </div>
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass' />
      </div>
    </header>
  );
};

export default Headerhor;
