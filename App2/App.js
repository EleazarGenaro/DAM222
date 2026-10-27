/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View} from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*2. zona de main*/ 
export default function ImageBackgroung() {
  return (

    <View style={styles.container}>

      <MenuScreen></MenuScreen>

      
      <StatusBar style="auto" />
    </View>
  );
}

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});