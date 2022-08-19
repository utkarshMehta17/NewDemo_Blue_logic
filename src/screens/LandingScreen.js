import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import CounterContext from '../context/CounterContext';

const LandingScreen = () => {
  const {val, setVal} = useContext(CounterContext);
  return (
    <View>
      <Text style={styles.textStyle}>Landing Screen</Text>
      <Button
        title="Increment"
        onPress={() => {
          setVal(val + 1);
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          setVal(val < 1 ? 0 : val - 1);
        }}
      />
    </View>
  );
};

export {LandingScreen};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
});
