
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useRouter } from 'expo-router';


export default function DiningScreen() {
    const navigation = useNavigation();
    const router =  useRouter()
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dining Screen</Text>
        <Button onPress={() => router.push('./LiveScreen')}>
          Go to Live
        </Button>
      </View>
    );
  }