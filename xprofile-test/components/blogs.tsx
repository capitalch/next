import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


function Blogs({ blogs }) {
    return <div>
        <h3>Blogs by Sushant</h3>
        {Object.keys(blogs).map((cat, index) => {
            return <div key={index}>
                <Styledcat style={{ textTransform: 'capitalize' }}>{cat}</Styledcat>
                {blogs[cat].map((obj, index) => {
                    return <StyledDiv key={index}>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <StyledAnchor href={`/blog/${obj.slug}`}>{obj.title}</StyledAnchor> */}
                        <Link href={`/blog/${obj.slug}`}><StyledAnchor>{obj.title}</StyledAnchor></Link>
                    </StyledDiv>
                })}
            </div>
        })}
    </div>
}

const StyledDiv = styled.div`
    line-height:1.5rem;
`
const Styledcat = styled.div`
    color:darkslategrey;
    font-weight:bold;
`

const StyledAnchor = styled.a`
    font-size:1rem;
    color:orange;
    line-height:1rem;
    text-decoration:none;
    font-weight:700;
    cursor:pointer;
    :visited {
        color: grey;
    }
    :active {
        color: red;
    }
    :hover {
        color: blue;
    }
`

export default Blogs