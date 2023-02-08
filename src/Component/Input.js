import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = props => {
  const {placeholder, style, keyboardType} = props;
  return (
    <View style={styles.MainView}>
      <TextInput
        style={[styles.TextInputContenar, style]}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
  },
  TextInputContenar: {
    backgroundColor: '#FE8A4717',
    height: 45,
    width: '93%',
    marginHorizontal: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
