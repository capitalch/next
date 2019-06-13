import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import { rollIn, fadeIn, fadeOut } from 'react-animations'
import settings from '../settings.json'


function Comments({ pageComments, slug }) {
    const [arr, setArr] = useState([])
    let [index, setIndex] = useState(-1)

    useEffect(() => {
        setArr(getCommentsArray(pageComments))
    }, [])

    function setRootForm() {
        if (index !== -1) {
            arr.splice(index, 1)
        }
        index = 0
        setIndex(index)
        const parentId = null
        arr.unshift(<SubmitForm startPos={0} props={{ index, setIndex, arr, setArr, slug, parentId }}></SubmitForm>)
        setArr([...arr])
    }

    function setForm(arrayItem) {
        if (index !== -1) {
            arr.splice(index, 1)
        }
        const arrIndex = arr.findIndex((value) => value.id === arrayItem.id)
        index = arrIndex + 1
        setIndex(index)
        const parentId = arrayItem.id
        arr.splice(index, 0, <SubmitForm startPos={arrayItem.level} props={{ index, setIndex, arr, setArr, slug, parentId }}></SubmitForm>)
        setArr([...arr]) //for refresh purpose ...arr is used
    }

    return <div>
        <StyledCommentButton onClick={() => { setRootForm() }}>Please provide your Comments by clicking here ...</StyledCommentButton>
        {arr.map((x, index) => {
            if (x.id) {
                return <StyledItem key={index} style={{ marginLeft: `${x.level * 4}rem`, marginTop: '1rem' }}>
                    <div>
                        <StyledName>
                            {x.mname}
                        </StyledName>
                        <StyledTime>{moment(x.commented_on).format('lll')}</StyledTime>
                    </div>
                    <div>{x.comment}</div>
                    <div><StyledCommentButton onClick={() => { setForm(x) }}>Reply</StyledCommentButton></div>
                </StyledItem>
            } else {
                return <div key={index}>{x}</div>
            }
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

function SubmitForm({ startPos, props }) {
    const [comment, setComment] = useState('')
    const [mname, setMname] = useState('')
    const [email, setEmail] = useState('')
    const [webSite, setWebSite] = useState('')
    const [success, setSuccess] = useState(false)
    const { index, setIndex, arr, setArr, slug, parentId } = props;

    function newComment(e) {
        e.preventDefault();
        const payload = {
            token: settings.token,
            text: settings.newCommentId,
            values:
            {
                parentId: parentId
                , mname: mname
                , email: email
                , visitorSite: webSite
                , comment: comment
            }
        }
        axios.post(`${settings.commentsUrl}/${slug}`, payload)
            .then(() => {
                // if (index !== -1) {
                //     arr.splice(index, 1)
                // }
                // setIndex(-1)
                setSuccess(true)
                setArr([...arr])
            })
            .catch(e => {
                console.log((e.response && e.response.data.message) || e.message)
            })
    }

    function cancelComment(){
        if (index !== -1) {
            arr.splice(index, 1) //delete at index
        }
        setIndex(-1)
        setArr([...arr]) //refresh
    }

    const styledForm =  <StyledForm onSubmit={newComment} style={{ marginLeft: `${startPos * 4 + 4}rem` }}>
        <div>
            <textarea
                required
                rows={6}
                placeholder="Give comments"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}>
            </textarea>
        </div>
        <div>
            <input type='text'
                required
                placeholder='Your name'
                name="mname"
                value={mname}
                onChange={e => setMname(e.target.value)}
            ></input>
        </div>
        <div>
            <input
                required
                type='email'
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}>
            </input>
        </div>
        <div>
            <input
                type='text'
                placeholder="Your web site"
                name="webSite"
                value={webSite}
                onChange={e => setWebSite(e.target.value)}>
            </input>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={()=>cancelComment()}>Cancel comments</button>
    </StyledForm>

    const successMessage = <StyledSuccess>
        Your comment is successfully submitted. It will appear here within 48 hours after proper verification.
    </StyledSuccess>

    return success ? successMessage : styledForm
}

const StyledSuccess = styled.div`
    background-color:#fff;
    color: red;
    font-size: 1rem;
    font-weight: bolder;
`

const StyledForm = styled.form`
    animation:2s ${keyframes`${rollIn}`} ;
    width:auto;
    border: 1px solid grey;
    
    margin-bottom: 2rem;
    input, textarea {
        width:90%;
    }
    input {
        height: 2rem;
        margin: 0.5rem 1rem  ;
    }
    textArea{
        height: 6rem;
        margin: 0.5rem 1rem ;
    }
    button{
        margin: 0.5rem 1rem ;
    }
`

const StyledName = styled.span`
    color:red;
    margin-right:0.5rem;
`

const StyledTime = styled.span`
    font-size:0.9rem;
`

const StyledCommentButton = styled.button`
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
    margin-bottom:2rem;
`

const StyledItem = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 1.1rem;
`

export default Comments

/*


*/

/*

*/