import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Logout = ({navigation}) => {
  const [Show, setShow] = useState();
  const [Edit, setEdit] = useState();

  const [Add, setAdd] = useState();
  const [Addresses, setAddresses] = useState();

  const [Payments, setPayments] = useState();
  const [Refunds, setRefunds] = useState();

  const [FAQ, setFAQ] = useState();
  const [Links, setLinks] = useState();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.MainView}>
          <Image style={styles.MainImage} source={IMAGEPATH.UserlogoutImage} />
        </View>
        <View style={styles.ViewCountenar}>
          <View style={styles.FullNameCountenar}>
            <Text style={{color: '#000000'}}>Full Name</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MONTENA')}>
              <Text style={{color: '#FF001F'}}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.AccountCountenar}>
            <Text style={{color: '#000000', fontSize: 16}}>My Account</Text>
            <TouchableOpacity
              onPress={() => {
                setShow(!Show), setEdit(!Edit);
              }}>
              <Image
                style={{height: 20, width: 20, marginRight: 7}}
                source={Show ? IMAGEPATH.Bottom : IMAGEPATH.LeftIcone}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30}}>
            {Edit && (
              <View>
                <Text style={{color: '#4A4747'}}>
                  Favourites, Offers & Settings
                </Text>
              </View>
            )}
          </View>
          <View style={styles.AddressCountenar}>
            <Text style={{color: '#000000', fontSize: 16}}>Addresses</Text>
            <TouchableOpacity
              onPress={() => {
                setAdd(!Add), setAddresses(!Addresses);
              }}>
              <Image
                style={{height: 20, width: 20, marginRight: 7}}
                source={Add ? IMAGEPATH.Bottom : IMAGEPATH.LeftIcone}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30}}>
            {Addresses && (
              <View>
                <Text style={{color: '#4A4747'}}>
                  Share, Edit & Add New Addresses
                </Text>
              </View>
            )}
          </View>
          <View style={styles.PaymentCountenar}>
            <Text style={{color: '#000000', fontSize: 16}}>
              Payments & Refunds
            </Text>
            <TouchableOpacity
              onPress={() => {
                setPayments(!Payments), setRefunds(!Refunds);
              }}>
              <Image
                style={{height: 20, width: 20, marginRight: 7}}
                source={Payments ? IMAGEPATH.Bottom : IMAGEPATH.LeftIcone}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30}}>
            {Refunds && (
              <View>
                <Text style={{color: '#4A4747'}}>
                  Refund Status & Payment Modes
                </Text>
              </View>
            )}
          </View>
          <View style={styles.HelpCountenar}>
            <Text style={{color: '#000000', fontSize: 16}}>Help</Text>
            <TouchableOpacity
              onPress={() => {
                setFAQ(!FAQ), setLinks(!Links);
              }}>
              <Image
                style={{height: 20, width: 20, marginRight: 7}}
                source={FAQ ? IMAGEPATH.Bottom : IMAGEPATH.LeftIcone}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30}}>
            {Links && (
              <View>
                <Text style={{color: '#4A4747'}}>FAQ & Links</Text>
              </View>
            )}
          </View>
          <View style={styles.LogoutCountenar}>
            <Text style={{color: '#000000', marginTop: 4}}>LOGOUT</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Logout;
const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#FF0059',
    height: '55%',
  },
  MainImage: {
    height: 140,
    width: 140,
    marginHorizontal: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
  ViewCountenar: {
    height: 550,
    backgroundColor: '#FFF2F2',
    top: -200,
    width: '88%',
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: '#FFF2F2',
    alignItems: 'center',
    alignSelf: 'center',
  },
  FullNameCountenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fff',
    width: '88%',
    margin: 20,
    padding: 7,
    borderRadius: 10,
  },
  AccountCountenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#fff',
    width: '88%',
    marginHorizontal: 20,
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
  },
  AddressCountenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#fff',
    width: '88%',
    marginHorizontal: 20,
    padding: 7,
    borderRadius: 10,
    marginTop: 25,
  },
  PaymentCountenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#fff',
    width: '88%',
    marginHorizontal: 20,
    padding: 7,
    borderRadius: 10,
    marginTop: 25,
  },
  HelpCountenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#fff',
    width: '88%',
    marginHorizontal: 20,
    padding: 7,
    borderRadius: 10,
    marginTop: 25,
  },
  LogoutCountenar: {
    backgroundColor: '#fff',
    marginTop: 40,
    height: 45,
    padding: 10,
    width: '98%',
  },
});
