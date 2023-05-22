import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { User } from '../interfaces/userApi.interfaces';
import { RootStackParamList } from '../navigator/Navigator';
import { styles } from '../theme/appTheme';
import colors from '../theme/colorsTheme';

interface Props {
    item: User
}

type userScreenProp = StackNavigationProp<RootStackParamList, 'ListUsers'>;

const CardUser = ({ item }: Props): JSX.Element => {

  const navigation = useNavigation<userScreenProp>();

  return (
    <View style={styles.cardGeneral}>
      <Pressable
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UserDetail',
            {user: item}
          )}
      >
        <Image source={{uri: item.avatar_url}}
          style={styles.cardImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.cardTitle}>
            {`Login: ${item.login}`}
          </Text>
          <Text style={[styles.cardTitle, {fontSize: 20}]}>
          {`ID: ${item.id}`}
          </Text>
        </View>
          <View style={styles.cardIcono}>
              <Icon 
                  name="chevron-forward-outline"
                  color={colors.icon}
                  size={ 35 }
              />
          </View>
      </Pressable>
    </View>
  );
}

export default CardUser;