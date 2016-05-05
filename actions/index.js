export const SHOW_MARKER = 'SHOW_MARKER';

export function showMarker({ id }) {
  return { type: SHOW_MARKER, id };
}
