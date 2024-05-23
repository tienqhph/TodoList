import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import SectionConponent from '../../components/SectionConponent';
import HeaderAppComponent from '../../components/HeaderAppComponent';
import {Back} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { RootStack } from '../../navigations/TypeChecking';
import TextComponent from '../../components/TextComponent';

const TaskScreen = () => {

    const navigation = useNavigation<RootStack>()
  return (
    <ContainerComponent>
      <SectionConponent>
        <View>
          <HeaderAppComponent
            fldicoration="row"
            title="Add new task" 
      
            
            icon={
              <TouchableOpacity onPress={()=>navigation.goBack()}  >
                <Back size={20} color={colors.white} />
              </TouchableOpacity>
            }
          />
        </View>
      </SectionConponent>

      <View>
        <TextComponent text='sdfasdsdsa'/>
      </View>
    </ContainerComponent>
  );
};

export default TaskScreen;
