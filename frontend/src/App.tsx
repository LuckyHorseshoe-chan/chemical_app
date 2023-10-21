import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import Authorization from './components/Authorization';
import DataTable from './components/DataTable';
import Form from './components/Form';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Authorization/>} />
            <Route path="main" element={<MainPage/>} />
          </Routes>
        </Router>
    </ChakraProvider>
  );
}

export default App;
