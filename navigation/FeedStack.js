import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './screens/FeedScreen';
import AddQuoteScreen from './screens/AddQuoteScreen';

const Stack = createStackNavigator();
const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quotes" component={FeedScreen} />
      <Stack.Screen name="AddQuoteScreen" component={AddQuoteScreen} />
    </Stack.Navigator>
  );
};

export default FeedStack;
