import React, {Component} from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';

class CoinSearch extends Component {
  state = {
    query: '',
  };
  handleText = (query) => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };

  render() {
    const {query} = this.state;
    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS == 'ios'
              ? styles.textInputIOS
              : styles.textInputAndroid,
          ]}
          placeholder="Search Coin"
          value={query}
          onChangeText={this.handleText}
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: '#fff',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinSearch;
