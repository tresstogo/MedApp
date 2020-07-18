import React,{Component} from "react";
import {View, Text, Image, TouchableOpacity,Dimensions} from "react-native";
import {Header, Body, Left,Right, Button, Container, Content, Drawer} from "native-base";
import { Actions } from "react-native-router-flux";
import { Entypo} from '@expo/vector-icons';

import MainHeader from "../REUSE/HeaderR"
import DrawerC from "../REUSE/Drawer"

class Home extends Component{

    
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state = {
            wHeight: Dimensions.get("window").height,
            wWidth: Dimensions.get("window").width,
        }
    }

    openDrawer = () => {
        this.drawer._root.open()
      };
    closeDrawer = () => {
        this.drawer._root.close()
      };

    render(){
        const {wHeight,wWidth} = this.state
        return(
            <Container>
                <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerC/>}>
              
            <View style={{height:wHeight*.2,}}>
                <Header style={{height:wHeight*.19, backgroundColor:"white"}} >
                    <Left>
                    </Left>
                    <Body>
                        <Image
                        style={{width:"200%", height:"100%", alignSelf:"center"}}
                        source={require("../../assets/img/Logo.png")}
                        />
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.openDrawer()} >
                            <Entypo name={"menu"} size={30} />
                        </Button>
                    </Right>
                </Header>
            </View>
            
                <Content bounces={false}
                style={{backgroundColor:"#01579B"}}>
                
                   <View style={styles.rowImgs}>
                        <TouchableOpacity style={styles.Center} 
                        onPress={()=>Actions.Moldear()}>
                        <Image 
                        style={styles.IMG}
                        source={require("../../assets/img/MoldearIMG.png")}/>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.Center}
                        onPress={()=>Actions.Involucrar()}>
                        <Image 
                        style={styles.IMG}
                        source={require("../../assets/img/InvolucrarIMG.png")}/>
                        </TouchableOpacity>
                   </View>
                   <View style={styles.rowTXT}>
                        <View style={styles.TXT}>
                        <Text style={{fontSize:25, color:"white"}}>Moldear</Text>
                        </View>
                        <View style={styles.TXT}>
                        <Text style={{fontSize:25, color:"white"}}>Involucrar</Text>
                        </View>
                   </View>

                   <View style={styles.rowImgs}>
                        <TouchableOpacity style={styles.Center}
                        onPress={()=>Actions.Innovar()}>
                        <Image 
                        style={styles.IMG}
                        source={require("../../assets/img/InnovarIMG.png")}/>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.Center}
                        onPress={()=>Actions.Lograr()}>
                        <Image 
                        style={styles.IMG}
                        source={require("../../assets/img/LograrIMG.png")}/>
                        </TouchableOpacity>
                   </View>
                   <View style={styles.rowTXT}>
                        <View style={styles.TXT}>
                        <Text style={{fontSize:25, color:"white"}}>Innovar</Text>
                        </View>
                        <View style={styles.TXT}>
                        <Text style={{fontSize:25, color:"white"}}>Lograr</Text>
                        </View>
                   </View>
                </Content>
                </Drawer>
               
            </Container> 
            
        )
    }
}
export default Home

styles={
    rowImgs:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        padding:"1.5%"
    },
    rowTXT:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    Center:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        padding:"2%"
    },
    TXT:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    IMG:{
        width:"50%",
        height:"50%",
        flex:1,
        alignSelf:"center",
        padding:"50%",
        borderWidth:3,
    
        borderRadius:5,
        borderColor:"#3863A8"

    }
}

//source={require("../../assets/img/InvolucrarIMG.png")}