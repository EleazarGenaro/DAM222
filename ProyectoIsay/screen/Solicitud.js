import React from 'react';
import { ScrollView } from 'react-native';
import { Pantalla, EncabezadoUsuario, Panel, Campo, Boton } from '../components';

export default function Solicitud() {

    return (
        <Pantalla barra>
            <EncabezadoUsuario titulo="SOLICITUD" />

            <Panel>
                <ScrollView>

                    <Campo etiqueta="Nombre" />
                    <Campo etiqueta="Categoría" />
                    <Campo etiqueta="Habilidades" multilinea />
                    <Campo etiqueta="Duración" />

                    <Boton
                        texto="SOLICITAR"
                        style={{
                            marginTop: 6,
                            alignSelf: 'center',
                            paddingHorizontal: 40
                        }}
                    />

                </ScrollView>
            </Panel>
        </Pantalla>
    );
}