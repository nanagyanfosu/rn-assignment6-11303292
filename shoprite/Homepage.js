import React from'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,FlatList} from 'react-native';
import ProductCards from './home/ProductCards';
import {useCart} from './home/CartContext';
import {useNavigation} from '@react-navigation/native';



 const Homepage = () =>{
    const {addToCart} = useCart();

    const handleAddToCart = () =>{
        addToCart(item)
    }
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
<TouchableOpacity>
  <Image source ={require('./assets/Menu.png')} size={25}></Image>
</TouchableOpacity>

<Image source ={require('./assets/Logo.png')} size={25}></Image>

<View style={{flexDirection: 'row', columnGap: 15}}>
<TouchableOpacity>
  <Image source ={require('./assets/Search.png')} size={25}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
  <Image source ={require('./assets/shoppingBag.png')} size={25}></Image>
</TouchableOpacity>
</View>

      </View>

<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
<Text style={{fontSize: 26}}>OUR STORY</Text>

<View style={{flexDirection: 'row', columnGap: 20}}>
<TouchableOpacity>
  <Image source ={require('./assets/Listview.png')} size={25}></Image>
</TouchableOpacity>
<TouchableOpacity>
  <Image source ={require('./assets/Filter.png')} size={25}></Image>
</TouchableOpacity>
</View>

</View>

{/* <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginBottom: 20 }}>

</View> */}
<View>
<ProductCards />

</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    
  
  },
  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
 
});

export default Homepage;