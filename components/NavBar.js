import React from 'react';
import {Button, View} from 'react-native';
import HomeIcon from 'react-native-vector-icons/dist/Entypo';
import FavoriteIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/dist/FontAwesome';

const NavBar = navigation => {
  return (
    <View>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')}>
        <HomeIcon name="home" />
      </Button>
      <Button
        title="Go to favorite"
        onPress={() => navigation.navigate('Favorite')}>
        <FavoriteIcon name="heart-circle" />
      </Button>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}>
        <ProfileIcon name="user" />
      </Button>
    </View>
  );
};

export default NavBar;
