import React from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'

export default function BookDetails({route}) {
  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.title}>{route.params.name.volumeInfo.title}</Text>
      <Text style={styles.author}>{route.params.name.volumeInfo.authors}</Text>
      <Text style={styles.description}>{route.params.name.volumeInfo.description}</Text>
      <Text style={styles.date}>Publié le : {route.params.name.volumeInfo.publishedDate}</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      marginVertical: 30
    },
    title: {
      
      fontSize: 30,
      textAlign: 'center',
      textDecorationLine:'underline',
    },
    author: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      fontStyle: 'italic',
    },
    description: {
      fontSize: 16,
      marginHorizontal: 25,
      marginVertical: 20
    },
    date: {
      fontSize: 16,
      position:'relative',
      left:25,
      fontStyle: 'italic',
      
      
    }
});