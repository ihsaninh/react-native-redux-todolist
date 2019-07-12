import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";

import RootNavigation from "./../../navigations/RootNavigation";
import todos from "./todos";

const router = createNavigationReducer(RootNavigation);

export default {
  router,
  todos
};
