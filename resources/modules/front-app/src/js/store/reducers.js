import { combineReducers } from "redux";
import { appRoutesReducer } from "./routes/reducers";
import { currentModelReducer } from "./current-model/reducers";
import { formsStoreReducer } from "./forms-data-storage/reducers";
import { currentUserReducer } from "./current-user/reducers";
import { currentDataStorageReducer } from "./current-data-storage/reducers";
import { scrollReducer } from "./scroll-position/reducers";
import { popupReducer } from "./popup-trigger/reducers";
import { elementsStorageReducer } from "./elements-storage/reducers";
import { hideTriggersReducer } from "./hide-triggers/reducers";
import { responsesStorageReducer } from "./responses-storage/reducers";
import { elementReducer } from "../../../../editor/src/js/store/altrp-dashboard/reducers";
import { altrpMetaReducer } from "./altrp-meta-storage/reducers";
import { altrpPageStateReducer } from "./altrp-page-state-storage/reducers";
import { fontsReducer } from "./fonts-storage/reducers";
import { changeLocalStorageReducer } from "./user-local-storage/reducers";

export default combineReducers({
  appRoutes: appRoutesReducer,
  currentModel: currentModelReducer,
  formsStore: formsStoreReducer,
  currentUser: currentUserReducer,
  currentDataStorage: currentDataStorageReducer,
  scrollPosition: scrollReducer,
  popupTrigger: popupReducer,
  elements: elementsStorageReducer,
  hideTriggers: hideTriggersReducer,
  altrpresponses: responsesStorageReducer,
  editElement: elementReducer,
  altrpMeta: altrpMetaReducer,
  altrpPageState: altrpPageStateReducer,
  altrpFonts: fontsReducer,
  userLocalStorage: changeLocalStorageReducer
});
