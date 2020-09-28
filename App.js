import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import Categories from './components/Categories';
import Nav from './components/Nav';
import {Icon} from 'react-native-elements';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      Fetching: true,
    };
  }

  componentDidMount() {
    const data_url = 'https://apisiapp.herokuapp.com/api';
    fetch(data_url)
      .then((res) => res.json())
      .then((data) => this.setState({data: data, Fetching: false}));
  }

  render() {
    if (this.state.Fetching) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Image
            source={require('./components/imgs/Logo.png')}
            style={{width: 160, height: 160}}></Image>
          <Icon name="spinner" type="font-awesome" color="#616161" />
        </View>
      );
    }

    return (
      <ScrollView
        style={{
          backgroundColor: '#f0f2fe',
          padding: 8,
        }}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#D8DAE6"
          translucent={true}
        />
        <Nav data={this.state.data}></Nav>
        <Categories data={this.state.data}></Categories>
      </ScrollView>
    );
  }
}

export default App;
