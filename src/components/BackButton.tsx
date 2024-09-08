import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable style={style.container} onPress={() => navigation.goBack()} >
      <Icon name='chevron-back' size={30} color={'#4ecdc4'}></Icon>
    </Pressable>
  );
}
const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#292f36',
    alignSelf: 'flex-start'
  },
})
