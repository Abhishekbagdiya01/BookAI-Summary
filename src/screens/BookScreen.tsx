import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import useBook from '../hooks/useBook';
import BackButton from '../components/BackButton';
import { Image } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import RenderHTML from 'react-native-render-html';

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
  const bookInfo = data?.volumeInfo;
  return (
    <View style={style.container}>
      <View style={style.appBar}>
        <BackButton></BackButton>
        <Text style={style.title}>{bookInfo?.title}</Text>
      </View>
      <View style={style.imageView}>
        <Image source={{ uri: bookInfo?.imageLinks.thumbnail || 'https://images.unsplash.com/photo-1585896452649-6ede5e126800?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={style.image}></Image>
        <Text style={style.authers} >{bookInfo?.authors.join(', ')}</Text>
      </View>
      {bookInfo?.categories.map((category, index) => <Text style={style.category}>
        {category}
      </Text>)}
      <View style={style.tile}>
        <View style={style.ratingContainer}>
          <Icon name="star" color="yellow" size={20}></Icon>
          <Text style={style.tileText} >{
            bookInfo?.averageRating || ""
          }</Text>
        </View>
        <Text style={style.tileText} >{
          bookInfo?.pageCount || ""
        } pages</Text>
      </View>
      <RenderHTML
        contentWidth={300}
        source={{
          html: bookInfo?.description,
        }}
        tagsStyles={
          {
            body: {
              color: 'white',
            }
          }
        }

      ></RenderHTML>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: '#292f36',
  },
  appBar: {
    paddingTop: 25,
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    borderRadius: 10,
    height: 280,
    width: 300,
    resizeMode: 'contain'
  },
  tile: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4ecdc4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 13,
    color: '#4ecdc4',

  },
  tileText: {
    color: 'white',
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  authers: {
    color: 'white',
    fontSize: 18,
  },

  category: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 13,
    color: '#4ecdc4',
  }

})

export default BookScreen;
