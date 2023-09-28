import { GOOGLE_API_KEY } from '@env';

console.log('GOOGLE_API_KEY', GOOGLE_API_KEY);

export const getMapPreview = ({ lat, lng, color }) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:${color}%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
};
