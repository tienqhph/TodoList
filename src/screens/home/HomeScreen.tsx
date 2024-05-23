import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import {colors} from '../../constants/colors';
import {styles} from '../../styles/globalStyle';
import RowComponent from '../../components/RowComponent';
import SectionConponent from '../../components/SectionConponent';
import TextComponent from '../../components/TextComponent';
import {fonts} from '../../constants/fontFamily';
import TitleComponent from '../../components/TitleComponent';
import CardComponent from '../../components/CardComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {
  Edit2,
  Element,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CircularProgress from 'react-native-circular-progress-indicator';
import CircularProgressComponent from '../../components/CircularProgressComponent';
import ImageCardComponent from '../../components/ImageCardComponent';
import SpaceComponent from '../../components/SpaceComponent';
import AvatarComponent from '../../components/AvatarComponent';
import ProgressBarComponent from '../../components/ProgressBarComponent';
import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackParamList } from '../../navigations/TypeChecking';

const HomeScreen = () => {

  const navigation = useNavigation<RootStack>()
  return (
    <View>
      <ScrollView>
        <ContainerComponent>
          <SectionConponent>
            <RowComponent jutifilecontent="space-between">
              <Element size="24" color="#ffffff" />
              <Notification size={24} color="#ffffff" />
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
              onPress={() =>navigation.navigate('Search')}
              style={{backgroundColor: colors.gray}}
              borerRadius={12}>
              <TextComponent text="Search" flex={1} />
              <SearchNormal1 size={24} color="#ffffff" />
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
                    size={12}
                    color={colors.title}
                  />

                  <RowComponent jutifilecontent="flex-start">
                    <TouchableOpacity
                      style={[
                        {
                          backgroundColor: colors.lightblue,
                          alignItems: 'center',
                          justifyContent: 'center',

                          padding: 10,
                          borderRadius: 20,
                        },
                      ]}>
                      <TextComponent text="March 22" />
                    </TouchableOpacity>
                  </RowComponent>
                </View>
                <CircularProgressComponent value={80} valueSuffix="%" />
              </RowComponent>
            </CardComponent>
          </SectionConponent>

          <SectionConponent>
            <RowComponent style={{alignItems: 'flex-start'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(113,77,217,0.8)',
                  borderRadius: 12,
                }}>
                <ImageCardComponent>
                  <TouchableOpacity style={styles.viewIconedit}>
                    <Edit2 size={24} color="#ffffff" />
                  </TouchableOpacity>
                  <TextComponent
                    text="UX DESIGN"
                    size={20}
                    font={fonts.semibold}
                  />
                  <TextComponent text="Task management mobile app" size={12} />

                  <View style={{marginTop: 60}}>
                    <AvatarComponent />

                    <ProgressBarComponent percent="70%" size={12} />
                  </View>

                  <TextComponent
                    text="Due: 24 Mar 2022"
                    color={colors.white}
                    size={12}
                  />
                </ImageCardComponent>
              </View>

              <SpaceComponent width={12} />

              <View style={{flex: 1}}>
                <View>
                  <ImageCardComponent color="rgba(33,150,243,0.8)">
                    <TouchableOpacity style={styles.viewIconedit}>
                      <Edit2 size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TextComponent
                      text="API Payment"
                      size={20}
                      font={fonts.semibold}
                    />

                    <AvatarComponent />

                    <ProgressBarComponent
                      percent="40%"
                      color="rgba(18,181,122,0.8)"
                      size={12}
                    />
                  </ImageCardComponent>
                </View>

                <SpaceComponent height={12} />
                <View>
                  <ImageCardComponent color="rgba(18,181,122,0.8)">
                    <TouchableOpacity style={styles.viewIconedit}>
                      <Edit2 size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TextComponent
                      text="update Work"
                      size={20}
                      font={fonts.semibold}
                    />
                    <TextComponent text="Revision home page" size={12} />
                  </ImageCardComponent>
                </View>
              </View>
            </RowComponent>
          </SectionConponent>

          <SectionConponent>
            <TextComponent
              text="Urgent tasks"
              size={24}
              font={fonts.semibold}
            />

            <CardComponent bgColor={colors.gray} style={{borderRadius: 12}}>
              <RowComponent
                jutifilecontent="space-between"
                style={{alignItems: 'flex-start'}}>
                <CircularProgressComponent value={40} valueSuffix="%" />

                <TextComponent text="Title" />
              </RowComponent>
            </CardComponent>
          </SectionConponent>
        </ContainerComponent>
      </ScrollView>
      <View style = {{flex:1 , justifyContent:'center' , alignItems:'center'}}>
        <ButtonComponent
        font={fonts.bold} 
          onPress={() =>navigation.push('AddTask')}
          title="Add new Task   +"
          style={{
            position: 'absolute',
            backgroundColor: '#3168e0',
            bottom: 10,  padding:18,
            width: '80%',
            borderRadius:14 , 
            
            
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
