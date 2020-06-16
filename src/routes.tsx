import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Pesquisa from './pages/Pesquisa';
import Resultados from './pages/Resultados';
import Detalhes from './pages/Detalhes';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle: {backgroundColor: '#f0f0f5'} }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Pesquisa" component={Pesquisa} />
                <AppStack.Screen name="Resultados" component={Resultados} />
                <AppStack.Screen name="Detalhes" component={Detalhes} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;