export const baseURL = `http://poetrydb.org/`;

export const getPoets = async () => {
  let response = await fetch(`${baseURL}authors`);
  if (response.ok) {
    let data = await response.json();
    return data.authors;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};

export const getPoemTitles = async () => {
  let response = await fetch(`${baseURL}titles`);
  if (response.ok) {
    let data = await response.json();
    return data.poems;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};
