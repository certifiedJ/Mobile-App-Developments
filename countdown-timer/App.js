import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Timer from './screens/timer';  

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown Timer</Text>

     <Timer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 200,
    color: 'white',
    alignItems: 'center',
  }
});
