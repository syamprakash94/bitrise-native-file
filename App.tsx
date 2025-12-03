import React from 'react';
import { StatusBar } from 'react-native';
import TemplateRouter from './components/TemplateRouter';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TemplateRouter />
    </>
  );
};

export default App;
