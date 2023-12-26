// materialReducer.js
import { MATERIALS_REQUEST, MATERIALS_SUCCESS, MATERIALS_FAILURE } from './Action';

const initialState = {
    materials: [],
    loading: false,
    error: null,
};

const materialReducer = (state = initialState, action) => {
    switch (action.type) {
        case MATERIALS_REQUEST:
            return { ...state, loading: true, error: null };

        case MATERIALS_SUCCESS:
            return { ...state, loading: false, materials: action.payload, error: null };

        case MATERIALS_FAILURE:
            return { ...state, loading: false, materials: [], error: action.payload };

        default:
            return state;
    }
};

export default materialReducer;
