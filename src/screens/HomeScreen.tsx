import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/searchBar";
import useSearch from "../hooks/useSearch";
import BookItem from "../components/BookItem";
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const { data, refetch } = useSearch(search);

  console.log(data)
  return <View style={styles.container}>
    <SearchBar value={search} setValue={setSearch} onPress={refetch} />
    <FlatList
      data={data}
      renderItem={({ item }) => <BookItem{...item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        padding: 10,
        gap: 5
      }}
    ></FlatList>
  </View>;

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  }
})
export default HomeScreen;
