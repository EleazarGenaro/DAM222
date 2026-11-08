import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Tarjeta, Avatar, Reloj, GraficaHoras, GraficaCreditos, Boton, C, T } from '../components';

function Dato({ titulo, valor }) {

    return (
        <View style={{
            backgroundColor: C.claro,
            borderRadius: 14,
            padding: 8,
            alignItems: 'center',
            marginBottom: 8
        }}>
            <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: C.negro,
                textAlign: 'center'
            }}>
                {titulo}
            </Text>

            <Text style={{ fontSize: 11, color: C.negro }}>
                {valor}
            </Text>
        </View>
    );
}

function Titulo({ texto }) {

    return (
        <View style={{
            backgroundColor: C.claro,
            borderRadius: 10,
            paddingVertical: 4,
            marginBottom: 8
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 11,
                fontWeight: 'bold',
                color: C.negro
            }}>
                {texto}
            </Text>
        </View>
    );
}

export default function DashboardGeneral() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Gestionar\nUsuario'} />

            <Panel>
                <ScrollView>

                    <Tarjeta>
                        <Text style={T.titulo}>Dashboard General</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8
                        }}>
                            <Avatar size={30} />

                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={T.bold}>Nombre de usuario</Text>
                                <Reloj />
                            </View>
                        </View>
                    </Tarjeta>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1.7, marginRight: 8 }}>
                            <Tarjeta>
                                <Titulo texto="Horas invertidas por categoría" />
                                <GraficaHoras />
                            </Tarjeta>

                            <Tarjeta>
                                <Titulo texto="Gráfica de créditos" />
                                <GraficaCreditos />
                            </Tarjeta>
                        </View>

                        <View style={{
                            flex: 1,
                            backgroundColor: C.verdeClaro,
                            borderRadius: 14,
                            padding: 8,
                            alignSelf: 'flex-start'
                        }}>
                            <Dato titulo={'Actividad\nReciente'} valor="" />
                            <Dato titulo="Cursos Realizados" valor="####" />
                            <Dato titulo="Cursos Creados" valor="####" />
                            <Dato titulo="Créditos Ganados" valor="####" />
                            <Dato titulo="Promedio de cursos calificados" valor="####" />
                        </View>

                    </View>

                    <Boton
                        texto="Generar Reporte"
                        style={{
                            alignSelf: 'center',
                            paddingHorizontal: 40,
                            marginVertical: 10
                        }}
                    />

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}