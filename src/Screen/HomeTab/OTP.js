import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Button from '../../Component/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {IMAGEPATH} from '../../Component/ImagePath';

const OTP = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.MainCountenar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.OtpBackCountenar}>
            <Image style={styles.Backbotton} source={IMAGEPATH.OtpBack} />
          </TouchableOpacity>
          <Image style={styles.MainImage} source={IMAGEPATH.OtpMainImage} />
        </View>
        <View style={styles.MainView}>
          <View style={{width: '93%', alignSelf: 'center'}}>
            <Text style={{fontSize: 25, color: '#000', margin: 10}}>OTP</Text>
          </View>
          <View
            style={{width: '93%', alignSelf: 'center', alignItems: 'center'}}>
            <Text
              style={{color: '#4A4747', marginHorizontal: 45, marginTop: 10}}>
              Enter OTP Send To{' '}
              <Text style={{color: '#FF0059'}}>988946574</Text>
            </Text>
          </View>
          <View
            style={{alignItems: 'center', alignSelf: 'center', width: '93%'}}>
            <OTPInputView
              pinCount={4}
              style={styles.OTpstyle}
              codeInputFieldStyle={styles.codeInputFieldStyle}
              onCodeFilled={pinCount => {
                console.log({pinCount});
              }}
            />
          </View>
          <Button
            text={'SIGN UP'}
            style={{marginTop: 38}}
            onPress={() => navigation.navigate('Logout')}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={{marginHorizontal: 40, marginTop: 10}}>
              Dont’t have an account ?
              <Text style={{color: '#FF0059'}}> Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default OTP;
const styles = StyleSheet.create({
  MainCountenar: {
    backgroundColor: '#FF0059',
    height: '55%',
  },
  OtpBackCountenar: {
    width: 20,
    borderRadius: 50,
    marginHorizontal: 15,
    marginTop: 10,
  },
  Backbotton: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
  MainImage: {
    height: 250,
    width: 250,
    marginHorizontal: 50,
    alignSelf: 'center',
  },
  MainView: {
    height: 480,
    backgroundColor: '#fff',
    top: -150,
    width: '88%',
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: '#E5E5E5',
    alignSelf: 'center',
  },
  OTpstyle: {
    height: 40,
    width: '85%',
    marginHorizontal: 30,
    marginTop: 30,
  },
  codeInputFieldStyle: {
    borderRadius: 10,
    width: 55,
    height: 45,
    backgroundColor: '#FE8A4717',
    borderColor: '#FE8A4717',
    color: '#000',
  },
});
