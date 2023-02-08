import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Food = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      MainImage: IMAGEPATH.Buegar,
      mainText: 'Burger',
      MainImage1: IMAGEPATH.Peezza,
      mainText1: 'Pizza',
      MainImage2: IMAGEPATH.french,
      mainText2: 'Snacks',
      MainImage3: IMAGEPATH.Paneer,
      mainText3: 'Food',
    },
  ];

  const Cheese = [
    {
      id: 2,
      Pizza: IMAGEPATH.Cheese,
      namePizza: 'Cheese Pizza',
      Oliva: 'Oliva Food',
      Star: IMAGEPATH.Ratings,
      Number: '4.7',
      Ratings: '(940 Ratings)',
      Touch: '$9.88',
      Kim: '2 Km',
      Image: IMAGEPATH.LocationImage,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              height: 85,
              alignItems: 'center',
              borderRadius: 12,
              width: 80,
            }}>
            <Image
              style={{marginTop: 4, height: 38, width: 36}}
              source={item.MainImage}
            />
            <Text style={{color: '#FFFFFF', marginTop: 12}}>
              {item.mainText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              height: 85,
              width: 80,
              alignItems: 'center',
              borderRadius: 12,
              marginLeft: 15,
            }}>
            <Image
              style={{marginTop: 4, height: 35, width: 50}}
              source={item.MainImage1}
            />
            <Text style={{color: '#FFFFFF', marginTop: 13}}>
              {item.mainText1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              height: 85,
              width: 100,
              alignItems: 'center',
              borderRadius: 12,
              marginLeft: 15,
            }}>
            <Image
              style={{marginTop: 6, height: 42, width: 70}}
              source={item.MainImage2}
            />
            <Text style={{color: '#FFFFFF', marginTop: 6}}>
              {item.mainText2}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              height: 85,
              width: 80,
              alignItems: 'center',
              borderRadius: 12,
              marginLeft: 15,
            }}>
            <Image
              style={{marginTop: 4, height: 40, width: 44}}
              source={item.MainImage3}
            />
            <Text style={{color: '#FFFFFF', marginTop: 8}}>
              {item.mainText3}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0059',
              height: 85,
              width: 80,
              alignItems: 'center',
              borderRadius: 12,
              marginLeft: 15,
            }}>
            <Image
              style={{marginTop: 4, height: 35, width: 50}}
              source={item.MainImage1}
            />
            <Text style={{color: '#FFFFFF', marginTop: 10}}>
              {item.mainText1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CheeseItem = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View>
          <Image style={{marginTop: 10}} source={item.Pizza} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 7,
            }}>
            <View>
              <Text style={{color: '#000000'}}>{item.namePizza}</Text>
              <Text>{item.Oliva}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginRight: 3}} source={item.Image} />
              <Text style={{marginTop: 3}}>{item.Kim}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image source={item.Star} />
              <Text style={{marginLeft: 6}}>{item.Number}</Text>
              <Text style={{marginLeft: 8}}>{item.Ratings}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF0059',
                  height: 32,
                  width: 53,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{color: '#FFFFFF'}}>{item.Touch}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginLeft: 20}}>
          <Image style={{marginTop: 10}} source={item.Pizza} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 7,
            }}>
            <View>
              <Text style={{color: '#000000'}}>{item.namePizza}</Text>
              <Text>{item.Oliva}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginRight: 3}} source={item.Image} />
              <Text style={{marginTop: 3}}>{item.Kim}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image source={item.Star} />
              <Text style={{marginLeft: 6}}>{item.Number}</Text>
              <Text style={{marginLeft: 8}}>{item.Ratings}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF0059',
                  height: 32,
                  width: 53,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{color: '#FFFFFF'}}>{item.Touch}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20, flex: 1}}>
          <View style={{width: '96%', alignSelf: 'center'}}>
            <Text style={{color: '#585555', marginLeft: 25, marginTop: 20}}>
              DELIVER TO
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 25, width: 15, margin: 3}}
                source={IMAGEPATH.LocationImage}
              />
              <Text style={{color: '#000000', margin: 5, marginLeft: 10}}>
                Home. Mansorovar jaipur
              </Text>
              <TouchableOpacity>
                <Image style={{margin: 5}} source={IMAGEPATH.right} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#A1A1A12B',
                width: '82%',
                height: 43,
                borderRadius: 12,
                marginTop: 10,
              }}>
              <Image
                style={{height: 18, width: 18, marginTop: 15, marginLeft: 10}}
                source={IMAGEPATH.Sarch}
              />
              <TextInput
                style={{paddingHorizontal: 35}}
                placeholder="Search for food"
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF0059',
                width: 42,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                marginTop: 10,
                marginLeft: 8,
              }}>
              <Image source={IMAGEPATH.filter} />
            </TouchableOpacity>
          </View>
          <Image
            style={{marginTop: 20, width: 323, height: 206}}
            source={IMAGEPATH.MAindownload}
          />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: '#000000',
                margin: 10,
                marginTop: 18,
              }}>
              Categories
            </Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <Text
            style={{
              color: '#000000',
              fontSize: 17,
              marginTop: 16,
            }}>
            Popular Dishes
          </Text>

          <View>
            <FlatList
              horizontal={true}
              data={Cheese}
              renderItem={CheeseItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MENU')}
            style={{
              backgroundColor: '#FF0059',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              width: '85%',
              marginBottom: 25,
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 17, color: '#FFFFFF'}}>EXPLORE Food</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Food;
