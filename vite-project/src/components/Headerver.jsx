import { Link } from 'react-router-dom';
import { FaBars, FaPlus, FaHome, FaTrophy, FaDatabase, FaProjectDiagram, FaCode, FaComments, FaGraduationCap, FaEllipsisH } from 'react-icons/fa';
import './Headerver.css';

const Headerver = ({ collapsed, toggleMenu }) => {
    return (
        <div className={`headerver ${collapsed ? 'collapsed' : ''}`}>
            <div className="headerver__top">
                <button className="menu-button" onClick={toggleMenu}>
                    <FaBars />
                </button>
                {!collapsed && <div className="logo">Logo</div>}
            </div>
            <div className="headerver__create">
                <button className="create-button">
                    <FaPlus className="menu-icon" />
                    {!collapsed && 'Create'}
                </button>
            </div>
            <nav className="headerver__menu">
                <ul>
                    <li>
                        <Link to="/" className="menu-link">
                            <FaHome className="menu-icon" />
                            {!collapsed && <span>Inicio</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/competitions" className="menu-link">
                            <FaTrophy className="menu-icon" />
                            {!collapsed && <span>Competiciones</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/RankingPage" className="menu-link">
                            <FaDatabase className="menu-icon" />
                            {!collapsed && <span>Ranking</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Submit" className="menu-link">
                            <FaProjectDiagram className="menu-icon" />
                            {!collapsed && <span>Submit</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/problems" className="menu-link">
                            <FaCode className="menu-icon" />
                            {!collapsed && <span>Problemas</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Foro" className="menu-link">
                            <FaComments className="menu-icon" />
                            {!collapsed && <span>Foro</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/learn" className="menu-link">
                            <FaGraduationCap className="menu-icon" />
                            {!collapsed && <span>Aprender</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/more" className="menu-link">
                            <FaEllipsisH className="menu-icon" />
                            {!collapsed && <span>Más</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="headerver__events">
                {!collapsed && <span>Ver eventos ahora</span>}
            </div>
        </div>
    );
};

export default Headerver;
