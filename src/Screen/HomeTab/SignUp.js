import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import {IMAGEPATH} from '../../Component/ImagePath';
// import { snackBar } from '../Utilty/SnakBar';

const SignUp = ({navigation}) => {
  // const continueHandler=()=>{
  //   snackBar("please Login" ,"success")
  // }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.MainViewCountenar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.BackButton}>
            <Image style={styles.BackImage} source={IMAGEPATH.SignUpBack} />
          </TouchableOpacity>
          <Image style={styles.MainImage} source={IMAGEPATH.SignUpmainImage} />
        </View>
        <View style={styles.SignUpCountenar}>
          <View style={styles.SignUPView}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </View>
          <View style={{height: 50}}>
            <Input placeholder={'Enter Email Id/ Phone No.'} />
          </View>
          <View style={styles.InputCountenar}>
            <Input placeholder={'Password'} />
          </View>
          <View style={styles.InputCountenar}>
            <Input placeholder={'Confirm Password'} />
          </View>
          <Button
            text={'SIGN UP'}
            style={{marginTop: 45}}
            onPress={() => navigation.navigate('OTP')}
          />
          <View style={styles.BottomView}>
            <Text style={styles.ItemStyle}>
              Dont’t have an account ?
              <Text style={{color: '#FF0059'}}> Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  MainViewCountenar: {
    backgroundColor: '#FF0059',
    height: 400,
  },
  BackButton: {
    width: 20,
    borderRadius: 50,
    marginHorizontal: 15,
    marginTop: 10,
  },
  BackImage: {
    height: 15,
    width: 15,
  },
  MainImage: {
    height: 260,
    width: 260,
    marginHorizontal: 40,
    alignSelf: 'center',
  },
  SignUpCountenar: {
    height: '65%',
    backgroundColor: '#fff',
    top: -150,
    width: '88%',
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: '#E5E5E5',
    alignSelf: 'center',
  },
  SignUPView: {
    width: '93%',
    alignSelf: 'center',
  },
  SignUpText: {
    fontSize: 25,
    color: '#000',
    margin: 8,
  },
  InputCountenar: {
    height: 50,
    marginTop: 25,
  },
  BottomView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemStyle: {
    marginHorizontal: 40,
    marginTop: 10,
  },
});
