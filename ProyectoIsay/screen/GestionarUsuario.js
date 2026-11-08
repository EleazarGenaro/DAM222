import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Buscador, Chip, Tarjeta, Avatar, Reloj, Boton, C, T } from '../components';

export default function GestionarUsuario() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Gestionar\nUsuario'} />

            <Panel>
                <ScrollView>

                    <Buscador titulo="Buscar por nombre de usuario" />

                    <Chip texto="Coincidencias" style={{ marginBottom: 10 }} />

                    <ScrollView horizontal style={{ marginBottom: 12 }}>
                        {[1, 2, 3, 4].map((i) => {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        width: 95,
                                        backgroundColor: C.oscuro,
                                        borderRadius: 14,
                                        padding: 10,
                                        alignItems: 'center',
                                        marginRight: 10
                                    }}
                                >
                                    <Avatar size={36} />

                                    <Text style={{
                                        color: C.claro,
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        marginTop: 6
                                    }}>
                                        Nombre de usuario
                                    </Text>
                                </View>
                            );
                        })}
                    </ScrollView>

                    <Tarjeta>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 12
                        }}>
                            <Avatar size={42} />

                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={T.bold}>Nombre de usuario</Text>
                                <Reloj />
                            </View>

                            <Boton
                                texto="Editar"
                                tipo="oscuro"
                                style={{
                                    paddingVertical: 4,
                                    paddingHorizontal: 10,
                                    marginLeft: 8
                                }}
                            />
                        </View>

                        <Pressable style={{
                            backgroundColor: C.oscuro,
                            borderRadius: 14,
                            padding: 16,
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <Text style={{ fontSize: 24 }}>📄</Text>

                            <Text style={{
                                color: C.claro,
                                fontWeight: 'bold',
                                marginTop: 4
                            }}>
                                Ver historial y favoritos
                            </Text>
                        </Pressable>

                        <Pressable style={{
                            backgroundColor: C.oscuro,
                            borderRadius: 14,
                            padding: 16,
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 22 }}>
                                📈 📊 📝 ✏️
                            </Text>

                            <Text style={{
                                color: C.claro,
                                fontWeight: 'bold',
                                marginTop: 4
                            }}>
                                Ver dashboard general
                            </Text>
                        </Pressable>

                    </Tarjeta>

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}