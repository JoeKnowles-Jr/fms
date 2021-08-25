import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import {App} from '../components/app'
// import RequireAuth from '../components/auth/require_auth'
import Auth from '../pages/Auth'
import Senators from '../pages/Senators'
import Governors from '../pages/Governors'
import States from '../pages/States'
import Representatives from '../pages/Representatives'
import Community from '../pages/Community'
import Signout from '../components/auth/signout'
import Home from '../pages/Home'

export const Routes = () => {
    return (
        <App>
            <RouteWrapper>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/auth" render={(props) => <Auth {...props} />} />
                <Route exact path="/senators" render={(props) => <Senators {...props} />} />
                <Route exact path="/representatives" component={Representatives} />
                <Route exact path="/governors" component={Governors} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/states" component={States} />
                <Route exact path="/signout" render={(props) => <Signout {...props} />} />
            </RouteWrapper>
        </App>
    )
}

const RouteWrapper = styled.div`
`
