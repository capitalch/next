import React from 'react'
import styled from 'styled-components'

const StyleHeader = styled.div`
	grid-area: header;
    background-color: brown;
    height: 40px;
`

function Header() {
	return <StyleHeader></StyleHeader>
}

export default Header
