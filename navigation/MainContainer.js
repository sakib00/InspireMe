import React, {useState, useMemo} from 'react';
import FavoritesContext from '../state/FavoriteContext';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// * Icons
import Ionsicons from 'react-native-vector-icons/dist/Ionicons';

// ? Screens
import FeedScreen from './screens/FeedScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedStack from './FeedStack';

// * Sceen Names
const feedName = 'Feed';
const favoriteName = 'Favorite';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const [favorites, setFavorites] = useState([]);
  const value = useMemo(() => ({favorites, setFavorites}), [favorites]);
  return (
    <NavigationContainer>
      <FavoritesContext.Provider value={value}>
        <Tab.Navigator
          initialRouteName={feedName}
          screenOptions={({route}) => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarShowLabel: false,
            tabBarStyle: {padding: 10, height: 70},
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;

              if (rn === feedName) {
                iconName = focused ? 'albums' : 'albums-outline';
              } else if (rn === favoriteName) {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (rn === profileName) {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionsicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen
            name={feedName}
            options={{headerShown: false}}
            component={FeedStack}
          />
          <Tab.Screen name={favoriteName} component={FavoriteScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      </FavoritesContext.Provider>
    </NavigationContainer>
  );
};

export default MainContainer;
