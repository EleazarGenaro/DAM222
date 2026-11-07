
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, Alert, StyleSheet, StatusBar, } from 'react-native';

function SplashScreen() {
  return (
    <View style={styles.splash}>
      <Text style={styles.splashEmoji}>📚</Text>
      <Text style={styles.splashText}>repa2</Text>
      <ActivityIndicator
        size="small"
        color="#1565C0"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((prev) => [...prev, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      setLoading(false);

      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  const renderLibro = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>{item.titulo}</Text>
      <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
      <Text style={styles.cardTexto}>Género: {item.genero}</Text>
    </View>
  );

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/id/1018/800/1600' }}
      style={styles.fondo}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#999"
          value={titulo}
          onChangeText={setTitulo}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#999"
          value={autor}
          onChangeText={setAutor}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#999"
          value={genero}
          onChangeText={setGenero}
          editable={!loading}
        />

        <Pressable
          style={[styles.boton, loading && styles.botonDeshabilitado]}
          onPress={agregarLibro}
          disabled={loading}
        >
          <Text style={styles.botonTexto}>
            {loading ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {loading && (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.loadingTexto}>
              Guardando libro...
            </Text>
          </View>
        )}

        <Text style={styles.total}>
          Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={renderLibro}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashEmoji: {
    fontSize: 90,
  },

  splashText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#222',
  },

  fondo: {
    flex: 1,
  },

  contenedor: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },

  input: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 15,
  },

  boton: {
    backgroundColor: '#1565C0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },

  botonDeshabilitado: {
    backgroundColor: '#888',
  },

  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  loadingBox: {
    alignItems: 'center',
    marginTop: 16,
  },

  loadingTexto: {
    color: '#fff',
    marginTop: 6,
    fontWeight: '600',
  },

  total: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  cardTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },

  cardTexto: {
    fontSize: 13,
    color: '#333',
  },
});
