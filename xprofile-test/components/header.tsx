import React, { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
	grid-area: header;
    background-color:#373C2F;
    ul {
        display:flex;
        list-style-type: none;
        /* @media (max-width:992px){ 
            flex-direction: column;
        }
        @media (min-width:992px){ 
            flex-direction: row;
        } */
    }
    
    li {
        /* font-weight:bolder;
        font-size: 1.3rem;
        font-family:sans-serif;
        border: 1px solid white; */
        /* width : 50%; */
        /* @media(max-width:992px){
            border: 1px outset white;
            line-height: 2rem;
            padding :0.5rem;
        } */
        a {
            color:white;
            text-decoration:none;
            margin-left: 1rem;
        }
    }

    button {
        width:75px;
        height:35px; 
        margin:1rem;
        float:right;
        @media(min-width:992px) {
            display:none;
        }
    }

`

function Header() {
    const [display, setDisplay] = useState('block');

    function toggleMenu() {
        setDisplay(display === 'none' ? 'block' : 'none')
    }

    return <StyledNav >
        <button onClick={() => { toggleMenu() }} >Menu</button>
        <ul style={{ display: `${display}` }}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
            <li>
                <a href="/skillset">Skillset</a>
            </li>
            <li>
                <a href="/academics">Academics</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/qa">QA</a>
            </li>
            <li>
                <a href="/blogs">Blogs</a>
            </li>
        </ul>
        
    </StyledNav>
}

export default Header

/*

     label {
        color:#DBEAD0;
        font-family: cursive;
        font-size: 1.1rem;
        font-weight:200;
        margin-left:auto;
        margin-top:auto;
        margin-bottom:13px;
        margin-right:1em;
    } 

    { <label>Portfolio of Sushant</label> }
*/
