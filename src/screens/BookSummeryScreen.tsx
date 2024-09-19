import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react'
import useAi from '../hooks/useAi'
import RenderHTML from 'react-native-render-html';
import BackButton from '../components/BackButton';



const BookSummeryScreen = () => {
  const route = useRoute();
  const { title, authors } = route?.params;

  const prompt = `Generate a detailed and well-structured summary of the book titled "${title}" by ${authors.join(
    ', ',
  )}. Use appropriate HTML tags to format the summary.`;

  const { data, isFetching, error } = useAi(prompt);
  if (error) return <Text style={style.errorMsg}>{error}</Text>
  if (isFetching) return <ActivityIndicator style={style.progressIndicator} />
  if (data) {
    console.log(data)
  }

  return (
    <View style={style.container}>
      <BackButton></BackButton>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <RenderHTML
          contentWidth={300}
          source={{
            html: data!,
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

    </View>
  )
}
const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 35,
    backgroundColor: '#292f36',
  },
  progressIndicator: {
    flex: 1,
    color: '#4ecdc4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292f36',
  },
  errorMsg: {
    flex: 1,
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',

  }
})
export default BookSummeryScreen
