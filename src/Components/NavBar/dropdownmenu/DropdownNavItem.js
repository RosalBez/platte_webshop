import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DropdownNavItem.css';

const DropdownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (menuItem) => {
        console.log(`Geselecteerd menu-item: ${menuItem}`);
        toggleDropdown();
        if (menuItem === 'Log uit') {
            props.onLogout();
        }
        }


    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleMouseMovement = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMovement);
        return () => {
            document.removeEventListener('mousemove', handleMouseMovement);
        };
    }, []);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-toggle" onMouseEnter={handleMouseEnter}>
                <Link to={props.menuLink}>
                    <img src={props.image} alt={props.title} className='image' />
                </Link>
            </div>
            {isOpen && (
                <ul className="dropdown-menu" onMouseLeave={handleMouseLeave}>
                    {props.menuItems.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item)}>
                            <Link to={`/${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
