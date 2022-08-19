import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/components/AppNavigator';
import {CounterProvider} from './src/context/CounterContext';

export default function App() {
  return (
    <CounterProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </CounterProvider>
  );
}
