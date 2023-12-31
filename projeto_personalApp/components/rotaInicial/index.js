import React from "react";
import { View, Pressable, Image } from "react-native";
import styles from "./styles";
import aluno from '../../assets/botao_aluno.png';
import personal from '../../assets/botao_personal.png';
import logo from '../../assets/logo_com_slogan.png';




export default function Inicial(props) {
    return(
        <View style={styles.container}>

            <View style={styles.barraTitulo}>
                <Image
                    source={logo}
                    style= {styles.logo}
                />

            </View>

            <View style={styles.buttom}>

                 <Pressable
                    onPress={()=> {props.navigation.navigate('Login')}}
                 >
                    <Image
                        source={aluno}
                        style={styles.img}
                    />
                 </Pressable>

                 <Pressable
                    onPress={()=> {props.navigation.navigate ('Login')}}
                 >
                    <Image
                        source={personal}
                        style={styles.img}
                    />
                 </Pressable>

           </View> 
        </View>
    )
};
