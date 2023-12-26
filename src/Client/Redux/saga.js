// materialSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { MATERIALS_REQUEST, MATERIALS_SUCCESS, MATERIALS_FAILURE } from './Action';
import { fetchMaterialsService } from './Service';

function* fetchMaterialsSaga(action) {
    try {
        const materials = yield call(fetchMaterialsService, action.payload);
        yield put({ type: MATERIALS_SUCCESS, payload: materials });
    } catch (error) {
        yield put({ type: MATERIALS_FAILURE, payload: error.message });
    }
}

export function* watchMaterialsSaga() {
    yield takeLatest(MATERIALS_REQUEST, fetchMaterialsSaga);
}
