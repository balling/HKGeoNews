import { LIGHT_BLUE, DARK_GREY, ORANGE, OFF_WHITE } from './common-styles';

export const SIZE = 10;

export const marker = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: SIZE,
  height: SIZE,
  left: -SIZE / 2,
  top: -SIZE / 2,

  border: `2px solid ${OFF_WHITE}`,
  borderRadius: SIZE,
  backgroundColor: LIGHT_BLUE,
  textAlign: 'center',
  color: DARK_GREY,
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

export const markerHover = {
  ...marker,
  backgroundColor: ORANGE
};

export const tooltip = {
    background: OFF_WHITE,
    zIndex: 1000000,
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    width: 300,
    marginLeft: -150,
    marginBottom: 10,
    visibility: 'hidden',
};

export const tooltipHover = {
	  ...tooltip,
    visibility: 'visible',
};

export const anchor = {
    textDecoration: 'none',
    color: DARK_GREY,
};
