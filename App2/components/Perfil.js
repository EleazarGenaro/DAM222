import { Text, View, Button } from 'react-native';
import { useState } from 'react'; 

export const Perfil=({nombre, carrera, materia, cuatrimestre})=> {
        const[mostrar, setMostrar]= useState(false);
    return(
        <View>
        <Text>{nombre}</Text>

        {mostrar && 
        <>
        <Text>{carrera}</Text>
        <Text>{materia}</Text>
        <Text>{cuatrimestre}</Text>
        </>
        }
        <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    )
}