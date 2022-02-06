import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AddQuoteScreen = ({navigation}) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const pressHandler = async () => {
    try {
      // Validation for empty quotes
      if (quote === '' || author === '') {
        alert('Please fill up the boxes.');
        return;
      }
      let quotes = await AsyncStorage.getItem('quotesssss');
      let quotesArray = [];
      if (quotes) {
        quotesArray = JSON.parse(quotes);
      }
      quotesArray.push({
        _id: Math.random().toString(36).substring(2, 7),
        content: quote,
        author: author,
      });

      await AsyncStorage.setItem('quotesssss', JSON.stringify(quotesArray));
      navigation.goBack();

      console.log(quotesArray);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <TextInput
        style={styles.input}
        onChangeText={setAuthor}
        value={author}
        placeholder="Author Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={setQuote}
        value={quote}
        placeholder="Enter your Quote"
      />

      <TouchableHighlight underlayColor="#a8dadc" onPress={pressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Quote</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a8dadc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: '100%',
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
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
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#AAA',
    padding: 10,
  },
});

export default AddQuoteScreen;
