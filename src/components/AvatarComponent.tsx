import {View, Text, Image} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

const uidLength = 10;

const uri =
  'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg';
const AvatarComponent = () => {
  return (
    <RowComponent jutifilecontent="flex-start">
      {Array.from({length: uidLength}).map(
        (data, index) =>
          index < 3 && (
            <Image
              source={{uri: uri}}
              style={[
                {width: 40, height: 40, borderRadius: 20},
                index > 0 ? {marginLeft: -20} : {marginLeft: 0},
              ]}
            />
          ),
      )}

      {uidLength > 5 && (
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginLeft:-20
          }}>
          <TextComponent text={`+${uidLength - 3 > 9 ? 9 : uidLength - 3}`}  color='black' />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarComponent;
