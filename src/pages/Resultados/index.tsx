import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useLinkProps } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton} from 'react-native-gesture-handler';

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
    params: {
      ingrediente: string;
      ingrediente2: string;
      ingrediente3: string;
    }
  }
}

//function TesteJSON2(dados: Params[]){
  const Resultados = (dados: Params) => {

    const navigation = useNavigation();
    const [selectedReceitas, setSelectedReceitas] = useState<Item[]>([]);
    const [isLoad, setIsLoad] = useState(true);
    const [receitas, setReceitas] = useState<Item[]>(require('../../data/afrodite.json'));
    var aux = true;
    var arrei:Item[] = [];

    function handleNavigateBack(){
      navigation.goBack();
    }

    function handleNavigateToDetalhes(item: Item){
      navigation.navigate('Detalhes', item);
    }
    
  useEffect(() => {
    receitas.map(item => { //percorre o array com todas receitas (algumas repetidas)
        for(var i=0; i < arrei.length; i++){//percorre um novo array que conterá apenas receitas únicas (ignorando as repetidas)
            if(item.nome != arrei[i].nome){
                aux = true // se a receita não for repetida, aux será true
            }else{
                aux = false; break; //se a receita for repetida, aux será false e a execução do for acaba.
            }
        }
        if(aux) {
            arrei.push(item)
            //console.log(item.nome); 
        }
    });
    setReceitas(arrei)//a lista de receita atualiza sem receitas repetidas
    //console.log(arrei.length)
    //console.log(receitas.length)
    setIsLoad(false)//os dados já foram carregados
  }, []);
  
  useEffect(() => {
    setReceitas(receitas.filter(item => item.secao[0].conteudo != null))
  }, []);

  useEffect(() => {
    //setSelectedReceitas(dados.route.params)
    //console.log(dados.route.params.ingrediente)
    setSelectedReceitas(receitas.filter(item => item.nome.includes(dados.route.params.ingrediente)))
  }, []);

  function teste(){
    console.log(selectedReceitas[0])
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
                        <Text style={styles.loadText}>Procurando...</Text>
                        <ActivityIndicator size="large" color="#00BFFF" />
                    </View>
                  </>
                  :
                  <>
                      <Text style={styles.title}>Resultados da pesquisa</Text>
                      <Text style={styles.description}>{selectedReceitas.length} receitas encontradas:</Text>
                      <View style={styles.viewLista}>
                              <FlatList
                                  data={selectedReceitas}
                                  renderItem={({ item }) => (
                                      <TouchableOpacity style={styles.item} onPress={() => handleNavigateToDetalhes(item)}  activeOpacity={0.5}>
                                          <Text  style={styles.itemText}>{item.nome}</Text>
                                      </TouchableOpacity>
                                  )}
                                  keyExtractor={(item, index) => index.toString()}
                              />
                      </View>
                      
                    <RectButton style={styles.button} onPress={() => console.log(receitas.length, arrei.length)}>
                        <View style={styles.buttonIcon}>
                            <Icon name="twitter" color="#fff" size={24}/>
                        </View>
                        <Text style={styles.buttonText}>Teste</Text>
                    </RectButton>
                  </>
                }
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
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
      paddingBottom: 20
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
        paddingRight: 30,
        fontFamily: 'Ubuntu_700Bold',
      },

      loadView: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#322153',
        borderRadius: 30,
        paddingBottom: 50,
        marginTop: 250,
        paddingTop: 30,
        backgroundColor: 'white'
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

export default Resultados;