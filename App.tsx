import React, { useEffect, useState } from "react";
// @ts-ignore
import { REACT_APP_MOVIES_API_TOKEN } from "@env";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import MovieList from "./MovieList";

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
};

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&vote_count.gte=1000";
  const TOKEN = REACT_APP_MOVIES_API_TOKEN;

  const getMovies = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <MovieList data={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
