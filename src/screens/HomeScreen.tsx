import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ContainerComponent from '../components/ContainerComponent';
import {colors} from '../constants/colors';
import {styles} from '../styles/globalStyle';
import RowComponent from '../components/RowComponent';
import SectionConponent from '../components/SectionConponent';
import TextComponent from '../components/TextComponent';
import {fonts} from '../constants/fontFamily';
import TitleComponent from '../components/TitleComponent';
import CardComponent from '../components/CardComponent';
import ButtonComponent from '../components/ButtonComponent';

const HomeScreen = () => {
  return (
    <ContainerComponent>
      <SectionConponent>
        <RowComponent jutifilecontent="space-between">
          <TextComponent text="fasfads" />
          <TextComponent text="fasfads" />
        </RowComponent>
      </SectionConponent>
      <SectionConponent>
        <TitleComponent title="Hi, Jason" size={18} color={colors.title} />
        <TextComponent
          text="Be productive today"
          size={20}
          font={fonts.semibold}
        />
      </SectionConponent>
      <SectionConponent>
        <RowComponent
          onPress={() => console.log('vaof ddaay')}
          style={{backgroundColor: colors.gray}}
          borerRadius={12}>
          <TextComponent text="Search" flex={1} />
          <TextComponent text="s" />
        </RowComponent>
      </SectionConponent>

      <SectionConponent>
        <CardComponent bgColor={colors.gray} style={{borderRadius: 12}}>
          <RowComponent jutifilecontent="space-between" borerRadius={12}>
            <View>
              <TextComponent
                text="Task Progress"
                size={20}
                font={fonts.semibold}
              />
              <TitleComponent
                title="30/40  task done"
                size={18}
                color={colors.title}
              />

              <TouchableOpacity
                style={[
                  {
                    backgroundColor: colors.lightblue,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    padding: 10,
                    borderRadius: 20,
                  },
                ]}>
                <TextComponent text="March 22" />
              </TouchableOpacity>
            </View>

            <TextComponent text=" done " size={20} font={fonts.semibold} />
          </RowComponent>
        </CardComponent>
      </SectionConponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
