import { combineReducers } from 'redux';
import news from './news';
import activeMarker from './activeMarker';

const geoNewsApp = combineReducers({
  activeMarker,
  news,
});

export default geoNewsApp;
