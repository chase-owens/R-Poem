import { extractTitles } from '../utils/extractTitles';

const baseURL = `http://poetrydb.org/`;

export const getPoets = async () => {
  let response = await fetch(`${baseURL}authors`);
  if (response.ok) {
    let data = await response.json();
    return data.authors;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};

export const getPoemTitles = async (author = null) => {
  let authorSelected = author !== null;
  let response = authorSelected
    ? await fetch(`${baseURL}author/${author}/title`)
    : await fetch(`${baseURL}titles`);
  if (response.ok) {
    let data = await response.json();
    let titles = authorSelected ? extractTitles(data) : data.titles;
    return titles;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};

export const getPoem = async poem => {
  let response = await fetch(`${baseURL}/title/${poem}`);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};
