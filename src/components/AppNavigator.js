import React, {useContext} from 'react';
import {Image, StyleSheet, ImageBackground, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImagePath} from '../constants/ImagePath';
import {HomeScreen, LandingScreen} from '../screens';
import AnimatedTabBar from 'curved-bottom-navigation-bar';
import {COLORS} from '../constants/Colors';
import CounterContext from '../context/CounterContext';

const Tab = createBottomTabNavigator();

const Badge = ({count}) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default function AppNavigator() {
  const {val, setVal} = useContext(CounterContext);

  const tabs = {
    HomeScreen: {
      icon: ({progress, focused}) => (
        <Image
          style={{tintColor: focused ? COLORS.blue : COLORS.gray}}
          source={ImagePath.homeIcon}
        />
      ),
    },
    ActivityScreen: {
      icon: ({progress, focused}) => (
        <Image
          style={{tintColor: focused ? COLORS.blue : COLORS.gray}}
          source={ImagePath.activityIcon}
        />
      ),
    },
    CartScreen: {
      icon: ({progress, focused}) => (
        <ImageBackground
          style={{
            tintColor: focused ? COLORS.blue : COLORS.gray,
            height: 20,
            width: 20,
          }}
          source={ImagePath.cartIcon}>
          {val == 0 ? null : <Badge count={val} />}
        </ImageBackground>
      ),
      renderTitle: ({progress, title}) => {
        return <Badge count={5} />;
      },
    },
    WatchlistScreen: {
      icon: ({progress, focused}) => (
        <Image
          style={{tintColor: focused ? COLORS.blue : COLORS.gray}}
          source={ImagePath.watchlistIcon}
        />
      ),
    },
    UserScreen: {
      icon: ({progress, focused}) => (
        <Image
          style={{tintColor: focused ? COLORS.blue : COLORS.gray}}
          source={ImagePath.userIcon}
        />
      ),
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => (
          <AnimatedTabBar tabs={tabs} {...props} barHeight={86.2} />
        )}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ActivityScreen" component={LandingScreen} />
        <Tab.Screen name="CartScreen" component={LandingScreen} />
        <Tab.Screen name="WatchlistScreen" component={LandingScreen} />
        <Tab.Screen name="UserScreen" component={LandingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: 'red',
    alignItems: 'center',
    bottom: 10,
    left: 12,
  },
  count: {color: '#FFF'},
});
