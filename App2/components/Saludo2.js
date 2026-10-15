import {Text, Image, Button, View} from 'react-native';

export const Saludo2=()=> {
    return(
        <View>
            <Text>Hola RN! Soy un componente propio</Text>
            <Image source={require('../assets/wave.png')} />
            <Button title='Preciona para saludar'></Button>
        </View>
    )
}