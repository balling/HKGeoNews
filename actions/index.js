import fetch from 'isomorphic-fetch';

export const SHOW_MARKER = 'SHOW_MARKER';
export const PIN_MARKER = 'PIN_MARKER';

export function showMarker({ id }) {
  return { type: SHOW_MARKER, id };
}

export function pinMarker({ id }) {
  return { type: PIN_MARKER, id };
}

export const NEWS_FETCHED = 'NEWS_FETCHED';

function newsFetched(json) {
  return {
    type: NEWS_FETCHED,
    news: json,
  };
}

export function fetchNews() {
  return (dispatch) =>
    fetch('http://nwscedu.ddns.net/index.php?r=geo-news')
      .then(response => response.json())
      .then(json => dispatch(newsFetched(json)))
      .catch(window.console.log.bind(window.console));
}
