import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';

const AddQuoteScreen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const pressHandler = () => {};
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
