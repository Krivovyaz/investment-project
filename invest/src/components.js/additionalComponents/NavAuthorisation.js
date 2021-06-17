import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function NavAuthorisation() {
    return (
        <Container>

            <Link to="/Authorisation">
                <SignUpBtn>Sign up</SignUpBtn>
            </Link>

            <Link to="/Authorisation">
                <LogInBtn>Log in</LogInBtn>
            </Link>
            
        </Container>
    )
}

export default NavAuthorisation

const Container = styled.div`

display: flex;

a{
    text-decoration: none;
    font-size: 18px;
    color: #fff;

}


`
const SignUpBtn = styled.div`
    background-color: #00aae1;
    padding: 17px 30px;
    outline: none;
    border-radius: 5px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }

`

const LogInBtn = styled.div`
    padding: 15px 36px;
    border: 2px solid #00aae1;
    border-radius: 5px;
    margin: 0 50px 0 20px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
        border: 2px solid #35c4f2;
    }
`
