import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
} from 'react-native';

import Card from './Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeaturedList = () => {
  const [quotes, setQuotes] = useState([]);
  const [profileQuotes, setProfileQuotes] = useState([]);

  const getQuoteStorageRequest = useCallback(async () => {
    const asyncQuotes = await AsyncStorage.getItem('quotessss');

    const asyncQuotesJson = JSON.parse(asyncQuotes);

    if (asyncQuotesJson) {
      setProfileQuotes(asyncQuotesJson);
    }
  }, []);

  const getQuoteRequest = useCallback(async () => {
    // Fetch from quotable api
    const url = `https://api.quotable.io/quotes?limit=5`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setQuotes(responseJson.results);
    }
  }, []);

  useEffect(() => {
    getQuoteStorageRequest();
    getQuoteRequest();
  }, [getQuoteRequest, getQuoteStorageRequest]);

  useEffect(() => {
    getQuoteStorageRequest();
  }, [getQuoteStorageRequest, profileQuotes]);

  return (
    <ScrollView style={styles.background}>
      {profileQuotes.map(quote => (
        <View key={quote._id}>
          <Card quote={quote} />
        </View>
      ))}
      {quotes.map(quote => (
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
  button: {
    backgroundColor: '#457b9d',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
export default FeaturedList;
