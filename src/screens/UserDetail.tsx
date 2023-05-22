import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigator/Navigator';

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colorsTheme';
import { useInfoUser } from '../hooks/useInfoUser';
import { styles } from '../theme/appTheme';
import ContainerInfo from '../components/ContainerInfo';
import ListFollowings from '../components/ListFollowings';

interface Props extends StackScreenProps<RootStackParamList, 'UserDetail'> {};


export const UserDetailScreen = ( { navigation, route }: Props) => {

    const { user } = route.params;
    const { top } = useSafeAreaInsets();
    const {
        isLoading,
        followers,
        following,
        repos,
        personalInfo,
        topText,
        heightContainer,
        heightImage,
        widhtImage
    } = useInfoUser(user.login);

    return (
        <LinearGradient 
            colors={colors.gradient}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={{
                ...styles.headerContainerUserDetail,
                height: heightContainer!,
                backgroundColor: colors.button,
            }}>
                <TouchableOpacity
                    onPress={ () => navigation.pop() }
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButtonUserDetail,
                        top: top + 20
                    }}
                >
                    <Icon 
                        name="arrow-back-outline"
                        color={colors.icon}
                        size={ 35 }
                    />
                </TouchableOpacity>

                <View style={styles.imageContainerUserDetail}>
                    <Image
                        source={{ uri: user.avatar_url }}
                        style={{ ...styles.userImageDetail,
                            width: widhtImage!,
                            height: heightImage!
                        }}
                    />
                </View>

                <Text
                    style={{
                        ...styles.userNameDetail,
                        top: top + topText!
                    }}
                >
                    {user.login}
                </Text>
                
            </View>

            {
                isLoading 
                ? (
                    <View style={ styles.loadingIndicatorUserInfo }>
                        <ActivityIndicator 
                            size={50}
                        />
                    </View>
                ) :

                    <ScrollView
                        showsVerticalScrollIndicator={ false }
                    >
                        { personalInfo!.bio &&
                            <ContainerInfo label='Bio:' value={personalInfo!.bio} icon='person-circle-outline'/>
                        }

                        { personalInfo!.blog &&
                            <ContainerInfo label='Blog:' value={personalInfo!.blog} icon='person-outline'/>
                        }

                        { personalInfo!.location &&
                            <ContainerInfo label='Location:' value={personalInfo!.location} icon='location-outline'/>
                        }

                        { personalInfo!.email &&
                            <ContainerInfo label='Email:' value={personalInfo!.email} icon='mail-outline'/>
                        }

                        <ListFollowings label='Seguidores' data={ followers } icon='people-outline' />

                        <ListFollowings label='Siguiendo' data={ following } icon='people-outline' />

                        <View style={ styles.containerUserDetail }>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon 
                                    name='globe-outline'
                                    color={colors.icon}
                                    size={ 25 }
                                    style={{ marginTop: 20 }}
                                />
                                <Text style={{ ...styles.titleUserDetail, paddingLeft: 10 }}>
                                    Repos Publicos: {`(${repos.length})`}
                                </Text>
                            </View>
                            {repos.length > 0 &&
                                <View style={{ ...styles.userInfoContainer, paddingLeft: 30 }}>
                                {
                                    repos.map( ( repo ) => (
                                        <Text
                                            style={{ 
                                                ...styles.regularText,
                                                marginRight: 10
                                            }}
                                            key={ repo.id }
                                        >
                                            { repo.full_name }
                                        </Text>
                                    ))
                                }
                                </View>
                        }
                        </View>
                    </ScrollView>

        }


        </LinearGradient>
    )
}