import React, { PropTypes } from 'react';
import * as style from './marker-style';

const Marker = ({ active, link, title, time, location }) => {
  const markerStyle = active ? style.markerHover : style.marker;
  const tooltipStyle = active ? style.tooltipHover : style.tooltip;

  return (
    <div style={markerStyle}>
      {active ?
        <a target="_blank" href={link} style={{ opacity: 0 }}>LINK</a> :
        null}
      <div style={tooltipStyle}>
        <a target="_blank" href={link} style={style.anchor}>{title}</a>
        <div style={style.timestamp}>
          <span style={{ float: 'left' }}>
            <i className="fa fa-map-marker" style={{ padding: '0 10px' }} />{location}
          </span>
          {time}
        </div>
      </div>
    </div>
  );
};

Marker.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
};

export default Marker;
