
import React, { useState } from 'react';

import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Switch, Alert, StyleSheet} from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(true);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(true);

  const enviarRegistro = () => {
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert('Error', 'Debes llenar todos los campos');
      return;
    }

    if (!/^[0-9]+$/.test(semestre.trim())) {
      Alert.alert('Error', 'El semestre debe ser numerico');
      return;
    }

    Alert.alert(
      'Registro exitoso',
      'Nombre: ' + nombre.trim() +
      '\nCarrera: ' + carrera.trim() +
      '\nSemestre: ' + semestre.trim() +
      '\nTaller: ' + (taller ? 'Sí' : 'No') +
      '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
      '\nDeportes: ' + (deportes ? 'Sí' : 'No')
    );

  };

  return (

    <SafeAreaView style={estilos.contenedor}>

      <ScrollView>

        <Text style={estilos.titulo}>
          Registro de Evento Universitario
        </Text>

        <Text>Nombre completo:</Text>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text>Carrera:</Text>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text>Semestre:</Text>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu semestre"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />

        <Text style={estilos.subtitulo}>
          Responde las siguientes preguntas:
        </Text>

        <View style={estilos.pregunta}>
          <Text>¿Asistirá al taller?</Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />

          <Text>{taller ? 'Sí' : 'No'}</Text>
        </View>

        <View style={estilos.pregunta}>
          <Text>¿Requiere constancia?</Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />

          <Text>{constancia ? 'Sí' : 'No'}</Text>
        </View>

        <View style={estilos.pregunta}>
          <Text>¿Participará en actividades deportivas?</Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />

          <Text>{deportes ? 'Sí' : 'No'}</Text>
        </View>

        <Pressable
          style={estilos.boton}
          onPress={enviarRegistro}
        >
          <Text style={estilos.textoBoton}>
            Enviar Registro
          </Text>
        </Pressable>

      </ScrollView>

    </SafeAreaView>

  );
}

const estilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5
  },

  pregunta: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },

  boton: {
    backgroundColor: '#2463A6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

});
