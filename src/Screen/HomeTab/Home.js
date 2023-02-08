import React, {useState} from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {COLORPATH} from '../../Component/Color';
import {IMAGEPATH} from '../../Component/ImagePath';

const Home = ({navigation}) => {
  const [select, setSelect] = useState('select');

  return (
    <ScrollView style={{backgroundColor: COLORPATH.White}}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={COLORPATH.Statusbar} />
        <LinearGradient
          colors={[COLORPATH.Statusbar, COLORPATH.Liniar]}
          style={styles.linearGradient}>
          <Image
            style={{flex: 1, width: '100%', resizeMode: 'contain'}}
            source={IMAGEPATH.HomeImage}
          />
        </LinearGradient>
        <View style={{paddingHorizontal: 20}}>
          <View style={{height: 200, width: '100%', alignSelf: 'center'}}>
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={2.5}>
              <View style={styles.slide1}>
                <Text style={styles.text}>
                  Order from a wide range of restaurants{' '}
                </Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>wide range of restaurants </Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>range of restaurants </Text>
              </View>
            </Swiper>
          </View>
          <Text style={styles.Ready}>
            Ready from a wide range of resturants
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.buttonButtomSheet}>
            <Text style={styles.getText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Ready: {
    color: '#6B6762',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  getText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  buttonButtomSheet: {
    backgroundColor: COLORPATH.Statusbar,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
