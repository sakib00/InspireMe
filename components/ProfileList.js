import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
} from 'react-native';

import Card from './Card';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileList = () => {
  const [profileQuotes, setProfileQuotes] = useState([]);

  const getQuoteRequest = async () => {
    const asyncQuotes = await AsyncStorage.getItem('quotesssss');

    const asyncQuotesJson = JSON.parse(asyncQuotes);

    if (asyncQuotesJson) {
      setProfileQuotes(asyncQuotesJson);
    }
  };

  useEffect(() => {
    getQuoteRequest();
  }, []);

  return (
    <ScrollView style={styles.background}>
      {profileQuotes.map(quote => (
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
export default ProfileList;
