import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGEPATH} from '../../Component/ImagePath';

const Favourites = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#FF0059'} />
        <LinearGradient
          colors={['#FF0059', '#FE5F04EB']}
          style={styles.linearGradient}>
          <View style={styles.MAinViewCountenar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={IMAGEPATH.FavouritesBack} />
            </TouchableOpacity>
            <Text style={styles.TouchableText}>FAVOURITES</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={IMAGEPATH.circleHart} />
          </View>
        </LinearGradient>
        <View style={styles.LastView}>
          <Text style={styles.LastViewText}>WHERE IS THE LOVE?</Text>
          <Text style={styles.LastText}>
            Once you favorite a restaurant, it will appear here.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Favourites;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 450,
  },
  MAinViewCountenar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginTop: 50,
    borderBottomWidth: 1,
    paddingBottom: 38,
    borderBottomColor: '#FFF2F2',
  },
  TouchableText: {
    color: '#FFF2F2',
    marginLeft: 15,
  },
  LastView: {
    padding: 10,
    alignItems: 'center',
    marginTop: 25,
    paddingBottom: 30,
  },
  LastViewText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  LastText: {
    color: '#000000',
    marginTop: 25,
  },
});
