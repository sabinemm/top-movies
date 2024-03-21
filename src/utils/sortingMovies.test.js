import { sortMovies } from "./sortMovies";
import { describe, expect } from "@jest/globals";

const mockMovies = [
  {
    id: 1,
    title: "Avengers",
    release_date: "2012-04-25",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Beeteljuice",
    release_date: "1989-01-27",
    vote_average: 7.0,
  },
  {
    id: 3,
    title: "Candyman",
    release_date: "1992-10-16",
    vote_average: 6.7,
  },
];

describe("sortMovies functionality", () => {
  it("should sort movies by release date", () => {
    const sortedMovies = sortMovies(mockMovies, "release_date");
    expect(sortedMovies[0].title).toBe("Beeteljuice");
    expect(sortedMovies[1].title).toBe("Candyman");
    expect(sortedMovies[2].title).toBe("Avengers");
  });

  it("should sort movies by title", () => {
    const sortedMovies = sortMovies(mockMovies, "title");
    expect(sortedMovies[0].title).toBe("Avengers");
    expect(sortedMovies[1].title).toBe("Beeteljuice");
    expect(sortedMovies[2].title).toBe("Candyman");
  });

  it("should sort movies by vote avg", () => {
    const sortedMovies = sortMovies(mockMovies, "vote_average");
    expect(sortedMovies[0].title).toBe("Candyman");
    expect(sortedMovies[1].title).toBe("Beeteljuice");
    expect(sortedMovies[2].title).toBe("Avengers");
  });

  it("should sort movies if option not specified in desc order", () => {
    const sortedMovies = sortMovies(mockMovies);
    expect(sortedMovies[0].title).toBe("Avengers");
    expect(sortedMovies[1].title).toBe("Beeteljuice");
    expect(sortedMovies[2].title).toBe("Candyman");
  });
});
