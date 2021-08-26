import React from 'react'
import styled from 'styled-components'

const CommentInput = ({ comment }) => {
    const [title, setTitle] = React.useState(comment ? comment.title : '')
    const [body, setBody] = React.useState(comment ? comment.body : '')

    return (
        <InputWrapper>
            <fieldset>
                <legend>
                    <div>{comment ? 'Edit Comment' : 'New Comment'}</div>
                </legend>
                <div>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Title' />
                </div>
                <textarea onChange={(e) => setBody(e.target.value)}>{body}</textarea>
                <p>
                    <button>Post</button>
                </p>
            </fieldset>
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    padding: 1rem;
    fieldset {
        border: 1px solid black;
        border-radius: 1rem;
        padding: 1rem;
        legend {
            text-align: center;
            margin: 0;
            padding: 0;
        }
        div>input, textarea {
            width: 80%;
            margin: 0 auto;
        }
    }
`;

export default CommentInput