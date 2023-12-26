import { all } from 'redux-saga/effects';
import { watchMaterialsSaga } from './saga';

export default function* rootSaga() {
    yield all([
        watchMaterialsSaga(),
    ]);
}
