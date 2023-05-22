import React from 'react'
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/HeaderComponent';
import { styles } from '../theme/appTheme';
import CardUser from '../components/CardUser';
import colors from '../theme/colorsTheme';
import { useSearch } from '../hooks/useSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ListUsersScreen = () => {

  const usersState = useSelector((state: RootState) => state.users.value);
  const {
    term,
    userFiltered,
    updateTerm,
    getLenght
  } = useSearch( usersState );

  const Loading = () => {
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        icon='arrow-back-outline'
        title='Usuarios'
        count={ getLenght() }
        update={updateTerm}
      />
      <LinearGradient 
        colors={colors.gradient}
        style={{flex:1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
    {
      term !== '' && userFiltered.length === 0 &&
      <View style={styles.containerNotFound}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: colors.text
        }}>
          No hay resultados para: "{term}"
        </Text>
      </View>
    }
    { usersState.length === 0 ? <Loading /> :
      <FlatList
          data={ term === '' ? usersState : userFiltered}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CardUser item={item}/>} 
          keyExtractor={(item) => item.id.toString()}
      />
    }
      </LinearGradient>
    </View>
  )
}

export default ListUsersScreen;