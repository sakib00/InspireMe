import React from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import FeaturedList from './components/FeaturedList';

const App = () => {
  return (
    <ScrollView style={styles.background}>
      <FeaturedList />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a8dadc',
  },
});

export default App;
