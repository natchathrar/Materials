export const MATERIALS_REQUEST = 'MATERIALS_REQUEST';
export const MATERIALS_SUCCESS = 'MATERIALS_SUCCESS';
export const MATERIALS_FAILURE = 'MATERIALS_FAILURE';

export const fetchMaterials = (params) => ({
    type: MATERIALS_REQUEST,
    payload: params,
});
