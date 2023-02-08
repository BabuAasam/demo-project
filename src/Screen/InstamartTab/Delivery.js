import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Delivery = ({navigation}) => {
  const [Show, setShow] = useState();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{marginLeft: 15, alignSelf: 'center'}}
          source={IMAGEPATH.Delivery}
        />
        <View style={{width: '88%', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            Delivery
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: '#000000'}}>Address details</Text>
          <TouchableOpacity>
            <Text style={{color: '#FF001F'}}>Change</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#C4C4C424',
            height: 155,
            width: '88%',
            borderRadius: 12,
            padding: 10,
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#A1A1A1',
              width: '85%',
              paddingBottom: 10,
            }}>
            <Text style={{color: '#4A4747'}}>Hena Montena</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#A1A1A1',
              width: '85%',
              paddingBottom: 10,
              marginTop: 10,
            }}>
            <Text style={{color: '#4A4747'}}>Km 5 refinery road oppsite</Text>
            <Text style={{color: '#4A4747'}}>
              public road, effurun jaipur state
            </Text>
          </View>
          <Text style={{color: '#4A4747', marginTop: 10}}>+9667375759</Text>
        </View>
        <View style={{width: '88%', alignSelf: 'center', margin: 20}}>
          <Text style={{color: '#000000', fontSize: 17}}>Delivery method.</Text>
        </View>
        <View
          style={{
            backgroundColor: '#E5E5E5',
            height: 120,
            width: '88%',
            borderRadius: 12,
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#A1A1A1',
              margin: 20,
              paddingBottom: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => setShow(!Show)}>
                <Image source={Show ? IMAGEPATH.Show : IMAGEPATH.Ellipse} />
              </TouchableOpacity>
              <Text style={{color: '#000000', fontSize: 17, marginLeft: 20}}>
                Door delivery
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 22,
            }}>
            <TouchableOpacity onPress={() => setShow(!Show)}>
              <Image source={Show ? IMAGEPATH.Ellipse : IMAGEPATH.Show} />
            </TouchableOpacity>
            <Text style={{color: '#000000', fontSize: 17, marginLeft: 20}}>
              Pick up
            </Text>
          </View>
        </View>
        <View style={{width: '88%', alignSelf: 'center', margin: 20}}>
          <Text style={{color: '#000000', fontSize: 17}}>Delivery method.</Text>
        </View>
        <View
          style={{
            backgroundColor: '#E5E5E5',
            height: 120,
            width: '88%',
            borderRadius: 12,
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#A1A1A1',
              margin: 20,
              paddingBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={IMAGEPATH.card} />
            <Text style={{color: '#000000', fontSize: 16, marginLeft: 40}}>
              Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Image source={IMAGEPATH.Bankaccount} />
            <Text style={{color: '#000000', fontSize: 16, marginLeft: 40}}>
              Bank account
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 25,
            width: '85%',
            alignSelf: 'center',
          }}>
          <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
            Total
          </Text>
          <Text style={{color: '#000000'}}>
            ₹<Text>250</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryBoy')}
            style={{
              backgroundColor: '#FF0059',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              width: '85%',
              marginBottom: 25,
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 17, color: '#FFFFFF'}}>
              PROCEED TO PAYMENT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delivery;
