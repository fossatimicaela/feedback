const initialState = {
    feedback : []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'POST_FEEDBACK':
            return {
                ...state,
            }
    }
};

export default rootReducer;