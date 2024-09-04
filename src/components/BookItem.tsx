import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { IBooks } from "../models/IBooks";
import Icon from "react-native-vector-icons/AntDesign";
const BookItem = (props: IBooks) => {
  const { id, volumeInfo } = props;
  const { title, subtitle, description, averageRating, pageCount, authors, imageLinks } = volumeInfo;
  return (
    <View style={style.containter}>
      <Image style={style.image} source={{ uri: imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1585896452649-6ede5e126800?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}></Image>
      <View style={style.info}>
        <Text style={style.text}>{title}</Text>
        <Text style={style.authers}> {
          authors?.join(", ")
        }</Text>

        <View style={style.ratingContainer}>
          <Icon name="star" color="yellow" size={20}></Icon>
          <Text style={style.ratingText}>{
            averageRating || ""
          }</Text>

        </View>
        <Text style={style.pages}>{pageCount} page</Text>
        <Text style={style.description}>{description?.split(' ').slice(0, 50).join(' ') || 'N/A'} ... </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containter: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    height: 200,
    width: 170,
    borderRadius: 10,
  },
  info: { flex: 1 },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  authers: {
    color: 'cyan',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  pages: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  description: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  ratingText: {
    color: 'white',
  },
});

export default BookItem;
