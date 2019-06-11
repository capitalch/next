import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import styled from 'styled-components';

function Comments() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoic3VzaGFudGFncmF3YWwuY29tIiwiaWF0IjoxNTYwMDcxOTEwfQ.d89Oe7Qm9bajI2qFlm0h6z1aIky6s3u8PXmcKwPyKfY'
        doGet('http://localhost:3002/tools/comments/sushantagrawal.com/projects', {
            token: token
        }, setArr)
    },[])
    // const outArray = getCommentsArray(pageComments)
    return <div>
        {arr.map((x, index) => {
            return <div key={index}>{x.level}{x.comment}</div>
        })}
    </div>
}

function getCommentsArray(pageComm) {
    const outArray: any[] = []
    function process(arr: any[], level: number) {
        arr.forEach(x => {
            outArray.push({ level: level, comment: x.comment })
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
        // console.log(ret.data)
    } catch (e) {
        console.log((e.response && e.response.data.message) || e.message)
    }
}

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

export default Comments