import { Stack,Tabs } from "expo-router";
import { View,Text,Image } from "react-native";


import CONSTANTS from "../constants/AttributeConstants";

const DeliveryFocusIcon = require('../assets/images/Delivery_Focus.png')
const DeliverynonFocusIcon = require('../assets/images/Delivery_nonFocus.png')
const DiningFocusIcon = require('../assets/images/Dining_Focus.png')
const DiningnonFocusIcon = require('../assets/images/Dining_nonFocus.png')
const LiveFocusIcon = require('../assets/images/Live_Focus.png')
const LivenonFocusIcon = require('../assets/images/Live_nonFocus.png')

export default function RootLayout() {


  return (
    <Tabs screenOptions={
      ({route}) => ({
      tabBarIcon : ({focused} ) => {
        let iconName;
          if (route.name === CONSTANTS.SCREEN_NAMES.index) {
            iconName = focused ? DeliveryFocusIcon : DeliverynonFocusIcon;
          } else if (route.name === CONSTANTS.SCREEN_NAMES.DiningScreen) {
            iconName = focused ? DiningFocusIcon : DiningnonFocusIcon;
          } else if (route.name === CONSTANTS.SCREEN_NAMES.LiveScreen) {
            iconName = focused ? LiveFocusIcon : LivenonFocusIcon;
          }
          return <Image source={iconName} />;
      },
      headerShown: false
    })}>
      <Tabs.Screen
        name={CONSTANTS.SCREEN_NAMES.index } // Refers to app/index.js (default route)
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color : focused ? 'red':'black'}}>
              {CONSTANTS.SCREEN_LABEL.Delivery}
            </Text>
          )
        }}
      />
      <Tabs.Screen 
      name={CONSTANTS.SCREEN_NAMES.DiningScreen }
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color : focused ? 'red':'black'}}>
            {CONSTANTS.SCREEN_LABEL.Dining}
          </Text>
        )
      }}></Tabs.Screen>
      <Tabs.Screen 
      name={CONSTANTS.SCREEN_NAMES.LiveScreen }
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color : focused ? 'red':'black'}}>
            {CONSTANTS.SCREEN_LABEL.Live}
          </Text>
        )
      }}
      ></Tabs.Screen>
    </Tabs>
  )


}


