import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screen/HomeTab/Home';
import Food from '../Screen/FoodTab/Food';
import Instamart from '../Screen/InstamartTab/Instamart';
import Genie from '../TabScreen/Genie';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import SplashScreen from 'react-native-splash-screen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // })
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const FoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Food"
        component={Food}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const InstamartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Instamart"
        component={Instamart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const GenieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Genie"
        component={Genie}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingHorizontal: 10,
          paddingBottom: 15,
          height: 70,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{marginTop: -8}}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../Image/c14_house.png')}
                />
              </View>
            ) : (
              <Image
                style={{height: 20, width: 20}}
                source={require('../Image/c14_house.png')}
              />
            ),
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="FoodStack"
        component={FoodStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Food',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{marginTop: -8}}>
                <Image
                  style={{height: 22, width: 22}}
                  source={require('../Image/Vector.png')}
                />
              </View>
            ) : (
              <Image
                style={{height: 22, width: 22}}
                source={require('../Image/Vector.png')}
              />
            ),
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="InstamartStack"
        component={InstamartStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Instamart',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{marginTop: -8}}>
                <Image
                  style={{height: 20, width: 23}}
                  source={require('../Image/Instamart.png')}
                />
              </View>
            ) : (
              <Image
                style={{height: 20, width: 23}}
                source={require('../Image/Instamart.png')}
              />
            ),
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="GenieStack"
        component={GenieStack}
        options={{
          headerShown: false,
          tabBarLabel: ' Genie',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{marginTop: -8}}>
                <Image
                  style={{height: 23, width: 20}}
                  source={require('../Image/Genie.png')}
                />
              </View>
            ) : (
              <Image
                style={{height: 23, width: 20}}
                source={require('../Image/Genie.png')}
              />
            ),
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: '#000',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
