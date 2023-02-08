import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../Screen/BottomTab';
import Login from '../Screen/HomeTab/Login';
import SignUp from '../Screen/HomeTab/SignUp';
import OTP from '../Screen/HomeTab/OTP';
import Logout from '../Screen/HomeTab/Logout';
import MONTENA from '../Screen/HomeTab/MONTENA';
import Favourites from '../Screen/HomeTab/Favourites';
import SETTINGS from '../Screen/HomeTab/SETTINGS';
import Addresses from '../Screen/HomeTab/Addresses';
import HENA from '../Screen/HomeTab/HENA';
import SUPPORT from '../Screen/HomeTab/SUPPORT';
import MENU from '../Screen/FoodTab/MENU';
import Foodlist from '../Screen/FoodTab/Foodlist';
import Delivery from '../Screen/InstamartTab/Delivery';
import DeliveryBoy from '../Screen/InstamartTab/DeliveryBoy';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MONTENA"
          component={MONTENA}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favourites"
          component={Favourites}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SETTINGS"
          component={SETTINGS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HENA"
          component={HENA}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SUPPORT"
          component={SUPPORT}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MENU"
          component={MENU}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Foodlist"
          component={Foodlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Delivery"
          component={Delivery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryBoy"
          component={DeliveryBoy}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
