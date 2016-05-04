import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import { mapContainer, map } from './map-style';
import Marker from './Marker';

const MarkerMap = ({ center, markers, zoom }) => (
  <div style={mapContainer}>
    <div style={map}>
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyDDBrhr-8SGKa6t_O7IUmLzSTqOj89gQwE',
          language: 'zh-HK',
        }}
        center={center}
        zoom={zoom}
      >
      {markers.map(marker =>
        <Marker
          key={marker.id}
          {...marker}
        />
      )}
      </GoogleMap>
    </div>
  </div>
);

MarkerMap.propTypes = {
  center: PropTypes.array,
  markers: PropTypes.array,
  zoom: PropTypes.number,
};

MarkerMap.defaultProps = {
  center: [22.352734, 114.1277], // HK
  markers: [],
  zoom: 10,
};

export default MarkerMap;