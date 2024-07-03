import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Homepage from './Homepage';
import Cart from './home/Cart';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './home/CartContext';

const Stack = createStackNavigator();

function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}/>
      <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>

  );
}

export default App;