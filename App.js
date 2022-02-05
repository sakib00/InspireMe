import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <ScrollView style={styles.background}>
      <Card />
      <Card />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a8dadc',
  },
});

export default App;
