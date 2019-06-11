import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';

function Comments() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoic3VzaGFudGFncmF3YWwuY29tIiwiaWF0IjoxNTYwMDcxOTEwfQ.d89Oe7Qm9bajI2qFlm0h6z1aIky6s3u8PXmcKwPyKfY'
        doGet('http://localhost:3002/tools/comments/sushantagrawal.com/projects', {
            token: token
        }, setArr)
    }, [])
    return <div style={{ marginTop: '2rem' }}>
        {arr.map((x, index) => {
            return <StyledItem key={index} style={{ marginLeft: `${x.level * 4}rem`, marginTop: '1rem' }}>
                {/* <div style={{ marginLeft: `${x.level * 4}rem` }}></div> */}
                <div>
                    <StyledName>
                        {x.mname}
                    </StyledName>
                    <StyledTime>{x.commented_on}</StyledTime>
                </div>
                <div >{x.comment}</div>
                <div><StyledReply onClick={() => console.log('clicked')}>Reply</StyledReply></div>
            </StyledItem>

        })}
    </div>
}

function getCommentsArray(pageComm) {
    const outArray: any[] = []
    function process(arr: any[], level: number) {
        arr.forEach(x => {
            outArray.push({ level: level, ...x })
            x.children && (x.children.length > 0) && process(x.children, level + 1)
        })
    }
    process(pageComm, 0)
    return outArray
}

async function doGet(url, params, setArr) {
    try {
        const ret = await axios.get(url, { params: params })
        setArr(getCommentsArray(ret.data))
    } catch (e) {
        console.log((e.response && e.response.data.message) || e.message)
    }
}

const StyledName = styled.span`
    color:red;
    margin-right:0.5rem;
`

const StyledTime = styled.span`
    font-size:0.9rem;
`

const StyledReply = styled.button`
    /* font-weight:bold; */
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: 0px;
    cursor:pointer;
    margin: 0px;
    padding: 0px;
    color: blue;
    :focus {
        outline: none;
    }
`

const StyledItem = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 1.1rem;
    /* ${StyledName}{
        font-size:4rem;
    } */
`



export default Comments
/*
const pageComments = [
    {
        mname: 'top1',
        comment: 'top1 comment',
        children: [
            {
                mname: 'child1',
                comment: 'child1 comment',
                children: [
                    {
                        name: 'child11',
                        comment: 'child11 comment',
                        children: [
                            {
                                name: 'child111',
                                comment: 'child111 comment',
                                children: [
                                    {
                                        name: 'child1111',
                                        comment: 'child1111 comment'
                                    },
                                    {
                                        name: 'child1112',
                                        comment: 'child1112 comment'
                                    }
                                ]
                            },
                            {
                                name: 'child112',
                                comment: 'child112 comment'
                            },
                            {
                                name: 'child113',
                                comment: 'child113 comment'
                            }

                        ]
                    }
                ]
            }
        ]
    },
    {
        mname: 'top2',
        comment: 'top2 comment',
        children: [
            {
                mname: 'child2',
                comment: 'child2 comment'
            },
            {
                mname: 'child3',
                comment: 'child3 comment',
                children: [
                    {
                        mname: 'child31',
                        comment: 'child31 comment'
                    }
                ]
            }
        ]
    }
]
*/