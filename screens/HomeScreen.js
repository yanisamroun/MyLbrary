import React, {useState, useEffect, useRef} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,} from 'react-native';
import axios from 'axios';
import {ListItem} from 'react-native-elements';
import SearchFilter from './SearchFilter';


export default function HomeScreen({navigation}) {
  const [books, setBooks] = useState([]);
  const [librarys, setLabrarys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    axios.get('https://my.api.mockaroo.com/library?key=6ad86280')
    .then(res => {
      console.log(res.data);
      setBooks(res.data);
    })
  }, [])
  
  

  return (
    <View style={styles.container}>
         
      <View style={styles.formulairrr}>
      
      <SearchFilter/>
     
      </View>

      <FlatList
      
        data={books}

        renderItem={({item})=> (
          <ListItem bottomDivider 
            onPress={() => navigation.navigate('BookDetails',{
              book: item
            })}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
            <ListItem.Title style={styles.authors}>{item.authors}</ListItem.Title>
            <ListItem.Title style={styles.synopsis}>{item.synopsis}</ListItem.Title>
            <ListItem.Title style={styles.release}>{item.release}</ListItem.Title>
           
          </ListItem.Content>
          <ListItem.Chevron />
          </ListItem>)
        }

        keyExtractor={item => item.id.toString()}
      />
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff'
  },
  input: {
  
    width: 300,
    borderWidth: 2,
    borderColor: '#5e503f',
    margin: 6,
    position:'relative',
    left: 5,
  
    
  },
  formulairrr: {
    margin:1,
    flexDirection: 'row',
   
  },
  title:{
    fontWeight: 'bold',
    color:'#7c606b',
    textDecorationLine:'underline',
  },
  release:{
    fontStyle: 'italic',
    color:'#c46bae'
  },
  authors:{
    fontStyle: 'italic',
    fontWeight:'400',
    
    color:'#4d4847',
    paddingBottom: 12,
  },
  synopsis:{
   
    textAlign:'left',
    paddingBottom:12,
    fontWeight:'300',
  },
 
});
