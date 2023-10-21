import React from 'react';
import Authorization from './components/Authorization';
import MainPage from './components/MainPage';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <MainPage/>
    </ChakraProvider>
  );
}

export default App;
