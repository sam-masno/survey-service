import { 
    FETCH_SURVEYS
} from '../actions/types';

//use default state as null to use as simple loading switch
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_SURVEYS: 
            return action.payload
        default:
            return state
    }
}