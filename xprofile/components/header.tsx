import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
	grid-area: header;
    background-color:#373C2F;
    height: 58px;
    width:100%;
    display:flex;
    /* font-size: 20px; */
    
    a {
        margin-left:1rem;
        font-weight:bolder;
        color:white;
        text-decoration:none;
        margin-top:auto;
        margin-bottom:13px;
        font-size: 1.3rem;
        font-family:sans-serif;
        /* @media(max-width:768px){
            display:none;
        } */
    }

    /* a[aria-current="page"]{ */
        /* color: aquamarine; */
    /* } */

    label {
        color:#DBEAD0;
        font-family: cursive;
        font-size: 1.1rem;
        font-weight:200;
        margin-left:auto;
        margin-top:auto;
        margin-bottom:13px;
        margin-right:1em;
        @media(max-width:992px){
            display:none;
        }
        /* margin-right: 2em; */
        /* align-self:flex-end; */
    }
`

function Header() {
    return <StyledNav>
        
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
        <a href="/skillset">Skillset</a>
        <a href="/academics">Academics</a>
        <a href="projects">Projects</a>
        <a href="/qa">QA</a>
        <a href="/blogs">Blogs</a>
        <label>Sushant's profile</label>
    </StyledNav>
}

export default Header
