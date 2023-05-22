import React, { useState, useEffect } from 'react';
import {View, Text, Dimensions, Pressable, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import colors from '../theme/colorsTheme';
import { SearchInput } from './SearchInput';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/Navigator';
import { useDispatch } from 'react-redux';
import { removeUsers } from '../slices/userSlice';

interface Props {
  icon: string,
  title: string,
  count: number
  update: (value: string) => void;
}

const screenWidth = Dimensions.get('window').width;
type userScreenProp = StackNavigationProp<RootStackParamList, 'ListUsers'>;

const HeaderComponent = ({ icon, title, count, update }: Props) => {

  const navigation = useNavigation<userScreenProp>()
  const dispatch = useDispatch();
  const {height, width} = useWindowDimensions();
  const [ inputWidth, setInputWidth ] = useState<number>();

  useEffect(() => {
    if ( width > height ){
      setInputWidth(40);
    } else {
      setInputWidth(190);
    }
}, [height, width])

  const goBack = () => {
    navigation.navigate('Home')
    dispatch(removeUsers());
  }

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => goBack() }>
        <Icon 
          name={icon}
          color={colors.icon}
          size={ 35 }
          style={styles.headerIcon}
        />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      { count !== 0 &&
        <Text style={{...styles.headerTitle, paddingLeft: 5}}>{`(${count})`}</Text>
      }
      { inputWidth &&
        <SearchInput
          onDebounce={ (value) => update( value )  }
          style={{
              zIndex: 999,
              width: screenWidth - inputWidth,
              paddingLeft: 10
          }}
        />
      }
    </View>
  );
}

export default HeaderComponent;