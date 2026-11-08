import React from 'react';
import { View } from 'react-native';
import { Pantalla, EncabezadoAdmin, Panel, Buscador, Boton } from '../components';

export default function MenuAdministrador() {

    return (
        <Pantalla>
            <EncabezadoAdmin titulo={'Menú de\nAdministrador'} />

            <Panel style={{ flex: 0, paddingVertical: 20 }}>

                <Buscador
                    titulo="Gestionar Usuario"
                    subtitulo="Buscar por nombre de usuario"
                />

                <Buscador
                    titulo="Gestionar Curso - Servicio"
                    subtitulo="Buscar por nombre de curso"
                />

                <View style={{
                    alignItems: 'center',
                    marginTop: 4
                }}>
                    <Boton
                        texto="VER NUEVOS CURSOS"
                        style={{
                            width: '75%',
                            marginBottom: 10
                        }}
                    />

                    <Boton
                        texto="VER REPORTES DE PROBLEMAS"
                        style={{ width: '75%' }}
                    />
                </View>

            </Panel>
        </Pantalla>
    );
}