import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Input from './components/input';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO APP</Text>
      </View>
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    
  },
  header:{
    height:70,
    backgroundColor:"#f5f5f5",
    justifyContent:"center",
    alignItems:"center",
    elevation:10
  },
  headerText:{
    marginTop:20,
    fontWeight:"bold",
    borderStyle:"solid",
    borderWidth:1,
    paddingHorizontal:10,
    paddingVertical:5,
    borderColor:"black"
  }
});
