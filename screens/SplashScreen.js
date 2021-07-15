import React from 'react';
import {View,Button, Image, StyleSheet,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';



export default function SplashScreen({ navigation }) {
    const goTo = () => navigation.navigate("HomeScreen");
  

    return (
      <View style={styles.container}>

          
      <Text onPress={goTo} style={styles.text}>MyLibraryApp </Text>  
      <Image style={styles.image} source={require('./logo123.png')}/>


      <TouchableOpacity onPress={() => goTo()}>
      <Image  style={styles.button} source={require('./img-splash.png')}/>
      </TouchableOpacity>


      

      
         

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
      width:170,
      height:50,
      position:'relative',
      top:200,
      left:100,  
    },
    image:{
      position:'absolute',
      left:-45,
      top:10,
     
      
     
    },
    text:{
      margin:10,
      width:252,
      textAlign:'center',
      position:'relative',
      bottom:300,
      left:60,
      top:20,
    
      borderColor:'#044253',
      color:'#54abfc',
      fontSize:29,
      paddingVertical:6,
      paddingHorizontal:10,
      borderRadius:6 ,
    

    }
   
  });