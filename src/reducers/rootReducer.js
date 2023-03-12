const initialState = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_TODO':
            return [...state].filter(item => item !== action.payload);
        default:
            return [...state];
    }
};

export default rootReducer;