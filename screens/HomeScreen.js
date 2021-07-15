import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';


export default function LibraryScreen({navigation}) {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  const searchBook = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCU2yWQoGxGeDfCO8HbGw9MWk2ejYKruIM`)
    .then(res => {
      setBooks(res.data.items);
    })
  }

  const booksMaps = books.map(books => {
    return (
      <View>
        <Text style={styles.bookTitle}>
          {books.volumeInfo.title}
        </Text>
      </View>
    )
  })

  function goToBook(book) {
    navigation.navigate('BookDetails', {
      name: book,
    });
  }

 
    return (
       <View style={styles.container}>
         <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Rechercher un livre"
           onChangeText={(text) => {setSearch(text)}} />
          <Button title="✓" color="#df51fc"  onPress={searchBook} />
        </View> 
        <FlatList
            style={styles.list}
            data={books}
            renderItem={({item})=> (
              <ListItem  bottomDivider onPress={() => goToBook(item)}>
                
              <ListItem.Swipeable
              leftContent={
                <Button title="Info"/>
              }
              rightContent={
                <Button
                  title="Delete"
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              />
          }>
            </ListItem.Swipeable>
              <ListItem.Content>
                <View >
          
                  <ListItem.Title style={styles.title}>{item.volumeInfo.title}</ListItem.Title>
                  <ListItem.Title style={styles.authors}>{item.volumeInfo.authors}</ListItem.Title>
                 
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
              </ListItem>)
            }
            keyExtractor={item => item.id.toString()}
          />

                     
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:800
  },
  title: {
    fontWeight: 'bold',
    color:'#86d6fc',
    textDecorationLine:'underline',
  },
  release:{
    fontStyle: 'italic',
    color:'#c46bae'
  },
  authors:{
    fontStyle: 'italic',
    fontWeight:'300',
    
    color:'#4d4847',
    paddingBottom: 12,
  },

  list: {
    height: 530
  },
  search: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 10
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    width: 300,
    
    fontSize: 16,
    fontStyle:'italic',
    
  },
  bookTitle: {
    fontSize: 21,
    marginTop: 20,
    marginHorizontal: 2,
    fontFamily: 'DancingScript'
  },
  
});
