import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';
import { useEffect } from 'react/index';
import { themeColor } from '../../theme';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [ theme, setTheme ] = useState(themeColor);

  const updateTheme = async (val) => {
    await AsyncStorage.setItem('theme', val);
    setTheme(val);
  };

  useEffect(() => {
    const getTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');

      if (!storedTheme) {
        await AsyncStorage.setItem('theme', themeColor);
        setTheme(themeColor);
      }

      setTheme(storedTheme);
    };

    getTheme();
  }, []);

  const providerValue = {
    theme,
    updateTheme
  };
  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};
