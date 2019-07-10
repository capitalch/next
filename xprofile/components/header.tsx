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

    .active {
        color:red;
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
`

function MenuIcon({ show, setShow, portfolio, setPortfolio }): any {
    return <StyledMenuIcon onClick={() => { setShow(!show); setPortfolio(!portfolio) }}>
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
        if (width >= 993) { (setShow(true)); setPortfolio(true) }
        const mql = window.matchMedia('(min-width: 992px)')
        mql.addListener(screenTest)
        return () => mql.removeListener(screenTest)
    })

    return <StyledHeader>
        {show && <MenuItems></MenuItems>}
        {(!show) && <StyledActiveMenuItem>{currentPage}</StyledActiveMenuItem>}
        {(portfolio) && <StyledPortfolio>Portfolio of Sushant</StyledPortfolio>}
        {<MenuIcon show={show} setShow={setShow} portfolio={portfolio} setPortfolio={setPortfolio}></MenuIcon>}
    </StyledHeader>

    function MenuItems() {
        return <StyledMenuItems>
            <li><Link href='/'>{XAnchor('Home')}</Link></li>
            <li><Link href='/' as='/about'>{XAnchor('About')}</Link></li>
            <li><Link href='/' as='/contact'>{XAnchor('Contact')}</Link></li>
            <li><Link href='/' as='/resume'>{XAnchor('Resume')}</Link></li>
            <li><Link href='/' as='/skillset'>{XAnchor('Skillset')}</Link></li>
            <li><Link href='/' as='/academics'>{XAnchor('Academics')}</Link></li>
            <li><Link href='/' as='/projects'>{XAnchor('Projects')}</Link></li>
            <li><Link href='/' as='/qa'>{XAnchor('QA')}</Link></li>
            <li><Link href='/blogs' as='/blogs'>{XAnchor('Blogs')}</Link></li>
            {/* <li><Link href='/blogs' as='/blogs'><a onClick={() => { setShow(false); setPortfolio(true) }}>Blogs</a></Link></li> */}
            {/* <li><button style={{ marginLeft: '1rem' }} onClick={() => { newComment() }}>New comment</button></li>
            <li><button style={{ marginLeft: '1rem' }} onClick={() => { deleteComment() }}>Delete comment</button></li>
            <li><button style={{ marginLeft: '1rem' }} onClick={() => { getComments() }}>Get comments</button></li> */}
            {/* <li><button style={{ marginLeft: '1rem' }} onClick={() => { makeTree() }}>Tree</button></li> */}
        </StyledMenuItems>

        function XAnchor(x) {
            return <a style={{ color: `${getColor(x)}` }} onClick={() => {
                setShow(false);
                setPortfolio(true);
            }}>{x}</a>
        }

        function getColor(x: string) {
            if (x.toLowerCase() === currentPage.toLowerCase()) {
                return 'aquamarine'
            } else {
                return 'white'
            }

        }
    }
}

export default Header

/*

*/
