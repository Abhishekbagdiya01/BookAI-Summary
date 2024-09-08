import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import useBook from '../hooks/useBook';
import BackButton from '../components/BackButton';

const BookScreen = () => {
  const route = useRoute();
  const { bookId } = route?.params;
  const { data, isFetching, error } = useBook(bookId);
  if (isFetching) {
    <ActivityIndicator />
  }
  if (error) {

    <Text>error</Text>
  }
  console.log(data);
  return (
    <View style={style.container}>
      <BackButton></BackButton>
      <Text>BookId : {data?.volumeInfo.title}</Text>


    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },

})

export default BookScreen;
