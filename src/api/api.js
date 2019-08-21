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
    return data.titles;
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
