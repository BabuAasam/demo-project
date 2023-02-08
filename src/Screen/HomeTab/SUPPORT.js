import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const SUPPORT = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 45,
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginTop: 5}}>
            <Image source={IMAGEPATH.SETTINGS} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#000000',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            HELP & SUPPORT
          </Text>
        </View>
        <View style={{marginTop: 30, borderBottomWidth: 1, paddingBottom: 20}}>
          <Text style={{color: '#000000', marginLeft: 10}}>
            I want to partner my restaurant with swiggy
          </Text>
        </View>
        <View style={{marginTop: 30, borderBottomWidth: 1, paddingBottom: 20}}>
          <Text style={{color: '#000000', marginLeft: 10}}>
            What are the mandatory documents needed to
          </Text>
          <Text style={{color: '#000000', marginLeft: 10}}>
            list my restaurant on swiggy ?
          </Text>
        </View>
        <View style={{marginTop: 30, borderBottomWidth: 1, paddingBottom: 20}}>
          <Text style={{color: '#000000', marginLeft: 10}}>
            What are the mandatory documents needed to
          </Text>
          <Text style={{color: '#000000', marginLeft: 10}}>
            list my restaurant on swiggy ?
          </Text>
        </View>
        <View style={{marginTop: 30, borderBottomWidth: 1, paddingBottom: 20}}>
          <Text style={{color: '#000000', marginLeft: 10}}>
            What are the mandatory documents needed to
          </Text>
          <Text style={{color: '#000000', marginLeft: 10}}>
            list my restaurant on swiggy ?
          </Text>
        </View>
        <View style={{marginTop: 30, borderBottomWidth: 1, paddingBottom: 20}}>
          <Text style={{color: '#000000', marginLeft: 10}}>
            What are the mandatory documents needed to
          </Text>
          <Text style={{color: '#000000', marginLeft: 10}}>
            list my restaurant on swiggy ?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SUPPORT;
