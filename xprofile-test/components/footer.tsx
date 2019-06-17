import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import settings from '../settings.json'

function Footer() {
    let [hitCount, setHitCount] = useState(0);

    useEffect(()=>{
        axios.get(settings.hitCountUrl).then((res)=>{
			hitCount = res.data.hits
			setHitCount(hitCount)
        })
    },[])

    return <StyledFooter>Hits:{hitCount}</StyledFooter>
}

const StyledFooter = styled.div`
    font-size: 0.8rem;
    text-align:right;
`

export default Footer
/*
function Footer() {
	const [hitCount, setHitCount] = useState(0);

	const loadHitCount = async () => {
		// console.log(settings.hitCountUrl);
		const res = await fetch(settings.hitCountUrl);
		const tempHitCount = await res.json();
		if (tempHitCount && tempHitCount.hits) {
			settings.hitCount = tempHitCount.hits;
			setHitCount(tempHitCount.hits); //forced client side refresh of page
		}
	};

	if (!settings.hitCount) {
		if (typeof window !== 'undefined') {
			loadHitCount();
		}
	}

	return (
		<footer className={styles.footer}>
			<div>
				<span className={styles.hits}>Hits:{settings.hitCount}</span>
				<span>&copy;</span> Kush Infotech
			</div>
		</footer>
	);
}
export default Footer;
*/