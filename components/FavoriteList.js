import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Card from './Card';
import FavoritesContext from '../state/FavoriteContext';

const FavoriteList = () => {
  const {favorites, setFavorites} = useContext(FavoritesContext);
  return (
    <ScrollView style={styles.background}>
      {favorites.map(quote => (
        <View key={quote._id}>
          <Card quote={quote} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a8dadc',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default FavoriteList;
