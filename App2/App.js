// 1. Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './components/Perfil';

// 2. Zona Main
export default function App() {
  return (

    <View style={styles.container}>

      <Perfil nombre="Genaro" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>
      <Perfil nombre="Francisco" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>
      <Perfil nombre="José" carrera="Sistemas Computacionales" materia="Programación para Dispositivos Móviles" cuatrimestre="4"/>

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
});
