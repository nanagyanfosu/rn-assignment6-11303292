import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const addToCart = require("../assets/add_circle.png");

const productImages = {
  '1' : require('../assets/dress1.png'),
  '2' : require('../assets/dress2.png'),
  '3' : require('../assets/dress3.png'),
  '4' : require('../assets/dress4.png'),
  '5' : require('../assets/dress5.png'),
  '6' : require('../assets/dress6.png'),
  '7' : require('../assets/dress7.png'),

}
const products = [
  {id: '1',productName: 'Office Wear',description: 'Office wear for office',price: '69.99', image: productImages['1']},
   {id: '2',productName: 'Church Wear',description: 'Church wear for church',price: '59.99', image: productImages['2']},
  {id: '3',productName: 'Casual Wear',description: 'Reversible angora cardigan',price: '29.99', image: productImages['3']},
 {id: '4',productName: ' Lamerei',description: 'Recycle Boucle Knit Cardigan Pink',price: '39.99', image: productImages['4']},
 {id: '5',productName: 'School Wear',description: 'Reversible angora cardigan',price: '109.99', image: productImages['5']},
 {id: '6',productName: 'Hospital Wear',description: 'Hospital wear for hospitals',price: '79.99', image: productImages['6']},
 {id: '7',productName: 'Office Wear',description: 'Office wear for office',price: '89.99', image: productImages['7']}
];

const ProductCard =({productName, description, price, image, onAddToCart, id}) => {
  return  (
  <View style={styles.card}>
      <ImageBackground source={image} style={styles.image} >
      <TouchableOpacity onPress={() => onAddToCart(id)}>
        <Image source={addToCart} style={styles.addToCartButton} />
      </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
  </View>
)};


function ProductCards() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
const loadCart = async () => {
  const storedCart = await AsyncStorage.getItem('cart')
  if (storedCart) setCart(JSON.parse(storedCart));
};
loadCart();
  }, []);

  const handleAddToCart = async (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

    Alert.alert("Added to Cart successfully!", `${item.productName} has been added to your cart.`);
  };


  return(
    
<FlatList
    data={products}
    keyExtractor={(item) => item.id} numColumns={2}
    renderItem={({item}) => (<ProductCard image={item.image} productName={item.productName} description={item.description} price={item.price} onAddToCart={()=> handleAddToCart(item)}/>  )}
    />
  );
}
 
  

const styles = StyleSheet.create({
  card: {
    width: '50%',
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    width:'100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,  //maintains aspect ratio while scaling
    position: 'relative',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addToCartButton: {
  position: 'relative',
 bottom: -160,
 right: -110,
  width: 30,
  height: 30,
  

    
  },
 });


export default ProductCards;