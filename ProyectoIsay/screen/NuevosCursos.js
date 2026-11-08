import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Buscador, Tarjeta, FilaEditar, ImagenPH, Boton, C, T } from '../components';

export default function NuevosCursos() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Nuevos\nCursos'} />

            <Panel>
                <ScrollView>

                    <Buscador titulo="Buscar por nombre de servicio" />

                    {[1, 2].map((i) => (
                        <Tarjeta key={i}>

                            <Text style={[T.titulo, { marginBottom: 10 }]}>
                                Banner
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
                                        <Text style={[T.normal, { fontSize: 11 }]}>
                                            Intercambio de créditos
                                        </Text>
                                    </View>

                                    <Text style={{ marginHorizontal: 4 }}>
                                        🕒
                                    </Text>

                                    <View style={{
                                        width: 36,
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

                            <View style={{
                                flexDirection: 'row',
                                marginTop: 4
                            }}>
                                <Boton
                                    texto="Dar de alta"
                                    tipo="aceptar"
                                    style={{
                                        flex: 1,
                                        marginRight: 8
                                    }}
                                />

                                <Boton
                                    texto="Dar de baja"
                                    tipo="rechazar"
                                    style={{ flex: 1 }}
                                />
                            </View>

                        </Tarjeta>
                    ))}

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}