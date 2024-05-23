import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {styles} from '../styles/globalStyle';

interface Props {
  onPress: () => void;
  title: string;
  bgColor?: string;
  icon?: string;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>; 
   font?:string
}
const ButtonComponent = (props: Props) => {
  const {onPress, title, bgColor, borderRadius, icon, style , font} = props;
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: borderRadius,
          backgroundColor: bgColor,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      onPress={() => onPress()}>
      <TextComponent text={title} font={font} />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
