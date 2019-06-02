import React, { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
div {
    @media(max-width:992px){
        display:none;
    }
}
grid-area:header;
background-color:#373C2F;
    ul {
        list-style-type: none;
        display: flex;
        @media(max-width:992px){
            flex-direction:column;
            width:50%;
        }

        li {
                font-size: 1.3rem;
                line-height: 2rem;
                padding : 0.5rem;
                border: 1px outset white;
                
                a {
                color: white;
                text-decoration:none;
                margin-left: 1rem;
            }
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
    const [display, setDisplay] = useState('');

    function toggleMenu() {
        setDisplay(display === 'none' ? '' : 'none')
    }

    return <StyledNav>
        <button onClick={() => { toggleMenu() }} >Menu</button>
        <div style={{ display: `${display}` }}>
            <ul >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </div>
        {/* <button onClick={() => { toggleMenu() }} >Menu</button> */}
        {/* <div style={{ display: `${display}` }}>
        
                <a href="/">Home</a>
            
        
                <a href="/contact">Contact</a>
            
        
                <a href="/resume">Resume</a>
            
        
                <a href="/skillset">Skillset</a>
            
        
                <a href="/academics">Academics</a>
            
        
                <a href="/projects">Projects</a>
            
        
                <a href="/qa">QA</a>
            
        
                <a href="/blogs">Blogs</a>
            
        </div> */}

    </StyledNav>
}

export default Header