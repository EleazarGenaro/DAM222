/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,Button, ImageBackground} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScrren from './SafeScreen';
import PresableScreen from './PresableScreen';
import TextInput from './TextInput';
import FlatList from './FlatList';
import ImageBackgroung from './ImageBackgroung';
import Modal from './Modal';
import ActivityIndicator from './ActivityIndicator';


/*2. zona de main*/ 
export default function MenuScreen() {

    const[screen,setScreen]= useState('menu');

    switch(screen){
    case 'targetas':
        return <Tarjetas/>
    case 'safescreen':
        return <SafeScrren/>
        case 'presablescreen':
        return <PresableScreen/>
        case 'textinput':
        return <TextInput/>
        case 'flatlist':
        return <FlatList/>
        case 'imagebackground':
        return <ImageBackgroung/>
        case 'modal':
        return <Modal/>
        case 'activityindicator':
        return <ActivityIndicator/>
        case 'menu':
            default:


  return (

    <View style={styles.container}>

        <Text>Menu de Praticas</Text>

        <Button title='Tarjetas' onPress={ ()=>setScreen('targetas')}></Button>
        <Button title='SafeAreaVeew' onPress={ ()=>setScreen('safescreen')}></Button>
        <Button title='Pressable & switch' onPress={ ()=>setScreen('presablescreen')}></Button>
        <Button title='TextInput & Alert' onPress={ ()=>setScreen('textinput')}></Button>
        <Button title='FlatList & SectionList' onPress={ ()=>setScreen('flatlist')}></Button>
        <Button title='ImageBackgroung & SlapshScreen' onPress={ ()=>setScreen('imagebackground')}></Button>
        <Button title='Modal & Bottom sheet' onPress={ ()=>setScreen('modal')}></Button>
        <Button title='ActivityIndicator, KeyboardAvoidingView' onPress={ ()=>setScreen('activityindicator')}></Button>

      
      <StatusBar style="auto" />
    </View>


  );

   }//switch

}//funcion

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});