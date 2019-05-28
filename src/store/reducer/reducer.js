import { action as actions } from "../action/action";

const initialState = {
    someProp: {}
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.APPLY_FILTER:
            return state;
    
        default:
            return state;
    }
}

export default reducer;