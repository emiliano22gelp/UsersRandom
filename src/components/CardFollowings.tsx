import React from 'react'
import { Image, Text, View } from 'react-native';
import { User } from '../interfaces/userApi.interfaces';
import { styles } from '../theme/appTheme';

interface Props {
   follower : User
}


export const CardFollowings = ({ follower }: Props) => {

    const uri = `${follower.avatar_url}`;

    return (
        <View style={ styles.minicontainer }>
            <Image 
                source={{ uri }}
                style={ styles.imageFollower }
            />
            
            <View style={ styles.followerInfo }>
                <Text style={ styles.loginFollower }>
                    { follower.login }
                </Text>
                <Text style={ styles.idFollower }>
                    { follower.id }
                </Text>
            </View>


        </View>
    )
}