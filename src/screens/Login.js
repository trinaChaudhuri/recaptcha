import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const deviceHight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
      const {Login} = React.useContext(AuthContext)
    return (
      <View style={styles.mainContainer}>
        <TextInput
          onChangeText={username => this.setState({username})}
          style={styles.usernameContainer}
          placeholder="UserName"
          value={this.state.username}
        />
        <TextInput
          onChangeText={password => this.setState({password})}
          style={styles.passwordContainer}
          placeholder="password"
          secureTextEntry
          value={this.state.password}
        />
        <View style={styles.LoginStyle}>
          <TouchableOpacity onPress={()=>Login(this.state.password,this.state.username)}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 25}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.registerText}>Not an User? Register Here!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    height: deviceHight,
    width: deviceWidth,
    backgroundColor: 'rgba(169,169,169,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameContainer: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  passwordContainer: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    top: 10,
  },
  LoginStyle: {
    width: 300,
    height: 60,
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontFamily: 'Roboto-Regular',
    color: 'grey',
    fontSize: 15,
    top: 80,
  },
});
