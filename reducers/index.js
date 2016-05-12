import { combineReducers } from 'redux';
import news from './news';
import marker from './marker';

const geoNewsApp = combineReducers({
  marker,
  news,
});

export default geoNewsApp;
