import React,{Component} from "react";
import {View,Text,Image, TouchableOpacity, Linking} from "react-native";
import {Container, Content} from "native-base";

import MainHeader from "../REUSE/HeaderR";
import {FooterR} from "../REUSE/FooterR";
import firebase from "firebase";

class Innovar extends Component{

    state={
        img:"",
        url:""
    }
async getImage(){
    await firebase.database().ref("Referencias/Innovar").on("value",(snap)=>{
        this.setState({url:String(snap.val())})
    })
    await firebase.database().ref("Referencias/InnovarIMG").on("value",
    (snap)=>{
        this.imgURL="img/"+String(snap.val());
        const ref=firebase.storage().ref(this.imgURL)
        ref.getDownloadURL().then((img)=>{
            this.setState({img:img})});
    }) 
}


componentWillMount(){
    this.getImage()
}
componentWillUnmount(){
    this.setState({img:" ", url:""})
}

render(){
    return(
        <Container >
            <MainHeader></MainHeader>
            <View style={{flex:1}}>
                <View style={{padding:"3%"}}>
                <Text style={styles.TXT}>Innovar:</Text>
                <Text style={styles.PAR}>Somos pensadores audaces que generamos nuevas ideas y 
                ponemos en práctica nuestras mejores soluciones para el beneficio de nuestros pacientes,
                 socios y clientes.</Text>
                </View>
                
                <TouchableOpacity style={{height:"90%", width:"100%", alignSelf:"center"}}
                onPress={()=>{
                    if(this.state.url){
                        Linking.openURL(this.state.url)
                    }
                }}>
                <Image 
                    style={{flex:1, borderWidth:3,borderColor:"blue"}}
                    source={{ uri: this.state.img }}
                    
                    />
                </TouchableOpacity>
                
                
            </View>
            <View style={{justifyContent:"flex-end", flex:1}}>
                <FooterR/>
            </View>
            
        </Container>
    )
}
}
const styles={
    TXT:{
        fontSize:35,
        color:"#5997FC"
    },
    PAR:{
        fontSize:20,
        textAlign:"justify"
    }
}
export default Innovar
