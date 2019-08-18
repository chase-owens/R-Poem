export const getPoets = async () => {
  let response = await fetch(`http://poetrydb.org/authors`);
  if (response.ok) {
    let data = await response.json();
    return data.authors;
  } else {
    console.log('ERROR STATUS: ', response.status);
  }
};
