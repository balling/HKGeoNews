import React, { PropTypes } from 'react';
import * as style from './marker-style';

const Marker = ({ active, pinned, link, title, time, location, onClose }) => {
  const markerStyle = active || pinned ? style.markerHover : style.marker;
  const tooltipStyle = active ? style.tooltipHover : style.tooltip;

  return (
    <div style={markerStyle}>
      <div style={pinned ? style.tooltipPinned : tooltipStyle}>
        {pinned ? <i className="fa fa-times" onClick={onClose} /> : null}
        <a target="_blank" href={link} style={style.anchor}>{title}</a>
        <div style={pinned ? style.timestampPinned : style.timestamp}>
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
  pinned: PropTypes.bool,
  onClose: PropTypes.func,
  link: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
};

export default Marker;
