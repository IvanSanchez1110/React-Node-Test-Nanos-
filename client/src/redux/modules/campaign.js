import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

const GET_CAMPAIGN = "GET_CAMPAIGN";
const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";

export const constants = {
  GET_CAMPAIGN,
  UPDATE_CAMPAIGN
};

export const getCampaign = createAction(GET_CAMPAIGN, () => ({
  fetching: true
}));
export const updateCampaign = createAction(UPDATE_CAMPAIGN, result => ({
  ...result,
  fetching: false
}));

export const actions = {
  getCampaign,
  updateCampaign
};

export const reducers = {
  [GET_CAMPAIGN]: (state, { payload }) => {
    return state.merge({
      ...payload
    });
  },
  [updateCampaign]: (state, { payload }) => {
    return state.merge({
      ...payload
    });
  }
};

export const initialState = () => Map({});

export default handleActions(reducers, initialState());
