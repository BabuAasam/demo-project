import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {IMAGEPATH} from '../../Component/ImagePath';

const Addresses = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.MainCountenar}>
        <View style={styles.MainView}>
          <Image style={styles.MainImage} source={IMAGEPATH.RotetGift} />
          <Text style={styles.MainText}>NOW, SHARE ADDRESSES WITH A TAP!</Text>
          <View style={styles.ViewCountenar}>
            <Image source={IMAGEPATH.Location} />
            <View style={{marginLeft: 25}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ViewTexts}>Send exact addresses</Text>
                <Text style={{color: '#000000'}}> to anyone using</Text>
              </View>
              <Text style={{color: '#000000'}}>smart links</Text>
            </View>
          </View>
          <View style={styles.ViewCountenar}>
            <Image style={{left: 15}} source={IMAGEPATH.Location} />
            <View style={{marginLeft: 18}}>
              <View style={styles.FlaxCountenar}>
                <Text style={styles.FlaxItem}>Saving someone’s address?</Text>
                <Text style={styles.FlaxStyle}>Add receiver’s</Text>
              </View>
              <Text style={styles.TextStyle}>
                phone number and forget delivery hassles
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.SAVEDCountenar}>SAVED ADDRESSES</Text>
        <View style={styles.ViewHomeCountenar}>
          <View style={styles.MainHomeView}>
            <Image source={IMAGEPATH.Home} />
            <Text style={styles.HomeTeaxt}>Home</Text>
          </View>
          <View style={styles.refineryView}>
            <Text style={{color: '#4A4747'}}>
              Km 5 refinery road oppsite public
            </Text>
            <Text style={{color: '#4A4747'}}>road, effurun jaipur state</Text>
          </View>
          <Text style={styles.PhoneText}> Phone number:+9667375759</Text>
          <View style={styles.EditMainView}>
            <View style={styles.EditView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HENA')}
                style={styles.Touchable}>
                <Text style={styles.TouchableText}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableOpecety}>
                <Text style={styles.TouchableText}>DELETE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableOpecety}>
                <Text style={styles.TouchableText}>SHARE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.LastView}>
            <TouchableOpacity>
              <Text style={styles.LastText}>ADD NEW ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Addresses;
const styles = StyleSheet.create({
  MainCountenar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
  },
  MainView: {
    backgroundColor: '#F4D5BD2B',
    height: 240,
    borderRadius: 12,
    marginTop: 75,
    alignItems: 'center',
  },
  MainImage: {
    height: 75,
    width: 75,
    top: -36,
  },
  MainText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  ViewCountenar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ViewTexts: {
    fontWeight: 'bold',
    color: '#000000',
  },
  FlaxCountenar: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  FlaxItem: {
    fontWeight: 'bold',
    color: '#000000',
  },
  FlaxStyle: {
    color: '#000000',
    fontSize: 13,
  },
  TextStyle: {
    color: '#000000',
    fontSize: 13,
    marginLeft: 10,
  },
  SAVEDCountenar: {
    color: '#4A4747',
    marginTop: 30,
    left: 5,
  },
  ViewHomeCountenar: {
    backgroundColor: '#F4D5BD2B',
    height: '45%',
    borderRadius: 12,
    marginTop: 10,
    padding: 15,
  },
  MainHomeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HomeTeaxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  refineryView: {
    paddingHorizontal: 35,
    marginTop: 10,
  },
  PhoneText: {
    color: '#4A4747',
    marginLeft: 30,
    marginTop: 20,
  },
  EditMainView: {
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  EditView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '80%',
    marginLeft: 30,
  },
  Touchable: {
    width: 40,
    alignItems: 'center',
  },
  TouchableText: {
    color: '#FF001F',
    alignSelf: 'center',
  },
  TouchableOpecety: {
    width: 55,
    alignItems: 'center',
  },
  LastView: {
    borderWidth: 1,
    marginTop: 40,
    height: 60,
    borderRadius: 12,
    borderColor: '#FF001F',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LastText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
