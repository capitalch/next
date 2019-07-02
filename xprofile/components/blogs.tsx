import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment'

function Blogs({ blogs }) {
    return <div>
        <h3>Blogs by Sushant</h3>
        {Object.keys(blogs).map((cat, index) => {
            return <div key={index}>
                <Styledcat style={{ textTransform: 'capitalize' }}>{cat}</Styledcat>
                {
                    blogs[cat].sort((b: any, a: any): any => (a.createdOn.valueOf() - b.createdOn.valueOf())).map((obj, index) => {
                        return <StyledDiv key={index}>                            
                            <Link href={`/blog/${obj.slug}`}><a>{`${obj.title}: `}</a></Link>
                            <StyledDate>{`${moment(obj.createdOn).format('YYYY, Do MMM')}`}</StyledDate>
                            <br></br>
                            <StyledShortContent>{`${obj.content}`}</StyledShortContent>
                            <Link href={`/blog/${obj.slug}`}>                                
                                <a>{'  '}Read more... </a>
                            </Link>
                        </StyledDiv>
                    })}
            </div>
        })}
    </div>
}

const StyledDiv = styled.div`
    line-height: 1.5rem;
    font-size: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;

    a {
        font-weight: bold;
        color: blue;
        display: inline;
        text-decoration: none;

        :active {
            color: red;
        }

        :hover {
            color: red;
        }
    }
`
const Styledcat = styled.div`
    color:darkslategrey;
    font-weight:bold;
`

const StyledDate = styled.span`
    color:black;
`

const StyledShortContent = styled.span`
    color:grey;
`

export default Blogs


