import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'

const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: fromReducer
})

export default rootReducer