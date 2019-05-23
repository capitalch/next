import React from 'react'
import styled from 'styled-components'

const StyleHeader = styled.div`
	grid-area: header;
    background-color: #2F4555;
    height: 58px;
    
    display:flex;
    font-size: 20px;
    
    /* align-content:center; */
    /* align-items:center; */

    a {
        margin-left:25px;
        color:white;
        text-decoration:none;
        /* align-self:center; */
        margin-top:auto;
        margin-bottom:13px;
    }

    a[aria-current="page"]{
        color: aquamarine;
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
    return <StyleHeader>
        <label>Sushant Agrawal's profile</label>
        <a href="/">Home</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
        <a href="#">Skillset</a>
        <a href="#">Academics</a>
        <a href="#">Projects</a>
        <a href="#">Q & A</a>
        <a href="#">Blogs</a>
    </StyleHeader>
}

export default Header
