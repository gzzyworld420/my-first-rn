import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './src/screens/Home';
import Card from './src/components/Card';

export default function App() {

  return (

    <View style={styles.container}>
      <Home/>
      <Card/>
      <TouchableOpacity onPress={() => alert('Hola Mundo!')}> 
        <Text>Presioname</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 200,
    height: 200
  }
});
