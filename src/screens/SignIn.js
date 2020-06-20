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


export default function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

//   const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.mainContainer}>
        <TextInput
          onChangeText={setUsername}
          style={styles.usernameContainer}
          placeholder="UserName"
          value={username}
        />
        <TextInput
          onChangeText={setPassword}
          style={styles.passwordContainer}
          placeholder="password"
          secureTextEntry
          value={password}
        />
        <View style={styles.LoginStyle}>
          <TouchableOpacity onPress={()=>signIn(username,password)}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 25}}>
              SignIn
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.registerText}>Already an user? Log-in!</Text>
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
    mainContainer: {
      height: deviceHight,
      width: deviceWidth,
      backgroundColor: 'rgba(169,169,169,0.6)',
      alignItems: 'center',
      justifyContent: 'center',
    },
   mobileContainer: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    usernameContainer: {
      width: 300,
      height: 60,
      top:10,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    passwordContainer: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderRadius: 20,
      top: 20,
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
  

