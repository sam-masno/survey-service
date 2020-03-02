import { 
    FETCH_USER
}from '../actions/types'

//use default state as null to use as simple loading switch
export default (state = null, action) => {
    switch(action.type) {
        case FETCH_USER: 
            return action.payload || false
        default:
            return state
    }
}