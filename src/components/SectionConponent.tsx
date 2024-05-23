import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { styles } from '../styles/globalStyle'


interface  Props{
    children :ReactNode
}
const SectionConponent = (props:Props) => {

    const  {children} = props
  return (
    <View style = {styles.section}>
            {children}
    </View>
  )
}

export default SectionConponent