import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropMenuRealEstatement from './DropMenuRealEstatement';
import './stylesForAdditionalComponents/Navbar.css';

function Navbar({open, setOpen}) {

    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false); 
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <Container>
            <nav className="navbar"> 
                <ul className={click ? 'nav-menu active': 'nav-menu'} > 
                    <li className="nav-item"> 
                        <Link to='/TimeShare' className="nav-links" onClick={closeMobileMenu}>Timeshare investment</Link> 
                    </li> 
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                        <Link to='/RealEstate' className="nav-links" 
                        > 
                            Real estate investment <i className='fas fa-caret-down'/> 
                        </Link> 
                        {dropdown && <DropMenuRealEstatement />} 
                    </li> 
                    <li className="nav-item" onClick={closeMobileMenu}> 
                        <Link to='/404' className="nav-links">Contacts</Link> 
                    </li> 
                    <li className="nav-item"> 
                        <Link to='/FAQ' className="nav-links" onClick={closeMobileMenu}>FAQ</Link> 
                    </li> 
                </ul> 
            </nav>

        </Container>
    )
}

export default Navbar

const Container = styled.div``