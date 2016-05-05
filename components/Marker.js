import React, { PropTypes } from 'react';
import { marker, markerHover, tooltip, tooltipHover, anchor } from './marker-style';

const Marker = ({ active, link, title }) => {
  const style = active ? markerHover : marker;
  const tooltipStyle = active ? tooltipHover : tooltip;

  return (
    <div style={style}>
      {active ?
        <a target="_blank" href={link} style={{ opacity: 0 }}>LINK</a> :
        null}
      <div style={tooltipStyle}>
        <a target="_blank" href={link} style={anchor}>{title}</a>
      </div>
    </div>
  );
};

Marker.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Marker;
