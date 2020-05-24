import React from 'react';

import { useFonts } from '@use-expo/font';

import { AppLoading } from 'expo'

import Routes from './src/Routes';

export default function App() {
  let [fontLoad] = useFonts({
    'MontserratAlternates': require('./assets/Fonts/MontserratAlternates-Regular.ttf'),
    'Bold': require('./assets/Fonts/MontserratAlternates-Bold.ttf')
  })

  if(!fontLoad){
    return <AppLoading/>
  }

  return (
    <Routes />
  );
}