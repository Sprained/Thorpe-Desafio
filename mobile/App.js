import React from 'react';

import { useFonts } from '@use-expo/font';

import Routes from './src/Routes';

export default function App() {

  useFonts({
    'MontserratAlternates': require('./assets/Fonts/MontserratAlternates-Regular.ttf'),
    'Bold': require('./assets/Fonts/MontserratAlternates-Bold.ttf')
  })

  return (
    <Routes />
  );
}