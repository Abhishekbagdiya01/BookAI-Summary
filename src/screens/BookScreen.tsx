import { Text, View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import useBook from '../hooks/useBook';
import BackButton from '../components/BackButton';
import { Image } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import RenderHTML from 'react-native-render-html';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  console.log(data);
  const bookInfo = data?.volumeInfo;
  return (
    <View style={style.container}>
      <View style={style.appBar}>
        <BackButton></BackButton>
        <Text style={style.title}>{bookInfo?.title}</Text>
      </View>

      <ScrollView contentContainerStyle={style.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.imageView}>
          <Image source={{ uri: bookInfo?.imageLinks.thumbnail }} style={style.image}></Image>
          <Text style={style.authers} >{bookInfo?.authors.join(', ')}</Text>
        </View>
        {
          bookInfo?.categories.map((category, index) => <Text style={style.category}>
            {category}
          </Text>)
        }
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

        <Pressable style={style.aiBtn} onPress={() => navigation.navigate('Summery', {
          title: bookInfo?.title,
          authors: bookInfo?.authors,
        })}>
          <Text style={style.aiBtnText}>AI Summery</Text>
        </Pressable>
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

      </ScrollView>
    </View >
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
  scrollView: {
    gap: 10,
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
    resizeMode: 'contain',
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
  },
  aiBtn: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    borderRadius: 15,
    alignSelf: 'flex-start'
  },
  aiBtnText: {
    padding: 10,
    color: 'white',
    fontSize: 20,
  },

})

export default BookScreen;
