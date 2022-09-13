import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import CustomersScreens from './screens/CustomersScreens';
import utilities from './tailwind.json';

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <CustomersScreens />
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
