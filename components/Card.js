import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({autor, quote}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textHead}>{autor}</Text>
      <Text style={styles.textQoute}>"{quote}"</Text>
      <View style={styles.actionBar}>
        <Icon name="heart" size={25} color="#e63946" />
        <Icon2 name="emoticon-excited" size={25} color="#ffd166" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderColor: '#457b9d',
    width: '100%',
  },

  textHead: {
    fontSize: 14,
    color: '#457b9d',
  },
  textQoute: {
    fontSize: 18,
    color: '#1d3557',
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  actionBar: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
export default Card;
