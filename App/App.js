/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').height

export default class App extends Component{
  
  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./src/img/arrowback.png')} style={styles.iconArrow} />

          </TouchableOpacity>
          <View style={styles.headerView} >
          <Text style={styles.headerText}>Cadastro de Funcionário</Text>  

          </View>
          
                
        </View>

        <View style={styles.qrCode}>
          <Image source={require('./src/img/QRcode.png')} style={styles.img} />
        </View>

        <View style={styles.thumb}>
          <Image source={require('./src/img/On_boarding2.png')} style={styles.imgThumb} />
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="Nome" style={styles.inputText} />
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="Apelido" style={styles.inputText} />
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="CPF" style={styles.inputText} />
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="Data de Adimissão" style={styles.inputText} />
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="Função" style={styles.inputText} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <View style={styles.cadastrar}>
              <Text style={styles.cadastrarText} >CADASTRAR</Text>

            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  header:{
    
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,  
    
    alignItems:'center'
  },
  iconArrow:{
    width:20,
    height:20

  },
  
  img:{
    width:40,
    height:40,
    marginRight:80
    

  },
  headerView:{
    alignItems:'center',
    flex:1,
    


  },
  headerText:{
    fontSize:20,
      


  },
  qrCode:{
    
    backgroundColor: 'yellow',
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingBottom:20,
    paddingTop:20
    


  },
  thumb:{
    alignItems:'center',
    backgroundColor: 'green',
    paddingBottom:10

  },
  imgThumb:{
    width:100,
    height:100,
    borderRadius:50

  },
  inputs:{
    alignItems:'center',
    backgroundColor: 'red',
    paddingBottom:5,
    paddingTop:5,
    
  },
  inputText:{
    width:250,
    fontSize:20,
    borderRightWidth:1,
    borderRightColor:'grey',
    borderLeftWidth:1,
    borderLeftColor:'grey',
    borderTopWidth:1,
    borderTopColor:'grey',
    borderBottomWidth:1,
    borderBottomColor:'grey',
    backgroundColor:'white'
    
    
  },
  button:{
    alignItems:'center',
    backgroundColor:'purple',
    
    flex:1,
    justifyContent:'center',

  },
  cadastrar:{
    width:275,
    borderRadius:20,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    height:40
    
  },
  cadastrarText:{
    fontSize:20,
    color: 'white'
  }
  
  
});
