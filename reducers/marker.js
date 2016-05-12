import { combineReducers } from 'redux';
import { SHOW_MARKER, PIN_MARKER } from './../actions/index';

const active = (state = -1, action) => {
  switch (action.type) {
    case SHOW_MARKER:
      return action.id;
    default:
      return state;
  }
};

const pinned = (state = -1, action) => {
  switch (action.type) {
    case PIN_MARKER:
      return action.id;
    default:
      return state;
  }
};

export default combineReducers({
  active,
  pinned,
});
