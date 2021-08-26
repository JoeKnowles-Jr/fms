import React from 'react'
import styled from 'styled-components'

const Comment = ({ comment }) => {

    return <CommentWrapper>
        <p>{comment.title}</p>
        <textarea>{comment.body}</textarea>
    </CommentWrapper>
}

const CommentWrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    padding: 0.5rem;
    textarea {
        resize: none;
        width: 75%;
    }
`;

export default Comment