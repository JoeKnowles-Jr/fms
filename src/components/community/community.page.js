import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class CommunityPage extends React.PureComponent {

    render() {
        return (
            <CommunityWrapper>
                Community
            </CommunityWrapper>
        )
    }
}

const CommunityWrapper = styled.div`

`;

const mapStateToProps = (state) => {
    return {
        senators: state.senators.senators,
        representatives: state.representatives.representatives,
        governors: state.governors.governors,
        states: state.states.states,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, actions)(CommunityPage)
