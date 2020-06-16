import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useLinkProps } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  
  interface Params {
    navigation: [];
    route: {
      key: string;
      name: string;
      params: Item;
    }
  }
  
  const Detalhes = (dados: Params) => {
    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }
    
      return (
      <>
        <SafeAreaView  style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#00BFFF" />
                </TouchableOpacity>
                <Text style={styles.header}> {dados.route.params.nome} </Text>
                <FlatList
                  data={dados.route.params.secao}
                  renderItem={({ item }) => (
                  <>
                    <Text  style={styles.title}>{item.nome}</Text>
                    {
                      item.conteudo.map(it => (
                        <Text style={styles.description}>- {it}</Text>))
                    }
                  </>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  />
            </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      //borderWidth: 2,
      //borderColor: 'blue'
    },
  
    title: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 10,
      alignContent: "stretch"
    },

    header: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 10,
      alignContent: "stretch",
      borderWidth: 1,
      borderRadius: 16,
      textAlign: 'center',
      width: 500,
      backgroundColor: 'white',
      borderColor: '#6C6C80',
      marginBottom: 20
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
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
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      loadText: {
        color: '#322153',
        fontSize: 20,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        paddingRight: 30
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
      },
      
      viewLista: {
        flex: 1
      }
  });

export default Detalhes;