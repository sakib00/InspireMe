import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Card from './Card';

const FeaturedList = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuoteRequest = async () => {
    const url = `https://api.quotable.io/quotes?limit=10`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setQuotes(responseJson.results);
    } else {
      setQuotes([]);
    }
  };

  useEffect(() => {
    getQuoteRequest();
  });

  return (
    <ScrollView style={styles.background}>
      {quotes.map(quote => (
        <View key={quote._id}>
          <Card autor={quote.author} quote={quote.content} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a8dadc',
  },
});
export default FeaturedList;
