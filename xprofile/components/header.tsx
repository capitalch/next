import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const StyledMenuIcon = styled.div`
    div {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
    }
    margin:0.5rem;
    margin-left:2rem; // for right alignment after fixed text
    cursor:pointer;
    @media only screen and (min-width: 993px) {
		display:none;
	}
`

const StyledMenuItems = styled.ul`
    display:flex;
    flex-direction:column;
    width: 60%;
    a {
        text-decoration:none;
        display:block; // to make whole area clickable
        padding:1rem;
        font-size:1.3rem;
        color:#fff;
    }

    li {
        list-style-type: none;
        border: 1px solid white;
        border-collapse: collapse;
    }

    @media only screen and (min-width: 993px) {
		flex-direction:row;
        align-items:center;
        li {
            border:0px;
        }
	}
`

const StyledHeader = styled.nav`
    grid-area: header;
    background-color:black;
    display:flex;
`

const StyledActiveMenuItem = styled.span`
    font-weight:700;
    font-size:1.3rem;
    margin: auto 1rem;
    color: #fff;
    text-transform:capitalize;
    @media only screen and (min-width: 993px) {
        display:none;
    }
`

const StyledText = styled.span`
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    margin-left: auto;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:0.5rem;
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
        {/* <li><a href='/'>Home</a></li> */}
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/' as='/contact'><a>Contact</a></Link></li>
        <li><Link href='/' as='/resume'><a>Resume</a></Link></li>
        <li><Link href='/' as='/skillset'><a>Skillset</a></Link></li>
        <li><Link href='/' as='/academics'><a>Academics</a></Link></li>
        <li><Link href='/' as='/projects'><a>Projects</a></Link></li>
        <li><Link href='/' as='/qa'><a>QA</a></Link></li>
        <li><Link href='/blogs' as = '/blogs'><a>Blogs</a></Link></li>
    </StyledMenuItems>
}

function Header({ currentPage }) {
    const [show, setShow] = useState(false)

    function screenTest(e) {
        e.matches ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        if (width >= 993) { (setShow(true)) }
        const mql = window.matchMedia('(min-width: 992px)')
        mql.addListener(screenTest)
        return () => mql.removeListener(screenTest)
    })

    return <StyledHeader>
        {show && <MenuItems ></MenuItems>}
        {(!show) && <StyledActiveMenuItem>{currentPage}</StyledActiveMenuItem>}
        <StyledText>Portfolio of Sushant</StyledText>
        {<MenuIcon show={show} setShow={setShow}></MenuIcon>}
    </StyledHeader>
}

export default Header

/*

*/
