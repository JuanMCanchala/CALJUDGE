import React, { useState } from 'react';
import { FaBars, FaPlus, FaHome, FaTrophy, FaDatabase, FaProjectDiagram, FaCode, FaComments, FaGraduationCap, FaEllipsisH } from 'react-icons/fa';
import './Headerver.css';

const Headerver = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };

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
                        <FaHome className="menu-icon" />
                        {!collapsed && <span>Home</span>}
                    </li>
                    <li>
                        <FaTrophy className="menu-icon" />
                        {!collapsed && <span>Competitions</span>}
                    </li>
                    <li>
                        <FaDatabase className="menu-icon" />
                        {!collapsed && <span>Datasets</span>}
                    </li>
                    <li>
                        <FaProjectDiagram className="menu-icon" />
                        {!collapsed && <span>Models</span>}
                    </li>
                    <li>
                        <FaCode className="menu-icon" />
                        {!collapsed && <span>Code</span>}
                    </li>
                    <li>
                        <FaComments className="menu-icon" />
                        {!collapsed && <span>Discussions</span>}
                    </li>
                    <li>
                        <FaGraduationCap className="menu-icon" />
                        {!collapsed && <span>Learn</span>}
                    </li>
                    <li>
                        <FaEllipsisH className="menu-icon" />
                        {!collapsed && <span>More</span>}
                    </li>
                </ul>
            </nav>
            <div className="headerver__events">
                {!collapsed && <span>View Active Events</span>}
            </div>
        </div>
    );
};

export default Headerver;