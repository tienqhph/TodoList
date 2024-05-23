import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from '../styles/globalStyle'
import { fonts } from '../constants/fontFamily'



interface Props {
    text:string , 
    size?:number , 
    font?:string , 
    color?:string ,  
    flex?:number , 
    style?:StyleProp<ViewStyle> , 
    textalight?:"auto" | "center" | "left" | "right" | "justify" | undefined
    

}
const TextComponent = (props:Props) => {

    const{text , size , font , color , flex ,style , textalight} = props
  return (
  
      <Text style = {[styles.text  ,  { textAlign: textalight??undefined, color:color??'white', fontSize:size??14 , fontFamily:font??fonts.regular , flex:flex} , style]}>{text}</Text>
   
  )
}

export default TextComponent