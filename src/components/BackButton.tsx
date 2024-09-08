import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable style={style.container} onPress={() => navigation.goBack()} >
      <Icon name='chevron-back' size={24} color={'white'}></Icon>
    </Pressable>
  );
}
const style = StyleSheet.create({
  container: {
    paddingLeft: 10, paddingTop: 45, paddingRight: 10,
    alignSelf: 'flex-start'
  },
})
