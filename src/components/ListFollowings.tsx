import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { User } from '../interfaces/userApi.interfaces';
import { styles } from '../theme/appTheme';
import colors from '../theme/colorsTheme';
import { CardFollowings } from './CardFollowings';
import LogoBackground from './LogoBackground';

interface Props {
    label: string,
    data: User[],
    icon: string
}

const ListFollowings = ({ label, data, icon }: Props) => {
  return (
    <View style={ styles.containerFlatList }>
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Icon 
            name={ icon }
            color={colors.icon}
            size={ 25 }
            style={{ marginTop: 10 }}
        />
        <Text style={styles.labelUserInfo}>
            {`${label}: (${data.length})`}
        </Text>
      </View>
      {data.length > 0 &&
        <FlatList 
            data={ data }
            keyExtractor={ (item, index ) => item.id.toString() + index }
            renderItem={ ({ item }) => <CardFollowings follower={item}/> }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            style={{ ...styles.flatlistHorizontal, paddingLeft: 30 }}
        />
      }
    </View>
  )
}

export default ListFollowings;
