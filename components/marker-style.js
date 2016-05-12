import { LIGHT_BLUE, DARK_GREY, ORANGE, OFF_WHITE, YELLOW } from './common-styles';

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
    fontFamily: '"Noto Sans TC", sans-serif',
    fontWeight: 300,
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

export const tooltipPinned = {
    ...tooltipHover,
    zIndex: 1000001,
};

export const anchor = {
    textDecoration: 'none',
    color: DARK_GREY,
};

export const timestamp = {
  fontSize: '14px',
  color: OFF_WHITE,
  backgroundColor: ORANGE,
  textAlign: 'right',
}

export const timestampPinned = {
  ...timestamp,
  backgroundColor: YELLOW,
}