import { call, put, takeEvery } from "redux-saga/effects";
import { GET_PICS_SAGA, getPicsSuccess, getPicsFailure } from "./actions.js";
import axios from "axios";
const apiCall = () => {
  return axios
    .get("https://api.reddit.com/r/pics/hot.json")
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};
export function* getPics() {
  const data = yield call(apiCall);
  if (!data) {
    yield put(getPicsFailure("Data not found"));
    return;
  }
  yield put(getPicsSuccess(data));
}

export default function* watchPics() {
  yield takeEvery(GET_PICS_SAGA, getPics);
}
