import React, { PropTypes } from 'react';
import { marker, markerHover, tooltip, tooltipHover, anchor } from './marker-style';

const Marker = ({ $hover, link, title }) => {
  const style = $hover ? markerHover : marker;
  const tooltipStyle = $hover ? tooltipHover : tooltip;

  return (
    <div style={style}>
      <div style={tooltipStyle}>
        <a target="_blank" href={link} style={anchor}>{title}</a>
      </div>
    </div>
  );
};

Marker.propTypes = {
  $hover: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Marker;
