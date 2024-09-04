import React from "react";
import { View, StyleSheet, TextInput, Text, Pressable, SafeAreaView } from 'react-native';
import { ISearchBar } from "../models/ISearchBar";
const SearchBar = (props: ISearchBar) => {
  // const { setSearch, onPress } = props;
  const { value, setValue, onPress } = props;
  return <View style={style.container}>
    <TextInput style={style.input} placeholder="Search book"
      value={value}
      onChangeText={setValue}
      onSubmitEditing={onPress}
    />
    <Pressable style={style.btn} onPress={onPress}>

      <Text style={style.btnText}>Search</Text>
    </Pressable>
  </View>;
};
const style = StyleSheet.create(
  {
    container: {
      paddingLeft: 10, paddingTop: 45, paddingRight: 10,
      flexDirection: 'row',
      // flex:1,
      gap: 10,

    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 20,
      flex: 1,

    },
    btn: {
      justifyContent: 'center',
      borderRadius: 20,
      paddingHorizontal: 15,
      backgroundColor: 'cyan'
    },
    btnText: {
      fontWeight: 'bold',
      color: 'white',

    }
  }
);
export default SearchBar;
