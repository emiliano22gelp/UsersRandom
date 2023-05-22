import React, { useEffect } from 'react'
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';
import LogoBackground from '../components/LogoBackground';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/Navigator';
import colors from '../theme/colorsTheme';
import { useForm } from '../hooks/useForm';
import { useValidation } from '../hooks/useValidation';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../slices/userSlice';
import { useUsers } from '../hooks/useUsers';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {

  const navigation = useNavigation<homeScreenProp>();
  const { cantUser, onChange } = useForm({
    cantUser: '',
 });
 const {
   error,
   errorMessage,
   validaciones,
   closeAlert,
   topDateContainer,
   date
  } = useValidation();
 const { isLoading, getUsers, fullcharge } = useUsers();
 const dispatch = useDispatch();

 useEffect(() => {   
  SplashScreen.hide();
}, [])

 const onAcept = () => {
    if(validaciones( cantUser )){
      Keyboard.dismiss();
      getUsers( Number(cantUser) )
        .then((value) => dispatch(
          loadUsers(value)
        ))
      fullcharge();
      navigation.navigate('ListUsers')
    }
  }


  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <LinearGradient 
          colors={colors.gradient}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <LogoBackground />
          <>
            {error &&
              Alert.alert( 'Error', errorMessage,[{
                text: 'Ok',
                onPress: closeAlert 
              }])
            }
          </>
          <View style={styles.containerHome}>
            <Text style={{ ...styles.title, color: colors.text}}>
              Emiliano Sansone
            </Text>
              <TextInput
                style={styles.input}
                onChangeText={ (value) => onChange(value, 'cantUser') }
                value={ cantUser }
                onSubmitEditing={ onAcept }
                underlineColorAndroid="black"
                placeholder="Ingrese cantidad de Usuarios"
                placeholderTextColor={colors.button}
                keyboardType="numeric"
              />
            <Spinner
              visible={isLoading}
              textContent={'Cargando Usuarios'}
              textStyle={styles.spinnerTextStyle}
            />
            <TouchableOpacity
              onPress={() => onAcept()}
              activeOpacity={0.8}
              style={styles.blackButton}
            >
              <Text style={ styles.buttonText }>Comenzar</Text>
              <Icon 
                name="chevron-forward-outline"
                color={colors.icon}
                size={ 35 }
              />
            </TouchableOpacity>
          </View>
          <View style={{...styles.dateContainer, top: topDateContainer}}>
            <Text style={{
              fontSize: 20,
              color: colors.button,
              fontWeight: 'bold'
            }}>
              { date }
            </Text>
          </View>
        </LinearGradient>
        </TouchableWithoutFeedback>
  )
}

export default HomeScreen;
