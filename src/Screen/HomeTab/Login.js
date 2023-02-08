import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORPATH} from '../../Component/Color';
import {IMAGEPATH} from '../../Component/ImagePath';
const Login = ({navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: COLORPATH.White}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={COLORPATH.Statusbar} />
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerPadding}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.headerIcons} source={IMAGEPATH.LoginBack} />
            </TouchableOpacity>
            <Image
              style={styles.platimageContainer}
              source={IMAGEPATH.LoginMainImaig}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: -110}}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.mainInputContainer}>
              <TextInput
                style={styles.mainInput}
                placeholder="Email"
                placeholderTextColor={'#4A4747'}
                color={'#4A4747'}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.mainInput}
                placeholder="Password"
                placeholderTextColor={'#4A4747'}
                color={'#4A4747'}
              />
              <Image
                style={styles.passwordImage}
                source={IMAGEPATH.LoginPassword}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordContainer}>
                Forgot Password
              </Text>
            </TouchableOpacity>
            <View style={styles.boderContainer} />
            <View style={styles.boderTextConter}>
              <Text style={styles.textBoder}>OR</Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity>
                <Image source={IMAGEPATH.Loginfacebooklogo} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IMAGEPATH.LoginGoogleLogo} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
              <Text>Dont’t have an account ?</Text>
              <TouchableOpacity>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FF0059',
    height: 350,
  },
  mainContainerPadding: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerIcons: {
    tintColor: '#fff',
  },
  platimageContainer: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  loginContainer: {
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 3,
    elevation: 5,
    shadowColor: '#52006A',
  },
  loginText: {
    color: '#000',
    fontSize: 20,
  },
  mainInputContainer: {
    backgroundColor: '#FE8A4717',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  mainInput: {
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE8A4717',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  passwordImage: {
    width: 22,
    height: 22,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    color: '#4A4747',
    marginTop: 9,
    fontSize: 12,
  },
  boderContainer: {
    borderWidth: 0.3,
    borderColor: '#C4C4C4AB',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
  boderTextConter: {
    width: '10%',
    backgroundColor: '#C4C4C4DB',
    alignSelf: 'center',
    marginTop: -12,
    borderRadius: 20,
  },
  textBoder: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#FF0059',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 20,
    marginTop: 25,
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  registerText: {
    color: '#FF0059',
  },
});
