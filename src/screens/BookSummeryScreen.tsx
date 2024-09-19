import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react'
import useAi from '../hooks/useAi'
import RenderHTML from 'react-native-render-html';
import BackButton from '../components/BackButton';



const BookSummeryScreen = () => {
  const route = useRoute();
  const { title, auther } = route?.params;
  const prompt: string = `Generate a detailed book summery of the book titled ${title} by ${auther} use proper html tag to formate summery`;
  const { data, isFetching, error } = useAi(prompt);
  if (isFetching) return <ActivityIndicator style={style.progressIndicator} />
  if (error) return <Text>{error}</Text>
  if (data) {
    console.log(data)
  }

  return (
    <View style={style.container}>
      <BackButton></BackButton>
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
    color: '#4ecdc4',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default BookSummeryScreen
