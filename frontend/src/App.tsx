import React from 'react';
import Authorization from './components/Authorization';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Authorization/>
    </ChakraProvider>
  );
}

export default App;
