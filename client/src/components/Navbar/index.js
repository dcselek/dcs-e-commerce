import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: solid 1px #4a5568;
    line-height: 2px;
    
`
const LeftSide = styled.div`
    display: flex;
`

const RightSide = styled.div`
    a:first-child{
        margin-right: 5px;
    }
`

const LeftSideMenu = styled.ul`
    display: flex;
    margin-left: 40px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4a5568;
    font-size: 1.1rem;
    display: block;
    :hover{
        color: black;
    }
`

function Navbar() {
    return (
        <StyledNav>
            <LeftSide>
                <div className='logo'>
                    <Link to="/">eCommerce</Link>
                </div>
                <LeftSideMenu>
                    <li>
                        <StyledLink to="/products">Products</StyledLink>
                    </li>
                </LeftSideMenu>
            </LeftSide>
            <RightSide>
                <Link to="/signin">
                    <Button colorScheme="pink">Sign In</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme="twitter">Sign Up</Button>
                </Link>
            </RightSide>
        </StyledNav>
    );
}

export default Navbar;
