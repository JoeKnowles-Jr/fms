import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Switch } from 'react-router-dom'
import History from './history.js'
import { Routes } from './routes'
import { store, persistor} from './components/app/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Loading } from './components/app'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <BrowserRouter>
                <Router history={History} basename={'/'}>
                    <Switch>
                        <Routes />
                    </Switch>
                </Router>
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'))

registerServiceWorker()
