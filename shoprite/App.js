import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
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
<TouchableOpacity>
  <Image source ={require('./assets/shoppingBag.png')} size={25}></Image>
</TouchableOpacity>
</View>

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    margin: 20,
  },
  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20,
  }
});
