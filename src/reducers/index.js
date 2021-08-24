import { combineReducers } from 'redux'
import { reducer as authReducer } from './auth.reducer'
import { reducer as senatorReducer } from './senators.reducer'
import { reducer as representativeReducer } from './representatives.reducer'
import { reducer as governorReducer } from './governors.reducer'
import { reducer as stateReducer } from './states.reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    senators: senatorReducer,
    representatives: representativeReducer,
    governors: governorReducer,
    states: stateReducer
})

export default rootReducer
