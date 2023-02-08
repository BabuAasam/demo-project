import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Foodlist = () => {
  const [Count, setCount] = useState(1);
  const [CountIdli, setCountIdli] = useState(1);
  const [CountVeg, setCountVeg] = useState(1);
  const [CountSnacks, setCountSnacks] = useState(1);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} />
      <Image
        style={{height: 320, width: '100%'}}
        source={IMAGEPATH.FoodlistMain}
      />
      <View style={{borderBottomWidth: 1, margin: 12, height: 20}}>
        <View style={{top: -280, marginLeft: 60}}>
          <Text style={{color: '#FF0059', fontSize: 25}}>Up to</Text>
          <Text style={{color: '#FF0059', fontSize: 25}}>60% OFF</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#F9E0E0',
              width: 150,
              height: 160,
              borderRadius: 10,
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              style={{height: 100, width: 120, marginTop: 12}}
              source={IMAGEPATH.Paneer}
            />
            <Text style={{color: '#000000', fontSize: 17, marginTop: 5}}>
              Panner
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000'}}>Paneer Butter Masala</Text>
            <Text style={{color: '#000000'}}>3.8 (500+).45 mins</Text>
            <Text style={{fontWeight: 'bold', color: '#FF001F'}}>
              EXTRA 20% OFF
            </Text>
            <Text style={{color: '#FF001F'}}>AND FREE DELIVERY</Text>
            <Text style={{color: '#FF001F'}}>one</Text>
            <Text style={{color: '#FF001F'}}>BENEFITS</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{color: '#FF5023'}}>
                  $ <Text style={{color: '#000000'}}>9.62</Text>
                </Text>
                <Image source={IMAGEPATH.Stare} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  backgroundColor: '#FF0059',
                  height: 35,
                  width: 68,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                }}>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCount(Count + (Count < 10 ? 1 : 0))}>
                  <Text style={{fontSize: 16, color: '#FFF2F2'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    {Count}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCount(Count - (Count > 1 ? 1 : 0))}>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View
            style={{
              backgroundColor: '#F9E0E0',
              width: 150,
              height: 160,
              borderRadius: 10,
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              style={{height: 100, width: 120, marginTop: 12}}
              source={IMAGEPATH.Idli}
            />
            <Text style={{color: '#000000', fontSize: 17, marginTop: 5}}>
              Idli Sambhar
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000'}}>Idli Sambar</Text>
            <Text style={{color: '#000000'}}>3.8 (500+).45 mins</Text>
            <Text style={{fontWeight: 'bold', color: '#FF001F'}}>
              EXTRA 20% OFF
            </Text>
            <Text style={{color: '#FF001F'}}>AND FREE DELIVERY</Text>
            <Text style={{color: '#FF001F'}}>one</Text>
            <Text style={{color: '#FF001F'}}>BENEFITS</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{color: '#FF5023'}}>
                  $ <Text style={{color: '#000000'}}>9.62</Text>
                </Text>
                <Image source={IMAGEPATH.Stare} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  backgroundColor: '#FF0059',
                  height: 35,
                  width: 68,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                }}>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountIdli(CountIdli + (CountIdli < 10 ? 1 : 0))
                  }>
                  <Text style={{fontSize: 16, color: '#FFF2F2'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    {CountIdli}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountIdli(CountIdli - (CountIdli > 1 ? 1 : 0))
                  }>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View
            style={{
              backgroundColor: '#F9E0E0',
              width: 150,
              height: 160,
              borderRadius: 10,
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              style={{height: 100, width: 120, marginTop: 12}}
              source={IMAGEPATH.Vag}
            />
            <Text style={{color: '#000000', fontSize: 17, marginTop: 5}}>
              Veg Thali
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000'}}>Veg Thali</Text>
            <Text style={{color: '#000000'}}>3.8 (500+).45 mins</Text>
            <Text style={{fontWeight: 'bold', color: '#FF001F'}}>
              EXTRA 20% OFF
            </Text>
            <Text style={{color: '#FF001F'}}>AND FREE DELIVERY</Text>
            <Text style={{color: '#FF001F'}}>one</Text>
            <Text style={{color: '#FF001F'}}>BENEFITS</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{color: '#FF5023'}}>
                  $ <Text style={{color: '#000000'}}>9.62</Text>
                </Text>
                <Image source={IMAGEPATH.Stare} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  backgroundColor: '#FF0059',
                  height: 35,
                  width: 68,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                }}>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountVeg(CountVeg + (CountVeg < 10 ? 1 : 0))
                  }>
                  <Text style={{fontSize: 16, color: '#FFF2F2'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    {CountVeg}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountVeg(CountVeg - (CountVeg > 1 ? 1 : 0))
                  }>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30, paddingBottom: 20}}>
          <View
            style={{
              backgroundColor: '#F9E0E0',
              width: 150,
              height: 160,
              borderRadius: 10,
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              style={{height: 80, width: 120, marginTop: 12}}
              source={IMAGEPATH.french}
            />
            <Text style={{color: '#000000', fontSize: 17, marginTop: 10}}>
              Snacks
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000'}}>Snacks </Text>
            <Text style={{color: '#000000'}}>3.8 (500+).45 mins</Text>
            <Text style={{fontWeight: 'bold', color: '#FF001F'}}>
              EXTRA 20% OFF
            </Text>
            <Text style={{color: '#FF001F'}}>AND FREE DELIVERY</Text>
            <Text style={{color: '#FF001F'}}>one</Text>
            <Text style={{color: '#FF001F'}}>BENEFITS</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{color: '#FF5023'}}>
                  $ <Text style={{color: '#000000'}}>9.62</Text>
                </Text>
                <Image source={IMAGEPATH.Stare} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  backgroundColor: '#FF0059',
                  height: 35,
                  width: 68,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                }}>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountSnacks(CountSnacks + (CountSnacks < 10 ? 1 : 0))
                  }>
                  <Text style={{fontSize: 16, color: '#FFF2F2'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    {CountSnacks}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    setCountSnacks(CountSnacks - (CountSnacks > 1 ? 1 : 0))
                  }>
                  <Text
                    style={{fontSize: 16, marginLeft: 12, color: '#FFF2F2'}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Foodlist;
