import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "./components/rotaInicial";
import LoginAluno from "./components/rotaLoginPersonal";
import LoginPersonal from './components/rotaLoginPersonal/';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }} 

            >
                <Stack.Screen
                    name="Inicial"
                    component={Inicial}
                />

            <Stack.Screen
                name="LoginAluno"
                component={LoginAluno}
            />
            
            <Stack.Screen
                name="LoginPersonal"
                component={LoginPersonal}
            />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
};
