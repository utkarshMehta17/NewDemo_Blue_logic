import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../constants/Colors';

const Input = ({
  label,
  iconName,
  error,
  password,
  editable,
  phoneInput,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          editable={editable}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.gray, width: '85%'}}
          keyboardType={phoneInput ? 'number-pad' : 'default'}
          {...props}
        />
      </View>
      <View style={[style.bottomLine, {width: phoneInput ? 243 : 295}]} />
      {error && <Text style={style.errorText}>{error}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    alignSelf: 'center',

    bottom: 10,
  },
  errorText: {
    color: COLORS.red,
    fontSize: 12,
    width: '85%',
    alignSelf: 'center',
    bottom: 5,
  },
});

export default Input;
