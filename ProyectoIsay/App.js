import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { margenSuperior } from './components';

import CursosImpartidosSolicitudes from './screen/CursosImpartidosSolicitudes';
import Solicitud from './screen/Solicitud';
import MenuAdministrador from './screen/MenuAdministrador';
import GestionarUsuario from './screen/GestionarUsuario';
import GestionarServicio from './screen/GestionarServicio';
import HistorialFavoritos from './screen/HistorialFavoritos';
import DashboardGeneral from './screen/DashboardGeneral';
import NuevosCursos from './screen/NuevosCursos';
import VerReportes from './screen/VerReportes';

const pantallas = [
    { nombre: 'Cursos Impartidos (Solicitudes)', componente: CursosImpartidosSolicitudes },
    { nombre: 'Solicitud', componente: Solicitud },
    { nombre: 'Menú de Administrador', componente: MenuAdministrador },
    { nombre: 'Gestionar Usuario', componente: GestionarUsuario },
    { nombre: 'Gestionar Servicio', componente: GestionarServicio },
    { nombre: 'Historial y Favoritos', componente: HistorialFavoritos },
    { nombre: 'Dashboard General', componente: DashboardGeneral },
    { nombre: 'Nuevos Cursos', componente: NuevosCursos },
    { nombre: 'Ver Reportes', componente: VerReportes }
];

export default function App() {
    const [actual, setActual] = useState(null);

    if (actual !== null) {
        const PantallaElegida = pantallas[actual].componente;

        return (
            <View style={estilos.contenedor}>
                <PantallaElegida />

                <SafeAreaView style={estilos.barraInferior}>
                    <Pressable
                        style={estilos.botonVolver}
                        onPress={() => setActual(null)}>
                        <Text style={estilos.textoVolver}>← Volver al menú</Text>
                    </Pressable>
                </SafeAreaView>
            </View>
        );
    }

    return (
        <SafeAreaView style={[estilos.contenedor, { paddingTop: margenSuperior }]}>
            <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20 }}>
                <Text style={estilos.titulo}>Banco de Tiempo</Text>

                <Text style={estilos.subtitulo}>
                    Elige la pantalla que quieres ver
                </Text>

                <ScrollView>
                    {pantallas.map((p, i) => (
                        <Pressable
                            key={p.nombre}
                            style={estilos.opcion}
                            onPress={() => setActual(i)}>
                            <Text style={estilos.numero}>{i + 1}</Text>
                            <Text style={estilos.textoOpcion}>{p.nombre}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#cad2c5'
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2f3e46',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 14,
        color: '#354f52',
        textAlign: 'center',
        marginBottom: 16
    },
    opcion: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#84a98c',
        borderRadius: 16,
        padding: 14,
        marginBottom: 10
    },
    numero: {
        backgroundColor: '#2f3e46',
        color: '#cad2c5',
        width: 28,
        height: 28,
        borderRadius: 14,
        textAlign: 'center',
        lineHeight: 28,
        fontWeight: 'bold',
        marginRight: 12
    },
    textoOpcion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f3e46'
    },
    barraInferior: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3e46',
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    botonVolver: {
        backgroundColor: '#52796f',
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 20
    },
    textoVolver: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});