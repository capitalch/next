import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import settings from '../settings.json'

function Footer() {
    let [hitCount, setHitCount] = useState(0);

    useEffect(() => {
        axios.get(settings.hitCountUrl).then((res)=>{
        	hitCount = res.data.hits
        	setHitCount(hitCount)
        })       
    }, [])

    return <StyledFooter>Hits:{hitCount}</StyledFooter>
}

const StyledFooter = styled.div`
    font-size: 0.8rem;
    text-align:right;
	color:lightgrey;
`

export default Footer
/*
 ; (async () => {
            const res = await axios.get(settings.hitCountUrl)
            hitCount = res.data.hits
            setHitCount(hitCount)
        })()
*/