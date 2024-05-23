import { View, Text, ImageBackground } from 'react-native'
import React, { ReactNode } from 'react'




interface Props {
    color?:string , 
    children:ReactNode 
}
const ImageCardComponent = (props:Props) => {


    const {color , children} = props
  return (
        <ImageBackground source={require('./../assets/image/bg_card.png')} style = {{borderRadius:12 }} imageStyle = {{borderRadius:12}} >
                <View style = {{backgroundColor:color??'rgba(113,77,217,0.8)' , borderRadius:12 , padding:12}}>
                    {children}
                </View>
        </ImageBackground>
  )
}

export default ImageCardComponent