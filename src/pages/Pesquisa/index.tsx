import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Button } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
export const loaderRef = React.createRef();

interface Item {
    _id: string;
    nome: string;
    secao: [{
        nome: string;
        conteudo: string[];
    }, {
        nome: string;
        conteudo: string[]
    },{
        nome: string;
        conteudo: string[];
    }]
}

const Pesquisa = () => {
    const navigation = useNavigation();
    const [ingrediente, setIngrediente] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [isLoad2, setIsLoad2] = useState(false);
      

    async function handleNavigateToResultados(){
        navigation.navigate('Resultados',{ingrediente, ingrediente2});
    }

    useEffect(() => {
    }, []);

    function handleNavigateBack(){
        navigation.goBack();
    }
/* 
    function handleIngredientes(){
        ingredientes.push(ingrediente)
        //ingredientes.push(ingrediente2)
        //handleNavigateToResultados();
        console.log(ingredientes)
    }
     */
    async function addInput(){

    }
    
    function removeInput(){
        
    }

    function showInputs(){
        
    }
    
    return (
        <>
        <SafeAreaView  style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#00BFFF" />
                </TouchableOpacity>
                {
                    isLoad ? 
                    <>
                    <View style={styles.loadView}>
                        <Text style={styles.loadText}>Carregando dados...</Text>
                        <ActivityIndicator size="large" color="#00BFFF" />
                    </View>
                    </>
                    : 
                    <>
                    <Text style={styles.title}>Olá.</Text>
                    <Text style={styles.description}>Digite abaixo os ingredientes que você tem em casa!.</Text>
                    {
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TextInput 
                        style={styles.input}
                        placeholder='Digite um ingrediente'
                        onChangeText={setIngrediente}
                        />
                        <RectButton style={styles.buttonMore} onPress={removeInput}>
                            <Icon name="x-circle" color="#fff" size={24}/>
                        </RectButton>
                        <RectButton  style={styles.buttonMore} onPress={addInput}>
                            <Icon name="plus-circle" color="#fff" size={24}/>
                        </RectButton>
                    </View>
                    }
                    <RectButton style={styles.button} onPress={handleNavigateToResultados}>
                        <View style={styles.buttonIcon}>
                            <Icon name="search" color="#fff" size={24}/>
                        </View>
                        <Text style={styles.buttonText}>Procurar</Text>
                    </RectButton>
                    </>
                }
            </View> 
            {
                isLoad2 ?
                <>
                    <ActivityIndicator size="large" color="#00BFFF" />
                </>
                :
                <>
                    
                </>
            }
            
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 32,
      //borderWidth: 2,
      //borderColor: 'blue'
    },

    buttonMore: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        borderRadius: 80,
        marginTop: 13
    },

    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
      paddingBottom: 40
    },

    itemsContainer: {
        //borderWidth: 2,
        //borderColor: 'blue',
        marginLeft: 8,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginBottom: 275,
      },
    
      item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 80,
        //width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        textAlign: 'center',
      },
    
      itemText: {
        color: '#6C6C80',
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 16,
      },

      input: {
        height: 60,
        width: 260,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
      },
    
      button: {
        backgroundColor: '#00BFFF',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
    
      loadText: {
        color: '#322153',
        fontSize: 20,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
      },

      loadView: {
          paddingTop: 250,
          flexDirection: 'row',
          justifyContent: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
      }
  });

export default Pesquisa;