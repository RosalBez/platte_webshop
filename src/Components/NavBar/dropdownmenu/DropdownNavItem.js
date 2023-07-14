import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import shop from '../../../assets/Specifics/shop.svg';
import './DropdownNavItem.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (menuItem) => {
        console.log(`Geselecteerd menu-item: ${menuItem}`);
        toggleDropdown();
    };

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
                <Link to='/products'>
                    <img src={shop} alt="shop" className='shop' />
                </Link>
            </div>
            {isOpen && (
                <ul className="dropdown-menu" onMouseLeave={handleMouseLeave}>
                    <li onClick={() => handleItemClick("Armbanden")}>
                        <Link to='/products'>Armbanden</Link>
                    </li>
                    <li onClick={() => handleItemClick("Kettingen")}>
                        <Link to='/products'>Kettingen</Link>
                    </li>
                    <li onClick={() => handleItemClick("Brilkoorden")}>
                        <Link to='/products'>Brilkoorden</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
