const cloudinaryUser = 'jennys-alchemy-code-lab';
const FETCH_URL = `http://res.cloudinary.com/${cloudinaryUser}/image/upload`;

export const getURL = (filename, options = '') => {
  return `${FETCH_URL}/${options}/${filename}`;
};