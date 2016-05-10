import fetch from 'isomorphic-fetch';

export const SHOW_MARKER = 'SHOW_MARKER';

export function showMarker({ id }) {
  return { type: SHOW_MARKER, id };
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
    fetch('http://hkschemestudy.ddns.net/index.php?r=geo-news')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => dispatch(newsFetched(json)))
      .catch(window.console.log.bind(window.console));
}
