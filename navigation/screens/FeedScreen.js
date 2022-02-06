import React from 'react';
import FeaturedList from '../../components/FeaturedList';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const FeedScreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('AddQuoteScreen');
  };
  return (
    <ScrollView style={styles.background}>
      <TouchableHighlight underlayColor="#a8dadc" onPress={pressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Quote</Text>
        </View>
      </TouchableHighlight>
      <FeaturedList />
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
});

export default FeedScreen;
