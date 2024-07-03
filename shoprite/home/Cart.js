import React ,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import {useCart} from './CartContext';
import ProductCards from './ProductCards';


const productImages = {
  '1' : require('../assets/dress1.png'),
  '2' : require('../assets/dress2.png'),
  '3' : require('../assets/dress3.png'),
  '4' : require('../assets/dress4.png'),
  '5' : require('../assets/dress5.png'),
  '6' : require('../assets/dress6.png'),
  '7' : require('../assets/dress7.png'),

}

// const products = [
//   {id: '1', image: productImages['1']},
//    {id: '2', image: productImages['2']},
//   {id: '3', image: productImages['3']},
//  {id: '4', image: productImages['4']},
//  {id: '5', image: productImages['5']},
//  {id: '6', image: productImages['6']},
//  {id: '7', image: productImages['7']}
// ];

const products = [
    {id: '1',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['1']},
     {id: '2',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['2']},
    {id: '3',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['3']},
   {id: '4',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['4']},
   {id: '5',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['5']},
   {id: '6',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['6']},
   {id: '7',productName: 'Office Wear',description: 'reversible angora cardigan',price: '99.99', image: productImages['7']}
  ];



const CartItems = ({productName, description, price, image, id, removeItemFromCart}) =>{
return(
    <View style={styles.cartItems}>      

            <Image source={image} style={styles.image}/>
            <View style={{flexDirection: 'column', rowGap: 10, padding:10}}>
            <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
      </View>

      <TouchableOpacity onPress={() => removeItemFromCart(id)} style={{marginTop: 150}}>
        <Image source={require('../assets/remove.png')}/>
      </TouchableOpacity>
      
    </View>
)
}


function Cart(){
    const [cartItems, setCartItems] = useState(products);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate the total price whenever cartItems changes
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
      }, [cartItems]);
    

    // Function to remove item from cart
    const removeItemFromCart = (itemId) => {
      setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    };
    return (
        <ScrollView>
        <View style={styles.container}> 

        <View style={styles.header}>
            <Image source={require('../assets/Logo.png')} />
            <TouchableOpacity>
                <Image source={require('../assets/Search.png')}/>
            </TouchableOpacity>
            </View> 

        <Text style={{textAlign: 'center',alignContent: 'center',justifyContent:'center', fontSize: 27, borderBottomWidth: 0.5,borderBottomColor: 'black', marginBottom: 30}}>CHECKOUT</Text>

        <FlatList
    data={cartItems}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (<CartItems image={item.image} productName={item.productName} description={item.description} price={item.price} id={item.id} removeItemFromCart={removeItemFromCart}/>  )}
    />   
     
     <View style={{flexDirection: 'row', alignContent:'center', marginBottom: 20, justifyContent:'space-between'}}>
        <Text>EST. TOTAL</Text>
        <Text>${totalPrice}</Text>
     </View>

     <TouchableOpacity>
     <View style={{flexDirection: 'row', justifyContent:'center', columnGap: 15,alignContent: 'center',padding: 15, backgroundColor: 'grey', color: 'white'}}>
        <Image source={require('../assets/shoppingBag.png')} />
        <Text style={{color:'white', textAlign:'center', fontSize:20, marginTop: 5}}>Checkout</Text>
     </View>
     </TouchableOpacity>
    </View>
    </ScrollView>
    )};


const styles= StyleSheet.create({
    container: {
        padding: 15,

    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
        marginLeft: 130,
    },
    cartItems: {
        flexDirection: 'row',       
        alignItems: 'center',
        padding: 1,    
        marginBottom: 10,      
    }, 
    image: {
     width: '40%',
height: 190,
     resizeMode: 'cover',
           
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    price:{
        color: 'red',
    }
});

export default Cart;