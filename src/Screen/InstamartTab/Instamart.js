import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Instamart = ({navigation}) => {
  const [Count, setCount] = useState(1);
  const [Show, setShow] = useState(1);
  const [Edit, setEdit] = useState(1);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={{height: 15, width: 15, margin: 10}}>
        <Image source={IMAGEPATH.LoginBack} />
      </TouchableOpacity>
      <Text
        style={{color: '#000000', fontSize: 18, marginLeft: 10, marginTop: 15}}>
        My Cart
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 12}}>
            <Image source={IMAGEPATH.Pasta} />
          </View>
          <View style={{margin: 12}}>
            <Text style={{color: '#000000'}}>
              ₹ <Text>65</Text>
            </Text>
            <Text style={{color: '#000000'}}>White Pasta</Text>
            <Text style={{color: '#585555E3'}}>With cheese sause</Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FF0059',
                height: 35,
                width: 60,
                alignItems: 'center',
                borderRadius: 15,
                marginTop: 5,
                marginLeft: 5,
              }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setCount(Count + (Count < 10 ? 1 : 0))}>
                <Text style={{fontSize: 16, color: '#FFFFFF'}}> + </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#FFFFFF'}}> {Count} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setCount(Count - (Count > 0 ? 1 : 0))}>
                <Text style={{fontSize: 17, color: '#FFFFFF'}}> - </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 12}}>
            <Image source={IMAGEPATH.momoc} />
          </View>
          <View style={{margin: 12}}>
            <Text style={{color: '#000000'}}>
              ₹ <Text>90</Text>
            </Text>
            <Text style={{color: '#000000'}}>Momos</Text>
            <Text style={{color: '#585555E3'}}>With cheese sause</Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FF0059',
                height: 35,
                width: 60,
                alignItems: 'center',
                borderRadius: 15,
                marginTop: 5,
                marginLeft: 5,
              }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setShow(Show + (Show < 10 ? 1 : 0))}>
                <Text style={{fontSize: 16, color: '#FFFFFF'}}> + </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#FFFFFF'}}> {Show} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setShow(Show - (Show > 1 ? 1 : 0))}>
                <Text style={{fontSize: 17, color: '#FFFFFF'}}> - </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 12}}>
            <Image source={IMAGEPATH.Noodles} />
          </View>
          <View style={{margin: 12}}>
            <Text style={{color: '#000000'}}>
              ₹ <Text>209</Text>
            </Text>
            <Text style={{color: '#000000'}}>Noodles</Text>
            <Text style={{color: '#585555E3'}}>With cheese sause</Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FF0059',
                height: 35,
                width: 60,
                alignItems: 'center',
                borderRadius: 15,
                marginTop: 5,
                marginLeft: 5,
              }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setEdit(Edit + (Edit < 10 ? 1 : 0))}>
                <Text style={{fontSize: 16, color: '#FFFFFF'}}> + </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#FFFFFF'}}> {Edit} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setEdit(Edit - (Edit > 1 ? 1 : 0))}>
                <Text style={{fontSize: 17, color: '#FFFFFF'}}> - </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#E5E5E5', marginTop: 30, padding: 18}}>
          <View style={{borderBottomWidth: 1, marginTop: 20}}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: '#000000', fontSize: 16}}>item Total</Text>
            <View>
              <Text style={{color: '#000000'}}>
                ₹ <Text>364</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: '#000000', fontSize: 16}}>
              Delivery Fee | 4.9 kms{' '}
            </Text>
            <View>
              <Text style={{color: '#000000'}}>
                ₹ <Text>29</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 15,
              borderBottomColor: '#6B6762',
            }}>
            <Text style={{marginTop: 10}}>
              This fee goes towards paying your
            </Text>
            <Text>Delivery Partner fairy</Text>
          </View>
          <View style={{borderBottomWidth: 1, paddingBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Delivery Tip</Text>
              <TouchableOpacity style={{width: 57}}>
                <Text style={{color: '#FF001F', fontSize: 16}}>ADD tip</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>
                Texes and Charges
              </Text>
              <View>
                <Text style={{color: '#000000'}}>
                  ₹ <Text>20</Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: '#000000', fontSize: 16}}>To Pay</Text>
            <View>
              <Text style={{color: '#000000'}}>
                ₹ <Text>422</Text>
              </Text>
            </View>
          </View>
          <Text style={{color: '#000000', fontSize: 16}}>
            Review your order and address details to avoid cancellations
          </Text>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Delivery')}
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
                CONFIRM ORDER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Instamart;
