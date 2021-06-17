import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar'
import NavAuthorisation from './NavAuthorisation'
import logo from '../../photo/logo.svg'

function Header() {

    const[click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Container>
                <Logo>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" onClick={() => setOpen(false)}></img>
                    </Link>
                </Logo>
            <Navbar open={open} setOpen={setOpen}/>
            <NavAuthorisation/>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    position: fixed;
    background-color: #054163;
    top: 0;
    left: 0;
    // padding: 20px 0;
    align-items: center;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    z-index: 100;
`

const Logo = styled.div`
    width: 112px;
    height: 63px;
    padding-left: 50px;
`
