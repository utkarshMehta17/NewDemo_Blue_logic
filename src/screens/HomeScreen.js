import React, {useContext} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Keyboard,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../constants/Colors';
import {ImagePath} from '../constants/ImagePath';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CounterContext from '../context/CounterContext';

const HomeScreen = () => {
  const [inputs, setInputs] = React.useState({
    email: '',
    name: '',
    password: '',
    mobile: '',
  });
  const [errors, setErrors] = React.useState({});
  const {val, setVal} = useContext(CounterContext);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputs.email || reg.test(inputs.email) == false) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    }
    if (!inputs.password || inputs.password.length < 8) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (!inputs.mobile) {
      handleError('Please input mobile number', 'mobile');
      isValid = false;
    }
    if (isValid) {
      alert('submitted successfully!');
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const incDecCounter = counterType => {
    if (counterType == 'increment') {
      setVal(val + 1);
    }
    if (counterType == 'decrement') {
      setVal(val < 1 ? 0 : val - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagePath.mainBackground}
        style={{height: hp(50), flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 78}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topContainerStyle}>
            <Text style={styles.headerTextStyle}>Login</Text>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'name')}
              onFocus={() => handleError(null, 'name')}
              placeholder="Name"
              error={errors.name}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              placeholder="Password"
              error={errors.password}
              password
            />

            <View
              style={{flexDirection: 'row', width: '85%', alignSelf: 'center'}}>
              <View style={{flex: 0.2}}>
                <TextInput placeholder="+971" />
                <View style={styles.bottomLine} />
              </View>

              <View style={{flex: 1}}>
                <Input
                  onChangeText={text => handleOnchange(text, 'mobile')}
                  onFocus={() => handleError(null, 'mobile')}
                  placeholder="Mobile"
                  error={errors.mobile}
                  phoneInput
                  maxLength={7}
                />
              </View>
            </View>
            <Button title="Submit" onPress={validate} />
          </View>

          <ImageBackground
            source={ImagePath.bottomCard}
            style={styles.bottomCardStyle}
            resizeMode="cover">
            <View style={styles.counterTypeButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  incDecCounter('decrement');
                }}>
                <Image source={ImagePath.minusIcon} />
              </TouchableOpacity>
              <Text style={styles.countFontStyle}>{val}</Text>
              <TouchableOpacity
                onPress={() => {
                  incDecCounter('increment');
                }}>
                <Image source={ImagePath.plusIcon} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export {HomeScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcfc',
  },
  countFontStyle: {
    color: '#464646',
    fontWeight: 'bold',
    fontSize: 18,
  },
  counterTypeButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    bottom: hp(6.5),
    right: '25%',
    alignItems: 'center',
  },
  bottomCardStyle: {
    height: hp(50),
    width: wp(88),
    alignSelf: 'center',
    marginTop: 30,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    alignSelf: 'center',
    width: 40,
    marginRight: 10,
    bottom: 10,
  },
  headerTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 21,
    fontWeight: '600',
  },
  topContainerStyle: {
    backgroundColor: COLORS.white,
    marginTop: 20,
    width: wp(82),
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#d5d5d5',
    borderWidth: 1,
  },
});
