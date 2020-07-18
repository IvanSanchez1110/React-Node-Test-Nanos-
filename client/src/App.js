import React, { useEffect } from "react";
import { Route, Router } from "react-router-dom";
import HomeView from "./views/HomeView";

import { getCampaign } from "./redux/modules/campaign";
import { useDispatch } from "react-redux";

const App = ({ history }) => {
  const dispatch = useDispatch();
  //run once
  useEffect(() => {
    dispatch(getCampaign());
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={HomeView} />
      </Router>
    </div>
  );
};

export default App;
