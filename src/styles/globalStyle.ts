import { Platform, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fontFamily";



export const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor:colors.bgcolor , 
        paddingTop :Platform.OS ==='ios'? 42 :32 , padding:20
    } , 
    text :{
        fontSize:14 , 
        fontFamily:fonts.regular , 
        color:colors.white
    }  , 

    texinput:{
        padding:Platform.OS==='ios'?20:18
    }
     ,
     row:{flexDirection:'row' , alignItems:'center' , justifyContent:'center'  , } , 
     section:{
        marginBottom:16 , 
     } , 

})