
import { Text, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react'; 

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, style }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[estilos.tarjeta,style]}>
            <Text style={estilos.nombre}>{nombre}</Text>

            {mostrar &&
                <>
                    <Text style={estilos.carrera}>{carrera}</Text>
                    <Text style={estilos.otroTexto}>{materia}</Text>
                    <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
                </>
            }

            <Button
                title="Ver Perfil"
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    nombre: {
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    },

    carrera: {
        fontSize: 16,
        color: 'purple',
        fontFamily: 'Roboto',
    }, 

    otroTexto: {
        fontSize: 14,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },

    tarjeta:{
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }, 

});
