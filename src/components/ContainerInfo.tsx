import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import colors from '../theme/colorsTheme';


interface Props {
    label: string,
    value: string,
    icon: string
}

const ContainerInfo = ({ label, value, icon }: Props) => {
  return (
    <View style={ styles.userInfoContainer }>
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Icon 
            name={ icon }
            color={colors.icon}
            size={ 25 }
            style={{ marginTop: 10 }}
        />
        <Text style={styles.labelUserInfo}>
            { label }
        </Text>
      </View>
        <Text style={{...styles.regularText, marginHorizontal: 20, paddingLeft: 30}}>
            { value }
        </Text>
    </View>
  )
}

export default ContainerInfo;
