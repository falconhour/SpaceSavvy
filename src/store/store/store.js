import { createStore } from "redux";
import reducer from "../reducer/reducer";
import { flights } from "../../services/SpaceXData";

const initialState = {
    flights
}

const store = createStore(reducer, initialState);

export default store;