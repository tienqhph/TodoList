import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/globalStyle'
import { fonts } from '../constants/fontFamily'



interface Props {
    text:string , 
    size?:number , 
    font?:string , 
    color?:string ,  
    flex?:number
    

}
const TextComponent = (props:Props) => {

    const{text , size , font , color , flex} = props
  return (
  
      <Text style = {[styles.text  , {fontSize:size??14 , fontFamily:font??fonts.regular , flex:flex}]}>{text}</Text>
   
  )
}

export default TextComponent