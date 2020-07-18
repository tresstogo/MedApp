import React,{Component} from "react";
import {View,Image, TouchableOpacity, Text, Linking} from "react-native";
import { Entypo, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import firebase from "firebase"


class Drawer extends Component{


    render(){
        return(
            <View style={styles.MV}>
            <Image 
                style={{width:"100%", height:"30%"}}
                source={require("../../assets/img/TITLE.jpg")}/>
            <View>
            <TouchableOpacity style={styles.ENL} onPress={()=>{
                    firebase.database().ref('Referencias').on("value",(snap)=>{
                        this.Notitronic=snap.val().Notitronics
                        if(this.Notitronic!=false){
                            Linking.openURL(this.Notitronic)
                        }
                            });}}>
                    <Entypo name={"suitcase"} size={25} style={styles.ICON}/>
                    <Text style={styles.TXT}>Notitronic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ENL} onPress={()=>{
                    firebase.database().ref('Referencias').on("value",(snap)=>{
                        this.Notitronic=snap.val().Notitronics
                        if(this.Notitronic!=false){
                            Linking.openURL(this.Notitronic)
                        }
                            });}}>
                    <MaterialCommunityIcons name={"web"} size={25} style={styles.ICON}/>
                    <Text style={styles.TXT}>Página Medtronic</Text>
            </TouchableOpacity>
                
                {/* <TouchableOpacity style={styles.ENL} onPress={()=>{
                        firebase.database().ref('Referencias').on("value",(snap)=>{
                            this.Rapidos=snap.val().Rapidos
                            if(this.Rapidos!=false){
                                Linking.openURL(this.Rapidos)
                            }
                                });}
                }>
                    <MaterialCommunityIcons name={"clock-fast"} size={25} style={styles.ICON}/>
                    <Text style={styles.TXT}>RAPIDOSS</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.ENL} onPress={()=>{
                    firebase.database().ref('Referencias').on("value",(snap)=>{
                        this.Buzon=snap.val().Buzon
                        if(this.Buzon!=false){
                            Linking.openURL(this.Buzon)
                        }
                    });} 
                }>
                    <FontAwesome name={"inbox"} size={25} style={styles.ICON}/>
                    <Text style={styles.TXT}>Buzón de Miguel Rochín</Text>
                </TouchableOpacity>
                
                
            </View>
            
            </View>
        )

    }
}

export default Drawer
const styles={
    MV:{
        backgroundColor:"white",
        marginTop:"7%",
        height:"100%",
        borderRadius:5},
    ENL:{
        paddingTop:"4%",
        paddingBottom:"7%",
        flexDirection:"row"
    },
    TXT:{
        fontSize:20,
        color:"#5997FC",
        paddingLeft:"3%",
    },
    ICON:{
        paddingRight:"5%", 
        paddingLeft:"3%"}
}