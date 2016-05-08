import React, { PropTypes } from 'react';
import { marker, markerHover, tooltip, tooltipHover, anchor, timestamp } from './marker-style';

const Marker = ({ active, link, title, time }) => {
  const style = active ? markerHover : marker;
  const tooltipStyle = active ? tooltipHover : tooltip;

  return (
    <div style={style}>
      {active ?
        <a target="_blank" href={link} style={{ opacity: 0 }}>LINK</a> :
        null}
      <div style={tooltipStyle}>
        <a target="_blank" href={link} style={anchor}>{title}</a>
        <div style={timestamp}>{time}</div>
      </div>
    </div>
  );
};

Marker.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
};

export default Marker;
