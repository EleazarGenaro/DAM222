import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Buscador, Chip, Tarjeta, FilaEditar, ImagenPH, Estrellas, C, T } from '../components';

export default function GestionarServicio() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Gestionar\nServicio'} />

            <Panel>
                <ScrollView>

                    <Buscador titulo="Buscar por nombre de servicio" />

                    <Chip
                        texto="Coincidencias"
                        style={{ marginBottom: 10 }}
                    />

                    <ScrollView horizontal style={{ marginBottom: 12 }}>
                        {[1, 2, 3, 4].map((i) => {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        width: 100,
                                        height: 80,
                                        backgroundColor: C.oscuro,
                                        borderRadius: 14,
                                        padding: 10,
                                        justifyContent: 'flex-end',
                                        marginRight: 10
                                    }}
                                >
                                    <Text style={{
                                        color: C.claro,
                                        fontSize: 11,
                                        fontWeight: 'bold'
                                    }}>
                                        Nombre de servicio
                                    </Text>
                                </View>
                            );
                        })}
                    </ScrollView>

                    <Tarjeta>
                        <Text style={[T.titulo, { marginBottom: 10 }]}>
                            Banner del servicio
                        </Text>

                        <FilaEditar etiqueta="Nombre del servicio" />

                        <FilaEditar>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    flex: 1,
                                    backgroundColor: C.claro,
                                    borderRadius: 14,
                                    paddingVertical: 6,
                                    paddingHorizontal: 10
                                }}>
                                    <Text style={T.normal}>
                                        Intercambio de créditos
                                    </Text>
                                </View>

                                <Text style={{ marginHorizontal: 4 }}>
                                    🕒
                                </Text>

                                <View style={{
                                    width: 40,
                                    height: 22,
                                    backgroundColor: C.oscuro,
                                    borderRadius: 11
                                }} />
                            </View>
                        </FilaEditar>

                        <FilaEditar>
                            <ImagenPH
                                ancho={160}
                                alto={30}
                                style={{ marginTop: 0 }}
                            />
                        </FilaEditar>

                        <FilaEditar etiqueta="Calificación" />

                        <View style={{ alignItems: 'center' }}>
                            <Estrellas />
                        </View>
                    </Tarjeta>

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}