import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


export default class DemandListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      selectedId: -1,
      data: [],
      filteredData: []
    };
  }

  async componentDidMount() {
    let data = await fetch('https://my.api.mockaroo.com/library?key=c1c71d10')
      .then(response => response.json());

    this.setState({data: data});
  }
  
  search = (searchText) => {
    this.setState({searchText: searchText});

   

    
  };

  render() {
    return (
      <View style={styles.container}>
      
        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Rechercher un livre..."
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.search}
          value={this.state.searchText}
        />

       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});