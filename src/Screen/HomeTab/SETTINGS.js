import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const SETTINGS = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
  const [Show, setShow] = useState();
  const SwitchEdit = () => setShow(Show => !Show);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={{borderBottomWidth: 1, paddingBottom: 38, margin: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={IMAGEPATH.SETTINGS} />
            </TouchableOpacity>
            <Text
              style={{
                color: '#000000',
                marginLeft: 15,
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              SETTINGS
            </Text>
          </View>
          <Text style={{color: '#4A4747', marginLeft: 35, marginTop: 10}}>
            PICTURE IN PICTURE MODE
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomWidth: 1,
            margin: 10,
            paddingBottom: 20,
            borderBottomColor: '#A1A1A1',
          }}>
          <Text style={{color: '#000000', fontSize: 17}}>
            Allow Picture in Picture Mode
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF0059'}}
            thumbColor={isEnabled ? '#FFF2F2' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 12, color: '#4A4747'}}>
            PIP mode allows you to live track your order in a small window
            pinned to one corner of your screen while you navigate to other apps
            or to the home screen.
          </Text>
        </View>
        <View
          style={{
            margin: 15,
            borderBottomWidth: 1,
            paddingBottom: 30,
            borderBottomColor: '#A1A1A1',
          }}>
          <Text style={{fontSize: 16, color: '#000000'}}>SMS PREFERENCES</Text>
          <Text style={{marginTop: 12, color: '#4A4747', fontSize: 14}}>
            Order related SMS cannot be disabled as they are ceitical to provide
            service
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomWidth: 1,
            margin: 10,
            paddingBottom: 20,
            borderBottomColor: '#A1A1A1',
          }}>
          <Text style={{color: '#000000', fontSize: 17}}>
            Allow Picture in Picture Mode
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF0059'}}
            thumbColor={Show ? '#FFF2F2' : '#f4f3f4'}
            onValueChange={SwitchEdit}
            value={Show}
          />
        </View>
        <View style={{margin: 15}}>
          <Text>
            Keep this on to receive offer recommendations & timely reminders
            based on your interests
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SETTINGS;
