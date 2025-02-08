
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './DiningScreen';
import { useRouter } from 'expo-router';


export default function LiveScreen() {

    const router = useRouter();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Live Screen</Text>
        <Button onPress={() => router.push('./DiningScreen')}>Go to Dining</Button>
      </View>
    );
  }