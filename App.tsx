import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

const App: FC = () => {
  return (
    <>
      <StatusBar style="auto" />

      <Text>Hello world!</Text>
    </>
  );
};

export default App;
