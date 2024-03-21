export const sortMovies = (data, option) => {
  const sortedMovies = [...data].sort((a, b) => {
    if (a[option] === b[option]) {
      if (option === "title") {
        return a["vote_average"] - b["vote_average"];
      } else {
        return a["title"].localeCompare(b["title"]);
      }
    } else {
      return a[option] > b[option] ? 1 : -1;
    }
  });
  return sortedMovies;
};
