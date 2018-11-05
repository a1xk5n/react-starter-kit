import { delay } from 'redux-saga';

import { fork, takeLatest } from 'redux-saga/effects';

function* exampleSaga() {
    yield takeLatest('test', function* test() {
        yield delay(1000);
    });
}

export default function* () {
    yield fork(exampleSaga);
}
