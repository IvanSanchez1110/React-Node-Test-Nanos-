import { put, fork, takeLatest } from "redux-saga/effects";
import {
  constants as campaignConstants,
  actions as campaignActions
} from "../modules/campaign";
import { getAll } from "../../services/campaign";

export function* getCampaigns(action) {
  let data = null;
  try {
    data = yield getAll();
  } catch (e) {
    yield put(
      campaignActions.updateCampaign({
        error: "Can't fetch data!"
      })
    );
    console.error(e);
  }
  yield put(
    campaignActions.updateCampaign({
      result: data.data
    })
  );
}

function* watchGetCampaigns() {
  yield takeLatest(campaignConstants.GET_CAMPAIGN, getCampaigns);
}

export const campaignSaga = [fork(watchGetCampaigns)];
