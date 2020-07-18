import React,{Component} from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {  Button, Footer, FooterTab} from 'native-base';
import { Entypo} from '@expo/vector-icons';
import { Actions } from "react-native-router-flux";            
                
export const FooterR=()=>{ 
  
    return(
        <Footer style={{backgroundColor:"white"}}>
            <FooterTab style={{backgroundColor:"white"}}>
                <Button onPress={()=>Actions.Home()}>
                    <Entypo name={"home"} size={25}/>
                </Button>
            </FooterTab>
        </Footer>)
        }