import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import type { Movie } from "./App";

const MovieList = React.memo(({ data }: { data: Movie[] }) => {
  const [sortOption, setSortOption] = useState("release_date");

  const sortMovies = (option) => {
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

  const sortedMovies = sortMovies(sortOption);

  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={sortOption}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setSortOption(itemValue)}
      >
        <Picker.Item label="Release Date" value="release_date" />
        <Picker.Item label="Title" value="title" />
        <Picker.Item label="Rating" value="vote_average" />
      </Picker>
      <FlatList
        data={sortedMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Text>{item.title}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Text>Rating: {item.vote_average}</Text>
          </View>
        )}
      />
    </View>
  );
});

export default MovieList;
