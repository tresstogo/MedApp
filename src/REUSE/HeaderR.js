import React,{Component} from "react";
import {View,Image} from "react-native";
import {Header, Body, Left,Right} from "native-base";



class MainHeader extends Component{
 
render(){
    return(
        <View style={{height:"20%"}}>
        
        
        <Header style={{height:"100%", backgroundColor:"white"}} >
            <Left>
            </Left>
            <Body  >
                <Image
                style={{width:"200%", height:"100%", alignSelf:"center"}}
                
                source={require("../../assets/img/Logo.png")}
                />
            </Body>
            <Right>
            </Right>
        </Header>
        </View>
    )
}
}



export default MainHeader;