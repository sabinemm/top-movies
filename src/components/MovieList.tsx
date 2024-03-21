import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import type { Movie } from "../../App";
import { sortMovies } from "../utils/sortMovies";

const MovieList = React.memo(({ data }: { data: Movie[] }) => {
  const [sortOption, setSortOption] = useState("release_date");

  const sortedMovies = sortMovies(data, sortOption);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.picker}>
        <Text style={styles.pickerText}>Sort by:</Text>
        <Picker
          selectedValue={sortOption}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setSortOption(itemValue)}
        >
          <Picker.Item label="Release Date" value="release_date" />
          <Picker.Item label="Title" value="title" />
          <Picker.Item label="Rating" value="vote_average" />
        </Picker>
      </View>
      <FlatList
        data={sortedMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.releaseDate}>
                Release Date: {item.release_date}
              </Text>
              <Text style={styles.rating}>
                Rating: {item.vote_average} / 10
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  picker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  pickerText: {
    padding: 10,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    paddingBottom: 10,
    fontFamily: "Lato_400Regular",
    fontSize: 24,
  },
  releaseDate: {
    paddingBottom: 6,
    fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
  rating: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 300,
  },
});

export default MovieList;
