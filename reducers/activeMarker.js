import { SHOW_MARKER } from './../actions/index';

const activeMarker = (state = -1, action) => {
  switch (action.type) {
    case SHOW_MARKER:
      return action.id;
    default:
      return state;
  }
};

export default activeMarker;
