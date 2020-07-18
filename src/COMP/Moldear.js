import React,{Component} from "react";
import {View,Text,Image, TouchableOpacity, Linking} from "react-native";
import {Container, Content} from "native-base";

import MainHeader from "../REUSE/HeaderR";
import {FooterR} from "../REUSE/FooterR";
import firebase from "firebase"

class Moldear extends Component{
    state={
        img:" ",
        url:""
    }
async getImage(){
    await firebase.database().ref("Referencias/Moldear").on("value",(snap)=>{
        this.setState({url:String(snap.val())})
    })
    await firebase.database().ref("Referencias/MoldearIMG").on("value",
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
                <Text style={styles.TXT}>Moldear:</Text>
                <Text style={styles.PAR}>Estamos comprometimos a ser expertos en lo que hacemos
                 con una visión clara de hacia donde vamos y cómo queremos llegar ahí.</Text>
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

export default Moldear