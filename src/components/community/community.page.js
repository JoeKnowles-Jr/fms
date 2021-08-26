import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Comment from '../comment/comment'
import CommentInput from '../comment/comment.input'

class CommunityPage extends React.PureComponent {

    state = {
        community: null,
        display: 'input'
    }

    componentDidMount() {
        console.log(this.props.communities)
        this.props.communities ?
            this.setState({ community: this.props.communities[0] })
            :
            this.props.getCommunities()
    }

    render() {
        return (
            <CommunityWrapper>
                <div className='input'>
                    <CommentInput />
                </div>
                <div>
                    <div>
                        <button>Add</button>
                    </div>
                    <div>
                        Community: {this.state.community && <span>{this.state.community._id}</span>}
                    </div>
                    <CommentsWrapper>
                        {this.state.community && this.state.community.comments.map((c, idx) => {
                            return <Comment comment={c} key={idx} />
                        })}
                    </CommentsWrapper>
                </div>
            </CommunityWrapper>
        )
    }
}

const CommentsWrapper = styled.div`
    width: 30%;
`;

const CommunityWrapper = styled.div`

    .input {
        width: 40%;
    }
`;

const mapStateToProps = (state) => {
    return {
        communities: state.comments.communities,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, actions)(CommunityPage)
