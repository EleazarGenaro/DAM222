import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Chip, Tarjeta, Avatar, ImagenPH, Reloj, C, T } from '../components';

function MiniServicio() {

    return (
        <View style={{
            width: 115,
            backgroundColor: C.oscuro,
            borderRadius: 14,
            padding: 8,
            marginRight: 10
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <ImagenPH
                    ancho={44}
                    alto={14}
                    style={{
                        marginTop: 0,
                        backgroundColor: C.negro
                    }}
                />

                <Text style={{ color: C.claro, fontSize: 10 }}>
                    ☆ #
                </Text>
            </View>

            <Text style={{
                color: C.claro,
                fontSize: 11,
                fontWeight: 'bold',
                marginTop: 10
            }}>
                Nombre de servicio
            </Text>

            <Text style={{
                color: C.claro,
                fontSize: 10,
                marginTop: 4
            }}>
                🕒 #
            </Text>
        </View>
    );
}

function Seccion({ titulo }) {

    return (
        <View style={{ marginBottom: 8 }}>
            <Chip
                texto={titulo}
                style={{
                    marginBottom: 8,
                    backgroundColor: C.verde
                }}
            />

            <ScrollView horizontal>
                {[1, 2, 3, 4].map((i) => (
                    <MiniServicio key={i} />
                ))}
            </ScrollView>
        </View>
    );
}

export default function HistorialFavoritos() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Gestionar\nUsuario'} />

            <Panel>
                <ScrollView>

                    <Tarjeta>
                        <Text style={T.titulo}>
                            Historial y Favoritos
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8
                        }}>
                            <Avatar size={34} />

                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={T.bold}>
                                    Nombre de usuario
                                </Text>

                                <Reloj />
                            </View>
                        </View>
                    </Tarjeta>

                    <Seccion titulo="Servicios Creados" />
                    <Seccion titulo="Servicios Realizados" />
                    <Seccion titulo="Favoritos" />

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}