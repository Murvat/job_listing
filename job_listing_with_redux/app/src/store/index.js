import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { positioinsReducer } from "./positions/positionReducer";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    

export default store;