// 1. Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './components/Perfil';

// 2. Zona Main
export default function App() {
  return (

    <View style={styles.container}>

      <Perfil style={styles.tajeta1} nombre="Genaro" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>
      <Perfil style={styles.tajeta2} nombre="Francisco" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>
      <Perfil style={styles.tajeta3} nombre="José" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>

      <StatusBar style="auto" />

    </View>
  );
}

// 3. Zona de estilos y pocisionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tajeta1:{backgroundColor: 'red'},
  tajeta2:{backgroundColor: 'green'},
  tajeta3:{backgroundColor: 'yellow'},

});
