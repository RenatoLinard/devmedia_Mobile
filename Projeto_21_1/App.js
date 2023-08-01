import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from './components/rotaInicial';
import Contato from "./components/rotaContato";

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela Inicial" component={Inicial}/>
                <Stack.Screen name="Tela Contato" component={Contato}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
