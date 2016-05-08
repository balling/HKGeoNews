import { connect } from 'react-redux';
import MarkerMap from '../components/Map';

const mapStateToProps = (state) => ({
  markers: state.news.map((n, i) => ({
    id: i,
    link: n[0],
    title: n[1],
    active: state.activeMarker == i,
    time: n[4],
    ...n[3].location
  }))
});

const NewsMap = connect(mapStateToProps)(MarkerMap);

export default NewsMap;

