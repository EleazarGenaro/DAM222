import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Buscador, Tarjeta, Chip, Boton, C, T } from '../components';

export default function VerReportes() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Ver\nReportes'} />

            <Panel>
                <ScrollView>

                    <Buscador titulo="Buscar por nombre del reporte" />

                    {[1, 2, 3].map((i) => (
                        <Tarjeta key={i}>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: C.claro,
                                borderRadius: 12,
                                padding: 8
                            }}>
                                <Text style={{ fontSize: 24 }}>
                                    📄
                                </Text>

                                <View style={{ marginLeft: 8 }}>
                                    <Text style={T.bold}>
                                        Nombre del reporte
                                    </Text>

                                    <Text style={T.bold}>
                                        Hecho por: Usuario
                                    </Text>
                                </View>
                            </View>

                            <Chip
                                texto="Descripción"
                                style={{
                                    marginTop: 8,
                                    backgroundColor: C.verde
                                }}
                            />

                            <View style={{
                                backgroundColor: C.claro,
                                borderRadius: 12,
                                height: 80,
                                marginTop: 4
                            }} />

                            <Boton
                                texto="Eliminar"
                                tipo="rechazar"
                                style={{
                                    alignSelf: 'flex-end',
                                    marginTop: 8,
                                    paddingHorizontal: 24
                                }}
                            />

                        </Tarjeta>
                    ))}

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}