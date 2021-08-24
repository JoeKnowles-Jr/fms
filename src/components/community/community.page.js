import React from 'react'

class CommunityPage extends React.PureComponent {

    render() {
        return (
            <div>

            </div>
        )
    }
}

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
