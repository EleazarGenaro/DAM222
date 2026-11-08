import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoUsuario, Panel, Tabs, Chip, Tarjeta, Linea, ImagenPH, Boton, T } from '../components';

export default function CursosImpartidosSolicitudes() {

    return (
        <Pantalla barra>
            <EncabezadoUsuario titulo="CURSOS IMPARTIDOS" />

            <Panel>
                <Tabs activo={1} />

                <Chip texto="# Solicitudes" style={{ marginVertical: 10 }} />

                <ScrollView>
                    {[1, 2, 3].map((i) => {
                        return (
                            <Tarjeta key={i}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>

                                    <View style={{ flex: 1 }}>
                                        <Text style={T.bold}>Nombre</Text>

                                        <Linea icono="👤" texto="Usuario" />
                                        <Linea icono="🕒" texto="Hrs" />

                                        <ImagenPH ancho={100} alto={22} />
                                    </View>

                                    <View style={{ width: 120 }}>
                                        <Boton texto="Aceptar" tipo="aceptar" />

                                        <Boton
                                            texto="Rechazar"
                                            tipo="rechazar"
                                            style={{ marginTop: 8 }}
                                        />
                                    </View>

                                </View>
                            </Tarjeta>
                        );
                    })}
                </ScrollView>

            </Panel>
        </Pantalla>
    );
}