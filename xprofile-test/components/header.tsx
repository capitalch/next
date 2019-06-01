import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
	grid-area: header;
    background-color:#373C2F;
    /* height:58px; */
    /* width:100%; */
    ul {
        display:flex;
        list-style-type: none;
        overflow-x:hidden;
        /* height: 58px; */
        @media (max-width:992px){ 
            flex-direction: column;
            /* display: none; */
        }
    }
    
    /* box-sizing: border-box; */
    
    /* display:none; */
    
    li {
        /* margin-left:1rem; */
        font-weight:bolder;
        /* color:white; */
        /* text-decoration:none; */
        /* margin-top:auto; */
        /* margin-bottom:13px; */
        font-size: 1.3rem;
        font-family:sans-serif;
        @media(max-width:992px){
            border: 1px outset white;
            line-height: 2rem;
            /* flex: 1 1 auto; */
            padding :0.5rem;
        }
        a {
            color:white;
            text-decoration:none;
            margin-left: 1rem;
        }
    }

    /* * {
        box-sizing: border-box;
    } */

    button {
        width:75px;
        height:35px; 
        margin-top:'auto';
        margin-bottom:'auto';
        display:inline-block;
    }

    @media (max-width:992px){ 
        flex-direction: column;
        /* display: none; */
    }

    /* label {
        color:#DBEAD0;
        font-family: cursive;
        font-size: 1.1rem;
        font-weight:200;
        margin-left:auto;
        margin-top:auto;
        margin-bottom:13px;
        margin-right:1em;
    } */
`

function activateVerticalMenu() {

}

function Header() {
    return <StyledNav >
        <button onClick={() => { activateVerticalMenu() }} >Menu</button>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/skillset">Skillset</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/qa">QA</a></li>
            <li><a href="/blogs">Blogs</a></li>
        </ul>
        {/* <label>Portfolio of Sushant</label> */}
    </StyledNav>
}

export default Header
