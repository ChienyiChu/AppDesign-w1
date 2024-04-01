import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import bookData from "../json/book.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <AlbumList 
        list={bookData.albumList}
        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;
