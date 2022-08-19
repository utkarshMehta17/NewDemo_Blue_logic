import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colors';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 14}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 35,
    width: 295,
    backgroundColor: COLORS.blue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
});
