import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { styles } from '../styles/globalStyle'


interface  Props{
    children :ReactNode , 

    style?:StyleProp<ViewStyle>
}
const SectionConponent = (props:Props) => {

    const  {children ,style} = props
  return (
    <View style = {[styles.section , style]}>
            {children}
    </View>
  )
}

export default SectionConponent