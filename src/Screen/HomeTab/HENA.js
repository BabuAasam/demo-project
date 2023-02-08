import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const HENA = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingBottom: 30}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={'#E5E5E5'} />
        <View style={styles.MainCountenar}>
          <View style={styles.ViewCountenar}>
            <Text style={{color: '#000000'}}>HENA MONTENA</Text>
            <TouchableOpacity>
              <Text style={{color: '#FF001F'}}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 10}}>+9667375759</Text>
        </View>
        <View style={{margin: 15}}>
          <View style={styles.ViewCountenar}>
            <Text style={{color: '#000000', fontSize: 18}}>My Account</Text>
            <TouchableOpacity style={{padding: 3}}>
              <Image
                style={{height: 16, width: 18}}
                source={IMAGEPATH.Bottom}
              />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 5}}>favourites, Offers & Settings</Text>
          <Text style={styles.BlankText}></Text>
        </View>
        <View style={styles.AddressesMainView}>
          <View style={styles.AddressesView}>
            <View>
              <Text style={styles.AddressesViewText}>Addresses</Text>
              <Text style={{color: '#000000'}}>
                share, Edit, & New Addresses
              </Text>
            </View>
            <TouchableOpacity style={{width: 20}}>
              <Image source={IMAGEPATH.LeftIcone} />
            </TouchableOpacity>
          </View>
          <View style={styles.DidMainView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.DidMainViewText}
                source={IMAGEPATH.GiftImage}
              />
              <Text style={styles.DidYouText}>Did you know?</Text>
            </View>
            <Text style={styles.friends}>
              you can now share addresses with friends and famliy using a smart
              link!
            </Text>
          </View>
        </View>
        <View style={{margin: 15}}>
          <View style={styles.Payments}>
            <Text style={styles.PaymentsText}>Payments & Refunds</Text>
            <TouchableOpacity style={{height: 20, width: 25}}>
              <Image style={styles.TopIconstyle} source={IMAGEPATH.TopIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.Refund}>Refund Status & Payment Modes</Text>
          <Text style={styles.BlankText}></Text>
        </View>
        <View style={styles.StatusView}>
          <View style={styles.StatusViewHeader}>
            <View style={styles.ItemView}>
              <Image source={IMAGEPATH.payment} />
              <Text style={styles.StatusText}>Refund Status</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.TouchableOpacitystyle}>
                <Image source={IMAGEPATH.LeftIcone} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ModesMainView}>
            <View style={styles.ModesHeaderView}>
              <Image source={IMAGEPATH.svgrepo} />
              <Text style={styles.ModesTeaxt}>Payment Modes</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.Touchable}>
                <Image source={IMAGEPATH.LeftIcone} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{margin: 15, paddingBottom: 20}}>
          <View style={styles.Help}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SUPPORT')}
                style={{width: 40}}>
                <Text style={styles.HelpText}>Help</Text>
              </TouchableOpacity>
              <Text style={{color: '#000000'}}>FAQs & Links</Text>
            </View>
            <TouchableOpacity style={{width: 20}}>
              <Image source={IMAGEPATH.LeftIcone} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HENA;
const styles = StyleSheet.create({
  MainCountenar: {
    borderBottomWidth: 1,
    margin: 15,
    paddingBottom: 10,
  },
  ViewCountenar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BlankText: {
    height: 0,
    borderWidth: 0.8,
    borderColor: '#000',
    borderStyle: 'dashed',
    marginTop: 18,
  },
  AddressesMainView: {
    borderBottomWidth: 1,
    margin: 15,
    paddingBottom: 20,
  },
  AddressesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AddressesViewText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  DidMainView: {
    borderWidth: 1,
    height: 85,
    width: '98%',
    borderRadius: 15,
    marginTop: 15,
    margin: 5,
    backgroundColor: '#F4D5BD63',
    borderColor: '#F4D5BD63',
  },
  DidMainViewText: {
    height: 21,
    width: 22,
    marginTop: 10,
    marginLeft: 10,
  },
  DidYouText: {
    color: '#000000',
    marginLeft: 13,
    marginTop: 9,
  },
  friends: {
    marginLeft: 35,
    fontSize: 12,
    margin: 6,
  },
  Payments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PaymentsText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  TopIconstyle: {
    height: 16,
    width: 18,
  },
  Refund: {
    marginTop: 10,
    color: '#000000',
  },
  StatusView: {
    borderBottomWidth: 1,
    margin: 15,
    paddingBottom: 20,
  },
  StatusViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ItemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusText: {
    marginLeft: 15,
    color: '#000000',
    fontSize: 17,
  },
  TouchableOpacitystyle: {
    width: 20,
    alignItems: 'center',
    marginLeft: '50%',
  },
  ModesMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  ModesHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ModesTeaxt: {
    marginLeft: 12,
    color: '#000000',
    fontSize: 17,
  },
  Touchable: {
    width: 20,
    alignItems: 'center',
    marginLeft: '48%',
  },
  Help: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HelpText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
});
