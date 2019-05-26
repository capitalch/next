import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
	grid-area: header;
    /* background-color: #2F4555; */
    background-color:#373C2F;
    height: 58px;
    
    display:flex;
    font-size: 20px;
    
    /* align-content:center; */
    /* align-items:center; */

    a {
        margin-left:25px;
        /* color:black; */
        font-weight:bolder;
        color:white;
        text-decoration:none;
        /* align-self:center; */
        margin-top:auto;
        margin-bottom:13px;
        font-family:sans-serif;
    }

    a[aria-current="page"]{
        /* color: aquamarine; */
    }

    label {
        color:#DBEAD0;
        font-family: cursive;
        font-size: 25px;
        font-weight:200;
        /* align-self:center; */
        margin-left:25px;
        margin-top:auto;
        margin-bottom:auto;
    }
`

function Header() {
    return <StyledNav>
        <label>Sushant Agrawal's profile</label>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
        <a href="/skillset">Skillset</a>
        <a href="/academics">Academics</a>
        <a href="projects">Projects</a>
        <a href="/qa">QA</a>
        <a href="/blogs">Blogs</a>
    </StyledNav>
}

export default Header
