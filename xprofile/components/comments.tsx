import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import { rollIn } from 'react-animations'
import settings from '../settings.json'
import diction from '../diction.json'


function Comments({ pageComments, slug }) {
    const [arr, setArr] = useState([])
    let [index, setIndex] = useState(-1)

    useEffect(() => {
        setArr(getCommentsArray(pageComments))
    }, pageComments)

    return <div>
        <StyledCommentButton onClick={() => { setRootForm() }}>{diction.comments.clickForNewComments}</StyledCommentButton>
        <CommentsCount>Total {arr.length} comments</CommentsCount>
        {arr.map((x, index) => {
            const src = `/static/persons/${Math.floor(Math.random() * Math.floor(150))}.png`
            if (x.id) {
                return <StyledItem key={index} style={{ marginLeft: `${x.level * 4}rem` }}>
                    <div>
                        <StyledPerson src={src} alt='person'></StyledPerson>
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
}

function getCommentsArray(pageComm) {
    const outArray: any[] = []
    function process(arr: any[], level: number) {
        arr && (arr.length > 0) && arr.forEach(x => {
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
    const [success, setSuccess] = useState(null)
    const { index, setIndex, arr, setArr, slug, parentId } = props;

    function newComment(e) {
        e.preventDefault();
        const payload = {
            token: settings.token,
            text: diction.newCommentId,
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
                setSuccess(true)
                setArr([...arr])
            })
            .catch(e => {
                setSuccess(false);
                console.log((e.response && e.response.data.message) || e.message)
                setArr([...arr])
            })
    }

    function cancelComment() {
        if (index !== -1) {
            arr.splice(index, 1) //delete at index
        }
        setIndex(-1)
        setArr([...arr]) //refresh
    }

    const styledForm = <StyledForm onSubmit={newComment} style={{ marginLeft: `${startPos * 4 + 4}rem` }}>
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
        <div>
            <button type="submit">Submit comments</button>
            <button type="button" onClick={() => cancelComment()}>Cancel comments</button>
        </div>
    </StyledForm>

    const successMessage = <StyledMessage>  {diction.comments.submitted} </StyledMessage>

    const failureMessage = <StyledMessage>{diction.comments.failure}</StyledMessage>

    let ret;
    if ((success === null) || (success === undefined)) {
        ret = styledForm
    } else if (success === false) {
        ret = failureMessage
    } else {
        ret = successMessage
    }
    return ret
    // return success ? successMessage : styledForm
}

const StyledPerson = styled.img`
    height:15px;
    width:15px;
    margin-right:0.5rem;
    margin-bottom:-0.1rem;
`

const CommentsCount = styled.span`
    margin-left:1rem;
    font-size: 1.0rem;
    color:#990033;
`
const StyledMessage = styled.div`
    background-color:#fff;
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0;
    padding:1rem;
    background-color:#EEFECF;
    font-style:italic;
    border:1px solid red;
`

const StyledForm = styled.form`
    animation:2s ${keyframes`${rollIn}`} ;
    width:auto;
    border: 1px solid grey;
    
    /* margin: 1rem 0 2rem 0; */
    margin-bottom:1.5rem;
    margin-top:0.5rem;
    input, textarea {
        width:92%;
    }
    input {
        height: 2rem;
        margin: 0.5rem 1rem  ;
    }
    textArea{
        height: 6rem;
        margin: 1rem 1rem 0.5rem 1rem;
    }
    button{
        margin: 1rem 1rem ;
        cursor:pointer;
    }
`

const StyledName = styled.span`
    color: #336600;
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
    margin-bottom:1rem;
    margin-top:1rem;
`

const StyledItem = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 1.0rem;
`

export default Comments

/*

*/