import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const MONTENA = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingBottom: 30}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={'#E5E5E5'} />
        <View style={{borderBottomWidth: 1, margin: 15, paddingBottom: 10}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000000'}}>HENA MONTENA</Text>
            <TouchableOpacity>
              <Text style={{color: '#FF001F'}}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 10}}>+9667375759</Text>
        </View>
        <View style={{margin: 15}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000000', fontSize: 18}}>My Account</Text>
            <TouchableOpacity style={{padding: 3}}>
              <Image
                style={{height: 16, width: 18}}
                source={IMAGEPATH.TopIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 5}}>favourites, Offers & Settings</Text>
          <Text
            style={{
              height: 0,
              borderWidth: 0.8,
              borderColor: '#000',
              borderStyle: 'dashed',
              marginTop: 18,
            }}></Text>
        </View>
        <View style={{borderBottomWidth: 1, margin: 15, paddingBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGEPATH.MontenaHartImage} />
              <Text style={{marginLeft: 15, color: '#000000', fontSize: 17}}>
                Favourites
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Favourites')}
                style={{
                  width: 20,
                  alignItems: 'center',
                  marginLeft: '60%',
                }}>
                <Image source={IMAGEPATH.LeftIcone} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGEPATH.OfferParsent} />
              <Text style={{marginLeft: 15, color: '#000000', fontSize: 17}}>
                Offers
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={{
                  width: 20,
                  alignItems: 'center',
                  marginLeft: '69%',
                }}>
                <Image source={IMAGEPATH.LeftIcone} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGEPATH.SattingImage} />
              <Text style={{marginLeft: 15, color: '#000000', fontSize: 17}}>
                Settings
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SETTINGS')}
                style={{
                  width: 20,
                  alignItems: 'center',
                  marginLeft: '63%',
                }}>
                <Image source={IMAGEPATH.LeftIcone} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, margin: 15, paddingBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
                Addresses
              </Text>
              <Text style={{color: '#000000'}}>
                share, Edit, & New Addresses
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addresses')}
              style={{width: 20}}>
              <Image source={IMAGEPATH.LeftIcone} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              height: 85,
              width: '98%',
              borderRadius: 15,
              marginTop: 15,
              margin: 5,
              backgroundColor: '#F4D5BD63',
              borderColor: '#F4D5BD63',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 21, width: 22, marginTop: 10, marginLeft: 10}}
                source={IMAGEPATH.GiftImage}
              />
              <Text style={{color: '#000000', marginLeft: 13, marginTop: 9}}>
                Did you know?
              </Text>
            </View>
            <Text style={{marginLeft: 35, fontSize: 12, margin: 6}}>
              you can now share addresses with friends and famliy using a smart
              link!
            </Text>
          </View>
        </View>
        <View style={{margin: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: '#000000', fontWeight: 'bold'}}>
              Payments & Refunds
            </Text>
            <TouchableOpacity style={{height: 20, width: 25}}>
              <Image
                style={{height: 16, width: 18}}
                source={IMAGEPATH.TopIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 10, color: '#000000'}}>
            Refund Status & Payment Modes
          </Text>
          <Text
            style={{
              height: 0,
              borderWidth: 0.8,
              borderColor: '#000',
              borderStyle: 'dashed',
              marginTop: 18,
            }}></Text>
        </View>
        <View style={{margin: 15, paddingBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{fontSize: 17, color: '#000000', fontWeight: 'bold'}}>
                Help
              </Text>
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

export default MONTENA;
