import { all } from "redux-saga/effects";

import { campaignSaga } from "./campaignSaga";

export default function* sagas() {
  yield all([...campaignSaga]);
}
