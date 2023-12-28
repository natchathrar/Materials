import React, { useEffect, useState } from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setMenuActive(screenWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className={`navigation ${isMenuActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a>
                            <span className="icon"><i className="bx-solid bx-house"></i></span>
                            <span className="title"></span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link to={'/periodic'}>
                                <span className="icon"><i className='bx bx-table'></i></span>
                                <span className="title">Periodic Table</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a >
                            <Link to={'/materials'}>
                                <span className="icon"><i className='bx bx-detail'></i></span>
                                <span className="title">Materials</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a >
                            <Link to={'/molecules'}>
                                <span className="icon"><i className='bx bx-paste'></i></span>
                                <span className="title">Molecules</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className='bx bx-cog'></i></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className='bx bx-log-out bx-rotate-180'></i></span>
                            <span className="title">SignOut</span>
                        </a>
                    </li>
                </ul>
                {/* <div className="toggle d-flex align-items-center justify-content-between" onClick={toggleMenu}>
                    <i className={`bx ${isMenuActive ? 'bx-menu-alt-right' : 'bx-menu'} text-white fs-1`}></i>
                    <span className='fs-2 ms-3 text-white'>Materials</span>
                </div> */}

                <div className={`toggle d-flex align-items-center justify-content-between ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <i className={`bx ${isMenuActive ? 'bx-menu-alt-right' : 'bx-menu'} text-white fs-1`}></i>
                    <span className='fs-2 ms-3 text-white'>Materials</span>
                </div>

            </div>
        </>
    );
};

export default Sidebar;
