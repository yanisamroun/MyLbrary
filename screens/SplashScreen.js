import React from 'react';
import {View,Button, Image, StyleSheet} from 'react-native';

export default function SplashScreen({ navigation }) {
    const goTo = () => navigation.navigate("HomeScreen");
  

    return (
        <View>
   
        

            <Button
          title="Entrer dans la bibliothèque"
          onPress={goTo}
          
        />
        </View>
          
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    logo: {
      width: 66,
      height: 58,
    },
  });