import React from "react";
import { FlatList, StyleSheet, View, Image, Text} from "react-native";

const addToCart = require("./addToCart");

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
  {id: '1',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['1']},
   {id: '2',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['2']},
  {id: '3',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['3']},
 {id: '4',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['4']},
 {id: '5',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['5']},
 {id: '6',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['6']},
 {id: '7',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['7']}
];

const ProductCard =({productName, description, price, image}) => {
  return  (  //renderItem prop function returns a single product card
  <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <TouchableOpacity>
        <Image source={addToCart} style={styles.addToCartButton} />
      </TouchableOpacity>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
  </View>
)}


function ProductCards() {
  return(
<FlatList
    data={products}
    keyExtractor={(item) => item.id} numColumns={2}
    renderItem={({item}) => <ProductCard image={item.image} productName={item.productName} description={item.description} price={item.price}/> }
    
  />
)};

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
  }
 });


export default ProductCards;