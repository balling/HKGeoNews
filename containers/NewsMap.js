import { connect } from 'react-redux';
import MarkerMap from './../components/Map';

const mapStateToProps = (state) => ({
  markers: state.news.map((n, i) => ({
    id: i,
    link: n[0],
    title: n[1],
    location: n[2],
    active: state.marker.active == i,
    pinned: state.marker.pinned == i,
    time: n[4],
    ...n[3].location
  }))
});

const NewsMap = connect(mapStateToProps)(MarkerMap);

export default NewsMap;

