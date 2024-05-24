import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import SectionConponent from './SectionConponent';
import RowComponent from './RowComponent';
import CardComponent from './CardComponent';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextComponent from './TextComponent';

interface Props {
  placeHolder?: string;
  value: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  title: string;
  alowClear?: boolean;
  multible?: boolean;
  numberofline?: number;
  onChange: (val: string) => void;
}
const InputComponent = (props: Props) => {
  const {
    placeHolder,
    value,
    prefix,
    affix,
    alowClear,
    title,
    multible,
    numberofline,
    onChange,
  } = props;
  return (
    <View>
        {title&& <TextComponent text={title}/>}
      <CardComponent
      bgColor={colors.gray}
      style={{borderRadius: 12, padding: 10}}>

      
      <RowComponent style = {{alignItems:'flex-start'}}>
        {prefix ?? prefix}
        <View style={{flex: 1}}>
          <TextInput
            style={[{color: colors.white  , marginHorizontal:prefix?8 :0} , {marginHorizontal:affix?8:0}]}
            placeholder={placeHolder ?? ''}
            value={value}
            multiline = {multible}
            numberOfLines={numberofline}
            placeholderTextColor={colors.white}
            onChangeText={(val: any) => onChange(val)}
          />
        </View>
        {affix ?? affix}

        {alowClear && value&& (
          <TouchableOpacity onPress={()=>onChange('')}>
            <AntDesign name="close" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </CardComponent>
    </View>
  );
};

export default InputComponent;
