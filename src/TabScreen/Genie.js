import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {demoapi, DEMOAPI} from '../Demo/DemoApi';
import axios from 'axios';

const Genie = () => {
  useEffect(() => {
    HandelSubmit();
  }, []);

  const [Loding, setLoding] = useState();
  const [Userlist, setUserlist] = useState();
  const apiurl = `${DEMOAPI}${demoapi}`;

  const HandelSubmit = async () => {
    setLoding(true);
    try {
      const response = await axios.get(apiurl);
      console.log(response.data);
      setLoding(false);
      setUserlist(response.data);
    } catch (error) {
      setLoding(false);
      console.log('error:', Error);
    }
  };

  if (Loding) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" />
        <Text>Loading....</Text>
      </View>
    );
  }

  const Handel = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          paddingHorizontal: 10,
          marginBottom: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            {item.Firstname}
          </Text>
          <Image
            style={{height: 40, width: 40, borderRadius: 50}}
            source={{uri: item.UserImage}}
          />
        </View>
        <Text>{item.Password}</Text>
        <Text>{item.Email}</Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 60,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
            marginTop: 5,
          }}
          onPress={() => DELETEDATA(item.id)}>
          <Text style={{color: '#fff'}}>DELETE</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const DELETEDATA = async id => {
    try {
      const response = await fetch(`${apiurl}/${id}`, {
        method: 'DELETE',
      });
      const responsejson = await response.json();
      HandelSubmit();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <FlatList
        data={Userlist}
        renderItem={Handel}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      />
    </View>
  );
};

export default Genie;
