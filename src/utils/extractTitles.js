export const extractTitles = poems => {
  let titles = [];
  poems.forEach(poem => {
    console.log(poem);
    titles.push(poem.title);
  });
  return titles;
};
