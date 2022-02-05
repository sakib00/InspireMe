import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
} from 'react-native';

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
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Quote</Text>
        </View>
      </TouchableHighlight>
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
