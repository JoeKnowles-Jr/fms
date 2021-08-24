import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import gear from '../../img/gear.png'

class NavHeader extends React.PureComponent {

    render() {
        const path = this.props.location.pathname;
        return (
            <NavHeaderWrapper>
                <div className="title">
                    {this.props.userName ?
                        <span id="current-user">
                            <span className="liu">{this.props.userName}
                                <span className="userstate"> ({this.props.userState}) </span>
                            </span>
                            <Link to='/profile'>
                                <img src={gear} />
                            </Link>
                        </span>
                        :
                        <span id="current-user">
                            <span className="guest">Guest User</span>
                        </span>
                    }                
                    <div className="banner">
                        <a href='/'>
                            <span>Follow My Senator</span>
                        </a>
                    </div>                    
                </div>
                <nav className="hdr-btn-wrapper">
                    <div className="hdr-btns">
                        <Link className={`hdr-btn ${path === '/community' && 'active'}`} to="/community">Community</Link>
                        <Link className={`hdr-btn ${path === '/governors' && 'active'}`} to="/governors">Governors</Link>
                        <Link className={`hdr-btn ${path === '/states' && 'active'}`} to="/states">States</Link>
                        <Link className={`hdr-btn ${path === '/representatives' && 'active'}`} to="/representatives">Representatives</Link>
                        <Link className={`hdr-btn ${path === '/senators' && 'active'}`} to="/senators">Senators</Link>
                        {this.props.authenticated && (<div>
                            <Link className="hdr-btn signout" to="/signout">Signout</Link>
                        </div>)}
                        {!this.props.authenticated && (<div>
                            <Link className="hdr-btn" to="/auth">Sign In / Sign Up</Link>
                        </div>)}
                    </div>
                </nav>
            </NavHeaderWrapper>
        );
    }
}

const NavHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #445;
    @media (max-width: 960px) {
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
    .title {
        position: relative;
        display: flex;
        align-items: center;
        max-height: 5rem;
        justify-content: space-around;
        width: 45%;
        margin-left: 1rem;
        text-align: center;
        color: #333;
        text-shadow: 3px 3px 5px #333;
        font-size: 2.25rem;
        border-radius: 50px 0 50px 0;
        background: linear-gradient(to right, #0724ef, #f11618);
        @media (max-width: 550px) {
            font-size: .5rem;
        }
        @media (max-width: 768px) {
            font-size: .9rem;
        }
        @media (max-width: 1240px) {
            font-size: 1.25rem;
        }
        img {
            margin-left: 1rem;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            @media (max-width: 768px) {
                width: 32px;
                height: 32px;
            }
        }
        .liu {
            font-size: 1rem;
        }
        .userstate {
            font-size: 0.77rem;
        }
        .guest {

        }
    }

    #current-user {
        position: absolute;
        bottom: 7px;
        left: 13px;
        display: inline-block;
        font-family: digital2, sans-serif;
        border: 3px solid #3a1cff;
        border-radius: 30px;
        color: #7f7;
        background-color: #555;
        text-shadow: none;
        padding: 7px 7px 2px;
        font-size: 0.75rem;
        -webkit-box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
        -moz-box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
        box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
        a {
            padding: 0;
            border-radius: 1rem;
        }
        a>img {
            width: 16px;
            height: 16px;
        }
    }

    .banner {
        a { 
            text-decoration: none;
            color: #000;
        }
        overflow: hidden;
        width: 80%;
        margin: 5px auto;
        border-radius: 100px;
        font-family: 'Fredoka One', cursive;
        border-radius: 0 50px 0 50px;
        background-color: #fff;
        padding: 0;
        span {
            padding: 0;
        }
    }

    .hdr-btn-wrapper {
        margin-right: 1rem;
        .hdr-btns {
            display: flex;
            .signout {
                color: #14e71a;
            }
        }
        .active {
            color: #0724ef;
            background-color: #999;
        }
    }

    .hdr-btn {
        text-decoration: none;
        color: #fff;
        text-align: center;
        display: inline-block;
        text-shadow: none;
        font-size: 1.5rem;;
        padding: 0.75rem;
        margin: 5px 3px 0;
        border-right: 2px solid #0724ef;
        border-bottom: 2px solid #0724ef;
        border-radius: 0 10px 0 10px;
        @media (max-width: 500px) {
            font-size: .5rem;
        }
        @media (min-width: 768px) {
            font-size: 1rem;
        }
        @media (max-width: 1240px) {
            font-size: 1.25rem;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        userName: state.auth.user ? state.auth.user.firstName : "",
        userState: state.auth.user ? state.auth.user.state : "",
        authenticated: state.auth.authenticated
    }
}

export default withRouter(connect(mapStateToProps, actions)(NavHeader));
