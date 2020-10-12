import {combineReducers} from 'redux';
import {appRoutesReducer} from "./routes/reducers";
import {currentModelReducer} from "./current-model/reducers";
import {formsStoreReducer} from "./forms-data-storage/reducers";
import {currentUserReducer} from "./current-user/reducers";
import {currentDataStorageReducer} from "./current-data-storage/reducers";
import { scrollReduser } from "./scroll-position/reducers";
import {elementsStorageReducer} from "./elements-storage/reducers";


export default combineReducers({
  appRoutes: appRoutesReducer,
  currentModel: currentModelReducer,
  formsStore: formsStoreReducer,
  currentUser: currentUserReducer,
  currentDataStorage: currentDataStorageReducer,
  scrollPosition: scrollReduser,
  elements: elementsStorageReducer,
});
