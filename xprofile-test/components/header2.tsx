import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledMenuIcon = styled.div`
div {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
}
@media(max-width:992px){
    cursor:pointer;
    float:right;
    margin:0.5rem;
}
@media(min-width:992px){
    display:none;
}

`

const StyledNav = styled.nav`
grid-area:header;
background-color:#373C2F;
ul {
    list-style-type: none; 
    display: flex;
    li {     
        a {
            color: white;
            text-decoration:none;
            margin-left: 1rem;
        }   
    }
}

@media(max-width:992px){
    ul {
        flex-direction:column;
    }

    li {
        font-size: 1.3rem;
        line-height: 2rem;
        padding : 0.5rem;
        border: 1px outset white;
        width: 70%;
    }

    .nav-bar {
        display:none;
    }

    button {
        float:right;
        margin:1rem;
    }

    a {
        display:block;
        width: 100%;
    }
}

@media(min-width:992px){
    button {
        display:none;
    }

    a {
        font-size: 1.3rem;
        font-weight: 600;
    }
}
`
const StyledActiveMenuItem = styled.div`
    color:white;
    float:left;
    font-weight:600;
    font-size:1.3rem;
    margin: 1rem;
    text-transform:capitalize;
`

const StyledPortfolio = styled.label`
    color:white;
    margin:1rem;
    font-size:1rem;
`


function Header({ currentPage }) {
    const [display, setDisplay] = useState('none')
    useEffect(() => {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        console.log('width:', width)
        if (width > 992) {
            setDisplay('block')
        }
    })

    function toggleMenu() {
        setDisplay(display === 'none' ? 'block' : 'none')
    }

    function MenuIcon() {
        return <StyledMenuIcon onClick={() => toggleMenu()}>
            <div></div>
            <div></div>
            <div></div>
        </StyledMenuIcon>
    }

    const showActiveMenu = display==='none' ? 'block' : 'none'
    return  <StyledNav>
    <StyledActiveMenuItem style={{display:`${showActiveMenu}`}}>{currentPage}</StyledActiveMenuItem>
    <MenuIcon></MenuIcon>

    <div className='nav-bar' style={{ display: `${display}`}}>
            <ul >
                <li>
                    <a href="/" >
                        Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
                
            </ul>
        </div>

    {/* <div style={{ color:'yellow'}}>Portfolio of Sushant</div> */}
    </StyledNav>
}

export default Header
/*
<StyledNav>
        <StyledActiveMenuItem style={{display:`${showActiveMenu}`}}>{currentPage}</StyledActiveMenuItem>
        
        <MenuIcon></MenuIcon>
        <div className='nav-bar' style={{ display: `${display}` }}>
            <ul >
                <li>
                    <a href="/" onClick={
                        e => console.log(e.target.value)
                    }>
                        Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </div>
        
    </StyledNav>
*/
{/* <button onClick={() => { toggleMenu() }} >Menu</button> */}