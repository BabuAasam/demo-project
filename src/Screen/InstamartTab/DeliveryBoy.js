import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const DeliveryBoy = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingBottom: 35}}>
        <View style={{height: 400}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={IMAGEPATH.Map}
          />
        </View>
        <View
          style={{
            backgroundColor: '#E5E5E5',
            height: 150,
            width: '90%',
            borderRadius: 12,
            padding: 15,
            marginTop: 20,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 69, width: 75}} source={IMAGEPATH.Rahul} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft: 20}}>
                <Text style={{color: '#000000', fontSize: 17}}>
                  Rahul Singh
                </Text>
                <Text>Delivery Boy</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 5, marginLeft: 30}}>
                <Image source={IMAGEPATH.starsvgrepo} />
                <Text style={{color: '#000000'}}> 4.7</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              flexDirection: 'row',
              alignItems: 'center',
              height: 42,
              width: 80,
              borderRadius: 18,
              marginLeft: 170,
              justifyContent: 'center',
            }}>
            <Image style={{height: 22, width: 20}} source={IMAGEPATH.call} />
            <Text style={{color: '#FFFFFF', fontSize: 16, marginLeft: 5}}>
              Call
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            width: '90%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderRightWidth: 1,
              borderRightColor: '#C4C4C4AB',
              width: 180,
              marginTop: 15,
              // paddingBottom:35
            }}>
            <View>
              <Image source={IMAGEPATH.ShowLock} />
              <Image
                style={{marginLeft: 8, marginTop: 3}}
                source={IMAGEPATH.Location}
              />
            </View>
            <View style={{margin: 10, marginLeft: 28}}>
              <View>
                <Text style={{color: '#000000', fontSize: 17}}>Eat</Text>
                <Text>Kanha Resturant</Text>
              </View>
              <View style={{marginTop: 30}}>
                <Text style={{color: '#000000', fontSize: 17}}>You</Text>
                <Text>Mansorovar</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <Text style={{color: '#000000'}}>Delivery Time</Text>
            <Text style={{color: '#000000'}}>10 min</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeliveryBoy;
