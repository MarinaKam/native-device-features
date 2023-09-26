import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { GlobalProvider } from './src/store/GlobalProvider/GlobalProvider';

const App: FC = () => {
  return (
    <GlobalProvider>
      <StatusBar style="auto" />

      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
