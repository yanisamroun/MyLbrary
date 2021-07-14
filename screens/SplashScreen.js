import React from 'react';
import {View,Button, Image, StyleSheet,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function SplashScreen({ navigation }) {
    const goTo = () => navigation.navigate("HomeScreen");
  

    return (
      <View style={styles.container}>

          
      <Text onPress={goTo} style={styles.text}>BIENVENUE DANS MA BIBLIOTHEQUE </Text>  
      <Image style={styles.image} source={require('./bookSplash.png')}/>

        <Text onPress={goTo} style={styles.button}>FEUILLETER</Text>

      
         

      </View>
          
    )
}

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffff',
      height:900,
    },
    button:{
    
      margin:10,
      width:141,
      borderWidth:3,
      position:'relative',
      top:90,
      left:110,
      backgroundColor:'#04ac8b',
      borderColor:'#044253',
      color:'white',
      fontSize:21,
      paddingHorizontal:10,
      borderRadius:6 ,
      
    
     
      
    },
    image:{
      position:'absolute',
      left:95,
      top:130,
      shadowColor: "#000",
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      
     
    },
    text:{
      margin:10,
      width:352,
      
      position:'relative',
      bottom:300,
      left:10,
      backgroundColor:'#04ac8b',
      borderColor:'#044253',
      color:'white',
      fontSize:19,
      paddingVertical:6,
      paddingHorizontal:10,
      borderRadius:6 ,
    

    }
   
  });