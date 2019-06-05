import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const StyledMenuIcon = styled.div`
    div {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
        /* margin-top:6px;
        margin-bottom:6px;
        margin-left:auto;
        margin-right: 2px; */
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
    /* justify-self: center; */
    width: 60%;
    a {
        text-decoration:none;
        display:block; // to make whole area clickable
        margin-left:1.3rem;
        margin-top:0.3rem;
        margin-bottom:0.3rem;
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
    justify-content:space-between;
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

const StyledPortfolio = styled.span`
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    margin-left: auto;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:0.5rem;
    /* display:none; */
`

function MenuIcon({ show, setShow, portfolio, setPortfolio }): any {
    return <StyledMenuIcon onClick={() => {setShow(!show); setPortfolio(!portfolio)} }>
        <div></div>
        <div></div>
        <div></div>
    </StyledMenuIcon>
}

function Header({ currentPage }) {
    const [show, setShow] = useState(false)
    const [portfolio, setPortfolio] = useState(true)

    function screenTest(e) {
        e.matches ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        if (width >= 993) { (setShow(true)) ; setPortfolio(true)}
        const mql = window.matchMedia('(min-width: 992px)')
        mql.addListener(screenTest)
        return () => mql.removeListener(screenTest)
    })

    return <StyledHeader>
        {show && <MenuItems ></MenuItems>}
        {(!show) && <StyledActiveMenuItem>{currentPage}</StyledActiveMenuItem>}
        {(portfolio) && <StyledPortfolio>Portfolio of Sushant</StyledPortfolio>}
        {<MenuIcon show={show} setShow={setShow} portfolio = {portfolio} setPortfolio={setPortfolio}></MenuIcon>}
    </StyledHeader>

    function MenuItems() {
        return <StyledMenuItems>
            <li><Link href='/'><a onClick={() => {setShow(false) ; setPortfolio(true)}}>Home</a></Link></li>
            <li><Link href='/' as='/contact'><a onClick={() => {setShow(false); setPortfolio(true)} }>Contact</a></Link></li>
            <li><Link href='/' as='/resume'><a onClick={() => {setShow(false) ; setPortfolio(true)} }>Resume</a></Link></li>
            <li><Link href='/' as='/skillset'><a onClick={() => {setShow(false) ; setPortfolio(true)} }>Skillset</a></Link></li>
            <li><Link href='/' as='/academics'><a onClick={() => {setShow(false) ; setPortfolio(true)}}>Academics</a></Link></li>
            <li><Link href='/' as='/projects'><a onClick={() => {setShow(false) ; setPortfolio(true)}}>Projects</a></Link></li>
            <li><Link href='/' as='/qa'><a onClick={() => {setShow(false) ; setPortfolio(true)} }>QA</a></Link></li>
            <li><Link href='/blogs' as='/blogs'><a onClick={() => {setShow(false); setPortfolio(true)}}>Blogs</a></Link></li>
        </StyledMenuItems>
    }

}

export default Header

/*

*/
