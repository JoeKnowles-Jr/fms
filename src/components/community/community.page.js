import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Comment from '../comment/comment'

class CommunityPage extends React.PureComponent {

    state = {
        community: null
    }

    componentDidMount() {
        this.props.comments ?
            this.setState({ community: this.props.comments[0].community })
            :
            this.props.getComments()
    }

    render() {
        return (
            <CommunityWrapper>
                Community: {this.state.community && <span>{this.state.community}</span>}
                {this.props.comments && this.props.comments.map((c, idx) => {
                    return <Comment comment={c} key={idx} />
                })}
            </CommunityWrapper>
        )
    }
}

const CommunityWrapper = styled.div`

`;

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, actions)(CommunityPage)
