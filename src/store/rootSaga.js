import { call } from "redux-saga/effects";
import watchPics from "./pics/sagas.js";

export default function* rootWatchSaga() {
  yield call(watchPics);
}
