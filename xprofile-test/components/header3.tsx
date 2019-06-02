import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledMenuIcon = styled.div`
    div {
        width: 35px;
        height: 5px;
        background-color: white;
        margin: 6px 0;
    }
    margin:0.5rem;
    margin-left:auto; // for right alignment
    cursor:pointer;
`

const StyledMenuItems = styled.ul`
    display:flex;
    flex-direction:column;
    width: 60%;
    a {
        text-decoration:none;
        margin: 1rem;
        /* line-height:1.5rem; */
    }

    li {
        list-style-type: none;
        /* margin: 0.05rem 0;  */
        border: 1px solid white;
        border-collapse: collapse;
        line-height:2.5rem;
    }
`

const StyledHeader = styled.nav`
    grid-area: header;
    background-color:darkgrey;
    display:flex;
`

const StyledActiveMenuItem = styled.span`
    font-weight:700;
    font-size:1.3rem;
    margin: auto 1rem;
    text-transform:capitalize;
`


function MenuIcon({ show, setShow }): any {
    return <StyledMenuIcon onClick={() => setShow(!show)}>
        <div></div>
        <div></div>
        <div></div>
    </StyledMenuIcon>
}

function MenuItems() {
    return <StyledMenuItems>
        <li><a href='/'>Home</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/resume'>Resume</a></li>
    </StyledMenuItems>
}

// function ActiveMenuItem({currentPage}){
//     return <StyledActiveMenuItem>
//         {currentPage}
//     </StyledActiveMenuItem>
// }



function Header({ currentPage }) {
    const [show, setShow] = useState(false);

    return <StyledHeader>
        {show ? <MenuItems ></MenuItems> : <StyledActiveMenuItem>{currentPage}</StyledActiveMenuItem>}
        <MenuIcon show={show} setShow={setShow}></MenuIcon>
    </StyledHeader>
}

export default Header