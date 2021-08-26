import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import styled from 'styled-components'
import { Landing } from '../components/app'
import { UserHome } from '../components/user'
// import { getDataNews } from '../services/news.service'

class Home extends PureComponent {

    componentDidMount() {
        if (!this.props.senators) {
            this.props.getSenators('all');
        }
        if (!this.props.representatives) {
            this.props.getRepresentatives('all');
        }
        if (!this.props.governors) {
            this.props.getGovernor('all');
        }
        if (!this.props.states) {
            this.props.getStates('all');
        }
        if (!this.props.communities) {
            this.props.getCommunities();
        }
        document.getElementById('baseview').style.opacity = 1
    }

    senatorClicked = async (name) => {
        // const newNews = getDataNews(name);
        // console.log(newNews);
        // this.setState((state) => {news: newNews});
        console.log("Senator clicked!")
    }

    representativeClicked = async (name) => {
        // const newNews = getDataNews(name);
        // console.log(newNews);
        // this.setState((state) => {news: newNews});
        console.log("Representative clicked!")
    }

    governorClicked = async (name) => {
        // const newNews = getDataNews(name);
        // console.log(newNews);
        // this.setState((state) => {news: newNews});
        console.log("Governor clicked!")
    }

    stateClicked = async (name) => {
        // const newNews = getDataNews(name);
        // console.log(newNews);
        // this.setState((state) => {news: newNews});
        console.log("State clicked!")
    }

    render() {

        if (!this.props.senators) {
            this.props.getSenators('all');
        }

        const userSenators = () => {
            if (this.props.senators && this.props.user) {
                const retVal = this.props.senators.filter(s => {
                    return s.state_code === this.props.user.state
                })
                return { sen1: retVal[0], sen2: retVal[1] }
            }
        }
        const userRepresentatives = () => {
            if (this.props.representatives && this.props.user) {
                const retVal = this.props.representatives.filter(r => {
                    return r.state_code === this.props.user.state
                })
                return retVal
            }
        }
        const userGovernor = () => {
            if (this.props.governors && this.props.user) {
                const retVal = this.props.governors.filter(g => {
                    return g.state_code === this.props.user.state
                })
                return retVal[0]
            }
        }
        const userState = () => {
            if (this.props.states && this.props.user) {
                const retVal = this.props.states.filter(s => {
                    return s.code === this.props.user.state
                })
                return retVal[0]
            }
        }

        return (
            <HomeWrapper id='baseview'>
                {this.props.user && this.props.senators && this.props.representatives && this.props.governors && this.props.states &&
                    <UserHome
                        senators={userSenators()}
                        senClicked={this.senatorClicked.bind(this)}
                        representatives={userRepresentatives()}
                        repClicked={this.representativeClicked.bind(this)}
                        governor={userGovernor()}
                        govClicked={this.governorClicked.bind(this)}
                        userState={userState()}
                        stateClicked={this.stateClicked.bind(this)}
                        user={this.props.user} />
                }
                {!this.props.user && this.props.senators && <Landing news={this.props.news} senators={this.props.senators} />}
            </HomeWrapper>
        )
    }
}

const HomeWrapper = styled.div`
    opacity: 0;
    width: 99%;
    position: relative;
    transition: all 1s ease;
`

const mapStateToProps = (state) => {
    return {
        senators: state.senators.senators,
        representatives: state.representatives.representatives,
        governors: state.governors.governors,
        states: state.states.states,
        user: state.auth.user,
        communities: state.comments.communities
    }
}

export default connect(mapStateToProps, actions)(Home)
