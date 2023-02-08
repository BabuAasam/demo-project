import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const MENU = ({navigation}) => {
  const FOODMENU = [
    {
      id: 1,
      Momo: IMAGEPATH.momo,
      Idli: IMAGEPATH.MOMO1,
      VagThali: IMAGEPATH.Momos,
      MOMO1: IMAGEPATH.imgbin,
      TextMomo: 'Momos',
    },
  ];

  const RenderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View
          style={{
            backgroundColor: '#FF0059',
            height: 130,
            width: 110,
            borderRadius: 10,
            margin: 8,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginTop: 6}}>
            <Image style={{height: 80, width: 93}} source={item.Momo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>
              {item.TextMomo}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#FF0059',
            height: 130,
            width: 110,
            borderRadius: 10,
            margin: 8,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginTop: 10}}>
            <Image style={{height: 65, width: 88}} source={item.Idli} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 13}}>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>
              {item.TextMomo}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#FF0059',
            height: 130,
            width: 110,
            borderRadius: 10,
            margin: 8,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginTop: 6}}>
            <Image style={{height: 80, width: 93}} source={item.VagThali} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>
              {item.TextMomo}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#FF0059',
            height: 130,
            width: 110,
            borderRadius: 10,
            margin: 8,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginTop: 6}}>
            <Image style={{height: 80, width: 93}} source={item.MOMO1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>
              {item.TextMomo}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const THALI = [
    {
      id: 2,
      Thali: IMAGEPATH.Rectangle,
      Thali1: IMAGEPATH.Sahi,
      Thali2: IMAGEPATH.Thali,
      Thaliname: 'Punjabi Thali',
      Thaliname1: 'Paneer Pizza',
      Thaliname2: 'Spacial Thali',
    },
  ];

  const FoodItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 10, alignItems: 'center'}}>
          <Image source={item.Thali} />
          <Text style={{fontSize: 18, color: '#000000'}}>{item.Thaliname}</Text>
        </View>
        <View style={{margin: 10, alignItems: 'center'}}>
          <Image source={item.Thali1} />
          <Text style={{fontSize: 18, color: '#000000'}}>
            {item.Thaliname1}
          </Text>
        </View>
        <View style={{margin: 10, alignItems: 'center'}}>
          <Image
            style={{height: 165, width: 220, borderRadius: 12}}
            source={item.Thali2}
          />
          <Text style={{fontSize: 18, color: '#000000'}}>
            {item.Thaliname2}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', marginTop: 27}}>
          <View
            style={{
              width: 110,
              marginLeft: 18,
              borderBottomWidth: 1,
              alignItems: 'center',
              borderColor: '#FF0059',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FF0059'}}>
              FOOD MENU
            </Text>
          </View>
          <Text style={{marginTop: 8, color: '#6B6762'}}>
            Choose your best food have a great day
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            data={FOODMENU}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',
            marginLeft: 25,
          }}>
          More
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 160,
              width: 120,
              borderRadius: 12,
              margin: 10,
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF0059',
                height: 21,
                width: 45,
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFFFFF'}}>New</Text>
            </TouchableOpacity>
            <Image
              style={{height: 70, width: 88, marginTop: 5}}
              source={IMAGEPATH.Bhature}
            />
            <Text style={{color: '#000'}}>Chole Bhature</Text>
            <View style={{flexDirection: 'row', marginTop: 6}}>
              <Text style={{color: '#FF5023'}}>
                $ <Text style={{color: '#000000'}}>9.62</Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF0059',
                  height: 22,
                  width: 35,
                  alignItems: 'center',
                  borderRadius: 8,
                  marginLeft: 10,
                }}>
                <Text style={{color: '#fff'}}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 160,
              width: 120,
              borderRadius: 12,
              margin: 10,
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF0059',
                height: 21,
                width: 45,
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFFFFF'}}>New</Text>
            </TouchableOpacity>
            <Image
              style={{height: 66, width: 78, marginTop: 5}}
              source={IMAGEPATH.Paneer}
            />
            <Text style={{color: '#000', marginTop: 8}}>Chole Bhature</Text>
            <View style={{flexDirection: 'row', marginTop: 6}}>
              <Text style={{color: '#FF5023'}}>
                $ <Text style={{color: '#000000'}}>9.62</Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF0059',
                  height: 22,
                  width: 35,
                  alignItems: 'center',
                  borderRadius: 8,
                  marginLeft: 10,
                }}>
                <Text style={{color: '#fff'}}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            data={THALI}
            renderItem={FoodItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{paddingBottom: 25, paddingHorizontal: 9}}>
          <Image
            style={{height: 230, width: 340, borderRadius: 5}}
            source={IMAGEPATH.Pick}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Foodlist')}
            style={{
              backgroundColor: '#FF0059',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              width: '85%',
              marginBottom: 25,
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 17, color: '#FFFFFF'}}>ORDER NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MENU;
