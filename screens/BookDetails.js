import React from 'react'
import { View, Text, ScrollView, StyleSheet, } from 'react-native'

export default function PostDetailsScreen({route}) {
    const book = route.params.book;
    return (
        
        <View>
            <ScrollView>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.body}>{book.body}</Text>
            </ScrollView>
            
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    
    title:{
      fontSize:20,
      paddingBottom:10,
      margin: 5,
      marginTop: 5,
      fontWeight: 'bold',
      marginBottom: 5,
      textDecorationLine:'underline',
      
    },
    body:{
    
        textAlign:'left',
        margin: 5,
        fontSize:13,
        fontWeight: '500',
    }
   
  });
