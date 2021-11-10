import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home }  from '../../screens/Home';
import { Games } from '../../screens/Games';
import { GameDetail } from '../../screens/GameDetail';
import { Favorites } from '../../screens/Favorites';
import { Profile } from '../../screens/Profile';

import { Header } from '../Header';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
}

function NavBarCustom({ state, descriptors, navigation }: Props) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon = '';

        switch (label) {
          case 'Favorites':
            icon = 'gamepad';
          break;
          case 'Search':
            icon = 'search';
          break;
          case 'Profile':
            icon = 'user-cog';
          break;
          default:
            icon = 'home';
          break;
        }

        if(label == 'GameDetail') return (<></>);
        
        return (
          <TouchableOpacity 
            key={index}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={styles.itemMenu}>
              <FontAwesome5 name={icon} style={styles.icon} />
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function AppNavigation() {
  return (
    <Tab.Navigator tabBar={props => <NavBarCustom {...props} />}>
      <Tab.Screen options={{ header: props => <Header {...props} /> }} name="Home" component={Home} />
      <Tab.Screen options={{ header: props => <Header {...props} /> }} name="GameDetail" component={GameDetail} />
      <Tab.Screen options={{ header: props => <Header {...props} /> }} name="Favorites" component={Favorites} />
      <Tab.Screen options={{ header: props => <Header {...props} /> }} name="Search" component={Games} />
      <Tab.Screen options={{ header: props => <Header {...props} /> }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function NavBar(){
  return (
    <AppNavigation />
  );
}