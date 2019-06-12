import React from 'react'
import axios from 'axios'

function axiosGet(url, params) {
    return axios.get(url, { params: params })    
}
export { axiosGet }

function getCommentsArray(pageComments) {
    const outArray: any[] = []
    function process(arr: any[], level: number) {
        arr.forEach(x => {
            outArray.push({ level: level, ...x })
            x.children && (x.children.length > 0) && process(x.children, level + 1)
        })
    }
    process(pageComments, 0)
    return outArray
}
export { getCommentsArray }

/*
    // try {
    //     const ret = await axios.get(url, { params: params })
    //     setArr(getCommentsArray(ret.data))
    // } catch (e) {
    //     console.log((e.response && e.response.data.message) || e.message)
    // }
*/