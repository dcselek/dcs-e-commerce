import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: solid 1px #4a5568;
    line-height: 2px;
    
`
const LeftSide = styled.div`
    display: flex;
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
            <div>right</div>
        </StyledNav>
    );
}

export default Navbar;
