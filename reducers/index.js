import { combineReducers } from 'redux';
import news from './news';

const geoNewsApp = combineReducers({
  news,
});

export default geoNewsApp;
