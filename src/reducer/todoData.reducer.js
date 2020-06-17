import * as ActionType from '../action/todoData.action';

const todoDataReducer = (state = {
    todo: [],
    errMsg: null
},
    action) => {
    switch (action.type) {
        case ActionType.ADD_ITEM: return { ...state, todo: action.payload, errMsg: null };
        case ActionType.ITEM_FAILED: return { ...state, todo: [], errMsg: action.payload };
        default: return state;
    }

}

export default todoDataReducer;